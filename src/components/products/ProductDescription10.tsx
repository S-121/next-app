import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescription10Props {}

const ProductDescription10: React.FC<ProductDescription10Props> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: JT's Mobile Barber Service <br />
        Type: Barber /Beaty <br />
        Includes : Enjoy a premium haircut from comfort of your dorm room <br />
        Condition: -- <br />
      </Box>
    </Box>
  )
}

export default ProductDescription10