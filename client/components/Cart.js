import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../store/CheckoutStore";

export class Checkout extends Component {
  render() {
    console.log(
      "this is pops products inside the cart.js comp",
      this.props.cart.cartItems
    );
    const cartItems = this.props.cart.cartItems;
    let totalAmount = 0;
    cartItems.forEach((element) => {
      totalAmount += element.price;
    });
    console.log(totalAmount);
    return (
      <div>
        {!cartItems.length ? (
          <h1>There are no items in your cart</h1>
        ) : (
          <div>
            <div>
              <h1>Shopping Cart</h1>
              <div className="shopping-cart"></div>
              <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
              </div>
            </div>
            {cartItems.map((item) => (
              <div className="product">
                <div className="product-image">
                  <img src={item.image} width="50px" height="50px" />
                </div>
                <div className="product-details" key={item.id}>
                  <div className="product-title">{item.name}</div>
                </div>
                <div className="product-price">${item.price}</div>
                <div className="product-quantity">
                  <input type="number" value="1" min="1" />
                </div>
                <div className="product-removal">
                  <button className="remove-product">Remove</button>
                </div>
              </div>
            ))}
            <hr />
            <div className="checkout">
              <div className="total-amount">
                ${totalAmount}
                <div>
                  <div className="numItems">{cartItems.length} items</div>
                </div>
              </div>
            </div>
          </div>
        )}
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

/* <div>
            <div className="Header">
              <h3 className="Heading"> Shopping Cart</h3>
              <h5 className="RemoveAll"> Remove All</h5>
            </div>
            <div className="ItemsInCart">
              {cartItems.map((item) => (
                <div key={item.id}>
                  <tr>
                    <th >{item.name}</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                  <div className="imgInCart">
                    <img src={item.image} height="120px" />
                  </div>
                  <div className="about">
                    <h1 className="title">{item.name}</h1>
                    <h3 className="percent">%{item.ABV}</h3>
                  </div>
                  <div className="qty">qty: {item.qty}</div>
                  <div className="prices">${item.price}</div>
                </div>
              ))}
              <hr />
              <div className="checkout">
                <div className="total-amount">
                  ${totalAmount}
                  <div>
                    <div className="Subtotal">Sub-Total</div>
                    <div className="numItems">{cartItems.length} items</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */
