import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription3Props {}

const ProductDescription3: React.FC<ProductDescription3Props> = () => {
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

export default ProductDescription3
