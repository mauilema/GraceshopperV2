
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Checkout from "./components/Cart";
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import { me } from './store';
import AllUsersAdminView from './components/AllUsersAdminView';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/cart" component={Checkout} />
          <Route path="/products/:productId" component={SingleProduct} />
          <Route path="/users" component={AllUsersAdminView} />

          {isLoggedIn ? (
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect to="/home" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          )}

      </Switch>
    );
  }
}

//landing page has link to allproducts

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes

export default withRouter(connect(mapState, mapDispatch)(Routes));
