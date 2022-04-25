import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="mainnav">
      <div className="nav">
        <div className="navleft">
          <div className="navlogo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LQRCMhqOyeo3q3Csd7woX32AeKo3DhlhW6Y-Wi6MkksqyhNw3FHTtXFymFQLJWyhhA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="navinput">
            <input type="text" />
            <div className="searchicon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="navright">
          <div className="signinbtn">
            <a href="#">Signin</a>
          </div>
          <div className="cart_btn">
            <Badge color="secondary" variant="dot">
              <ShoppingCartIcon id="icon" />
            </Badge>
          </div>
          <div className="avatartdiv">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              id="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
