import React from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../store/singleProduct';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.productId);
  }

  //add a method that will create a button "add to cart"
  //for this product, i want to push it to local stoage
  //..lev localstorage doc
  render() {
    const { singleProduct } = this.props;
    return (
      <div>
        <h2>Single Product</h2>
        <div>
          <div className="single-product-border">
            <h1>{singleProduct.name}</h1>
            <img className="products-image-size" src={singleProduct.image} />
            <h1>Price: ${singleProduct.price}</h1>
            <p>Description: {singleProduct.description}</p>
            <h3>ABV: {singleProduct.ABV}%</h3>
            <h3>Category: {singleProduct.alcoholType}</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { singleProduct: state.singleProductReducer };
  //have to return state as value to a key
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);

{
  /* <button
type="button"
onClick={() => this.props.deleteRobot(robot.id)}
>
X Add To Cart
</button> */
}

//onClick handl

//determine if the user is logged in

//guest user - local storage
//logged in user - store in db
