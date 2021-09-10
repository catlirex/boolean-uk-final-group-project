import React, { useState } from "react";
import useStore from "../store";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { APP_COLOR } from "../consistent";

const SharpPinkButton = withStyles(() => ({
  root: {
    height: "50px",
    width: "80px",
    fontSize: "0.8rem",
    marginRight: "20px",
    marginTop: "20px",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.sharpPick,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.pink,
    },
  },
}))(Button);

const GrayButton = withStyles(() => ({
  root: {
    height: "50px",
    width: "80px",
    fontSize: "0.8rem",
    marginRight: "20px",
    marginTop: "20px",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.grey,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.pink,
    },
  },
}))(Button);

export default function ConfirmRemoveAccount() {
  const setModal = useStore((state) => state.setModal);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const logOut = useStore((state) => state.logOut);
  const handleDelete = () => {
    fetch(`http://localhost:3000/users/${loggedInUser?.id}`, {
      method: "delete",
    }).then((response) => {
      if (response.ok) logOut();
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h4">
        Reminder:
      </Typography>
      <Typography component="h1" variant="h6">
        All future tickets will also canceled without refund. All transaction
        record will deleted.
      </Typography>
      <Typography component="h1" variant="h5">
        Confirm to delete account?
      </Typography>

      <GrayButton onClick={() => setModal("")}>Cancel</GrayButton>
      <SharpPinkButton onClick={() => handleDelete()}>
        Delete Account
      </SharpPinkButton>
    </Container>
  );
}
