import React, { createContext, useState } from "react";

const userId = localStorage.getItem("userId");

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [alreadyExists, setAlreadyExists] = useState({
    yes: false,
    no: false,
  });

  //

  const getUser = async (userId) => {
    console.log(userId);
    try {
      let response = await fetch(
        `https://fraazonem201.herokuapp.com/users/${userId}`
      );
      let data = await response.json();
      // console.log(data);
      setUserData(data);
    } catch (err) {
      console.log("e");
    }
  };

  const createUser = async (formData) => {
    try {
      let response = await fetch(`https://fraazonem201.herokuapp.com/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      let data = await response.json();
      // console.log(data);
      localStorage.setItem("userId", JSON.stringify(data._id));
      setUserData(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (formData) => {
    try {
      let response = await fetch(
        `https://fraazonem201.herokuapp.com/users/${userId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      // eslint-disable-next-line
      let data = await response.json();
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    userData,
    updateUser,
    createUser,
    getUser,
    alreadyExists,
    setAlreadyExists,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
