import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useSelectedClubStore = create(
  immer((set) => ({
    selectedClubId: 0,
    setSelectedClubId: (clubId) =>
      set((state) => {
        state.selectedClubId = clubId;
      }),
  })),
);
export default useSelectedClubStore;
