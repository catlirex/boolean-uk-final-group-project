import React from "react";
import create from "zustand";

type AirportType = {
  id: string;
  name: string;
  city: string;
};

type AirLineType = {
  businessLuggage: number;
  economicLuggage: number;
  firstClassLuggage: number;
  id: string;
  name: string;
};

type FlightNumberType = {
  aircraftId: string;
  airline: AirLineType;
  airlineId: string;
  arrivalAirportId: string;
  departureAirportId: string;
  durationHour: number;
  id: string;
};

type FlightStatusType = {
  businessPrice: number;
  date: number;
  economicPrice: number;
  firstClassPrice: number;
  flightNumber: FlightNumberType;
  flightNumberId: string;
  gateNumber: string;
  id: number;
  status: string;
  time: string;
};
type FlightSearchTypeOne = {
  id: number;
  date: number;
  time: string;
  economicPrice: number;
  businessPrice: number;
  firstClassPrice: number;
  gateNumbe: string;
  flightNumberId: string;
  flightNumber: FlightNumberType;
};
// type FlightSearchTypeTwo = {
//   id: number;
//   date: number;
//   time: string;
//   economicPrice: number;
//   businessPrice: number;
//   firstClassPrice: number;
//   gateNumbe: string;
//   flightNumberId: string;
//   flightNumber: FlightNumberType;
// };

type StoreType = {
  modal: string;
  setModal: (modal: string) => void;
  airportList: AirportType[] | null;
  setAirportList: () => void;
  loggedInUser: null | {};
  flightStatus: null | undefined | FlightStatusType;
  searchFlightStatus: (flightNumber: string, date: number) => void;
  flightSearch: null | undefined | FlightSearchTypeOne | [];
  flightSearchNoDate: null | undefined | FlightSearchTypeOne | [];
  searchFlightSeach: (depart: string, arrival: string, date?: number) => void;
};

export type User = {
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const useStore = create<StoreType>((set, get) => ({
  modal: "",
  setModal: (modal) => set({ modal }),
  airportList: null,
  setAirportList: async () => {
    const airportsFromServer = await fetch(
      `http://localhost:3000/airports`
    ).then((res) => res.json());
    set({ airportList: airportsFromServer.data });
  },
  loggedInUser: null,
  setLoginUser: () => {},
  searchResult: null,
  setSearchResult: () => {},

  flightStatus: null,
  searchFlightStatus: async (flightNumber, date) => {
    const flightStatusFromServer = await fetch(
      `http://localhost:3000/scheduledFlight/${flightNumber}?date=${date}`
    ).then((res) => res.json());

    console.log(flightStatusFromServer);

    if (flightStatusFromServer.data.length)
      set({ flightStatus: flightStatusFromServer.data[0] });
    else set({ flightStatus: undefined });
  },
  flightSearch: null,
  flightSearchNoDate: null,
  searchFlightSeach: async (depart, arrival, date) => {
    // if (!date && depart && arrival) {
    //   const flightSearchFromServer = await fetch(
    //     `http://localhost:3000/scheduledFlight/?depart=${depart}&arrival=${arrival}`
    //   ).then((res) => res.json());
    //   console.log(flightSearchFromServer);

    //   if (flightSearchFromServer.data.length)
    //     set({ flightSearch: flightSearchFromServer });
    //   else set({ flightSearch: undefined });
    // }
    if (date && depart && arrival) {
      const flightSearchFromServer = await fetch(
        `http://localhost:3000/scheduledFlight/?date=${date}&depart=${depart}&arrival=${arrival}`
      ).then((res) => res.json());
      console.log(flightSearchFromServer);

      if (flightSearchFromServer.data.length)
        set({ flightSearch: flightSearchFromServer });
      else {
        const flightSearchFromServerWithoutDate = await fetch(
          `http://localhost:3000/scheduledFlight/?depart=${depart}&arrival=${arrival}`
        ).then((res) => res.json());
        console.log(flightSearchFromServerWithoutDate);
        set({ flightSearchNoDate: flightSearchFromServerWithoutDate });
      }
    }
  },
}));

export default useStore;
