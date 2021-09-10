import React, { useEffect } from "react";
import useStore from "../store";

export default function PassengersFlight() {
  const passengersFlightList = useStore((state) => state.passengersFlightList);
  const setPassengersFlightList = useStore(
    (state) => state.setPassengersFlightList
  );
  const departureFlightList = useStore((state) => state.departureFlightList);
  const arrivalFlightList = useStore((state) => state.arrivalFlightList);

  const arrivalIdList: any = arrivalFlightList?.map((schFlight) => {
    return schFlight.id;
  });

  const departureIdList: any = departureFlightList?.map((schFlight) => {
    return schFlight.id;
  });

  function settingArrivalPassengerList() {
    const arrivalIdNumber = arrivalIdList?.map((id: any) => {
      setPassengersFlightList(id);
    });
    return arrivalIdNumber;
  }

  function settingDeparturePassengerList() {
    const departureIdNumber = departureIdList?.map((id: any) => {
      setPassengersFlightList(id);
    });
    return departureIdNumber;
  }

  useEffect(() => {
    settingArrivalPassengerList();
    settingDeparturePassengerList();
  }, []);
  console.log("Passenger", passengersFlightList);

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
    <div className="passenger">
      <h2>Passenger List</h2>
      <p>Date : {newCurrentDate}</p>
      <div className="card">
        {passengersFlightList ? (
          passengersFlightList.map((passenger) => {
            return (
              <li>
                <h3>
                  {passenger.passengerFirstName
                    ? passenger.passengerFirstName
                    : "This passenger needs to update the informations"}{" "}
                  {passenger.passengerLastName
                    ? passenger.passengerLastName
                    : "This passenger needs to update the informations"}
                </h3>
              </li>
            );
          })
        ) : (
          <h2>There is no updated Passenger List</h2>
        )}
      </div>
    </div>
  );
}
