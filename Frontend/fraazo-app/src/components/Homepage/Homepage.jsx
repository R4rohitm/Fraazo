import React from 'react'
import { Footer } from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import ProductItem from '../Product/ProductItem'
import BannerCarousel from './Banner_slider/BannerCarousel'
import BestDeals from './Carasol/BestDeals'
import Fruits from './Carasol/Fruits'
import Vegetables from './Carasol/Vegetables'


function Homepage() {
  return (
    <div>
       <Navbar />
         <BannerCarousel />
         <BestDeals />
         <Fruits />
         <Vegetables />
         <Footer />
    </div>
  )
}

export default Homepage