import React, { useState } from "react";
import Button from "../UI/Button";
import Item from "./Item";
import styles from "./ItemRow.module.css";

function ItemRow(props) {
    const [quantity, setQuantity] = useState(1);

    const quantityChangeHandler = (event) => {
        setQuantity(event.target.value);
    };

    const addItemHandler = (event) => {
        console.log(props.item.name + " " + quantity);
        props.onAdd(props.item, quantity);
    };

    return (
        <div className={styles["item-row"]}>
            <Item className={styles.item}
                name={props.item.name}
                description={props.item.description}
                price={props.item.price}
            />
            <div className={styles["right-side"]}>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={quantityChangeHandler}
                />
            </div>
            <Button className={styles['add-item-btn']} title="Add" onClick={addItemHandler} />
        </div>
    );
}

export default ItemRow;
