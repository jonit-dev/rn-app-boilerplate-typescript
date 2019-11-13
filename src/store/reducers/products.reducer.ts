import { PRODUCTS } from '../../mock/product.mock';
import { ADD_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.id === "u1")
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state;
    default:
      return state;
  }
};
