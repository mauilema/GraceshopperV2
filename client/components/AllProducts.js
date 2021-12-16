import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import { addProduct } from "../store/CheckoutStore";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, addToCart } = this.props;
    return (
      <section className="products" id="products">
        <div>
          <h1 className="heading">Our Current Liquor Selection:</h1>
          <div>
            {products.length < 1 ? (
              <h2>Loading...</h2>
            ) : (
              <div className="product">
                <div className="wrapper">
                  {products.map((product) => (
                    <div
                      /*className="single-product-border"*/ className="box"
                      key={product.id}
                    >
                      <Link to={`/products/${product.id}`}>
                        <img
                          className="products-image-size"
                          src={product.image}
                        />
                        <h3>{product.name}</h3>
                        <div className="price">$ {product.price}</div>
                      </Link>
                      <div>
                        {product.stockAmount > 0 ? (
                          <h1>In stock</h1>
                        ) : (
                          <h1>Out of stock</h1>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          addToCart(product, product.qty);
                        }}
                      >
                        {" "}
                        <h1>add to cart</h1>{" "}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(fetchProducts());
    },
    addToCart: (product, qty) => dispatch(addProduct(product, qty)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
