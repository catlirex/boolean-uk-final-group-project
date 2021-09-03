import React from "react";
import create from "zustand";

type StoreType = {
  modal: string;
  setModal: (modal: string) => void;
  airportList: [] | null;
  setAirportList: () => void;
};

export type User = {
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const useStore = create<StoreType>((set, get) => ({
  modal: "logIn",
  setModal: (modal) => set({ modal }),
  airportList: null,
  setAirportList: async () => {
    const airportsFromServer = await fetch(
      `http://localhost:3000/airports`
    ).then((res) => res.json());
    set({ airportList: airportsFromServer });
  },
  loggedIinUser: null,
  setLoginUser: () => {},
  searchResult: null,
  setSearchResult: () => {},
}));

export default useStore;
