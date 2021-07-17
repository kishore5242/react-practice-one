import styles from "./UserInfo.module.css";

function UserInfo(props) {
    return (
        <div className={styles['user-info']}>
            <span>{props.username}</span><span>&nbsp;({props.age} years old)</span>
        </div>
    );
}
export default UserInfo;