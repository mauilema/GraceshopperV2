import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    console.log(this.props);
    const { products } = this.props;
    return (
      <div>
        <h1>Our Current Liquor Selection:</h1>
        <div>
          {products.length < 1 ? (
            <h1>We are completely out of stock :(</h1>
          ) : (
            products.map((product) => (
              <div className="single-product-border" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <h2>{product.name}</h2>
                  <img src={product.image} />
                  <h3>${product.price}</h3>
                </Link>
              </div>
            ))
          )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(fetchProducts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
