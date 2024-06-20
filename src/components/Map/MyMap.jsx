import React, { useEffect, useRef } from "react";
import { NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";
import { DEFAULT_ZOOM } from "../../constants/constants";
import usePlacesCoordsStore from "../../store/usePlacesCoordsStore";

function MyMap() {
  // NOTE: 공식 문서 상에서는 지도 DOM 요소 선택 시 useState 를 ref 로서 사용
  // NOTE: 그러나, useState vs useRef 직접 사용한 결과, state 를 ref 로 사용할 시 무한 렌더링 오류 발생해 useRef 사용.
  const naverMaps = useNavermaps();
  const mapRef = useRef(null);

  // NOTE: state 로 관리해서 외부 값을 받아 처리하도록 함.
  // TODO: 기본 값은 유저 관심 구단으로 추후 교체 필요함.
  const { selectedClubId } = useSelectedClubStore();
  const { centerCoords, setCenterCoords } = useCenterCoordsStore();
  const { placesCoords } = usePlacesCoordsStore();

  const { data: selectedClubInfo } = useQuery({
    queryKey: ["clubInfo", selectedClubId],
    queryFn: () => fetchClubById(selectedClubId),
    enabled: !!selectedClubId,
  });

  useEffect(() => {
    if (selectedClubInfo) {
      const nextCoords = new naverMaps.LatLng(selectedClubInfo.latitude, selectedClubInfo.longitude);
      setCenterCoords(nextCoords);
      console.log(placesCoords[0].latitude, placesCoords[0].longitude);
    }
  }, [selectedClubInfo]);

  useEffect(() => {
    if (mapRef.current && centerCoords) {
      mapRef.current.panTo(centerCoords);
    }
  }, [mapRef.current, centerCoords]);

  return (
    <NaverMap defaultCenter={centerCoords} defaultZoom={DEFAULT_ZOOM} ref={mapRef} minZoom={DEFAULT_ZOOM}>
      <Marker position={centerCoords} />
      {placesCoords &&
        placesCoords.map((placesCoord, index) => {
          return <Marker key={index} position={new naverMaps.LatLng(placesCoord.latitude, placesCoord.longitude)} />;
        })}
      {/* marker 클릭 시 zoom 하는 효과? */}
      {/* TODO: panning 해도 화면에 보이는 영역만 marker 하기 */}
    </NaverMap>
  );
}

export default MyMap;
