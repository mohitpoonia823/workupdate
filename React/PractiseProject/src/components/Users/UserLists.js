import React from "react";
import Card from "../UI/Card";
import classes from "./UsersLists.module.css";
function UserLists(props) {
  return (
    <Card cssclass={classes.users}>
      <ul>
        {props.usersData.map((userdata) => (
          <li key={userdata.id}>
            {userdata.name} ({userdata.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserLists;
