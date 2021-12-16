import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductAdmin } from '../store/singleProductAdmin';
import EditProductByAdmin from './EditProductByAdmin';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProductAdmin(this.props.match.params.productAdminId);
  }


  render() {
    const { product } = this.props;
    return (
      <div>
        <div>
          <div>
            <EditProductByAdmin product={product}/>
          </div>
          <div className="single-product-border">
            <h1>{product.name}</h1>
            <img className="products-image-size" src={product.image} />
            <h1>ABV: {product.ABV}%</h1>
            <h1>Stock Amount: {product.stockAmount}</h1>
            <h1>Price: ${product.price}</h1>
            <p>Description: {product.description}</p>
            <h3>Category: {product.alcoholType}</h3>
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
		product: state.productAdmin,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getProductAdmin: (productId) => dispatch(fetchProductAdmin(productId)),
	};
};

export default connect(mapState, mapDispatch)(SingleProduct);
