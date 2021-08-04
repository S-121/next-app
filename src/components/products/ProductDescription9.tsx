import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription9Props {}

const ProductDescription9: React.FC<ProductDescription9Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Sony <br />
        Type: DSLR Mirrorless Camera <br />
        Includes : Full Camera Set & Accessories <br />
        Condition: Used <br />
      </Box>
    </Box>
  )
}

export default ProductDescription9