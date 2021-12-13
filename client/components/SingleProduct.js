import React from "react";
import { connect } from "react-redux";
import { getSingleProduct } from "../store/singleProduct";
import { addProduct } from "../store/CheckoutStore";

export class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
    };
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.productId);
  }


  render() {
    const { singleProduct, addToCart  } = this.props;
    return (
      <div>
        <h2>Single Product</h2>
        <div>
          <div>
            <h1>{singleProduct.name}</h1>
            <img src={singleProduct.image} />
            <h1>{singleProduct.abv}</h1>
            <h1>Price:${singleProduct.price}</h1>
            <h1>Description:{singleProduct.description}</h1>
            <div>
              {singleProduct.stockAmount > 0 ? (
                <h1>In stock</h1>
              ) : (
                <h1>Out of stock</h1>
              )}
            </div>
            <select value={this.state.qty} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={() => {addToCart(singleProduct, this.state.qty);}}>
              <h1>add to cart</h1>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { singleProduct: state.singleProductReducer, 
           cart: state.cart};
  //have to return state as value to a key
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
    addToCart: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
