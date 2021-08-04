import BazarCard from '@component/BazarCard'
import Carousel from '@component/carousel/Carousel'
import Category from '@component/icons/Category'
import useWindowSize from '@hook/useWindowSize'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CategorySectionCreator from '../CategorySectionCreator'
import ProductCard6 from '../product-cards/ProductCard6'

const Section3 = () => {
  const [visibleSlides, setVisibleSlides] = useState(3)
  const width = useWindowSize()

  useEffect(() => {
    if (width < 650) setVisibleSlides(1)
    else if (width < 950) setVisibleSlides(2)
    else setVisibleSlides(3)
  }, [width])

  return (
    <CategorySectionCreator
      icon={<Category color="primary" />}
      title="Categories"
      seeMoreLink="#"
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={item.categoryUrl} key={ind}>
            <a>
              <BazarCard sx={{ p: '1rem' }} elevation={0}>
                <ProductCard6
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                />
              </BazarCard>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  )
}

const categoryList = [
  {
    title: 'Textbooks',
    subtitle: '100 orders this week',
    categoryUrl: '/product/search/textbooks',
    imgUrl: '/assets/images/banners/category-1.png',
  },
  {
    title: 'Laptops',
    subtitle: '10+ orders this week',
    categoryUrl: '/product/search/laptop',
    imgUrl: '/assets/images/banners/category-2.png',
  },
  {
    title: 'Cameras',
    subtitle: '5+ orders this month',
    categoryUrl: '/product/search/camera',
    imgUrl: '/assets/images/banners/category-3.png',
  },
  {
    title: 'Services',
    subtitle: '20+ orders this week',
    categoryUrl: '/product/search/services',
    imgUrl: '/assets/images/banners/category-1.png',
  },
  {
    title: 'Games & Entertainment',
    subtitle: '10+ orders this week',
    categoryUrl: '/product/search/games',
    imgUrl: '/assets/images/banners/category-1.png',
  },
  {
    title: 'Other',
    subtitle: '20+ orders this week',
    categoryUrl: '/product/search/other',
    imgUrl: '/assets/images/banners/category-1.png',
  },
]

export default Section3
