import React from "react";
import styled from "styled-components";
import { APP_COLOR } from "../../consistent";
import FlightIcon from "@material-ui/icons/Flight";
import { TextField } from "@material-ui/core";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import SearchBarDate from "./SearchBarDate";

const StyledSearchBarWrapper = styled.section`
  background-color: ${APP_COLOR.lightGrey};
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
  background-color: ${APP_COLOR.white};
  width: 650px;
  height: 350px;

  .flight-icon-article {
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    grid-gap: 10px;
  }
  .icon {
    transform: rotate(90deg);
    margin: 10px;
  }
  .flight-icon-p {
    margin: 10px;
  }
`;

const StyledSearchBarFormSection = styled.section`
  margin: 15px;
  .searchBarForm {
    display: grid;
    grid-template-columns: 1fr auto 1fr;

    align-items: center;
  }
  .form-svg {
    margin-top: 20px;
  }
`;

const SearchBarComponent = () => {
  return (
    <>
      <StyledSearchBarWrapper>
        <StyledSearchBarFormContainer>
          <StyledSearchBarMain>
            <div className="flight-icon-article">
              <FlightIcon className="icon" />{" "}
              <p className="flight-icon-p">Select your flights</p>
            </div>
            <StyledSearchBarFormSection>
              <form className="searchBarForm" action="">
                <TextField id="standard-basic" label="From" color="secondary" />
                <CompareArrowsIcon className="form-svg" />
                <TextField id="standard-basic" label="To" color="secondary" />
              </form>
              <SearchBarDate />
            </StyledSearchBarFormSection>
          </StyledSearchBarMain>
        </StyledSearchBarFormContainer>
      </StyledSearchBarWrapper>
    </>
  );
};

export default SearchBarComponent;
