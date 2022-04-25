import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Slider from "./Slider";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="home_section">
      <div className="bannerpart">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
          <Slider title="Deal of The Day" />
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/MayART22/T1/Desktop_Gateway_CC_758x608_En1x._SY304_CB621830421_.jpg"
            alt=""
          />
          <a href="#">see More</a>
        </div>
      </div>

      {/* slider repeat */}
      <Slider title="Today's Deal" />
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>

      <Slider title="Best Seller" />
      <Slider title="Upto 80% off" />
      <Footer />
    </div>
  );
};

export default Home;
