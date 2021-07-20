import styles from "./Item.module.css";

function Item(props) {
    const classes = styles.item + " " + props.className;

    return (
        <div className={classes}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>Rs.{props.price}</div>
        </div>
    );
}

export default Item;
