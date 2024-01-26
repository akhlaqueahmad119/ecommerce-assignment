import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import products from "./slice/products";
import cart from "./slice/cart";
import auth from "./slice/auth";

const rootReducer = combineReducers({
  ProductPageReducer: products,
  CartPageReducer: cart,
  AuthReducer: auth
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
