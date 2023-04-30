import React from "react";
import ProductList from "../../components/ProductList/ProductList";

function Home({ pizzaList, cartsList, onAddCart, onDeleteCart }) {
  return (
    <ProductList
      pizzaList={pizzaList}
      allCartsList={cartsList}
      onAddCart={onAddCart}
      onDeleteCart={onDeleteCart}
    />
  );
}

export default Home;
