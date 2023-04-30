import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as CartSVG } from "../../helpers/images/cart.svg";
import Cart from "../../pages/Cart/Cart";

function Navigation({ allQuantity }) {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.relativeBlock}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
        </div>
        <div className={s.relativeBlock}>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <div className={s.cartCount}>
              <CartSVG className={s.cartSVG} />
              {<p className={s.cartCount__count}>{allQuantity}</p>}
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
