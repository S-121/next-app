import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription4Props {}

const ProductDescription4: React.FC<ProductDescription4Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Microsoft <br />
        Model: XBOX Series X <br />
        Includes : Full Console & Power Cords <br />
        Color: White or Black <br />
        Note: Does not include games <br />
      </Box>
    </Box>
  )
}

export default ProductDescription4
