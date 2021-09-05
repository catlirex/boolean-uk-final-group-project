import React from "react";
import useStore from "../../store";
import styled from "styled-components";
import FlightIcon from "@material-ui/icons/Flight";
import { APP_COLOR } from "../../consistent";

const StyledDiv = styled.div`
  display: grid;
  gap: 10px;
  .key-info {
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    padding: 50px 10px;
    background-color: ${APP_COLOR.lightPink};
  }
  .flightIcon {
    width: 50px;
    height: 50px;
    transform: rotate(90deg);
  }
  .place-center {
    display: grid;
    place-items: center;
  }
  .operation-info {
    display: grid;
    gap: 5px;
  }
  span {
    color: ${APP_COLOR.grey};
  }
  p {
    font-weight: 600;
    font-size: 0.8rem;
  }
  .status {
    padding-top: 10px;
    font-size: 1.3rem;
    color: ${APP_COLOR.sharpPick};
  }
`;

export default function StatusResult() {
  const flightStatus = useStore((state) => state.flightStatus);
  const airportList = useStore((state) => state.airportList);

  const departAirport = airportList?.find(
    (target) => target.id === flightStatus?.flightNumber.departureAirportId
  );
  const arrivalAirport = airportList?.find(
    (target) => target.id === flightStatus?.flightNumber.arrivalAirportId
  );
  const dateStringArray = flightStatus?.date.toString().split("");
  dateStringArray?.splice(4, 0, "-");
  dateStringArray?.splice(7, 0, "-");
  const date = dateStringArray?.join("");

  return (
    <StyledDiv>
      <div className="operation-info">
        <span className="status">{flightStatus?.flightNumberId}</span>
        <span>Date: {date}</span>
        <span>Operated by {flightStatus?.flightNumber.airline.name}</span>
      </div>
      <div className="key-info place-center">
        <div>
          <h2>{departAirport?.id}</h2>
          <p>{departAirport?.name}</p>
          <p>{departAirport?.city}</p>
        </div>
        <div className="place-center">
          <FlightIcon className="flightIcon" />
          <p>Duration {flightStatus?.flightNumber.durationHour}h</p>
          <p className="status">{flightStatus?.status}</p>
        </div>
        <div>
          <h2>{arrivalAirport?.id}</h2>
          <p>{arrivalAirport?.name}</p>
          <p>{arrivalAirport?.city}</p>
        </div>
      </div>
      <div>
        <span>Gate number: </span>
        <span className="status">{flightStatus?.gateNumber}</span>
      </div>
      <div>
        <span>Aircraft Type: </span>
        <span>{flightStatus?.flightNumber.aircraftId}</span>
      </div>
    </StyledDiv>
  );
}
