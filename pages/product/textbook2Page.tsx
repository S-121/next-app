import NavbarLayout from '@component/layout/NavbarLayout'
import AvailableShops from '@component/products/AvailableShops'
import FrequentlyBought from '@component/products/FrequentlyBought'
import ProductDescription7 from '@component/products/ProductDescription7'
import ProductIntro7 from '@component/products/ProductIntro7'
import ProductReview7 from '@component/products/ProductReview7'
import RelatedProducts from '@component/products/RelatedProducts'
import { Box, Tab, Tabs } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import React, { useState } from 'react'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    fontWeight: 600,
    minHeight: 40,
    textTransform: 'capitalize',
  },
}))

const ProductDetails = () => {
  const [state, setState] = useState({
    id:'x1',
    title: 'Essentials of Physics - 10th Edition',
    price: 15,
    days: 1
  });

  const setDays = (days: number) => {
    let _state = {...state};
    _state.days = days;
    setState(_state);
  }

  const [selectedOption, setSelectedOption] = useState(0)
  //   const classes = useStyles()

  const handleOptionClick = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedOption(newValue)
  }

  return (
    <NavbarLayout>
      <ProductIntro7 {...state} price = {state.price * state.days} setDays = {setDays}/>

      <StyledTabs
        value={selectedOption}
        onChange={handleOptionClick}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription7 />}
        {selectedOption === 1 && <ProductReview7 />}
      </Box>

      <FrequentlyBought />

      <AvailableShops />

      <RelatedProducts />
    </NavbarLayout>
  )
}

export default ProductDetails
