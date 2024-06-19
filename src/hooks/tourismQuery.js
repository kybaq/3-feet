import { useQuery } from "@tanstack/react-query";
import { fetchLodgmentList, fetchRestaurantList } from "../apis/tourism/tourism.api";

// 숙박 정보 목록 불러오기
export const useLodgmentList = (latitude, longitude) => {
  return useQuery({
    queryKey: ["lodgmentList", latitude, longitude],
    queryFn: fetchLodgmentList(latitude, longitude),
  });
};

// 음식점 정보 목록 불러오기
export const useRestaurantList = (latitude, longitude) => {
  return useQuery({
    queryKey: ["restaurantList", latitude, longitude],
    queryFn: fetchRestaurantList(latitude, longitude),
  });
};
