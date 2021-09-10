import React, { SyntheticEvent, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/booleanAir_logo.png";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useStore from "../store";
import { Link, useHistory } from "react-router-dom";
import AirportList from "../Component/AirportList";
import DepartureStaff from "../Component/DepartureStaff";
import ArrivalStaff from "../Component/ArrivalStaff";
import PassengersFlight from "../Component/PassengersFlight";
import CheckinCounter from "../Component/CheckinCounter";
import OnboardCounter from "../Component/OnboardCounter";
import { isFunctionLike } from "typescript";

const StyledPage = styled.div`
  display: grid;
  grid-template:
    "header header" 100px
    "nav main" 1fr /
    200px 1fr;

  height: 100vh;
  width: 100vw;
`;

const StyledNav = styled.nav`
  grid-area: nav;
  border: solid 1px ${APP_COLOR.pink};
  margin: 10px;
  .buttonGroup {
    display: grid;
    grid-template-rows: auto;
    height: 60vh;
    margin: 10px;
  }
  .navList {
    border-radius: 15px;
  }
`;

const StyledWelcome = styled.h3`
  font-family: arial;
  font-size: 20px;
  color: ${APP_COLOR.pink};
  align-item: center;
`;

const StyledList = styled.li`
  margin: 10px;
`;

const StyledMain = styled.main`
  grid-area: main;
  border: solid 1px ${APP_COLOR.pink};
  margin: 10px;
`;

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.pink};
  grid-area: header;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 150px;
  place-items: center;

  .app-logo {
    height: 100px;
  }

  //   @media only screen and (max-width: 650px) {
  //     grid-template-columns: inherit;
  //     grid-auto-flow: column;
  //     place-content: space-between;
  //     nav {
  //       display: none;
  //     }
  //   }
`;

const NavButton = withStyles(() => ({
  root: {
    height: "100px",

    margin: "0",
    color: APP_COLOR.pink,
    "&:hover": {
      color: APP_COLOR.grey,
    },
  },
}))(Button);

export const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    WebkitBorderRadius: "10px",
    margin: "0",
    marginLeft: "5px",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

export default function StaffHomePage() {
  const chooseAirport = useStore((state) => state.chooseAirport);
  const setChooseAirport = useStore((state) => state.setChooseAirport);
  let departureFlightList = useStore((state) => state.departureFlightList);
  const setDepartureFlightList = useStore(
    (state) => state.setDepartureFlightList
  );
  let staffFunction = useStore((state) => state.staffFunction);
  const setStaffFunction = useStore((state) => state.setStaffFunction);
  const logOut = useStore((state) => state.logOut);

  return (
    <StyledPage>
      <StyledHeader>
        <img className="app-logo" src={logo}></img>
        <div></div>
        <div>
          <Link to="/">
            <PinkButton onClick={logOut} variant="contained">
              LogOut
            </PinkButton>
          </Link>
        </div>
      </StyledHeader>
      <StyledNav>
        <ul className="nav-list">
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            className="buttonGroup"
          >
            <NavButton
              onClick={() => {
                setStaffFunction("airportList");
              }}
              className="navList"
            >
              Crew number Base Airport
            </NavButton>
            <NavButton
              onClick={() => {
                setStaffFunction("departureList");
              }}
              className="navList"
            >
              View Departure list
            </NavButton>
            <NavButton
              onClick={() => {
                setStaffFunction("arrivalList");
              }}
              className="navList"
            >
              View Arrival list
            </NavButton>
            <NavButton
              onClick={() => {
                setStaffFunction("checkinCounter");
              }}
              className="navList"
            >
              Checkin counter
            </NavButton>
            <NavButton
              onClick={() => {
                setStaffFunction("onboardCounter");
              }}
              className="navList"
            >
              Onboard counter
            </NavButton>
          </ButtonGroup>
        </ul>
      </StyledNav>
      <StyledMain>
        <StyledList>
          <ul>
            {staffFunction === "" ? (
              <StyledWelcome>Welcome to the staff Page</StyledWelcome>
            ) : null}
            {staffFunction === "airportList" ? <AirportList /> : null}
            {staffFunction === "departureList" ? <DepartureStaff /> : null}
            {staffFunction === "arrivalList" ? <ArrivalStaff /> : null}
            {staffFunction === "passengersList" ? <PassengersFlight /> : null}
            {staffFunction === "checkinCounter" ? <CheckinCounter /> : null}
            {staffFunction === "onboardCounter" ? <OnboardCounter /> : null}
          </ul>
        </StyledList>
      </StyledMain>
    </StyledPage>
  );
}
