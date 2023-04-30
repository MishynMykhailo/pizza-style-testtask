import React, { useState } from "react";
import s from "./MobileNavigation.module.css";
import { ReactComponent as HamburgerMenuSVG } from "../../helpers/images/hamburgerMenu.svg";
import { ReactComponent as ClosedHamburgerMenuSVG } from "../../helpers/images/closedHamburgerMenu.svg";
import Navigation from "../Navigation/Navigation";

function MobileNavigation({ allQuantity }) {
  const [hambMenu, setHambMenu] = useState(false);
  return (
    <>
      {!hambMenu ? (
        <HamburgerMenuSVG
          className={s.svg}
          onClick={() => setHambMenu(!hambMenu)}
        />
      ) : (
        <ClosedHamburgerMenuSVG
          className={s.svg}
          onClick={() => setHambMenu(!hambMenu)}
        />
      )}
      {hambMenu && <Navigation allQuantity={allQuantity} />}
    </>
  );
}

export default MobileNavigation;
