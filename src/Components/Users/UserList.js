import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  const average = (
    userHistoryDegree,
    userEnglishDegree,
    userMathDegree,
    userGeographyDegree
  ) => {
    const sum =
      +userHistoryDegree +
      +userEnglishDegree +
      +userMathDegree +
      +userGeographyDegree;
    const averageResult = sum / 4;
    return averageResult;
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname} Class: {user.class} <h4>Degree:</h4>
            <div className="degree">
              <p>Math: {user.math},</p> <p>English: {user.english},</p>
              <p>History: {user.history},</p> <p>Geography: {user.geography}</p>
              <h4 className="average">
                Average:{" "}
                {average(user.math, user.english, user.history, user.geography)}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
