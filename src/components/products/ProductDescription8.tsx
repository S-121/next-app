import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription8Props {}

const ProductDescription8: React.FC<ProductDescription8Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: McGraw Hill <br />
        ISBN: -- <br />
        Edition: 12th <br />
        Includes : Full Physical Textbook <br />
        Condition: Used <br />
      </Box>
    </Box>
  )
}

export default ProductDescription8