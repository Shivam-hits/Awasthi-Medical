// return (
//     <div className='banners'>
//       <div className='sliders'>
//         <div className='slides'>
//           <input type="radio" name="radio-btn" id="radio1"/>
//           <input type="radio" name="radio-btn" id="radio3"/>
//           <input type="radio" name="radio-btn" id="radio2"/>
//           <input type="radio" name="radio-btn" id="radio4"/>
//           <input type="radio" name="radio-btn" id="radio5"/>
//           <input type="radio" name="radio-btn" id="radio6"/>
//           <input type="radio" name="radio-btn" id="radio7"/>
//           {/* <!-- Images start  --> */}
//           <div class=" slide first">
//               <img src={first} alt=""/>
//           </div>
//           <div class="slide second">
//               <img src={second} alt="" srcset=""/>
//           </div>
//           <div class="slide third">
//               <img src={third} alt="" srcset=""/>
//           </div>
//           <div class="slide fourth">
//               <img src={fourth} alt="" srcset=""/>
//           </div>
//           <div class="slide fifth">
//               <img src={fifth} alt="" srcset=""/>
//           </div>
//           <div class="slide sixth">
//               <img src={sixth} alt="" srcset=""/>
//           </div>
//           <div class="slide seventh">
//               <img src={seventh} alt="" srcset=""/>
//           </div>
//           {/* <!-- image end  --> */}
//           {/* <!-- automatic navigation start --> */}
//           <div class="automatic_nav">
//             <div class="auto1"></div>
//             <div class="auto3"></div>
//             <div class="auto4"></div>
//             <div class="auto5"></div>
//             <div class="auto6"></div>
//             <div class="auto7"></div>
//             <div class="auto2"></div>
//           </div>
//         </div>
        
//         {/* <!-- manual nav --> */}
//         <div class="manual_nav">
//           <label for="radio1" class="manual_btn"></label>
//           <label for="radio2" class="manual_btn"></label>
//           <label for="radio3" class="manual_btn"></label>
//           <label for="radio4" class="manual_btn"></label>
//           <label for="radio5" class="manual_btn"></label>
//           <label for="radio6" class="manual_btn"></label>
//           <label for="radio7" class="manual_btn"></label>
//         </div>
//       </div>
//       <div className='presc'>
//         <p>prescription upload</p>
//       </div>
//     </div>
// )



import React, { useState, useEffect, useRef } from 'react';
import "./banners.css";
import first from "../../assests/images/sliders/1st.jpg";
import second from "../../assests/images/sliders/2nd.png";
import third from "../../assests/images/sliders/3rd.jpg";
import fourth from "../../assests/images/sliders/4th.jpg";
import fifth from "../../assests/images/sliders/5th.jpg";
import sixth from "../../assests/images/sliders/6th.jpg";
import seventh from "../../assests/images/sliders/7th.jpg";
 
const images = [first, second, third, fourth, fifth, sixth, seventh];

function Banners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }, [currentSlide]);

  function changeSlide(direction) {
    setCurrentSlide((currentSlide + direction + images.length) % images.length);
  }

  return (
    <div className='banners'>
      <div className="slider">
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              // ref={el => (slideRefs.current[index] = el)}
            >
              <img src={image} alt={`Product ${index + 1}`} />
              
              {/* for prodect number and name */}
              {/* <h2>Product {index + 1}</h2>
              <p>Description of Product {index + 1}.</p> */}

            </div>
          ))}
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>

      </div>

      {/* <div className='presc'>
          <p>prescription upload</p>
      </div> */}
    </div>
    
  );
}

export default Banners;


// ==================== explain ===============

// ref={el => (slideRefs.current[index] = el)}

// 1) ref Attribute:

// The ref attribute is a special attribute in React that can be attached to any element. It allows you to access the underlying DOM element directly.
// Refs are commonly used to manipulate the DOM or to interact with third-party libraries that require direct DOM access.


// 2) Callback Ref:

// Instead of using a useRef hook to create a ref, you can use a callback function. This callback is executed when the element is mounted and receives the DOM element as its argument.
// In this case, the callback function is defined as el => (slideRefs.current[index] = el), where el is the DOM element.


// 3)Storing the Reference:

// slideRefs is a ref created using useRef. useRef returns a mutable ref object whose .current property is initialized to the passed argument (in this case, an empty array).
// slideRefs.current[index] = el assigns the DOM element el to the index position in the slideRefs.current array.
// This effectively stores a reference to each slide element in the slideRefs.current array, indexed by the slide's position.