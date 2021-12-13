import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../store/CheckoutStore";

export class Checkout extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     products: []
  //   }
  // }

  componentDidMount() {
    try {
      this.props.getProductsAddedToCart();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('this is pops products inside the cart.js comp',this.props.products);
    const products = this.props.products;
    console.log();
    return (
      <div>
       <div>
       working
          {/* {products.map((product) => (
            <div key={product.id}>
              <div>{product.name}</div>
              <button onClick={() => this.props.deleteProduct(product.id)}>
                DELETE ME
              </button>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {

    deleteProduct: (id) => dispatch(deleteProduct(id, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
