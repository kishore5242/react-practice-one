import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Overlay(props) {

    const modalCancelHandler = (event) => {
        props.onCancel();
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

function Backdrop() {
    return <div className={styles.backdrop}></div>;
}


function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Overlay message={props.message} onCancel={props.onModalCancel}/>, 
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                <Backdrop/>, 
                document.getElementById('backdrop-root')
            )}
        </Fragment>
    );
}
export default Modal;