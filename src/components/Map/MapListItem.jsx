import { useEffect } from "react";
import buliding from "../../assets/Icons/building.png";
import pngegg from "../../assets/Icons/pngegg.png";
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
      className="flex justify-evenly items-center flex- border border-slate-300 bg-gray-200 rounded-xl p-2 h-24 w-96"
    >
      <div className="w-24">
        <img
          className="object-cover h-16 rounded-xl"
          src={`${placeInfo.firstimage}` || `${buliding}`}
          alt="가게 사진"
        />
      </div>
      <div className="w-36">
        <span>{placeInfo.title}</span>
      </div>
      <div className="w-6 cursor-pointer" onClick={() => setCenterCoords(placeInfo.mapy, placeInfo.mapx)}>
        <img className="object-cover h-8" src={`${pngegg}`} alt="좌표 이동" />
      </div>
    </li>
  );
}

export default MapListItem;
