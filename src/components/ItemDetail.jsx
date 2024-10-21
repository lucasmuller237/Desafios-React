import React from 'react';
import './ItemDetail.css';

function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <img src={item.pictureUrl} alt={item.title} className="item-detail-image" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price}</p>
    </div>
  );
}

export default ItemDetail;