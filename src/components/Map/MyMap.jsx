import React, { useEffect, useRef } from "react";
import { NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";
import { DEFAULT_ZOOM } from "../../constants/constants";
import usePlacesCoordsStore from "../../store/usePlacesCoordsStore";
import baseballField from "../../assets/Icons/baseball-field.png";

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

  const {
    data: selectedClubInfo,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["clubInfo", selectedClubId],
    queryFn: () => fetchClubById(selectedClubId),
    enabled: !!selectedClubId,
  });

  useEffect(() => {
    if (selectedClubInfo) {
      const nextCoords = new naverMaps.LatLng(selectedClubInfo.latitude, selectedClubInfo.longitude);
      setCenterCoords(nextCoords);
    }
  }, [selectedClubInfo]);

  useEffect(() => {
    if (mapRef.current && centerCoords) {
      mapRef.current.panTo(centerCoords);
    }
  }, [mapRef.current, centerCoords]);

  if (isPending) {
    return <div>로딩 중..</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <NaverMap
      defaultCenter={centerCoords}
      defaultZoom={DEFAULT_ZOOM}
      ref={mapRef}
      minZoom={DEFAULT_ZOOM}
      zoomControl={true}
      zoomControlOptions={{
        position: naverMaps.Position.TOP_LEFT,
        style: naverMaps.ZoomControlStyle.SMALL,
      }}
    >
      <Marker
        position={centerCoords}
        onClick={() => mapRef.current.panTo(centerCoords)}
        icon={{
          content: `<button class="marker-tooltip">
                <div class="marker-tooltipr"><img src=${baseballField} width="32px"/> 홈 구장</div>
                </button>`,
        }}
      />

      {placesCoords &&
        placesCoords.map((placesCoord, index) => {
          return (
            <Marker
              key={index}
              position={new naverMaps.LatLng(placesCoord.latitude, placesCoord.longitude)}
              onClick={() => mapRef.current.panTo(new naverMaps.LatLng(placesCoord.latitude, placesCoord.longitude))}
            />
          );
        })}
      {/* marker 클릭 시 zoom 하는 효과? */}
      {/* TODO: panning 해도 화면에 보이는 영역만 marker 하기 */}
    </NaverMap>
  );
}

export default MyMap;
