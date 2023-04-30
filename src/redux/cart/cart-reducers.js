import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./cart-actions";

const items = createReducer([], (builder) => {
  builder.addCase(actions.resetCart, () => {
    return [];
  });
  builder.addCase(actions.addCart, (state, { payload }) => {
    return [...state, payload];
  });
  builder.addCase(actions.deleteCart, (state, { payload }) => {
    return state.filter(({ id }) => id !== payload.id);
  });
  builder.addCase(actions.updateStateIncrement, (state, { payload }) => {
    return state.map((pizza) => {
      if (pizza.id === payload.id) {
        return {
          ...pizza,
          quantity: pizza.quantity + 1,
        };
      }
      return pizza;
    });
  });
  builder.addCase(actions.updateStateDecrement, (state, { payload }) => {
    return state.map((pizza) => {
      if (pizza.id === payload.id) {
        const id = pizza.id;
        const title = pizza.title;
        const image = pizza.image;
        const description = pizza.description;
        const price = pizza.price;
        const quantity = pizza.quantity - 1;
        return { id, title, quantity, image, description, price };
      }
      return pizza;
    });
  });
});

export const cartReducers = combineReducers({
  items,
});
