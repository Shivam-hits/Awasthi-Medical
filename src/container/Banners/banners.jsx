import React from 'react'
import "./banners.css"
import first from "../../images/1st.jpg";
import second from "../../images/2nd.png";
import third from "../../images/3rd.jpg";
import fourth from "../../images/4th.jpg";
import fifth from "../../images/5th.jpg";
import sixth from "../../images/6th.jpg";
import seventh from "../../images/7th.jpg";

function Banners() {
  return (
    <div className='banners'>
      <div className='sliders'>
        <div className='slides'>
          <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio3"/>
          <input type="radio" name="radio-btn" id="radio2"/>
          <input type="radio" name="radio-btn" id="radio4"/>
          <input type="radio" name="radio-btn" id="radio5"/>
          <input type="radio" name="radio-btn" id="radio6"/>
          <input type="radio" name="radio-btn" id="radio7"/>
          {/* <!-- Images start  --> */}
          <div class=" slide first">
              <img src={first} alt=""/>
          </div>
          <div class="slide second">
              <img src={second} alt="" srcset=""/>
          </div>
          <div class="slide third">
              <img src={third} alt="" srcset=""/>
          </div>
          <div class="slide fourth">
              <img src={fourth} alt="" srcset=""/>
          </div>
          <div class="slide fifth">
              <img src={fifth} alt="" srcset=""/>
          </div>
          <div class="slide sixth">
              <img src={sixth} alt="" srcset=""/>
          </div>
          <div class="slide seventh">
              <img src={seventh} alt="" srcset=""/>
          </div>
          {/* <!-- image end  --> */}
          {/* <!-- automatic navigation start --> */}
          <div class="automatic_nav">
            <div class="auto1"></div>
            <div class="auto3"></div>
            <div class="auto4"></div>
            <div class="auto5"></div>
            <div class="auto6"></div>
            <div class="auto7"></div>
            <div class="auto2"></div>
          </div>
        </div>
        
        {/* <!-- manual nav --> */}
        <div class="manual_nav">
          <label for="radio1" class="manual_btn"></label>
          <label for="radio2" class="manual_btn"></label>
          <label for="radio3" class="manual_btn"></label>
          <label for="radio4" class="manual_btn"></label>
          <label for="radio5" class="manual_btn"></label>
          <label for="radio6" class="manual_btn"></label>
          <label for="radio7" class="manual_btn"></label>
        </div>
      </div>
      <div className='presc'>
        <p>prescription upload</p>
      </div>
    </div>
  )
}

export default Banners;