import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCartIcon className="cart-icon" />
      <span className="cart-count">3</span> {}
    </div>
  );
};

export default CartWidget;
