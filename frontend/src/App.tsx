import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import useStore from "./store";
import LoginHeader from "./Component/LoginHeader";
import SearchBarComponent from "./Component/SearchBar/SearchBar";
import ModalContainer from "./modals/ModalContainer";
import NoLoginHeader from "./Component/noLoginHeader";
import FlightStatusPage from "./Page/FlightStatusPage";

import StaffHomePage from "./Page/StaffHomePage";

import MyBookingPage from "./Page/MyBookingPage";
import SearchResultPage from "./Page/SearchResultPage";
import BookingFormPage from "./Page/BookingFormPage";


function App() {
  const airportList = useStore((state) => state.airportList);
  const setAirportList = useStore((state) => state.setAirportList);
  const loggedInUser = useStore((state) => state.loggedInUser);

  useEffect(() => {
    setAirportList();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/staffpage" exact>
          <StaffHomePage />
        </Route>
        {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
        <Route path="/" exact>
          <SearchBarComponent />
        </Route>
        <Route path="/flightStatus" exact>
          <FlightStatusPage />
        </Route>

        <Route path="/myBooking" exact>
          <MyBookingPage />
        </Route>

        <Route path="/searchResult" exact>
          <SearchResultPage />
        </Route>

        <Route path="/bookingForm" exact>
          <BookingFormPage />
        </Route>

        <Route>
          <h3>Error 404 - mock mock</h3>
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
