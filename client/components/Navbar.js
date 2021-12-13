import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import AllUsersAdminView from "./AllUsersAdminView";


const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <h1>Fullstack Spirits</h1>
    <nav>

      {isLoggedIn && isAdmin && (
          <Link to="/users" >View All Users</Link>
      )}
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to={`/user/${currentUser.id}`}>{currentUser.username}</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/products">Shop All Liquors</Link>
          <Link to={`/cart/${currentUser.id}`}>
						<img
							src={
								'https://www.vhv.rs/dpng/d/59-591610_shopping-basket-icon-png-transparent-png.png'
							}
							width="50"
							height="40"
						/>
					</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Sign Up </Link>
          <Link to="/products">Shop All Liquors</Link>
         <Link to="/cart">
						<img
							src={
								'https://www.vhv.rs/dpng/d/59-591610_shopping-basket-icon-png-transparent-png.png'
							}
							width="50"
							height="40"
						/>
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
    isAdmin: !!state.auth.isAdmin,
    currentUser: state.currentUser,
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
