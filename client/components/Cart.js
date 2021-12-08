import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsInCart, deleteProduct } from "../store/CheckoutStore";

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
    console.log(this.props.products);
    const products = this.props.products;
    console.log();
    return (
      <div>
        <h1>It's aliveeee</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuy7riov5X5ekBnuRtqbsVgKX9PVyDJP06qw&usqp=CAU" />
        <h2>these are the components in the dummy data: </h2>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <div>{product.name}</div>
              <button onClick={() => this.props.deleteProduct(product.id)}>
                DELETE ME
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getProductsAddedToCart: () => dispatch(fetchProductsInCart()),
    deleteProduct: (id) => dispatch(deleteProduct(id, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
