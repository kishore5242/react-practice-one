import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Card from "../UI/Card";
import styles from "./CatalogItem.module.css";

function CatalogItem(props) {

  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    dispatch(cartActions.addItemToCart(props.item));
  }

  return (
    <Card>
      <div className={styles["catalog-item"]}>
        <div className={styles["catalog-item-left"]}>
          <div>{props.item.name}</div>
          <div>{props.item.description}</div>
          <div>{props.item.price}</div>
        </div>
        <div className={styles["catalog-item-right"]}>
          <input type="button" value="Add to Cart" onClick={addToCartHandler}/>
        </div>
      </div>
    </Card>
  );
}
export default CatalogItem;
