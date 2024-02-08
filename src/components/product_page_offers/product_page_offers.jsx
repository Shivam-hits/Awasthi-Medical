import React from "react";
import "./product_page_offers.css"

function toggle_Options_Offers(){
    var hidden = document.querySelectorAll('.offer[id="hidden"]');
    var seeMore = document; 
}


function Product_page_offer(){
    return(
        <div className="offers_container">
            <div className="offer_1 offer">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_2 offer">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_3 offer">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_4 offer" id="hidden">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_5 offer" id="hidden">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_6 offer" id="hidden">
                <p>Amazon Pay Later: Pay with Amazon Pay Later on Tata 1mg for Rs. 499 and more and earn cashback up to Rs. 
                    300 with minimum cashback of Rs. 15. Offer ends 29th Feb'24.</p>
            </div>
            <div className="offer_see_more" onclick="toggle_Options_Offers()">
                <p>See More </p>
            </div>
        </div>
    )
}
export default Product_page_offer;