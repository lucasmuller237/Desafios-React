import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);

    if (itemInCart) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;

