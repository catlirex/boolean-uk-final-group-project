import React from "react";
import styled from "styled-components";
import useStore from "../../store";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { APP_COLOR } from "../../consistent";
import { useHistory } from "react-router-dom";

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

const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  p {
    font-size: 1.5rem;
  }
`;

export default function ResultPageHeader() {
  const history = useHistory();
  const flightSearch = useStore((state) => state.flightSearch);
  const flightSearchNoDate = useStore((state) => state.flightSearchNoDate);
  const resetSearch = useStore((state) => state.resetSearch);
  const handleClick = () => {
    history.push("/");
    resetSearch();
  };
  return (
    <StyledHeader>
      {!flightSearch && flightSearchNoDate === null ? (
        <h1>Loading...</h1>
      ) : null}
      {!flightSearch && flightSearchNoDate === undefined ? (
        <h1>Sorry we dont have the routes</h1>
      ) : null}
      {flightSearch?.length ? (
        <div>
          <p>
            {flightSearch[0].flightNumber.departureAirportId} to{" "}
            {flightSearch[0].flightNumber.arrivalAirportId}
          </p>
          <p>Please Select Flight</p>
        </div>
      ) : null}
      {flightSearchNoDate?.length ? (
        <div>
          <p>
            {flightSearchNoDate[0].flightNumber.departureAirportId} to{" "}
            {flightSearchNoDate[0].flightNumber.arrivalAirportId}
          </p>
          <span>Please Select Flight</span>
        </div>
      ) : null}

      <PinkButton onClick={() => handleClick()}>New Search</PinkButton>
    </StyledHeader>
  );
}
