import CarouselCard3 from '@component/carousel-cards/CarouselCard3'
import CarouselCard4 from '@component/carousel-cards/CarouselCard4'
import Carousel from '@component/carousel/Carousel'
import Navbar from '@component/navbar/Navbar'
import { Box, Container } from '@material-ui/core'
import React, { Fragment } from 'react'
import SearchBox from '../search-box/SearchBox'
import Header from './Header'
import CheckoutForm from '@component/checkout/CheckoutForm'
import WaitListForm from '@component/landing/WaitListForm'


const Section8 = () => {
  return (
    <Fragment>
      <Header />
      <Box bgcolor="white" mb={7.5}>
        <Container sx={{ py: '2rem' }}>
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
           
            <CarouselCard3 />
            <CarouselCard4 />
            
          </Carousel>
          <WaitListForm />
        </Container>
        
        
      </Box>
    </Fragment>
  )
}

export default Section8
