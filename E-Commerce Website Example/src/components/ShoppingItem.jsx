

import React from 'react';
import '../css/ShoppingItem.css';
import { useShoppingCart } from '../contexts/useShoppingCart';

function ShoppingItem({ products = [] }) {
	const { addToCart } = useShoppingCart();
	if (!products.length) {
		return <div className="shopping-item">No products found.</div>;
	}
	return (
		<div className="shopping-items-list">
			{products.map(product => (
				<div className="shopping-item" key={product.id}>
					<img src={product.image} alt={product.title} />
					<div className="shopping-item-details">
						<h2>{product.title}</h2>
						<p>${Number(product.price).toFixed(2)}</p>
						<button
							className="add-to-cart-btn"
							onClick={() => addToCart(product)}
						>
							Add to Cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShoppingItem;
