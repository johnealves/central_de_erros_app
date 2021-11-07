import React from "react";
import Login from "../Component/Login";
import logocit from "../assets/logo-CIT.png";
import logocode from "../assets/logocode.png";
import logotrybe from "../assets/logotrybe.png";
import "../Css/home.css";

const Home = () => {
  return(
    <div className="home-container">
      <div className="form-login-container">
        <div>
          <h1>Central de erros</h1>
          <Login />
        </div>
        <div>
          <img src={ logocit } alt={ "logo-empresa" } />
          <img src={ logocode } alt={ "logo-empresa" }/>
          <img src={ logotrybe } alt={ "logo-empresa" }/>
        </div>
      </div>
    </div>
  )
}

export default Home;
