import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import ErroCenterContext from "../Context/ErroCenterContext";
import { FormControl, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import users from "../mockrequest/users.json"
import "../Css/login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [redirect, setRedirect] = useState(false)
  const { conected, setConected } = useContext(ErroCenterContext)

  useEffect(() => {
    setRedirect(conected)
  }, [conected])


  const handleLoginData = ({ target: { name, value } }) => {
    setLoginData({ 
      ...loginData,
      [`${name}`]: value }
    )
  }

  const verifyLogin = (email, password) => {
    let authorized = false;
    users.forEach((user) => {
      if (email === user.email && password === user.password) {
        authorized = true;
      }
    })

    return authorized
  }

  const getToken = async () => {
    const { email, password } = loginData;
    if (email === "" || password === "") {
      alert("Preencha email e senha para se conectar")
      return null;
    }
    const authorized = verifyLogin(email, password)
    if (authorized) {
      setConected(true)
    } else {
      alert("Email ou senha incorreto!")
    }
  };

  if (redirect) {
   return <Redirect to="dashboard"/>
  }
  
  return (
    <FormControl component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
      <TextField
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        onInput={ handleLoginData }
      />
      <TextField
        name="password"
        label="Senha"
        type="password"
        variant="outlined"
        onInput={ handleLoginData }
      />
      <Button style={{ backgroundColor: "#ed1940", }} variant="contained" onClick={ getToken }>
        Entrar
      </Button>
    </FormControl>
  )
}

export default Login;
