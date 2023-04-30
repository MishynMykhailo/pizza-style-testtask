import React, { useEffect, useState } from "react";
import s from "./CartList.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/cart/cart-actions";
function CartList({ cartsList, onAddCart, onDeleteCart }) {
  const dispath = useDispatch();
  const [allOrderSum, setAllOrderSum] = useState(0);
  useEffect(() => {
    const result = cartsList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setAllOrderSum(result);
  }, [cartsList]);
  const clearList = () => {
    dispath(actions.resetCart());
  };
  return (
    <section className={s.section}>
      <div className={s.div}>
        <h1 className={s.h1}>Order: {allOrderSum} | UAH</h1>

        <ul className={s.ul}>
          {cartsList && cartsList.length > 0 ? (
            cartsList.map(
              ({ id, title, description, quantity, price, image }) => {
                const cartItem = cartsList.find(
                  ({ id: cartId }) => cartId === id
                );
                return (
                  <li className={s.li} key={id}>
                    <img className={s.img} src={image} alt={title} />
                    <div className={s.descrBlock}>
                      <p className={s.title}>{title}</p>
                      <p className={s.description}>{description}</p>
                    </div>

                    <div className={s.orderBlock}>
                      <p className={s.price}>{price * quantity} | UAH</p>
                      <p className={s.quantity}>{quantity} | quantity</p>

                      <div className={s.btnBlock}>
                        {cartItem && cartItem.quantity > 0 && (
                          <button
                            className={s.btnMinus}
                            onClick={() => onDeleteCart({ id, title })}
                          >
                            Remove from cart
                          </button>
                        )}
                        <button
                          className={s.btn}
                          onClick={() => onAddCart({ id, title })}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </li>
                );
              }
            )
          ) : (
            <h2 className={s.pizzaError}>
              Please, choose pizza{" "}
              <span>
                <Link to="/">Here (click me)</Link>
              </span>
            </h2>
          )}
        </ul>
        <button className={s.clearList} onClick={clearList}>
          Clear List
        </button>
      </div>
    </section>
  );
}

export default CartList;
