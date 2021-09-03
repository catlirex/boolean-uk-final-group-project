import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import useStore from "./store";
import LoginHeader from "./Component/LoginHeader";
import ModalContainer from "./modals/ModalContainer";

function App() {
  const airportList = useStore((state) => state.airportList);
  const setAirportList = useStore((state) => state.setAirportList);

  useEffect(() => {
    setAirportList();
  }, []);
  console.log(airportList);

  return (
    <div className="App">
      <LoginHeader />
      <Switch>
        <Route>
          <h3>Error 404 - mock mock</h3>
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
