
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";


const Navbar = ({ handleClick, isLoggedIn, cart }) => (
  <div>
    <h1>FS-App-Template</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/products">Shop</Link>
          <Link to="/cart"> 
          <img src= "https://cdn.shopify.com/s/files/1/0139/6552/5046/t/1/assets/cart.png?20010" width= "50" height= "40"/>
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Sign Up </Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart"> 
          <img src= "https://cdn.shopify.com/s/files/1/0139/6552/5046/t/1/assets/cart.png?20010" width= "50" height= "40"/>
          <span>Cart {cart.cartItems.length}</span>
          </Link>
        </div>
      )}

    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
