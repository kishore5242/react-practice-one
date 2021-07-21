import useInput from "../hooks/use-input";
import "./UserForm.css"

const UserForm = () => {
  const {
    value: usernameEntered,
    isValid: usernameIsValid,
    valueChange: usernameValueChange,
    reset: usernameReset,
    touch: usernameTouch,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailEntered,
    isValid: emailIsValid,
    valueChange: emailValueChange,
    reset: emailReset,
    touch: emailTouch,
  } = useInput((value) => value.includes("@"));

  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    if (usernameIsValid && emailIsValid) {
      console.log("User added!");
      usernameReset();
      emailReset();
    }
  };

  return (
    <form onSubmit={addUserSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={usernameValueChange}
          value={usernameEntered}
          onBlur={usernameTouch}
          className={usernameIsValid ? '' : 'invalid'}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={emailValueChange}
          value={emailEntered}
          onBlur={emailTouch}
          className={emailIsValid ? '' : 'invalid'}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
