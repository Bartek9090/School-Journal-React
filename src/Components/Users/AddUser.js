import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [userSurnameInput, setUserSurenameInput] = useState("");
  const [userClassInput, setUserClassInput] = useState("");
  const [userMathDegree, setUserMathDegree] = useState("");
  const [userEnglishDegree, setUserEnglishDegree] = useState("");
  const [userHistoryDegree, setUserHistoryDegree] = useState("");
  const [userGeographyDegree, setUserGeographyDegree] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userNameInput.trim().length === 0 ||
      userSurnameInput.trim().length === 0 ||
      userClassInput === "" ||
      0 > +userMathDegree ||
      +userMathDegree > 6 ||
      0 > +userEnglishDegree ||
      +userEnglishDegree > 6 ||
      0 > +userHistoryDegree ||
      +userHistoryDegree > 6 ||
      0 > +userGeographyDegree ||
      +userGeographyDegree > 6
    ) {
      setError({
        title: "Invalid input",
        message: "Come on bro, you entered an invalid value.",
      });
      return false;
    }

    props.onAddUser(
      userNameInput,
      userSurnameInput,
      userClassInput,
      userMathDegree,
      userEnglishDegree,
      userHistoryDegree,
      userGeographyDegree
    );
    setUserNameInput("");
    setUserSurenameInput("");
    setUserClassInput("");
    setUserMathDegree("");
    setUserEnglishDegree("");
    setUserHistoryDegree("");
    setUserGeographyDegree("");
  };

  const nameChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };
  const surnameChangeHandler = (event) => {
    setUserSurenameInput(event.target.value);
  };
  const classChangeHandler = (event) => {
    setUserClassInput(event.target.value);
  };
  const mathDegreeHandler = (event) => {
    setUserMathDegree(event.target.value);
  };
  const englishDegreeHandler = (event) => {
    setUserEnglishDegree(event.target.value);
  };
  const historyDegreeHandler = (event) => {
    setUserHistoryDegree(event.target.value);
  };
  const geographyDegreeHandler = (event) => {
    setUserGeographyDegree(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={nameChangeHandler}
            value={userNameInput}
            id="username"
            type="text"
          />
          <label htmlFor="surname">Surname</label>
          <input
            onChange={surnameChangeHandler}
            value={userSurnameInput}
            id="surname"
            type="text"
          />
          <label htmlFor="classSelect">Choose a class</label>
          <select
            onChange={classChangeHandler}
            value={userClassInput}
            id="classSelect"
          >
            <option defaultValue="ClassOption">Class options</option>
            <option value="5a">5a</option>
            <option value="6a">6a</option>
            <option value="7a">7a</option>
            <option value="8a">8a</option>
            <option value="5b">5b</option>
            <option value="6b">6b</option>
            <option value="7b">7b</option>
            <option value="8b">8b</option>
          </select>
          <label htmlFor="math">Math: </label>
          <input
            onChange={mathDegreeHandler}
            value={userMathDegree}
            id="math"
            type="number"
          />
          <label htmlFor="english">English: </label>
          <input
            onChange={englishDegreeHandler}
            value={userEnglishDegree}
            id="english"
            type="number"
          ></input>
          <label htmlFor="history">History: </label>
          <input
            onChange={historyDegreeHandler}
            value={userHistoryDegree}
            id="history"
            type="number"
          ></input>
          <label htmlFor="geography">Geography: </label>
          <input
            onChange={geographyDegreeHandler}
            value={userGeographyDegree}
            id="geography"
            type="number"
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
