import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription7Props {}

const ProductDescription7: React.FC<ProductDescription7Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: McGraw Hill <br />
        ISBN: -- <br />
        Edition: 10th <br />
        Includes : Full Physical Textbook <br />
        Condition: Used <br />
      </Box>
    </Box>
  )
}

export default ProductDescription7