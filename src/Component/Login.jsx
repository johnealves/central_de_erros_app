import React from "react";
import Button from "@material-ui/core/Button"
import { FormControl, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Link } from "react-router-dom";
import "../Css/login.css";

const Login = () => {
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
      <Button style={{ backgroundColor: "#ed1940", }} variant="contained" >
        Entrar
      </Button>
      <div className="form-text">
        Ainda não é cadastrado? <Link to="/signup">clique aqui</Link>
      </div>
    </FormControl>
  )
}

export default Login;
