import React from 'react'
import Header from "../container/header/header.jsx"
import Banners from "../container/Banners/banners.jsx"
import Membership from "../container/membership/membership.jsx"
import Brands from "../container/BrandAndManu/BrandAndManu.jsx"
import Productbrowser from "../container/ProductBrowser/productbrow.jsx"
import Footer from "../container/footer/footer.jsx"

function HomePage() {
  return (
    <div>
        <Header />
        <Banners />
        <Membership/> 
        <Brands />
        <Productbrowser />
        <Footer />
    </div>

  )
}

export default HomePage;