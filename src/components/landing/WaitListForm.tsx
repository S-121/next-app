import Card1 from '@component/Card1'
import countryList from '@data/countryList'
import {
  Button,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as yup from 'yup'
import firebase from 'firebase'

const WaitListForm = () => {

  
  const[name,setName] = useState<string | null>(null) 
  const [email, setEmail] = useState<string | null>(null)
  const[school,setSchool] = useState<string | null>(null)




 
  const router = useRouter()

  const handleFormSubmit = async (values: any) => {
    console.log(values)
    router.push('/payment')
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleSubmit,
      }) => (
        <form id="mysubmit" onSubmit={handleSubmit}>
          <Card1 sx={{ mb: '2rem' }}>
            <Typography fontWeight="600" mb={2}>
              Join The Waiting List 
            </Typography>

            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Full Name"
                  fullWidth
                  sx={{ mb: '1rem' }}
                  onBlur={handleBlur}
                  onChange={(change)=>{
                    setName(change.target.value)
                }}
                 
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  sx={{ mb: '1rem' }}
                  onBlur={handleBlur}
                  onChange={(change)=>{
                    setEmail(change.target.value)
                }}
                  
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  id="school"
                  name="school"
                  label="School Name"
                  fullWidth
                  sx={{ mb: '1rem' }}
                  onBlur={handleBlur}
                  onChange={(change)=>{
                      setSchool(change.target.value)
                  }}
                  
                  error={!!touched.school && !!errors.school}
                  helperText={touched.school && errors.school}
                />
               
              </Grid>
            
            </Grid>

            <Link href="/landing">
                <Button id="mybutton" onClick={async()=>{
                  await firebase.firestore().collection("waitingforms").doc().set({
                    name:name,
                    email:email,
                    school:school,

                  })
                }} variant="contained" color="primary" type="submit" fullWidth>
                  Submit
                </Button>
              </Link>
          </Card1>

        </form>
      )}
    </Formik>
  )
}

const initialValues = {
  name: '',
  shipping_email: '',
  email: '',
  shipping_company: '',
  school: '',
  shipping_country: countryList[229],
  shipping_address1: '',
  shipping_address2: '',

  billing_name: '',
  billing_email: '',
  billing_contact: '',
  billing_company: '',
  billing_zip: '',
  billing_country: countryList[229],
  billing_address1: '',
  billing_address2: '',
}

// uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
   name: yup.string().required("required"),
   shipping_email: yup.string().email("invalid email").required("required"),
   email: yup.string().required("required"),
   school: yup.string().required("required"),
   shipping_country: yup.object().required("required"),
   shipping_address1: yup.string().required("required"),
   billing_name: yup.string().required("required"),
   billing_email: yup.string().required("required"),
   billing_contact: yup.string().required("required"),
   billing_zip: yup.string().required("required"),
   billing_country: yup.object().required("required"),
   billing_address1: yup.string().required("required"),
})



export default WaitListForm

