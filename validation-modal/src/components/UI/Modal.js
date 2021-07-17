import styles from "./Modal.module.css";

function Modal(props) {

    const modalCancelHandler = (event) => {
        props.onModalCancel();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                Invalid input
            </div>
            <div className={styles.body}>
                {props.message}
            </div>
            <div className={styles.footer}>
                <input type="button" value="OK" onClick={modalCancelHandler}/>
            </div>
        </div>
    );
}
export default Modal;