import React, { Fragment, useState } from "react";
import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

const INIT_USERS = [
  { id: Math.random(), username: "kishore", age: 29 },
  { id: Math.random(), username: "harish", age: 31 },
  { id: Math.random(), username: "sandhya", age: 29 },
];

function App() {

    const [users, setUsers] = useState(INIT_USERS);

    const onAddUserHandler = (user) => {
      setUsers(previousUsers => [user, ...previousUsers]);
    }

    return (
        <Fragment>
          <div className="app">
          <UserForm onAddUser={onAddUserHandler}/>
            <UserList users={users}/>
          </div>
        </Fragment>
    );
}

export default App;
