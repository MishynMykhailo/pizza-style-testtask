// import s from "./App.modules.css";
import { Routes, Route } from "react-router-dom";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getItemsValueState } from "../../redux/cart/cart-selectors";
import * as actions from "../../redux/cart/cart-actions";
import pizzaList from "../../helpers/pizzaList";

function App() {
  let carts = useSelector(getItemsValueState);

  const dispatch = useDispatch();
  const addCart = ({ id, title, image, description, price }) => {
    const normalizedName = title.toLowerCase();
    const checkCart = carts.find(
      ({ title }) => title.toLowerCase() === normalizedName
    );
    if (checkCart) {
      dispatch(actions.updateStateIncrement({ id }));
    } else {
      dispatch(
        actions.addCart({ id, title, quantity: 1, image, description, price })
      );
    }
  };
  const deleteCart = ({ id, title }) => {
    const normalizedName = title.toLowerCase();
    const checkCart = carts.find(
      ({ title }) => title.toLowerCase() === normalizedName
    );

    if (checkCart) {
      dispatch(actions.updateStateDecrement({ id }));
      if (checkCart.quantity === 1 || checkCart.quantity < 1) {
        dispatch(actions.deleteCart({ id }));
      }
    }
  };
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                pizzaList={pizzaList}
                cartsList={carts}
                onAddCart={addCart}
                onDeleteCart={deleteCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartsList={carts}
                onAddCart={addCart}
                onDeleteCart={deleteCart}
              />
            }
          />
          <Route path="*" element={<h1>not Found :C</h1>} />
        </Routes>

        <Footer />
      </Container>
    </>
  );
}

export default App;
