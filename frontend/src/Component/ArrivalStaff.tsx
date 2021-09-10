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

function ArrivalStaff() {
  // CURRENT DATE
  const myCurrentDate = new Date();
  const date =
    myCurrentDate.getDate() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getFullYear();
  const newCurrentDate = date;

  const arrivalFlightList = useStore((state) => state.arrivalFlightList);
  const setArrivalFlightList = useStore((state) => state.setArrivalFlightList);
  const setStaffFunction = useStore((state) => state.setStaffFunction);

  useEffect(() => {
    setArrivalFlightList();
  }, []);

  return (
    <div className="depart">
      <h2>Arrival List</h2>
      <p>Date : {newCurrentDate}</p>
      <div className="card">
        {arrivalFlightList?.map((arrival) => {
          return (
            <li>
              <h3>{arrival.flightNumberId}</h3>
              <h3>{arrival.gateNumber}</h3>
              <h3>{arrival.time}</h3>
              <h3>{arrival.status}</h3>
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

export default ArrivalStaff;
