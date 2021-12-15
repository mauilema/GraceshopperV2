
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/CheckoutStore";
import { fetchProductsAdmin } from "../store/productsAdmin";

class AllProductsAdminView extends React.Component {
  componentDidMount() {
    this.props.getProductsAdmin();
  }

  render() {
    const { productsAdmin, addToCart } = this.props;
    return (
      <div>
        <h1>Our Current Liquor Selection:</h1>
        <div>
          {productsAdmin.length < 1 ? (
            <h1>We are completely out of stock :(</h1>
          ) : (
            <div className='allProducts'>
            {productsAdmin.map((productAdmin) => (
              <div className="single-productAdmin-border" key={productAdmin.id}>
                {/* <Link to={`/products/${productAdmin.id}`}> */}
                  <h2>{productAdmin.name}</h2>
                  <img className="products-image-size" src={productAdmin.image} height='50' width='50'/>
                  <div>
                  <button className="view-more-product-info-button">Click for More Info</button>
                  </div>
                  <h3>${productAdmin.price}</h3>
                {/* </Link> */}
                <div>
                <button
                  onClick={() => {
                    addToCart(productAdmin, productAdmin.qty);
                  }}
                >
                  <h1>add to cart</h1>
                </button>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsAdmin: state.productsAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsAdmin: () => {
      dispatch(fetchProductsAdmin());
    },
    addToCart: (product, qty) => dispatch(addProduct(product, qty)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProductsAdminView);
