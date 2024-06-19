import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useSelectedClubStore = create(
  immer((set) => ({
    selectedClub: 0,
    setSelectedClub: (clubId) =>
      set((state) => {
        console.log("선택된 구단 아이디 :", clubId);
        state.selectedClub = clubId;
      }),
  })),
);

export default useSelectedClubStore;