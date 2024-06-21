import React, { useEffect, useRef } from "react";
import { NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";
import { DEFAULT_ZOOM } from "../../constants/constants";
import usePlacesCoordsStore from "../../store/usePlacesCoordsStore";
import baseballField from "../../assets/Icons/baseball-field.png";
import {
  WIZ_COORDS,
  DINOS_COORDS,
  LIONS_COORDS,
  LANDERS_COORDS,
  EAGLES_COORDS,
  HEROES_COORDS,
  GIANTS_COORDS,
  TWINS_COORDS,
  BEARS_COORDS,
  TIGERS_COORDS,
} from "../../constants/constants";

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
      {/* KT Wiz */}
      <Marker
        position={new naverMaps.LatLng(WIZ_COORDS[0], WIZ_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(WIZ_COORDS[0], WIZ_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* NC Dinos */}
      <Marker
        position={new naverMaps.LatLng(DINOS_COORDS[0], DINOS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(DINOS_COORDS[0], DINOS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* SAMSUNG Lions */}
      <Marker
        position={new naverMaps.LatLng(LIONS_COORDS[0], LIONS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(LIONS_COORDS[0], LIONS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* SSG LANDERS */}
      <Marker
        position={new naverMaps.LatLng(LANDERS_COORDS[0], LANDERS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(LANDERS_COORDS[0], LANDERS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* Hanwha Eagles */}
      <Marker
        position={new naverMaps.LatLng(EAGLES_COORDS[0], EAGLES_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(EAGLES_COORDS[0], EAGLES_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* KIWOOM HEROES */}
      <Marker
        position={new naverMaps.LatLng(HEROES_COORDS[0], HEROES_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(HEROES_COORDS[0], HEROES_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* LOTTE GIANTS */}
      <Marker
        position={new naverMaps.LatLng(GIANTS_COORDS[0], GIANTS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(GIANTS_COORDS[0], GIANTS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* LG TWINS */}
      <Marker
        position={new naverMaps.LatLng(TWINS_COORDS[0], TWINS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(TWINS_COORDS[0], TWINS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* DOOSAN BEARS */}
      <Marker
        position={new naverMaps.LatLng(BEARS_COORDS[0], BEARS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(BEARS_COORDS[0], BEARS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
                </button>`,
        }}
      />
      {/* KIA TIGERS */}
      <Marker
        position={new naverMaps.LatLng(TIGERS_COORDS[0], TIGERS_COORDS[1])}
        onClick={() => mapRef.current.panTo(new naverMaps.LatLng(TIGERS_COORDS[0], TIGERS_COORDS[1]))}
        icon={{
          content: `<button class="marker-tooltip">
                <img src=${baseballField} width="32px"/> 홈 구장
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
