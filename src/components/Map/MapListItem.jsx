import React, { useEffect } from "react";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";
import usePlacesCoordsStore from "../../store/usePlacesCoordsStore";

function MapListItem({ placeInfo }) {
  const { setCenterCoords } = useCenterCoordsStore();
  const { addPlaceCoords } = usePlacesCoordsStore();

  const coord = { latitude: placeInfo.mapy, longitude: placeInfo.mapx };

  useEffect(() => {
    addPlaceCoords(coord);
  }, []);

  return (
    <li
      key={placeInfo.contentid}
      className="flex border border-slate-300 bg-gray-200 rounded-lg p-6 h-24 w-80"
      onClick={() => setCenterCoords(placeInfo.mapy, placeInfo.mapx)}
    >
      <div>
        <img className="w-20" src={`${placeInfo.firstimage}`} alt="" />
      </div>
      <span>{placeInfo.title}</span>
    </li>
  );
}

export default MapListItem;
