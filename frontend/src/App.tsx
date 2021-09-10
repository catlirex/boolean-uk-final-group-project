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

import DepartureStaff from "./Component/DepartureStaff";
import { FormatListNumberedRtl } from "@material-ui/icons";

import OnlineCheckInPage from "./Page/OnlineCheckInPage";


function App() {
  const airportList = useStore((state) => state.airportList);
  const setAirportList = useStore((state) => state.setAirportList);
  const loggedInUser = useStore((state) => state.loggedInUser);

  // const id = passengersFlightList?.find( )

  useEffect(() => {
    setAirportList();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/staffpage" exact>
          <StaffHomePage />
        </Route>

        <Route path="/" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <SearchBarComponent />
        </Route>

        <Route path="/flightStatus" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <FlightStatusPage />
        </Route>

        <Route path="/myBooking" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <MyBookingPage />
        </Route>

        <Route path="/searchResult" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <SearchResultPage />
        </Route>

        <Route path="/bookingForm" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <BookingFormPage />
        </Route>

        <Route path="/onlineCheckIn/:id">
          {loggedInUser ? <LoginHeader /> : <NoLoginHeader />}
          <OnlineCheckInPage />
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
