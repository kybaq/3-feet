import React from "react";
import MapHeader from "../../components/Map/MapHeader";
import MapSideBar from "../../components/Map/MapSideBar";
import MapArea from "../../components/Map/MapArea";
import { NavermapsProvider } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchLodgmentList, fetchRestaurantList } from "../../apis/tourism/tourism.api";

function Map() {
  const CLIENT_ID = import.meta.env.VITE_APP_NAVER_MAP_ID;

  const { data: lodgementList } = useQuery({
    queryKey: ["lodgementList"],
    queryFn: fetchLodgmentList,
  });

  const { data: restaurantList } = useQuery({
    queryKey: ["restaurantList"],
    queryFn: fetchRestaurantList,
  });

  return (
    <section className="flex w-screen h-screen justify-center items-center p-10 font-Pretendard">
      <section className="w-full h-full">
        <MapHeader />
        <section id="Map" className="flex justify-center items-center h-[calc(100%-7rem)] gap-8">
          <NavermapsProvider ncpClientId={CLIENT_ID}>
            <MapArea />
          </NavermapsProvider>
          <MapSideBar lodgementList={lodgementList} restaurantList={restaurantList} />
        </section>
      </section>
    </section>
  );
}

export default Map;
