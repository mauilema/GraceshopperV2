import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../store/singleProduct';


export class SingleProduct extends Component {
	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);
	}

	componentDidMount() {
		this.props.getSingleProduct(this.props.match.params.productId);
	}

	addToCart = async (id) => {
		if (this.props.currentUser.id) {
			const containsItem = this.props.cart.filter((item) => {
				return item.productId === id;
			});
			if (containsItem.length) {
				await this.props.add({ id, inc: 'inc' });
			} else {
				await this.props.addNew({ id });
			}
		}
		document.querySelector('.cart-nav span').textContent =
			Number(document.querySelector('.cart-nav span').textContent) + 1;
	};

	render() {
		const { singleProduct } = this.props;
		return (
			<div>
				<div>
					<div>
						<h1>{singleProduct.name}</h1>
						<img src={singleProduct.image} />
						<h1>{singleProduct.abv}</h1>
						<h1>Price:${singleProduct.price}</h1>
						<h1>Description:{singleProduct.description}</h1>
						<button
							onClick={() => {
								this.addToCart(singleProduct.id);
							}}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		singleProduct: state.singleProductReducer,
		cart: state.cart,
		currentUser: state.currentUser,
	};
	//have to return state as value to a key
};

const mapDispatch = (dispatch) => {
	return {
		getSingleProduct: (productId) => dispatch(getSingleProduct(productId)),
	};
};

export default connect(mapState, mapDispatch)(SingleProduct);