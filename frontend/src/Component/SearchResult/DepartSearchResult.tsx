import React from "react";
import useStore from "../../store";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { AirportType } from "../../store";
import ResultCard from "./ResultCard";

const StyledSection = styled.section`
  display: grid;
  gap: 10px;
  .city-image {
    width: 95vw;
    height: 200px;
    object-fit: cover;
  }
  .bold {
    font-weight: 700;
  }
  .result-list {
    display: grid;
    gap: 20px;
  }
`;

export default function DepartSearchResult() {
  const flightSearch = useStore((state) => state.flightSearch);
  const flightSearchNoDate = useStore((state) => state.flightSearchNoDate);
  const airportList = useStore((state) => state.airportList);
  const [departAirport, setDepartAirport] = useState<
    AirportType | undefined | null
  >(null);
  useEffect(() => {
    if (flightSearch?.length) {
      const foundAirport = airportList?.find(
        (target) =>
          target.id === flightSearch[0].flightNumber.departureAirportId
      );
      setDepartAirport(foundAirport);
    }
    if (flightSearchNoDate?.length) {
      const foundAirport = airportList?.find(
        (target) =>
          target.id === flightSearchNoDate[0].flightNumber.departureAirportId
      );
      setDepartAirport(foundAirport);
    }
  }, [flightSearch, flightSearchNoDate]);

  if (!flightSearch && flightSearchNoDate?.length && departAirport)
    return (
      <StyledSection>
        <div className="img-container">
          <img className="city-image" src={departAirport.cityImage} />
        </div>
        <p className="bold">
          No scheduled flight on selected date, here are more options ...
        </p>
        <ul className="result-list">
          {flightSearchNoDate.map((target, index) => (
            <ResultCard key={index} data={target} />
          ))}
        </ul>
      </StyledSection>
    );

  if (flightSearch && departAirport)
    return (
      <StyledSection>
        <p>do this later</p>
        <div className="img-container">
          <img className="city-image" src={departAirport.cityImage} />
        </div>
      </StyledSection>
    );
  else return null;
}
