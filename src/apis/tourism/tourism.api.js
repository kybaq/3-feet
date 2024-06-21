import tourismAPI from "./tourism.config";

const SERVICE_KEY_DECODING = import.meta.env.VITE_TOURISM_SERVICE_KEY_DECODING;
const SERVICE_KEY_ENCODING = import.meta.env.VITE_TOURISM_SERVICE_KEY_ENCODING;

const params = {
  MobileOS: "ETC",
  MobileApp: "AppTest",
  _type: "json",
  radius: "10000",
};

// mapX , longitude : 경도 좌표 /  mapY,latitude : 위도 좌표
// 숙박리스트
export const fetchLodgmentList = async (longitude, latitude) => {
  const path = "/locationBasedList1";
  try {
    const response = await tourismAPI.get(path, {
      params: {
        ...params,
        mapX: longitude,
        mapY: latitude,
        contentTypeId: "32",
        serviceKey: SERVICE_KEY_DECODING,
        arrange: "O",
      },
    });
    // 반환데이터 [{,,,},{,,,},...]
    return response.data.response.body.items.item;
  } catch (error) {
    try {
      const response = await tourismAPI.get(path, {
        params: {
          ...params,
          mapX: longitude,
          mapY: latitude,
          contentTypeId: "32",
          serviceKey: SERVICE_KEY_ENCODING,
          arrange: "O",
        },
      });
      // 반환데이터 [{,,,},{,,,},...]
      return response.data.response.body.items.item;
    } catch (error) {
      console.error("오류 발생 => ", error);
    }
  }
};

// 음식점 리스트
export const fetchRestaurantList = async (longitude, latitude) => {
  const path = "/locationBasedList1";
  try {
    const response = await tourismAPI.get(path, {
      params: {
        ...params,
        mapX: longitude,
        mapY: latitude,
        contentTypeId: "39",
        serviceKey: SERVICE_KEY_DECODING,
        arrange: "O",
      },
    });
    // 반환데이터 [{,,,},{,,,},...]
    return response.data.response.body.items.item;
  } catch (error) {
    try {
      const response = await tourismAPI.get(path, {
        params: {
          ...params,
          mapX: longitude,
          mapY: latitude,
          contentTypeId: "39",
          serviceKey: SERVICE_KEY_ENCODING,
          arrange: "O",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
};
