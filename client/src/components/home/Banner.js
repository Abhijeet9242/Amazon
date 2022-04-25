import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Divider } from "@mui/material";
// import Carousel from "react-material-ui-carousel";
import Slider from "infinite-react-carousel";

import "./Banner.css";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];
const Banner = () => {
  return (
    <>
      <Slider
        dots={false}
        autoplay={true}
        autoplaySpeed={2000}
        pauseOnHover={false}
      >
        {data.map((imag, i) => {
          return <img src={imag} alt="" key={i} className="imgsiz" />;
        })}
      </Slider>
    </>
  );
};

export default Banner;
