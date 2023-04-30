import React from "react";
import CartList from "../../components/CartList/CartList";

function Cart({ cartsList, onAddCart, onDeleteCart }) {
  return (
    <CartList
      cartsList={cartsList}
      onAddCart={onAddCart}
      onDeleteCart={onDeleteCart}
    />
  );
}

export default Cart;
