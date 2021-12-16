import React from 'react';

const CartProducts = (props) => {
	const { handleClick, removeFromCart, currentUser } = props;
	return (
		<tbody>
			{props.cartItem.map((product) => {
				return (
					<tr key={product.id}>
						<td>
							<img src={product.image} width="50px" height="50px" />
						</td>

						<td>{product.name}</td>
						<td>${product.price}/bottle</td>
						<td>
							<form onSubmit={(evt) => handleClick(evt, product)}>
								{product.productOrders.quantity}
								<input
									name="quantity"
									type="number"
									min={1}
									max={product.stockAmount}
								/>
								<button type="submit">Update</button>
							</form>
						</td>
						<td>${product.productOrders.quantity * product.price}</td>
						<td>
							<button
								onClick={() => removeFromCart(currentUser.id, { product })}
							>
								Remove
							</button>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
};

export default CartProducts;
