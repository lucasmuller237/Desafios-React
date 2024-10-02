import React, { useState } from 'react';
import ItemCount from './ItemCount';
import './Item.css';

function Item({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} className="item-image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price}</p>

      {!addedToCart ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
      ) : (
        <p>Item adicionado ao carrinho!</p>
      )}
    </div>
  );
}

export default Item;


