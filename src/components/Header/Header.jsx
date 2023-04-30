import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getItemsValueState } from "../../redux/cart/cart-selectors";
import { ReactComponent as Logo } from "../../helpers/images/pizza.svg";

import s from "./Header.module.css";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [allQuantity, setAllQuantity] = useState(0);
  const carts = useSelector(getItemsValueState);
  useEffect(() => {
    const newQuantity = carts.reduce((total, item) => total + item.quantity, 0);
    setAllQuantity(newQuantity);
  }, [carts]);
  return (
    <section className={s.section}>
      <header className={s.header}>
        <div className={s.logoCont}>
          <Logo className={s.img} />
          <h2 className={s.h2}>PizzaStyle</h2>
        </div>
        <nav className={s.mobileNav}>
          <MobileNavigation allQuantity={allQuantity} />
        </nav>
        <nav className={s.desktopNav}>
          <Navigation allQuantity={allQuantity} />
        </nav>
      </header>
    </section>
  );
}

export default Header;
