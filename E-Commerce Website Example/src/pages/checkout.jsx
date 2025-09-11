import React from 'react';
import '../css/checkout.css';
import { useShoppingCart } from '../contexts/useShoppingCart';

function Checkout() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useShoppingCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="checkout-table">
            <thead>
              <tr>
                <th className="checkout-th item">Item</th>
                <th className="checkout-th price">Price</th>
                <th className="checkout-th quantity">Quantity</th>
                <th className="checkout-th remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="checkout-td item">{item.title}</td>
                  <td className="checkout-td price">{item.price} USD</td>
                  <td className="checkout-td quantity">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={item.quantity}
                      onChange={e => {
                        let val = e.target.value.replace(/[^\d]/g, '');
                        if (val === '' || val === '0') return;
                        updateQuantity(item.id, val);
                      }}
                      className="cart-quantity-input"
                      style={{ width: '3em', textAlign: 'center' }}
                    />
                  </td>
                  <td className="checkout-td remove">
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-total">
            <strong>Total: {total.toFixed(2)} USD</strong>
          </div>
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
