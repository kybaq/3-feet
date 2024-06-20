import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useNavermaps } from "react-naver-maps";

const useStore = create(
  immer((set) => ({
    centerCoords: null,
    setCenterCoords: (latitude, longitude, naverMaps) =>
      set((state) => {
        state.centerCoords = new naverMaps.LatLng(latitude, longitude);
      }),
  })),
);

// 지도에서 사용하는 위도 경도 객체를 생성하기 위함.
const useCenterCoordsStore = () => {
  const naverMaps = useNavermaps();

  useStore.setState((state) => {
    if (!state.centerCoords) {
      state.centerCoords = new naverMaps.LatLng(37.3595704, 127.105399);
    }
  });

  return useStore((state) => ({
    centerCoords: state.centerCoords,
    setCenterCoords: (latitude, longitude) => state.setCenterCoords(latitude, longitude, naverMaps),
  }));
};

export default useCenterCoordsStore;
