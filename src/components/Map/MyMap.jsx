import React, { useEffect, useRef, useState } from "react";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function MyMap({ lat, lng }) {
  const naverMaps = useNavermaps();
  // NOTE: 직접 사용한 결과, setMap 을 ref 로 사용하거나 useRef 를 사용하거나 동작은 문제 없어 보임.
  // 하지만, 공식 문서의 방법을 따르기로 함.
  const [map, setMap] = useState(null);
  // const mapRef = useRef(null);

  const defaultLatitude = 37.3995704;
  const defaultLongitude = 127.105399;

  const defaultZoom = 10;

  const selectedClubId = useSelectedClubStore((state) => state.selectedClub);

  // NOTE: state 로 관리해서 외부 값을 받아 처리하도록 함.
  const [centerCoords, setCenterCoords] = useState(
    new naverMaps.LatLng(lat || defaultLatitude, lng || defaultLongitude),
  );

  // TODO: 기본 값은 유저 관심 구단으로 추후 교체 필요함.

  const { data: selectedClubInfo } = useQuery({
    queryKey: ["clubInfo", selectedClubId],
    queryFn: () => fetchClubById(selectedClubId),
    enabled: !!selectedClubId,
  });

  useEffect(() => {
    if (selectedClubInfo) {
      // const latitude = lat || selectedClubInfo.latitude;
      // const longitude = lng || selectedClubInfo.longitude;
      const nextCoords = new naverMaps.LatLng(selectedClubInfo.latitude, selectedClubInfo.longitude);
      setCenterCoords(nextCoords);
    }
  }, [selectedClubInfo]);

  useEffect(() => {
    if (map && centerCoords) {
      map.panTo(centerCoords);
    }
  }, [map, centerCoords]);

  return (
    <NaverMap defaultCenter={centerCoords} defaultZoom={defaultZoom} ref={setMap} minZoom={defaultZoom}>
      <Marker defaultPosition={centerCoords} />
      {/* NOTE: 추후 list 를 받아 표현 */}
      {/* NOTE: 반경 10km 까지 */}
      {/* <Marker defaultPosition={new naverMaps.LatLng(37.3595704, 127.105399)} /> */}
      {/* TODO: panning 해도 화면에 보이는 영역만 marker 하기 */}
    </NaverMap>
  );
}

export default MyMap;
