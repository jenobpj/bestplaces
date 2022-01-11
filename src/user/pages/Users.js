import React from "react";
import UserList from "../components/UserList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "jenob",
      image:
        "https://images.pexels.com/photos/9693635/pexels-photo-9693635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];
  return <UserList />;
};
export default Users;
