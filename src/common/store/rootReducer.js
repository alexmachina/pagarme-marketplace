import { combineReducers } from "redux";
import cart from "common/store/cart/reducer";
import products from "common/store/products/reducer";

const rootReducer = combineReducers({
  cart,
  products
});

export default rootReducer;
