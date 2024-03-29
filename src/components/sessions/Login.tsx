import BazarButton from '@component/BazarButton'
import Image from '@component/BazarImage'
import BazarTextField from '@component/BazarTextField'
import FlexBox from '@component/FlexBox'
import { H3, H6, Small } from '@component/Typography'
import { Box, Card, CardProps, Divider, IconButton } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import * as yup from 'yup'
import { loginWithGoogle, loginWithPassword, loginWithFacebook } from '../Firebase-auth'
import { useAppContext } from '@context/app/AppContext'

const fbStyle = {
  background: '#3B5998',
  color: 'white',
}
const googleStyle = {
  background: '#4285F4',
  color: 'white',
}

type StyledCardProps = {
  passwordVisibility?: boolean
}

type LoginForm = {
  email : any,
  password : any
}

const StyledCard = styled<React.FC<StyledCardProps & CardProps>>(
  ({ children, passwordVisibility, ...rest }) => <Card {...rest}>{children}</Card>
)<CardProps>(({ theme, passwordVisibility }) => ({
  width: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },

  '.content': {
    textAlign: 'center',
    padding: '3rem 3.75rem 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 1rem 0px',
    },
  },
  '.passwordEye': {
    color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400],
  },
  '.facebookButton': {
    marginBottom: 10,
    '&:hover': fbStyle,
    ...fbStyle,
  },
  '.googleButton': {
    '&:hover': googleStyle,
    ...googleStyle,
  },
  '.agreement': {
    marginTop: 12,
    marginBottom: 24,
  },
}))

type LoginProps = {
  toggleDialog: any
}

const Login:React.FC<LoginProps> = ({toggleDialog}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const { dispatch } = useAppContext()

  const router = useRouter()

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible)
  }, [])

  const handleFormSubmit = async (values: LoginForm) => {
    //router.push('/profile')
    loginWithPassword(values.email, values.password).then((result) => {
      const _user = { email: values.email, idToken: result.token }
      dispatch({
        "type": 'LOGIN_USER',
        payload: {
          'isAuthenticated': true,
          "details": _user
        },
      })
      toggleDialog()
    }).catch((err) => {
      alert(err)
    })
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    })

  const signInWithGoogle = () => {
    loginWithGoogle().then((result) => {
      const _user = {email : result.email, idToken : result.token}
      dispatch({
        "type": 'LOGIN_USER',
        payload: {
          'isAuthenticated' : true, 
          "details" : _user
        },
      })
      toggleDialog()
  })
}

  const signInWithFacebook = () => {
    loginWithFacebook().then((result) => {
      const _user = {email : result.email, idToken : result.token}
      dispatch({
        "type": 'LOGIN_USER',
        payload: {
          'isAuthenticated' : true, 
          "details" : _user
        },
      })
      toggleDialog()
  })
  }

  return (
    <StyledCard elevation={3} passwordVisibility={passwordVisibility}>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Welcome To Ecommerce
        </H3>
        <Small
          fontWeight="600"
          fontSize="12px"
          color="grey.800"
          textAlign="center"
          mb={4.5}
          display="block"
        >
          Log in with email & password
        </Small>

        <BazarTextField
          mb={1.5}
          name="email"
          label="Email or Phone Number"
          placeholder="exmple@mail.com"
          variant="outlined"
          size="small"
          type="email"
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email || ''}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazarTextField
          mb={2}
          name="password"
          label="Password"
          placeholder="*********"
          autoComplete="on"
          type={passwordVisibility ? 'text' : 'password'}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <Visibility className="passwordEye" fontSize="small" />
                ) : (
                  <VisibilityOff className="passwordEye" fontSize="small" />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ''}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        <BazarButton
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{
            mb: '1.65rem',
            height: 44,
          }}
        >
          Login
        </BazarButton>

        <Box mb={2}>
          <Box width="200px" mx="auto">
            <Divider />
          </Box>

          <FlexBox justifyContent="center" mt={-1.625}>
            <Box color="grey.600" bgcolor="background.paper" px={2}>
              on
            </Box>
          </FlexBox>
        </Box>

        <BazarButton
          className="facebookButton"
          size="medium"
          fullWidth
          onClick = {signInWithFacebook}
          sx={{
            mb: '10px',
            height: 44,
          }}
        >
          <Image
            src="/assets/images/icons/facebook-filled-white.svg"
            alt="facebook"
          />
          <Box fontSize="12px" ml={1}>
            Continue with Facebook
          </Box>
        </BazarButton>
        <BazarButton
          className="googleButton"
          size="medium"
          onClick = {signInWithGoogle}
          fullWidth
          sx={{
            height: 44,
          }}
        >
          <Image src="/assets/images/icons/google-1.svg" alt="facebook" />
          <Box fontSize="12px" ml={1}>
            Continue with Google
          </Box>
        </BazarButton>

        <FlexBox justifyContent="center" alignItems="center" my="1.25rem">
          <Box>Don’t have account?</Box>
          <Link href="/signup">
            <a>
              <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                Sign Up
              </H6>
            </a>
          </Link>
        </FlexBox>
      </form>

      <FlexBox justifyContent="center" bgcolor="grey.200" py={2.5}>
        Forgot your password?
        <Link href="/">
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Reset It
            </H6>
          </a>
        </Link>
      </FlexBox>
    </StyledCard>
  )
}

const initialValues = {
  email: '',
  password: '',
}

const formSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('${path} is required'),
  password: yup.string().required('${path} is required'),
})

export default Login
