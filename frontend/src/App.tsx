import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import useStore from "./store";

function App() {
  const setAirportList = useStore((state) => state.setAirportList);
  const airportList = useStore((state) => state.airportList);

  useEffect(() => {
    setAirportList();
  }, []);
  console.log(airportList);

  return (
    <div className="App">
      <Switch>
        <Route>
          <h3>Error 404 - mock mock</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
