import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const usePlacesCoordsStore = create(
  immer((set) => ({
    placesCoords: [],
    addPlaceCoords: (placeCoords) =>
      set((state) => ({
        placesCoords: [...state.placesCoords, placeCoords],
      })),
  })),
);

export default usePlacesCoordsStore;
