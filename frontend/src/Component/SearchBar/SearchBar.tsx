import React from "react";
import styled from "styled-components";
import { APP_COLOR } from "../../consistent";
import FlightIcon from "@material-ui/icons/Flight";
import { TextField } from "@material-ui/core";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import SearchBarDate from "./SearchBarDate";
import heroImg3 from "../../assets/pexels-photo-2549084.jpeg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

import SimpleSelect from "./SearchBarTravelSelect";
import useStore from "../../store";

const StyledSearchBarWrapper = styled.section`
  background-image: url(${heroImg3});
  background-color: #cccccc;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 25rem;
  overflow: hidden;
  width: 100%;
  justify-content: space-around;
  display: inline-grid;
`;

const StyledSearchBarFormContainer = styled.section`
  align-self: center;
  box-shadow: 1px 1px 5px -1px #000000;
`;

const StyledSearchBarMain = styled.section`
  background-color: transparent;
  width: 500px;
  height: 250px;

  .flight-icon-article {
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    grid-gap: 10px;
  }
  .icon {
    transform: rotate(90deg);
    margin: 10px;
    color: ${APP_COLOR.black};
    cursor: pointer;
  }
  .flight-icon-p {
    margin: 10px;
    color: ${APP_COLOR.black};
    cursor: pointer;
  }

  .flight-icon-p:hover,
  .icon:hover {
    color: ${APP_COLOR.sharpPick};
  }
`;

const StyledSearchBarFormSection = styled.form`
  margin: 15px;
  /* .searchBarForm {
    display: grid;
    grid-template-columns: 1fr auto 1fr;

    align-items: center;
  } */
  .form-svg {
    margin-top: 20px;
  }

  .travel {
    display: grid;
    justify-content: center;
  }
`;
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

const SearchBarComponent = () => {
  const [departureDate, setDepartureDate] = React.useState<
    Date | MaterialUiPickersDate
  >(new Date());
  const [arrivalDate, setArrivalDate] = React.useState<
    Date | MaterialUiPickersDate
  >(new Date());

  const flightSearch = useStore((state) => state.flightSearch);
  const searchFlightSeach = useStore((state) => state.searchFlightSeach);

  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      date: { value: number };
      depart: { value: string };
      arrival: { value: string };
    };
    e.preventDefault();

    const depart = target.depart.value;
    const arrival = target.arrival.value;
    const dateString = departureDate
      ?.toISOString()
      .split("T")[0]
      .split("-")
      .join("");
    if (dateString) {
      const dateNum = parseInt(dateString);
      console.log(dateNum, depart, arrival);

      searchFlightSeach(depart, arrival, dateNum);
    }
  };
  return (
    <>
      <StyledSearchBarWrapper>
        <StyledSearchBarFormContainer>
          <StyledSearchBarMain>
            <div className="flight-icon-article">
              <FlightIcon className="icon" />{" "}
              <p className="flight-icon-p">Select your flights</p>
            </div>
            <StyledSearchBarFormSection onSubmit={handleSubmit}>
              {/* <form className="searchBarForm" action=""> */}
              <TextField
                id="standard-basic"
                name="depart"
                label="From"
                color="secondary"
              />
              <CompareArrowsIcon className="form-svg" />
              <TextField
                id="standard-basic"
                name="arrival"
                label="To"
                color="secondary"
              />

              {/* </form> */}
              <SearchBarDate
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
                setArrivalDate={setArrivalDate}
                arrivalDate={arrivalDate}
              />
              <div className="travel">
                {/* <SimpleSelect /> */}

                <PinkButton variant="contained" type="submit">
                  Search
                </PinkButton>
              </div>
            </StyledSearchBarFormSection>
          </StyledSearchBarMain>
        </StyledSearchBarFormContainer>
      </StyledSearchBarWrapper>
    </>
  );
};

export default SearchBarComponent;
