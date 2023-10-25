import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UserList";
import Header from "./Components/Header/Header";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (
    userName,
    userSurname,
    userClass,
    degreeMath,
    degreeEnglish,
    degreeHistory,
    degreeGeography,
    average
  ) => {
    setUserList((prevUserData) => {
      return [
        ...prevUserData,
        {
          name: userName.toUpperCase(),
          surname: userSurname.toUpperCase(),
          class: userClass,
          math: degreeMath,
          english: degreeEnglish,
          history: degreeHistory,
          geography: degreeGeography,
          average: average,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <Header />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
