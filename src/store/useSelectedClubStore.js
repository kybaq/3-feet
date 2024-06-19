import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useSelectedClubStore = create(
  immer((set) => ({
    selectedClub: 0,
    setSelectedClub: (clubId) =>
      set((state) => {
        state.selectedClub = clubId;
      }),
  })),
);

export default useSelectedClubStore;
