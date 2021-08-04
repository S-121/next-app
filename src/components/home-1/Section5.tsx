import BazarCard from '@component/BazarCard'
import NewArrival from '@component/icons/NewArrival'
import { Grid } from '@material-ui/core'
import React from 'react'
import CategorySectionCreator from '../CategorySectionCreator'
import ProductCard2 from '../product-cards/ProductCard2'

const Section5 = () => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazarCard sx={{ p: '1rem' }}>
        <Grid container spacing={3}>
          {productList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>
  )
}

const productList = [
  {
    id: 5,
    title: 'Sony Camera Set',
    price: 50,
    imgUrl: '/assets/images/products/canonmark1.jpg',
    productUrl: '/ProductPage1',
  },
  {
    title: 'PS5 Game Console',
    price: 25,
    imgUrl: '/assets/images/products/PS5_1.jpg',
    productUrl: '/ProductPage2',
  },
  {
    title: 'Electrical Engineering Fundamentals',
    price: 10,
    imgUrl: '/assets/images/products/ee_book.jpg',
    productUrl: '/ProductPage3',
  },
  {
    title: 'Xbox Series X Console',
    price: 25,
    imgUrl: '/assets/images/products/xbox.jpeg',
    productUrl: '/ProductPage4',
  },
  {
    title: 'Macbook Pro',
    price: 40,
    imgUrl: '/assets/images/products/macbook_2.jpeg',
    productUrl: '/ProductPage5',
  },
  {
    title: 'Multi-Calculus 10th Edition',
    price: 10,
    imgUrl: '/assets/images/products/calculus.jpg',
    productUrl: '/ProductPage6',
  },
]

export default Section5
