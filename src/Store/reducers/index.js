import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import categoryReducer from "./CategoryReducer";
import productsReducer from "./ProductsReducer";

export default combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
