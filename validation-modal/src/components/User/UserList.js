import Card from "../UI/Card";
import UserInfo from "./UserInfo";

function UserList(props) {

    return (
        <Card>
            {props.users.map((user) => (
                <UserInfo key={user.id} username={user.username} age={user.age}></UserInfo>
            ))}
        </Card>
    );
}

export default UserList;
