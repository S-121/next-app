import FlexBox from '@component/FlexBox'
import { H2, H5 } from '@component/Typography'
import { Box, Button, TextField } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import ProductComment from './ProductComment'

export interface ProductReview3Props {}

const ProductReview3: React.FC<ProductReview3Props> = () => {
  const handleFormSubmit = async (values: any, { resetForm }: any) => {
    console.log(values)
    resetForm()
  }

  const {
    values,
    errors,
    touched,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: reviewSchema,
    onSubmit: handleFormSubmit,
  })

  return (
    <Box>
      {commentList.map((item, ind) => (
        <ProductComment {...item} key={ind} />
      ))}

      <H2 fontWeight="600" mt={7} mb={2.5}>
        Write a Review for this product
      </H2>

      <form onSubmit={handleSubmit}>
        <Box mb={2.5}>
          <FlexBox mb={1.5}>
            <H5 color="grey.700" mr={0.75}>
              Your Rating
            </H5>
            <H5 color="error.main">*</H5>
          </FlexBox>

          <Rating
            color="warn"
            size="medium"
            value={values.rating || 0}
            onChange={(_, value) => setFieldValue('rating', value)}
          />
        </Box>

        <Box mb={3}>
          <FlexBox mb={1.5}>
            <H5 color="grey.700" mr={0.75}>
              Your Review
            </H5>
            <H5 color="error.main">*</H5>
          </FlexBox>

          <TextField
            name="comment"
            placeholder="Write a review here..."
            variant="outlined"
            multiline
            fullWidth
            rows={8}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.comment || ''}
            error={!!touched.comment && !!errors.comment}
            helperText={touched.comment && errors.comment}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!(dirty && isValid)}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

const commentList = [
  {
    name: 'Wilson M.',
    imgUrl: '/assets/images/faces/7.png',
    rating: 4.7,
    date: '2021-02-14',
    comment:
      'Good price',
  },
  {
    name: 'Brian P.',
    imgUrl: '/assets/images/faces/6.png',
    rating: 5.0,
    date: '2021-07-10',
    comment:
      '5 Stars',
  },
  {
    name: 'Jenifer R.',
    imgUrl: '/assets/images/faces/8.png',
    rating: 4.0,
    date: '2021-02-05',
    comment:
      'Thanks!',
  },
]

const initialValues = {
  rating: 0,
  comment: '',
  date: new Date().toISOString(),
}

const reviewSchema = yup.object().shape({
  rating: yup.number().required('required'),
  comment: yup.string().required('required'),
})

export default ProductReview3