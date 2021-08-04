import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription5Props {}

const ProductDescription5: React.FC<ProductDescription5Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Apple <br />
        Model: Macbook Pro 2019 <br />
        Includes : Laptop & Power Cord <br />
        Color: Metallic <br />
        Condition: New <br />
      </Box>
    </Box>
  )
}

export default ProductDescription5
