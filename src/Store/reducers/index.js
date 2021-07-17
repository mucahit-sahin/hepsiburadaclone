import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import productsReducer from "./ProductsReducer";

export default combineReducers({
  products: productsReducer,
  categories: categoryReducer,
});
