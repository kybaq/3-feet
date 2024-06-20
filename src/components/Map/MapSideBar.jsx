import React, { useState, useTransition } from "react";
import MapListItem from "./MapListItem";
import ToggleButton from "./MapSideBarButton";
import { useQuery } from "@tanstack/react-query";
import { fetchLodgmentList, fetchRestaurantList } from "../../apis/tourism/tourism.api";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";

function MapSidebar() {
  const { centerCoords } = useCenterCoordsStore();
  const [showLodgments, setShowLodgments] = useState(true);
  const [isPendingTransition, startTransition] = useTransition();

  const {
    data: lodgementList,
    isLoading: isLoadingLodgements,
    isError: isErrorLodgements,
  } = useQuery({
    queryKey: ["lodgementList", centerCoords],
    queryFn: () => fetchLodgmentList(centerCoords._lng, centerCoords._lat),
  });

  const {
    data: restaurantList,
    isLoading: isLoadingRestaurants,
    isError: isErrorRestaurants,
  } = useQuery({
    queryKey: ["restaurantList", centerCoords],
    queryFn: () => fetchRestaurantList(centerCoords._lng, centerCoords._lat),
  });

  const handleToggle = (type) => {
    startTransition(() => {
      setShowLodgments(type === "lodgments");
    });
  };

  // TODO: Skeleton UI 적용할 것
  if (isLoadingLodgements || isLoadingRestaurants) {
    return <div>로딩 중...</div>;
  }

  if (isErrorLodgements || isErrorRestaurants) {
    return <div>에러 발생</div>;
  }

  return (
    <aside
      id="list"
      className="flex flex-col justify-center items-center w-2/5 h-full bg-gray-300 border border-slate-300 rounded-xl"
    >
      <div className="flex justify-center items-center my-6">
        <ToggleButton text="숙소 보기" onClick={() => handleToggle("lodgments")} />
        <ToggleButton text="식당 보기" onClick={() => handleToggle("restaurants")} />
      </div>
      <ol className="flex flex-col items-center space-y-6 overflow-y-auto w-full h-full">
        {showLodgments &&
          lodgementList &&
          lodgementList.map((lodgement) => <MapListItem key={lodgement.contentid} placeInfo={lodgement} />)}
        {!showLodgments &&
          restaurantList &&
          restaurantList.map((restaurant) => <MapListItem key={restaurant.contentid} placeInfo={restaurant} />)}
      </ol>
    </aside>
  );
}

export default MapSidebar;
