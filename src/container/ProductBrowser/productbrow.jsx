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