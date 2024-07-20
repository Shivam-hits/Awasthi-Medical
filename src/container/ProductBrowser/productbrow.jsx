import React, { useState, useEffect } from 'react';
import ProBox from "../../components/probox/probox.jsx";
import "./productbrow.css";
function Productbrowser() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => {
    const slider = document.getElementById('productSlider');
    const items = slider.getElementsByClassName('slider-item');
    const itemWidth = items[0].offsetWidth ; // Including margin
    setItemWidth(itemWidth);
    setTotalItems(items.length);
  }, [currentSlide]);
  
  const moveSlide = (direction) => {
    const slider = document.getElementById('productSlider');
    let newSlide = currentSlide + direction;
    
    if (newSlide >= 0 && newSlide <= (totalItems-7))
    {
      setCurrentSlide( newSlide);
      slider.style.transform = `translateX(-${newSlide * itemWidth }px)`;
    }
  };
  
  return (
    <div className='productbrowser'>
      <p className='product_heading'>Products</p>
      <div className='product-slider-container'>
        <button className="product-prev" onClick={() => moveSlide(-1)}>&#10094;</button>

        <div className='product-slider' id='productSlider'>
          {Array.from({ length: 15 }, (_, i) => (
            <div className='slider-item' key={i}>
              <ProBox />
            </div>
          ))}
        </div>

        <button className="product-next" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>
    </div>
  );
}
export default Productbrowser;