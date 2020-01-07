import { ADD_PRODUCT_TO_CART } from "./actionNames";

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const nextProducts = [...state.products, action.product];
      return Object.assign({}, state, { products: nextProducts });

    default:
      return state;
  }
};

export default reducer;
