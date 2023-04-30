import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addCart = createAction(
  "cart/addCart",
  ({ id, title, quantity, image, description, price }) => ({
    payload: { id, title, quantity, image, description, price },
  })
);
export const deleteCart = createAction("cart/deleteContact");
export const resetCart = createAction("cart/resetCart");
export const updateStateIncrement = createAction("cart/updateStateIncrement");
export const updateStateDecrement = createAction("cart/updateStateDecrement");
