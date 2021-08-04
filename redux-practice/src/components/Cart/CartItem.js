import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Card from "../UI/Card";
import styles from "./CartItem.module.css";

function CartItem(props) {
  const dispatch = useDispatch();

  const addItemHandler = (event) => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  const removeItemHandler = (event) => {
    dispatch(cartActions.removeItemFromCart(props.item));
  };

  return (
    <Card className={styles["cart-item"]}>
      <div className={styles["cart-item-left"]}>
        <h4>{props.item.name}</h4>
        <div>Rs.{props.item.price}</div>
        <div>{props.item.quantity}</div>
      </div>
      <div className={styles["cart-item-right"]}>
        <input type="button" onClick={addItemHandler} value="+" />
        <input type="button" onClick={removeItemHandler} value="-" />
      </div>
    </Card>
  );
}

export default CartItem;
