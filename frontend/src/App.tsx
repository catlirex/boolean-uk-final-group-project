import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import useStore from "./store";
import LoginHeader from "./Component/LoginHeader";
import NoLoginHeader from "./Component/noLoginHeader";

function App() {
  const setAirportList = useStore((state) => state.setAirportList);
  const airportList = useStore((state) => state.airportList);
  const loggedInUser = useStore((state) => state.loggedInUser);

  useEffect(() => {
    setAirportList();
  }, []);
  console.log(airportList);

  return (
    <div className="App">
      {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
      <Switch>
        <Route>
          <h3>Error 404 - mock mock</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
