import React, { useCallback, useState, useEffect } from 'react'
import BazarAvatar from '@component/BazarAvatar'
import BazarButton from '@component/BazarButton'
import BazarRating from '@component/BazarRating'
import LazyImage from '@component/LazyImage'
import { H1, H2, H3, H6 } from '@component/Typography'
import { useAppContext } from '@context/app/AppContext'
import { Box, Grid } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import { CartItem } from '@reducer/cartReducer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ImageViewer from 'react-simple-image-viewer'
import FlexBox from '../FlexBox'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface ProductIntro7Props {
  imgUrl?: string[]
  title: string
  price: number
  id?: string | number,
  setDays: any,
  days: number
}

const ProductIntro7: React.FC<ProductIntro7Props> = ({
  imgUrl = [],
  title,
  price = 200,
  id,
  days,
  setDays
}) => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const { state, dispatch } = useAppContext()
  const cartList: CartItem[] = state.cart.cartList
  const router = useRouter()
  const routerId = router.query.id as string
  const cartItem = cartList.find((item) => item.id === id || item.id === routerId)

  const [checkInDate, setCheckInDate] = useState<any>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<any>(new Date());

  useEffect(() => {
    if (checkInDate != null && checkOutDate != null) {
      const diffTime = Math.abs(checkOutDate - checkInDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

      setDays(diffDays + 1);
      //handleCartAmountChange(2)
    }
  }, [checkInDate, checkOutDate])

  const handleCheckInDate = (date: any) => {
    setCheckInDate(date);
    setCheckOutDate(new Date());
  };
  
  const handleCheckOutDate = (date: any) => {
    setCheckOutDate(date);
  };

  const handleImageClick = (ind: number) => () => {
    setSelectedImage(ind)
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: 'CHANGE_CART_AMOUNT',
        payload: {
          qty: amount,
          name: title,
          price: price,
          imgUrl: imgUrl[0],
          id: id || routerId,
        },
      })
    },
    [price]
  )

  let totalPrice = price;// * days;
  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb={6}>
              <LazyImage
                src={imgUrl[selectedImage]}
                onClick={() =>
                  openImageViewer(imgUrl.indexOf(imgUrl[selectedImage]))
                }
                alt={title}
                height="300px"
                width="auto"
                loading="eager"
                objectFit="contain"
              />
              {isViewerOpen && (
                <ImageViewer
                  src={imgUrl}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  backgroundStyle={{
                    backgroundColor: 'rgba(0,0,0,0.9)',
                  }}
                />
              )}
            </FlexBox>
            <FlexBox overflow="auto">
              {imgUrl.map((url, ind) => (
                <Box
                  height={64}
                  width={64}
                  minWidth={64}
                  bgcolor="white"
                  borderRadius="10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid"
                  style={{ cursor: 'pointer' }}
                  ml={ind === 0 ? 'auto' : 0}
                  mr={ind === imgUrl.length - 1 ? 'auto' : '10px'}
                  borderColor={selectedImage === ind ? 'primary.main' : 'grey.400'}
                  onClick={handleImageClick(ind)}
                  key={ind}
                >
                  <BazarAvatar src={url} variant="square" height={40} />
                </Box>
              ))}
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{title}</H1>

          <FlexBox alignItems="center" mb={2}>
            <Box>Available From:</Box>
            <H6 ml={1}>Morgan State Univ. | University of Maryland | Towson University</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazarRating color="warn" fontSize="1.25rem" value={5} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              ${totalPrice}
              <Box color="inherit">Per Semester</Box>
            </H2>
            <Box color="inherit">Item Available</Box>
            
            
            
          </Box>

          {!cartItem?.qty ? (
            <>
              <div>
                <h4>Select Your Rental Dates</h4>
                <h5>Pick-Up Date</h5>
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
              </div>
              <div>
                <h5>Return Date</h5>
                <DatePicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </div>
              <BazarButton
                variant="contained"
                color="primary"
                style={{marginTop : 20}}
                sx={{
                  mb: '36px',
                  px: '1.75rem',
                  height: '40px',
                }}
                onClick={handleCartAmountChange(1)}
              >
                Add to Cart
              </BazarButton>
            </>
          ) : (
            <FlexBox alignItems="center" mb={4.5}>
              <BazarButton
                sx={{ p: '9px' }}
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize="small" />
              </BazarButton>
              <H3 fontWeight="600" mx={2.5}>
                {cartItem?.qty.toString().padStart(2, '0')}
              </H3>
              <BazarButton
                sx={{ p: '9px' }}
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize="small" />
              </BazarButton>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb={2}>
            <Box>Available For:</Box>
            <Link href="/">
              <a>
                <H6 ml={1}>Rent</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  )
}

ProductIntro7.defaultProps = {
  imgUrl: [
    '/assets/images/products/phy1.jpg',
  ],
  title: 'PS5 Console',
  price: 50,
}

export default ProductIntro7