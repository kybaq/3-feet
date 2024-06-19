import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTourismListStore = create(
  immer((set) => ({
    lodgments: [],
    restaurants: [],
    setLodgments: (lodgments) =>
      set((state) => {
        state.lodgments = lodgments;
      }),
    setRestaurants: (restaurants) =>
      set((state) => {
        state.restaurants = restaurants;
      }),
  })),
);

export default useTourismListStore;
