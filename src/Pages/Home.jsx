import React from "react";
import Login from "../Component/Login";
import "../Css/home.css";

const Home = () => {
  return(
    <div className="home-container">
      <h1>Bem-vindo a central de erros Codenation</h1>
      <Login />
    </div>
  )
}

export default Home;
