import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import useStore from "./store";
import LoginHeader from "./Component/LoginHeader";
import ModalContainer from "./modals/ModalContainer";
import NoLoginHeader from "./Component/noLoginHeader";

function App() {
  const airportList = useStore((state) => state.airportList);
  const setAirportList = useStore((state) => state.setAirportList);
  const loggedInUser = useStore((state) => state.loggedInUser);

  useEffect(() => {
    setAirportList();
  }, []);
  console.log(airportList);

  return (
    <div className="App">
      {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
      <Switch></Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
