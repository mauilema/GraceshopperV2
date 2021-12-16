import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductAdmin } from '../store/singleProductAdmin';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProductAdmin(this.props.match.params.productAdminId);
  }


  render() {
    const { singleProductAdmin } = this.props;
    return (
      <div>
        <div>
          <div className="single-product-border">
            <h1>{singleProductAdmin.name}</h1>
            <img className="products-image-size" src={singleProductAdmin.image} />
            <h1>Price: ${singleProductAdmin.price}</h1>
            <p>Description: {singleProductAdmin.description}</p>
            <h3>ABV: {singleProductAdmin.ABV}%</h3>
            <h3>Category: {singleProductAdmin.alcoholType}</h3>
            <div className="back-to-all-products-link" >
            <Link to={'/adminProducts'}>
              Back to All Products
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
	return {
		singleProductAdmin: state.productAdmin,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getProductAdmin: (productAdminId) => dispatch(fetchProductAdmin(productAdminId)),
	};
};

export default connect(mapState, mapDispatch)(SingleProduct);
