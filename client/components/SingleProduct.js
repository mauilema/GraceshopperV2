import React from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../store/singleProduct';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.productId);
  }
  render() {
    console.log('WHAT IS IN HERE', this.props.singleProduct);
    return (
      <div>
        <h2>Single Product</h2>
        <div>
          <div>
            <h1>{this.props.singleProduct.name}</h1>
            <img src={this.props.singleProduct.image} />
            <h1>{this.props.singleProduct.abv}</h1>
            <h1>Price:${this.props.singleProduct.price}</h1>
            <h1>Description:{this.props.singleProduct.description}</h1>
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
