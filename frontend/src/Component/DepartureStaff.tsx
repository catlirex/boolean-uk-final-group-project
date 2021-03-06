import React, { useEffect } from "react";
import useStore from "../store";
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

function DepartureStaff() {
  // CURRENT DATE
  const myCurrentDate = new Date();
  const date =
    myCurrentDate.getDate() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getFullYear();
  const newCurrentDate = date;

  const departureFlightList = useStore((state) => state.departureFlightList);
  const setDepartureFlightList = useStore(
    (state) => state.setDepartureFlightList
  );
  const setStaffFunction = useStore((state) => state.setStaffFunction);

  return (
    <div className="depart">
      <h2>Depart List</h2>
      <p>Date : {newCurrentDate}</p>
      <div className="card">
        {departureFlightList?.map((departure) => {
          return (
            <li>
              <h3>{departure.flightNumberId}</h3>
              <h3>{departure.gateNumber}</h3>
              <h3>{departure.time}</h3>
              <h3>{departure.status}</h3>
              <PinkButton
                onClick={() => {
                  setStaffFunction("passengersList");
                }}
              >
                View Passenger List
              </PinkButton>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default DepartureStaff;
