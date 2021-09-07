import React from "react";
import ResultPageHeader from "../Component/SearchResult/ResultPageHeader";
import styled from "styled-components";
import DepartSearchResult from "../Component/SearchResult/DepartSearchResult";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { APP_COLOR } from "../consistent";
import useStore from "../store";
import { useHistory } from "react-router-dom";

const StyledMain = styled.main`
  display: grid;
  gap: 20px;
  margin: 20px;
`;

const SquareButton = withStyles(() => ({
  root: {
    height: "auto",
    width: "15vw",
    fontSize: "0.8rem",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.sharpPick,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.pink,
    },
  },
}))(Button);

export default function SearchResultPage() {
  const flightSearch = useStore((state) => state.flightSearch);
  const flightSearchNoDate = useStore((state) => state.flightSearchNoDate);
  const setModal = useStore((state) => state.setModal);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const history = useHistory();
  const outboundBooking = useStore((state) => state.outboundBooking);

  const handleClick = () => {
    if (loggedInUser && outboundBooking) history.push("/bookingForm");
    if (!loggedInUser && outboundBooking) setModal("logIn");
    else setModal("selectFlight");
  };

  return (
    <StyledMain>
      <ResultPageHeader />
      <DepartSearchResult />
      {flightSearch || flightSearchNoDate ? (
        <SquareButton onClick={() => handleClick()}>
          Complete Booking Form
        </SquareButton>
      ) : null}
    </StyledMain>
  );
}
