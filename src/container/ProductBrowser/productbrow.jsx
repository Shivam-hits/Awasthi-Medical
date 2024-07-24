import React, { useState, useEffect, useRef } from 'react';
import "./productbrow.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Productbrowser({products}) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product">
              <img className='product_image' src={product.image} alt="" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  );
}

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