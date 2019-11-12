import { ADD_PRODUCT } from "../actions/types";
import { PRODUCTS } from "../../mock/product.mock";

const INITIAL_STATE = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.id === "u1")
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
};
