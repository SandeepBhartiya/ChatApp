import React, { useState } from "react";
import {  TextField, Button } from "@material-ui/core";
import "./style.css";
const Register = () => {
  const [user, newUser] = useState({
    Name: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
  });
  console.log(user);
  return (
    <>
      <div className="container">
        <form autoComplete="off">
         
          <TextField
            name="Name"
            label="Name"
            variant="outlined"
            value={user.Name}
            onChange={(e) => newUser({ ...user, Name: e.target.value })}
          />
          <TextField
            name="UserName"
            label="UserName"
            variant="outlined"
            value={user.UserName}
            onChange={(e) => newUser({ ...user, UserName: e.target.value })}
          />
          <TextField
            name="Password"
            label="Password"
            type="password"
            variant="outlined"
            value={user.Password}
            onChange={(e) => newUser({ ...user, Password: e.target.value })}
          />
          <TextField
            name="ConfirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={user.ConfirmPassword}
            onChange={(e) =>
              newUser({ ...user, ConfirmPassword: e.target.value })
            }
          />
          <Button variant="contained" type="submit" className="btn">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
