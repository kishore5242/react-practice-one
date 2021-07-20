import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import ItemRow from "./ItemRow";

function ItemList(props) {

    const cartCtx = useContext(CartContext);

    const onAddHandler = (item, quantity) => {
        console.log("added an item to cart");
        cartCtx.setCartEmpty(false);
    }

    return (
        <Fragment>
            {props.items.map(item => 
                <ItemRow key={item.name} item={item} onAdd={onAddHandler}/>
            )}
        </Fragment>
    );
}

export default ItemList;