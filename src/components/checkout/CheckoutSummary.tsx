import Card1 from '@component/Card1'
import FlexBox from '@component/FlexBox'
import { Button, Divider, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useAppContext } from '@context/app/AppContext'
import { CartItem } from '@reducer/cartReducer'

const CheckoutSummary = () => {
  const { state } = useAppContext()
  const cartList: CartItem[] = state.cart.cartList

  let totalPrice = 0;

  for(const cart of cartList) {
    totalPrice += (cart.price * cart.qty);
  }

  return (
    <Card1>
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Subtotal:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            ${totalPrice}.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>


      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Community Fee:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          ${totalPrice}
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
        <Typography color="grey.600">Insurance:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>
      
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography color="grey.600">Tax:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
        <Typography color="grey.600">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider sx={{ mb: '1rem' }} />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={3}
      >
        ${totalPrice.toFixed(2)}
      </Typography>

      <TextField placeholder="Voucher" variant="outlined" size="small" fullWidth />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ mt: '1rem', mb: '30px' }}
      >
        Apply Promo Code
      </Button>
    </Card1>
  )
}

export default CheckoutSummary