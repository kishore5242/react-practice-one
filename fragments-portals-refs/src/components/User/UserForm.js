import { useState, useRef } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import styles from "./UserForm.module.css";

function UserForm(props) {

    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState(1);

    const [invalidInput, setInvalidInput] = useState(false);

    const usernameRef = useRef();

    const usernameChangeHandler = (event) => {
        setUsernameInput(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAgeInput(event.target.value);
    }

    const userFormSubmitHandler = (event) => {
        event.preventDefault();

        if(usernameInput.trim().length === 0) {
            setInvalidInput(true);
            return;
        } else {
            setInvalidInput(false);
        }

        props.onAddUser({id: Math.random(), username: usernameInput, age: ageInput});
    }

    const modalCancelHandler = () => {
        usernameRef.current.focus();
        setInvalidInput(false);
    }

    return (
        <Card>
            <form onSubmit={userFormSubmitHandler}>
                <div className={styles['form-control']}>
                    <label>Username</label>
                    <input type="text" value={usernameInput} onChange={usernameChangeHandler} ref={usernameRef}/>
                </div>
                <div className={styles['form-control']}>
                    <label>Age (years)</label>
                    <input type="number" min="1" max="150" step="1" value={ageInput} onChange={ageChangeHandler}/>
                </div>
                <button type="submit">Add User</button>
            </form>
            {invalidInput && <Modal message="some message" onModalCancel={modalCancelHandler}/>}
        </Card>
    );
}

export default UserForm;
