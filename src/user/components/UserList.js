import UserItem from "./UserItem";
import "./UserList.css";
const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Users </h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.place}
        />
      ))}
    </ul>
  );
};
export default UserList;
