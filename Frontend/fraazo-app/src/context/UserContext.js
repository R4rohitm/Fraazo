import React, { createContext, useState } from "react";

const UserContext = createContext();
const userId = JSON.parse(localStorage.getItem("userId"));

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [alreadyExists, setAlreadyExists] = useState({
    yes: false,
    no: false,
  });
  //
  const createUser = async (formData) => {
    try {
      let response = await fetch(`http://localhost:8080/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      let data = await response.json();
      console.log(data);
      localStorage.setItem("userId", JSON.stringify(data._id));
      setUserData(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (userId) => {
    try {
      let response = await fetch(`http://localhost:8080/users/${userId}`);
      let data = await response.json();
      setUserData(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (formData) => {
    try {
      let response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    createUser,
    getUser,
    updateUser,
    alreadyExists,
    setAlreadyExists,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
