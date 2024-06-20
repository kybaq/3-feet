import create from "zustand";
import { immer } from "zustand/middleware/immer";

const useStoreInfo = create(
  immer((set) => ({
    storeInfo: JSON.parse(localStorage.getItem("storeInfo")) || {
      title: "",
      address: "",
      image: "",
      contentId: "",
    },
    setStoreInfo: (info) =>
      set((state) => {
        const updatedStoreInfo = { ...state.storeInfo, ...info };
        localStorage.setItem("storeInfo", JSON.stringify(updatedStoreInfo));
        return { storeInfo: updatedStoreInfo };
      }),
  })),
);

export default useStoreInfo;
