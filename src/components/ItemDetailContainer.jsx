import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const mockItem = {
  id: 1,
  title: "Processador Intel Core i7",
  description: "Processador de alto desempenho para PCs gamers.",
  price: 1500,
  pictureUrl: "https://example.com/i7.png",
};

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItem);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhes do produto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
