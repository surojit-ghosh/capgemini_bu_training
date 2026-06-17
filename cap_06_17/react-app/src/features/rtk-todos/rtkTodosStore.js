import { configureStore } from "@reduxjs/toolkit";
import rtkTodosReducer from "./rtkTodosSlice";

const rtkTodosStore = configureStore({
  reducer: { todo: rtkTodosReducer },
});

export default rtkTodosStore;
