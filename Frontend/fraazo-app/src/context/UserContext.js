import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
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
      setUserData(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export { UserContext, UserProvider };
