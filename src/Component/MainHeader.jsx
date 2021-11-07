import React from "react";
import logocit from "../assets/logo-CIT.png";
import miniLogoCode from "../assets/mini-logo-code.png";
import { Link } from "@material-ui/core";
import "../Css/mainHeaderContainer.css";

const MainHeader = () => {
  return(
    <cardHeaderClasses className="main-header-container">
      <img src={ logocit } alt={ "logo-empresa" } />
      <nav>
        <Link
          underline="hover"
          href="/"
          target="_blank">
          CI&T
        </Link>
        <Link
          underline="hover"
          href="https://codenatio.dev"
          target="_blank"
        >
          Codenation
        </Link>
        <Link
          underline="hover"
          href="https://www.betrybe.com/"
          target="_blank"
        >
          Trybe
        </Link>
      </nav>
      <img src={ miniLogoCode } alt={ "logo-empresa" } />
    </cardHeaderClasses>
  )
}

export default MainHeader;