import BabyBoy from '@component/icons/BabyBoy'
import BabyGirl from '@component/icons/BabyGirl'
import Car from '@component/icons/Car'
import Dress from '@component/icons/Dress'
import Food from '@component/icons/Food'
import Gift from '@component/icons/Gift'
import Laptop from '@component/icons/Laptop'
import MakeUp from '@component/icons/MakeUp'
import Man from '@component/icons/Man'
import Microphone from '@component/icons/Microphone'
import MotorBike from '@component/icons/MotorBike'
import Pets from '@component/icons/Pets'
import PlantPot from '@component/icons/PlantPot'
import TeddyBear from '@component/icons/TeddyBear'
import Woman from '@component/icons/Woman'

const navigations = [
  /*
  {
    icon: Dress,
    title: 'Textbooks',
    href: '/textbooks',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [ 
       
      ],
      rightImage: {
        imgUrl: '/assets/images/promotion/offer-1.png',
        href: '/sale-page-1',
      },
      
    },
    
  },
  */
  
  
  {
    icon: Laptop,
    title: 'Textbooks',
    href: '/product/search/textbooks',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [
        {
          title: 'General Ed.',
          href: '/product/search/science-textbooks',
          subCategories: [
            {
              title: 'Math',
              href: '/product/search/math-textbooks',
              imgUrl: '/assets/images/products/categories/shirt.png',
            },
            {
              title: 'English',
              href: '/product/search/english-textbooks',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
            {
              title: 'Science',
              href: '/product/search/pant',
              imgUrl: '/assets/images/products/categories/pant.png',
            },
            {
              title: 'Social Science',
              href: '/product/search/underwear',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
          ],
        },
       
        {
          title: 'Major Specific ',
          href: '/product/search/major-specific',
          subCategories: [
            {
              title: 'General Major',
              href: '/product/search/major-specific',
              imgUrl: '/assets/images/products/categories/belt.png',
            },
            {
              title: 'Special Major',
              href: '/product/search/major-specific',
              imgUrl: '/assets/images/products/categories/hat.png',
            },
            
          ],
        },
        {
          title: 'Specialty Textbooks',
          href: '/product/search/specialty-textbooks',
          subCategories: [
            {
              title: 'General',
              href: '/product/search/specialty-textbooks',
              imgUrl: '/assets/images/products/categories/sneaker.png',
            },
            
          ],
        },
        
      ],
      
      bottomImage: {
        imgUrl: '/assets/images/promotion/offer-5.png',
        href: '/',
      },
    },
  },

  /*
  {
    icon: PlantPot,
    title: 'Home & Garden',
    href: '/product/search/home&garden',
    menuComponent: 'MegaMenu1',
    menuData: {
      categories: [
        {
          title: 'Man Clothes',
          href: '/product/search/man-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: '/assets/images/products/categories/shirt.png',
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: '/assets/images/products/categories/pant.png',
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: '/assets/images/products/categories/belt.png',
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: '/assets/images/products/categories/hat.png',
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: '/assets/images/products/categories/watch.png',
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: '/assets/images/products/categories/sunglass.png',
            },
          ],
        },
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: '/assets/images/products/categories/sneaker.png',
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: '/assets/images/products/categories/sandal.png',
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: '/assets/images/products/categories/shirt.png',
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: '/assets/images/products/categories/backpack.png',
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: '/assets/images/products/categories/bag.png',
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: '/assets/images/products/categories/mini-bag.png',
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: '/assets/images/products/categories/belt.png',
            },
          ],
        },
        {
          title: 'Woman Clothes',
          href: '/product/search/woman-clothes',
          subCategories: [
            {
              title: 'Shirt',
              href: '/product/search/shirt',
              imgUrl: '/assets/images/products/categories/shirt.png',
            },
            {
              title: 'T- shirt',
              href: '/product/search/t-shirt',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
            {
              title: 'Pant',
              href: '/product/search/pant',
              imgUrl: '/assets/images/products/categories/pant.png',
            },
            {
              title: 'Underwear',
              href: '/product/search/underwear',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
          ],
        },
        {
          title: 'Accessories',
          href: '/product/search/accessories',
          subCategories: [
            {
              title: 'Belt',
              href: '/product/search/belt',
              imgUrl: '/assets/images/products/categories/belt.png',
            },
            {
              title: 'Hat',
              href: '/product/search/Hat',
              imgUrl: '/assets/images/products/categories/hat.png',
            },
            {
              title: 'Watches',
              href: '/product/search/Watches',
              imgUrl: '/assets/images/products/categories/watch.png',
            },
            {
              title: 'Sunglasses',
              href: '/product/search/Sunglasses',
              imgUrl: '/assets/images/products/categories/sunglass.png',
            },
            
          ],
          
        },
        
        {
          title: 'Shoes',
          href: '/product/search/shoes',
          subCategories: [
            {
              title: 'Sneakers',
              href: '/product/search/Sneakers',
              imgUrl: '/assets/images/products/categories/sneaker.png',
            },
            {
              title: 'Sandals',
              href: '/product/search/Sandals',
              imgUrl: '/assets/images/products/categories/sandal.png',
            },
            {
              title: 'Formal',
              href: '/product/search/Formal',
              imgUrl: '/assets/images/products/categories/shirt.png',
            },
            {
              title: 'Casual',
              href: '/product/search/Casual',
              imgUrl: '/assets/images/products/categories/t-shirt.png',
            },
          ],
        },
        {
          title: 'Bags',
          href: '/product/search/bags',
          subCategories: [
            {
              title: 'Backpack',
              href: '/product/search/backpack',
              imgUrl: '/assets/images/products/categories/backpack.png',
            },
            {
              title: 'Crossbody Bags',
              href: '/product/search/Crossbody Bags',
              imgUrl: '/assets/images/products/categories/bag.png',
            },
            {
              title: 'Side Bags',
              href: '/product/search/Side Bags',
              imgUrl: '/assets/images/products/categories/mini-bag.png',
            },
            {
              title: 'Slides',
              href: '/product/search/Slides',
              imgUrl: '/assets/images/products/categories/belt.png',
            },
          ],
        },
      ],
    },
  },
  */
  {
    icon: Gift,
    title: 'Laptops',
    href: '/product/search/laptop',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'Macbook',
        href: '/product/search/laptop',
      },
      {
        icon: Laptop,
        title: 'Surface Pro',
        href: '/product/search/laptop',
      },
      {
        icon: PlantPot,
        title: 'Tablets',
        href: '/product/search/laptop',
      },
      {
        icon: MotorBike,
        title: 'Other',
        href: '/product/search/laptop',
      },
     
    ],
  },
  

  {
    icon: Gift,
    title: 'Cameras & Accessories',
    href: '/product/search/camera',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'All Cameras',
        href: '/product/search/camera',
      },
      {
        icon: Laptop,
        title: 'Camera Accessories',
        href: '/product/search/camera',
      },
     
    ],
  },

  {
    icon: Gift,
    title: 'Games & Entertainment',
    href: '/product/search/games',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'Gaming Consoles',
        href: '/product/search/games',
      },
      {
        icon: Laptop,
        title: 'Video Games',
        href: '/product/search/games',
      },
      {
        icon: PlantPot,
        title: 'DJ Turntables',
        href: '/product/search/games',
      },
      {
        icon: MotorBike,
        title: 'Other',
        href: '/product/search/games',
      },
     
    ],
  },


  {
    icon: Gift,
    title: 'Services',
    href: '/product/search/services',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'Beauticians',
        href: '/product/search/services',
      },
      {
        icon: Laptop,
        title: 'Barbers',
        href: '/product/search/services',
      },
      {
        icon: PlantPot,
        title: 'Cosmetologist',
        href: '/product/search/services',
      },
      {
        icon: MotorBike,
        title: 'Massages',
        href: '/product/search/services',
      },
      {
        icon: Gift,
        title: 'Crafts',
        href: '/product/search/services',
      },
      {
        icon: Microphone,
        title: 'Music & DJ',
        href: '/product/search/services',
      },
      {
        icon: MakeUp,
        title: 'Personal Trainer',
        href: '/product/search/services',
      },
      {
        icon: Pets,
        title: 'Tutor',
        href: '/product/search/services',
      },
      {
        icon: TeddyBear,
        title: 'General Labor',
        href: '/product/search/services',
      },
      {
        icon: Food,
        title: 'Driver',
        href: '/product/search/services',
      },
      {
        icon: Car,
        title: 'Other',
        href: '/product/search/services',
      },
    ],
  },


  {
    icon: Gift,
    title: 'Other',
    href: '/product/search/other',
    menuComponent: 'MegaMenu2',
    menuData: [
     
    ],
  },
 
  /*
  {
    icon: Gift,
    title: 'Gifts',
    href: '/product/search/gifts',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'Fashion',
        href: '/product/search/fashion',
      },
    
     
    ],
  },
  {
    icon: Microphone,
    title: 'Music',
    href: '/product/search/music',
    menuComponent: 'MegaMenu1',
  },
 
 
  {
    icon: TeddyBear,
    title: 'Baby Toys',
    href: '/product/search/baby-toys',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: Food,
    title: 'Groceries',
    href: '/product/search/groceries',
    menuComponent: 'MegaMenu1',
  },
  {
    icon: Car,
    title: 'Automotive',
    href: '/product/search/automotive',
    menuComponent: 'MegaMenu1',
  },

  {
    icon: Gift,
    title: 'Gifts',
    href: '/product/search/gifts',
    menuComponent: 'MegaMenu2',
    menuData: [
      {
        icon: Dress,
        title: 'Fashion',
        href: '/product/search/fashion',
      },
      {
        icon: Laptop,
        title: 'Electronics',
        href: '/product/search/electronics',
      },
      {
        icon: PlantPot,
        title: 'Home & Garden',
        href: '/product/search/home&garden',
      },
      {
        icon: MotorBike,
        title: 'Bikes',
        href: '/product/search/bikes',
      },
      {
        icon: Gift,
        title: 'Gifts',
        href: '/product/search/gifts',
      },
      {
        icon: Microphone,
        title: 'Music',
        href: '/product/search/music',
      },
      {
        icon: MakeUp,
        title: 'Health & Beauty',
        href: '/product/search/health&beauty',
      },
      {
        icon: Pets,
        title: 'Pets',
        href: '/product/search/pets',
      },
      {
        icon: TeddyBear,
        title: 'Baby Toys',
        href: '/product/search/baby-toys',
      },
      {
        icon: Food,
        title: 'Groceries',
        href: '/product/search/groceries',
      },
      {
        icon: Car,
        title: 'Automotive',
        href: '/product/search/automotive',
      },
      
    ], 
  }, */
 
]

export default navigations
