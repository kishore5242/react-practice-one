import { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Banner.module.css";
import Button from "./Button";

function Banner() {

    const cartCtx = useContext(CartContext);

    const onCartClickHandler = (event) => {
        console.log('Cart is empty? ' + cartCtx.isCartEmpty());
    }

return (
    <div className={styles.banner}>
        <h2>Reactive Kitchen</h2>
        <Button className={styles.button}
            title="Cart" 
            count="2" 
            onClick={onCartClickHandler}
        />
    </div>
);
}

export default Banner;