import React from "react";
import create from "zustand";

export type AirportType = {
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

export type TicketType = {
  bookingId?: number;
  class: "econ" | "first" | "business";
  id?: number;
  passengerFirstName?: null | string;
  passengerLastName?: null | string;
  passpostNumber?: null | string;
  scheduledFlight?: ScheduledFlightList;
  scheduledFlightId: number;
  seatNumer?: null | string;
  specialMeal?: null | string;
  status?: string;
};

export type SingleTicketType = {
  class: string;
  scheduledFlightId: number;
};
type BookExtraLuggageType = {
  bookingId: number;
  extraLuggageId: number;
  id: number;
  quantity: number;
  ExtraLuggage: {
    id: number;
    price: number;
    weight: number;
  }[];
};

export type UserBookingType = {
  id: number;
  userId: number;
  tickets: TicketType[] | SingleTicketType;
  BookExtraLuggage: BookExtraLuggageType[];
};

export type FlightSearchTypeOne = {
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

type newBookingType = {
  userId?: number;
  bookExtraLuggage?: {
    id: number;
    price: number;
    weight: number;
  }[];
  tickets: TicketType[];
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

export type ScheduledFlightList = {
  id: number;
  date: number;
  time: string;
  economicPrice: number;
  businessPrice: number;
  firstClassPrice: number;
  flightNumber: FlightNumberType;
  flightNumberId: string;
  gateNumber: string;
  status: string;
  passengers: TicketType[];
};

type StoreType = {
  modal: string;
  setModal: (modal: string) => void;
  airportList: AirportType[] | null;
  setAirportList: () => void;

  loggedInUser: null | userCredentials | { id: number };
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

  departureFlightList: ScheduledFlightList[] | null;
  setDepartureFlightList: () => void;
  arrivalFlightList: ScheduledFlightList[] | null;
  setArrivalFlightList: () => void;
  // selectedAirport: AirportType | null;
  // setSelectedAirport: (id: string) => void;
  chooseAirport?: AirportType["id"];
  setChooseAirport: (airportId: string) => void;
  staffFunction: string;
  setStaffFunction: (funct: string) => void;
  passengersFlightList: TicketType[] | null;
  setPassengersFlightList: (id: number) => void;

  bookingList: TicketType[] | null;
  setBookingList: (id: number) => void;

  userBooking: null | UserBookingType[];
  getUserBooking: () => void;

  flightSearch: null | undefined | FlightSearchTypeOne[];
  flightSearchNoDate: null | undefined | FlightSearchTypeOne[];
  arrivalFlightSearch: null | undefined | FlightSearchTypeOne[];
  arrivalFlightSearchNoDate: null | undefined | FlightSearchTypeOne[];
  resetSearch: () => void;
  searchFlightSeach: (
    depart: string,
    arrival: string,
    dateDepart?: number,
    deteArrival?: number
  ) => void;
  outboundBooking: null | newBookingType;
  inboundBooking: null | newBookingType | undefined;
  selectOutboundFlight: (arg: TicketType) => void;
  selectInboundFlight: (arg: TicketType) => void;
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
  // MODALS
  modal: "",
  setModal: (modal) => set({ modal }),

  //AIRPORTS
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
  userCredentials: {
    email: null,
    password: null,
  },
  setUserCredentials: (userCredentials) => set({ userCredentials }),
  loggedInUser: { id: 27 },
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
      flightSearch: null,
      flightSearchNoDate: null,
      outboundBooking: null,
    });
  },

  //FLIGHTSTATUS
  flightStatus: null,
  searchFlightStatus: async (flightNumber, date) => {
    const flightStatusFromServer = await fetch(
      `http://localhost:3000/scheduledFlight/${flightNumber}?date=${date}`
    ).then((res) => res.json());

    if (flightStatusFromServer.data.length)
      set({ flightStatus: flightStatusFromServer.data[0] });
    else set({ flightStatus: undefined });
  },

  // STAFFPAGE
  staffFunction: "",
  setStaffFunction: (funct: string) => {
    set({ staffFunction: funct });
  },
  chooseAirport: "",
  setChooseAirport: (airportId) => {
    set({ chooseAirport: airportId });
  },
  departureFlightList: null,
  setDepartureFlightList: async () => {
    const scheduledFlightByDeparture = await fetch(
      `http://localhost:3000/scheduledFlight/departure/${get().chooseAirport}`
    ).then((res) => res.json());
    set({ departureFlightList: scheduledFlightByDeparture.data });
  },

  arrivalFlightList: null,
  setArrivalFlightList: async () => {
    const scheduledFlightByArrival = await fetch(
      `http://localhost:3000/scheduledFlight/arrival/${get().chooseAirport}`
    ).then((res) => res.json());
    set({ arrivalFlightList: scheduledFlightByArrival.data });
  },
  passengersFlightList: null,
  setPassengersFlightList: async (id: number) => {
    const passengersFromServer = await fetch(
      `http://localhost:3000/tickets?scheduledFlight=${id}`
    ).then((res) => res.json());
    set({ passengersFlightList: passengersFromServer.data });
  },

  // STAFFBOOKING

  bookingList: null,
  setBookingList: async (id: number) => {
    const bookingsFromServer = await fetch(
      `http://localhost:3000/bookings/${id}`
    ).then((res) => res.json());
    set({ bookingList: bookingsFromServer });
  },

  // USERBOOKING
  userBooking: null,
  getUserBooking: async () => {
    console.log("user:", get().loggedInUser);

    if (!get().loggedInUser) return;
    else {
      const userBookingFromServer = await fetch(
        `http://localhost:3000/bookings/user/${get().loggedInUser?.id}`
      ).then((res) => res.json());
      console.log("userBookingFromServer", userBookingFromServer);
      if (userBookingFromServer.length)
        set({ userBooking: userBookingFromServer });
      else set({ flightStatus: undefined });
    }
  },

  //FLIGHTSEARCH
  flightSearch: null,
  flightSearchNoDate: null,
  arrivalFlightSearch: null,
  arrivalFlightSearchNoDate: null,
  resetSearch: () => {
    set({
      flightSearch: null,
      flightSearchNoDate: null,
      outboundBooking: null,
    });
  },
  searchFlightSeach: async (depart, arrival, dateDepart, dateArrival) => {
    if (dateDepart && dateArrival && depart && arrival) {
      const departureFlightSearchFromServer = await fetch(
        `http://localhost:3000/scheduledFlight/?date=${dateDepart}&depart=${depart}&arrival=${arrival}`
      ).then((res) => res.json());
      console.log("Depart with date", departureFlightSearchFromServer);

      const arrivalFlightSearchFromServer = await fetch(
        `http://localhost:3000/scheduledFlight/?date=${dateArrival}&arrival=${depart}&depart=${arrival}`
      ).then((res) => res.json());
      console.log("Arrival with date", arrivalFlightSearchFromServer);

      if (departureFlightSearchFromServer.data.length)
        set({
          flightSearch: departureFlightSearchFromServer.data,
        });
      else {
        set({ flightSearchNoDate: undefined });
        const flightSearchFromServerWithoutDate = await fetch(
          `http://localhost:3000/scheduledFlight/?depart=${depart}&arrival=${arrival}`
        ).then((res) => res.json());
        console.log("depart with no date", flightSearchFromServerWithoutDate);
        if (flightSearchFromServerWithoutDate.data.length)
          set({ flightSearchNoDate: flightSearchFromServerWithoutDate.data });
        else set({ flightSearchNoDate: undefined });
      }

      if (arrivalFlightSearchFromServer.data.length)
        set({
          arrivalFlightSearch: arrivalFlightSearchFromServer.data,
        });
      else {
        set({ arrivalFlightSearchNoDate: undefined });
        const arrivalFlightSearchFromServerWithoutDate = await fetch(
          `http://localhost:3000/scheduledFlight/?depart=${arrival}&arrival=${depart}`
        ).then((res) => res.json());
        console.log(
          "arrival with no date",
          arrivalFlightSearchFromServerWithoutDate
        );
        if (arrivalFlightSearchFromServerWithoutDate.data.length)
          set({
            arrivalFlightSearchNoDate:
              arrivalFlightSearchFromServerWithoutDate.data,
          });
        else set({ arrivalFlightSearchNoDate: undefined });
      }
      // if (
      //   departureFlightSearchFromServer.data.length &&
      //   arrivalFlightSearchFromServer.data.length
      // ) {
      //   console.log(arrivalFlightSearchFromServer.data);

      //   set({
      //     flightSearch: arrivalFlightSearchFromServer.data,
      //   });
      // } else {
      //   set({ flightSearchNoDate: undefined });
      //   const flightSearchFromServerWithoutDate = await fetch(
      //     `http://localhost:3000/scheduledFlight/?depart=${depart}&arrival=${arrival}`
      //   ).then((res) => res.json());
      //   console.log(flightSearchFromServerWithoutDate);
      //   if (flightSearchFromServerWithoutDate.data.length)
      //     set({ flightSearchNoDate: flightSearchFromServerWithoutDate.data });
      //   else set({ flightSearchNoDate: undefined });
      // }
    }
  },

  //OUTBOUNDBOOKING
  outboundBooking: null,
  selectOutboundFlight: (ticket) => {
    set({ outboundBooking: { tickets: [ticket] } });
  },
  inboundBooking: null,
  selectInboundFlight: (ticket) => {
    set({ inboundBooking: { tickets: [ticket] } });
  },
}));

export default useStore;
