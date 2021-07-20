import styles from "./Button.module.css";

function Button(props) {

const classes = props.className + ' ' + styles.button;

    return (
        <div className={classes} onClick={props.onClick}>
            <span className={styles.title}>{props.title}</span>
            {props.count > 0 ?
                <span className={styles.count}>({props.count})</span>
            :
                ''
            }
        </div>
    );
}

export default Button;
