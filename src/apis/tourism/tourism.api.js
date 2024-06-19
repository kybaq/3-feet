import tourismAPI from "./tourism.config";

const SERVICE_KEY = import.meta.env.VITE_TOURISM_SERVICE_KEY;
const params = {
  MobileOS: "ETC",
  MobileApp: "AppTest",
  _type: "json",
  serviceKey: SERVICE_KEY,
  radius: "2000",
};
// mapX : 경도 좌표, mapY : 위도 좌표
export const fetchLodgmentList = async (longitude, latitude) => {
  const path = "/locationBasedList1";
  try {
    const response = await tourismAPI.get(path, {
      params: { ...params, mapX: longitude, mapY: latitude, contentTypeId: "32" },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("숙박시설 데이터 받아오는 중 에러 발생", error);
  }
};

export const fetchRestaurantList = async (longitude, latitude) => {
  const path = "/locationBasedList1";
  try {
    const response = await tourismAPI.get(path, {
      params: { ...params, mapX: longitude, mapY: latitude, contentTypeId: "41" },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("음식점 데이터 받아오는 중 에러 발생", error);
  }
};
