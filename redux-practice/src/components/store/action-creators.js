import axios from "axios";
import { cartActions } from "./cart-slice";

export const saveCart = (cart) => {
  return (dispatch) => {
    axios
      .put("https://react-2a5cc-default-rtdb.firebaseio.com/cart.json", cart)
      .then((result) => {
        console.log(result);
      });
    console.log("Sent request to save cart");
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://react-2a5cc-default-rtdb.firebaseio.com/cart.json"
    );
    console.log("loading cart data");

    const cart = {
      items: response.data.items ? response.data.items : [],
      totalQuantity: response.data.totalQuantity
        ? response.data.totalQuantity
        : 0,
    };

    console.log(cart);

    dispatch(cartActions.loadCart(cart));
  };
};
