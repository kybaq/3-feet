import { useQuery } from "@tanstack/react-query";
import { fetchLodgmentList, fetchRestaurantList } from "../apis/tourism/tourism.api";

// 숙박 정보 목록 불러오기
export const useLodgmentList = (longitude, latitude) => {
  return useQuery({
    queryKey: ["lodgmentList", longitude, latitude],
    queryFn: fetchLodgmentList(longitude, latitude),
  });
};

// 음식점 정보 목록 불러오기
export const useRestaurantList = (longitude, latitude) => {
  return useQuery({
    queryKey: ["restaurantList", longitude, latitude],
    queryFn: fetchRestaurantList(longitude, latitude),
  });
};
