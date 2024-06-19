import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useSelectedClubIdStore = create(
  immer((set) => ({
    selectedClubId: 1,
    setSelectedClubId: (clubId) =>
      set((state) => {
        state.selectedClubId = clubId;
      }),
  })),
);
export default useSelectedClubIdStore;
