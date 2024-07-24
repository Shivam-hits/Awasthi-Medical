import React from 'react'
import Header from "../container/header/header.jsx"
import Banners from "../container/Banners/banners.jsx"
import Membership from "../container/membership/membership.jsx"
import Brands from "../container/BrandAndManu/BrandAndManu.jsx"
import Productbrowser from "../container/ProductBrowser/productbrow.jsx"
import Footer from "../container/footer/footer.jsx"
import * as util from "../Details/product_details.js"
import "./HomePage.css"

function HomePage() {
  return (
    <div>
        <Header  />
        <Banners />
        <Membership/> 
        <Brands />

        <div className='products_browser_container'>
          {Object.keys(util).map((key) => (
            <Productbrowser key={key} products={util[key]} />
          ))}
        </div>
        
        <Footer />
    </div>

  )
}

export default HomePage;


/*
"Object.keys(util)"

-) util is an object imported from product_details.js that contains multiple product arrays.
-) "Object.keys(util)" returns an array of the keys (names of the properties) of the util object.
-) For example, if util contains product1 and product2, Object.keys(util) would return ['product1', 'product2']. 


".map((key) => ( "
-) The map function iterates over each key in the array returned by Object.keys(util).
-) For each key, it creates a new element, which in this case is a Productbrowser component.

" <Productbrowser key={key} products={util[key]} /> "
-) key={key}: React requires a unique key prop for each element in an array to keep track of them and optimize rendering. Using key={key} ensures each Productbrowser component has a unique key based on the property name (e.g., product1, product2).
-) products={util[key]}: The products prop of the Productbrowser component is set to the corresponding product array from the util object.
-) util[key] accesses the value of the property key in the util object. If key is product1, util[key] is util.product1.


The map function iterates over this array:

For the first iteration:
-) key is 'product1'.
-) A Productbrowser component is created with key='product1' and products={util['product1']} (which is the array of products in product1).
For the second iteration:
-) key is 'product2'.
-) A Productbrowser component is created with key='product2' and products={util['product2']} (which is the array of products in product2).

*/