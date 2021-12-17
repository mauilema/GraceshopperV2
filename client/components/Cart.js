import React, { Component } from "react";
import { connect } from "react-redux";
import { _addProduct, deleteFromCart } from "../store/CheckoutStore";
import CheckoutForm from "./checkoutForm";
import { Link } from "react-router-dom";



export class Checkout extends Component {
  handleQtyChange(event, product) {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cart.forEach((Item) => {
      if (Item.id === product.id) {
        Item.qty = event.target.value;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    this.props.addToCart(cart);
  }

  createOrder(cartItems) {
    CheckoutForm(cartItems);
  }

  render() {
    const cartItems = this.props.guestCart.cartItems;
    const { deleteProduct, createOrder } = this.props;
    let totalAmount = 0;
    let itemAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.price * item.qty;
      itemAmount += Number(item.qty);
    });

    return (
      <table
        className="shopping-cart"
        width="100%"
        cellSpacing={0}
        cellPadding={0}
      >
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max={item.stockAmount}
                  value={item.qty}
                  onChange={(event) => this.handleQtyChange(event, item)}
                />
              </td>
              <td>${item.price * item.qty}</td>
              <td>
                <button
                  className="remove-product"
                  onClick={() => {
                    deleteProduct(item);
                  }}
                >
                  Remove{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6} className="total">
              Total: {totalAmount}
            </td>
            <td>
            <Link to='/checkout'>
              <button >
                Checkout
              </button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    guestCart: state.guestCart,
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(_addProduct(product)),
    deleteProduct: (product) => dispatch(deleteFromCart(product)),
    // createOrder: (order) =>dispatch(addOrderId(order))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
