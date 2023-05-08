import React from "react";
import s from "./ProductList.module.css";

function ProductList({ pizzaList, allCartsList, onAddCart, onDeleteCart }) {
  return (
    <section className={s.section}>
      <div className={s.div}>
        <h1 className={s.h1}>Pizza</h1>
        <ul className={s.ul}>
          {pizzaList &&
            pizzaList.map(({ id, title, description, price, image }) => {
              const cartItem =
                allCartsList && allCartsList.length > 0
                  ? allCartsList.find(({ id: pizzId }) => pizzId === id)
                  : null;
              return (
                <li className={s.li} key={id}>
                  <img
                    className={s.img}
                    src={image}
                    alt={title}
                    loading="lazy"
                  />
                  <div className={s.descrBlock}>
                    <p className={s.title}>{title}</p>
                    <p className={s.description}>{description}</p>
                  </div>
                  <p className={s.price}>{price} | UAH</p>

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
                      onClick={() =>
                        onAddCart({ id, title, image, description, price })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default ProductList;
