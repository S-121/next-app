import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription6Props {}

const ProductDescription6: React.FC<ProductDescription6Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: McGraw Milton <br />
        ISBN: -- <br />
        Edition: 17th <br />
        Includes : Full Physical Textbook <br />
        Condition: Used <br />
      </Box>
    </Box>
  )
}

export default ProductDescription6
