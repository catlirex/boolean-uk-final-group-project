import React from "react";
import create from "zustand";

type StoreType = {
  airportList: [] | null;
  setAirportList: () => void;
};
const useStore = create<StoreType>((set, get) => ({
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
