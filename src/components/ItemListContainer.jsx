import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const mockProducts = [
  {
    id: 1,
    title: "Processador Intel Core i7",
    description: "Processador de alto desempenho para PCs gamers.",
    price: 1500,
    pictureUrl: "https://example.com/i7.png",
    stock: 10,
  },
  {
    id: 2,
    title: "Placa de Vídeo NVIDIA RTX 3080",
    description: "Placa de vídeo poderosa para jogos e renderização.",
    price: 5000,
    pictureUrl: "https://example.com/rtx3080.png",
    stock: 5,
  },
  {
    id: 3,
    title: "Memória RAM 16GB DDR4",
    description: "Memória rápida e eficiente para multitarefa.",
    price: 400,
    pictureUrl: "https://example.com/ram16gb.png",
    stock: 20,
  }
];

const ItemListContainer = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });

    fetchItems.then((products) => {
      setItems(products);
    });
  }, []);

  return (
    <div className="item-list-container">
      <h2>Bem-vindo à loja de peças de PC</h2>
      {items.length > 0 ? <ItemList items={items} addToCart={addToCart} /> : <p>Carregando produtos...</p>}
    </div>
  );
};

export default ItemListContainer;

