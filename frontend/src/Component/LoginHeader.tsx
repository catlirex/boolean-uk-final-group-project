import React from "react";
import styled from "styled-components";
import logo from "../assets/booleanAir_logo.png";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.sharpPick};
  display: grid;
  grid-auto-flow: column;

  .app-logo {
    width: 100px;
  }
  .elio {
    color: ${APP_COLOR.white};
  }
`;

const PinkButton = withStyles(() => ({
  root: {
    height: "40px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    margin: "0",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

export default function LoginHeader() {
  return (
    <StyledHeader>
      <img className="app-logo" src={logo}></img>
      <HomeIcon />
      <h1 className="elio">Hello Cookies Elio Mock mock</h1>
      <PinkButton variant="contained">
        <HomeIcon />
        Home
      </PinkButton>
    </StyledHeader>
  );
}
