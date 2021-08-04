import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription2Props {}

const ProductDescription2: React.FC<ProductDescription2Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Sony <br />
        Model: PS5 <br />
        Playstation 5 Console <br />
        Includes : Full Console & Power Cords <br />
        Color: White or Black <br />
        Note: Does not include games <br />
      </Box>
    </Box>
  )
}

export default ProductDescription2
