import React, { useEffect } from "react";
import type { User, FlightStatusType, FlightNumberType } from "../store";
import { PinkButton } from "./LoginHeader";

type ScheduleFlight = {
  flightNumberId: string;
  gateNumber: string;
  time: string;
  status: FlightStatusType["status"];
  passengers?: User[];
  airportCode: FlightNumberType["departureAirportId"];
};

// export type ScheduledFlightList = {
//     date: number;
//     time: string;
//     economicPrice: number;
//     businessPrice: number;
//     firstClassPrice: number;
//     status: FlightStatusType;
//     gateNumber: string;
//     flightNumberId: string;
//     flightNumber: FlightNumberType;(departureAirportId)
//     passengers?: [];
//   };

function DepartureStaff({
  flightNumberId,
  gateNumber,
  time,
  status,
  passengers,
  airportCode,
}: ScheduleFlight) {
  // CURRENT DATE
  const myCurrentDate = new Date();
  const date =
    myCurrentDate.getDate() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getFullYear();
  const newCurrentDate = date;

  return (
    <div className="depart">
      <h2>Depart List</h2>
      <p>Date : {newCurrentDate}</p>
      <div className="card">
        <li>
          <h3>{flightNumberId}</h3>
          <h3>{gateNumber}</h3>
          <h3>{time}</h3>
          <h3>{status}</h3>
          <PinkButton>View Passenger List</PinkButton>
        </li>
      </div>
    </div>
  );
}

export default DepartureStaff;
