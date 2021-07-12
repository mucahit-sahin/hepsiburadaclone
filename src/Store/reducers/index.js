import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";

export default combineReducers({ products: productsReducer });
