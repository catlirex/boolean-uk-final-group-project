import React from "react";
import create from "zustand";

type AirportType = {
  id: string;
  name: string;
  city: string;
  country: string;
  cityImage: string;
};

type AirLineType = {
  businessLuggage: number;
  economicLuggage: number;
  firstClassLuggage: number;
  id: string;
  name: string;
};

export type FlightNumberType = {
  aircraftId: string;
  airline: AirLineType;
  airlineId: string;
  arrivalAirportId: string;
  departureAirportId: string;
  durationHour: number;
  id: string;
};

export type FlightStatusType = {
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

export type ScheduledFlightList = {
  date: number;
  time: string;
  economicPrice: number;
  businessPrice: number;
  firstClassPrice: number;
  status: FlightStatusType;
  gateNumber: string;
  flightNumberId: string;
  flightNumber: FlightNumberType;
  passengers?: [];
};

type StoreType = {
  modal: string;
  setModal: (modal: string) => void;
  airportList: AirportType[] | null;
  setAirportList: () => void;
  loggedInUser: null | userCredentials;
  setLoginUser: (loggedInUser: userCredentials) => void;
  userCredentials: {};
  setUserCredentials: (userCredentials: {}) => void;
  logOut: () => void;
  signedUpUser: null | signUpUserCredentials;
  setSignupUser: (signedUpUser: signUpUserCredentials) => void;
  signUpUserCredentials: {};
  setSignUpUserCredentials: (signUpUserCredentials: {}) => void;
  flightStatus: null | undefined | FlightStatusType;
  searchFlightStatus: (flightNumber: string, date: number) => void;
  role: User["role"];
  setRole: (role: string) => void;
  departureFlightList: ScheduledFlightList[];
  setDepartureFlightList: (airportCode: string) => void;
  selectedAirport: AirportType | null;
  setSelectedAirport: (id: string) => void;
};

export type User = {
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export type userCredentials = {
  id?: number;
  email: string;
  password: string;
  role?: string;
};

export type signUpUserCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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

  searchResult: null,
  setSearchResult: () => {},

  // LOGIN STUFF
  role: "",
  setRole: (role) => set({ role }),
  userCredentials: {
    email: null,
    password: null,
  },
  setUserCredentials: (userCredentials) => set({ userCredentials }),
  loggedInUser: null,
  setLoginUser: async (userCredentials) => {
    const loginUser = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (loginUser) {
      set({ loggedInUser: loginUser.user });
    } else {
      set({ modal: "loginError" });
    }
  },
  signUpUserCredentials: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  setSignUpUserCredentials: (signUpUserCredentials) =>
    set({ signUpUserCredentials }),
  signedUpUser: null,
  setSignupUser: async (signUpUserCredentials) => {
    const signupUser = await fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpUserCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (signupUser) set({ loggedInUser: signupUser });
  },
  logOut: () => {
    set({
      loggedInUser: null,
    });
  },
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
  selectedAirport: null,
  setSelectedAirport: async (id) => {
    const currentAirport = await fetch(
      `http://localhost:3000/scheduledFlight/departure/${id}`
    ).then((res) => res.json());
    set({ selectedAirport: currentAirport });
  },
  departureFlightList: [],
  setDepartureFlightList: async (airportCode) => {
    const scheduledFlightByDeparture = await fetch(
      `http://localhost:3000/scheduledFlight/departure/${airportCode}`
    ).then((res) => res.json());
    set({ departureFlightList: scheduledFlightByDeparture });
  },
}));

export default useStore;
