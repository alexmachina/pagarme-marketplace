import { ADD_PRODUCT_TO_CART } from "../actionNames";

const addProductToCart = product => ({ type: ADD_PRODUCT_TO_CART, product });

export default addProductToCart;
