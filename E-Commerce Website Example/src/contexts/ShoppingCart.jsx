
import React, { createContext, useState } from 'react';

const ShoppingCartContext = createContext();


export function ShoppingCartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existing = prevCart.find((i) => i.id === item.id);
			if (existing) {
				window.alert('Item is already in the cart.');
				return prevCart;
			}
			return [...prevCart, { ...item, quantity: 1 }];
		});
	};

	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const clearCart = () => setCart([]);

	const updateQuantity = (id, quantity) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity: Math.max(1, Number(quantity)) } : item
			)
		);
	};

	return (
		<ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}

export default ShoppingCartContext;
