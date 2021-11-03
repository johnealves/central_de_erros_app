import React from "react";
import Button from "@material-ui/core/Button"
import { FormControl, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";

import axiosApi from "../axiosApi";

import "../Css/login.css";

const Login = () => {
  const handleLogin = () => {
    const email = "johnealves@gmail.com"
    const password = "123456"
    console.log("login")
    axiosApi.get("/user/3")
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
    axiosApi.post("/oauth/token", {
      headers: {
        "Content-type": "application/x-wwww-form-urlencoded;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: `grant_type=password&username=${email}&password=${password}`+
        `client_id=admin&client_secret=admin`
    }).then(resp => console.log(resp)).catch(err => console.log(err))
  }

  return (
    <FormControl component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
      <TextField
        id="outlined-basic"
        name="userEmail"
        label="Email"
        type="email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        name="userPassword"
        label="Senha"
        type="password"
        variant="outlined"
      />
      <Button style={{ backgroundColor: "#ed1940", }} variant="contained" onClick={ handleLogin }>
        Entrar
      </Button>
    </FormControl>
  )
}

export default Login;
