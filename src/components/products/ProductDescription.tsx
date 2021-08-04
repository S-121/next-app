import { H3 } from '@component/Typography'
import { Box } from '@material-ui/core'
import React from 'react'

export interface ProductDescriptionProps {}

const ProductDescription: React.FC<ProductDescriptionProps> = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Sony <br />
        Model: a7 III <br />
        Full-Frame Mirrorless Interchangeable-Lens w/ 3-inch LCD<br />
        Color: Black <br />
        Included: Rechargeable battery (NP FZ100), AC adapter (AC UUD12), shoulder strap, body cap, Accessory shoe cap, Eyepiece cup, Micro USB cable. Metering type: 1200 zone evaluative metering <br />
      </Box>
    </Box>
  )
}

export default ProductDescription
