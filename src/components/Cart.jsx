import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  if (cartItems.length === 0) {
    return <p>O carrinho está vazio</p>;
  }

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.pictureUrl} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price}</p>
            <p>Total: R$ {item.price * item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
