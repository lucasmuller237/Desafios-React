import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={handleDecrease} className="btn-decrease" disabled={count <= 1}>
          -
        </button>
        <span className="count">{count}</span>
        <button onClick={handleIncrease} className="btn-increase" disabled={count >= stock}>
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className="btn-add-to-cart" disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
      {stock === 0 && <p className="out-of-stock">Sem estoque disponível</p>}
    </div>
  );
}

export default ItemCount;
