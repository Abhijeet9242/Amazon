import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get Know US</h3>
          <p>About US</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
          <p>Amazon Science</p>
        </div>

        <div className="footer_details_one">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer_details_one forres">
          <h3>Sell on Amazon</h3>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p> Become an Affiliate</p>
        </div>

        <div className="footer_details_one forres">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p> Returns Centre
        </div>
      </div>
      <div className="lastdetails">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LQRCMhqOyeo3q3Csd7woX32AeKo3DhlhW6Y-Wi6MkksqyhNw3FHTtXFymFQLJWyhhA&usqp=CAU"
          alt=""
        />

        <p>
          Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2022,
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
