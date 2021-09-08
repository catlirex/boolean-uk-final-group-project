import React, { useEffect, useState } from "react";
import useStore from "../../store";
import { AirportType } from "../../store";
import styled from "styled-components";
import ArrivalResultCard from "./ArrivalResultCard";

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

export default function ArrivalSearchResult() {
  const arrivalFlightSearch = useStore((state) => state.arrivalFlightSearch);
  const arrivalFlightSearchNoDate = useStore(
    (state) => state.arrivalFlightSearchNoDate
  );
  const airportList = useStore((state) => state.airportList);
  const [arrivalAirport, setArrivalAirport] = useState<
    AirportType | undefined | null
  >(null);

  useEffect(() => {
    if (arrivalFlightSearch?.length) {
      const foundAirport = airportList?.find(
        (target) =>
          target.id === arrivalFlightSearch[0].flightNumber.departureAirportId
      );
      setArrivalAirport(foundAirport);
    }
    if (arrivalFlightSearchNoDate?.length) {
      const foundAirport = airportList?.find(
        (target) =>
          target.id ===
          arrivalFlightSearchNoDate[0].flightNumber.departureAirportId
      );
      setArrivalAirport(foundAirport);
    }
  }, [arrivalFlightSearch, arrivalFlightSearchNoDate]);

  if (
    !arrivalFlightSearch &&
    arrivalFlightSearchNoDate?.length &&
    arrivalAirport
  )
    return (
      <StyledSection>
        <div className="img-container">
          <img className="city-image" src={arrivalAirport.cityImage} />
        </div>
        <p className="bold">
          No scheduled flight on selected date, here are more options ...
        </p>
        <ul className="result-list">
          {arrivalFlightSearchNoDate.map((target, index) => (
            <ArrivalResultCard key={index} data={target} />
          ))}
        </ul>
      </StyledSection>
    );

  if (arrivalFlightSearch?.length && arrivalAirport)
    return (
      <StyledSection>
        <div className="img-container">
          <img className="city-image" src={arrivalAirport.cityImage} />
        </div>
        <ul className="result-list">
          {arrivalFlightSearch.map((target, index) => (
            <ArrivalResultCard key={index} data={target} />
          ))}
        </ul>
      </StyledSection>
    );
  else return null;
}
