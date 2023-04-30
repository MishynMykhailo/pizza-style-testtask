import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducers } from "./cart/cart-reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const persistedReducer = persistReducer(persistConfig, cartReducers);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware,
});
export default store;
export const persistor = persistStore(store);
