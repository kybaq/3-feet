import React, { useEffect, useState } from "react";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "../../apis/supabase/supabase.api";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function MyMap() {
  const naverMaps = useNavermaps();
  const [map, setMap] = useState(null);

  const selectedClubId = useSelectedClubStore((state) => state.selectedClub);
  const centerCoords = new naverMaps.LatLng(37.3595704, 127.105399);

  // NOTE: 기본 값은 유저 관심 구단으로 추후 교체 필요함.

  const { data: selectedClubInfo } = useQuery({
    queryKey: ["clubInfo", selectedClubId],
    queryFn: () => fetchClubById(selectedClubId),
    enabled: !!selectedClubId,
  });

  useEffect(() => {
    if (selectedClubInfo) {
      const nextCoords = new naverMaps.LatLng(selectedClubInfo.latitude, selectedClubInfo.longitude);
      map.panTo(nextCoords);
    }
  }, [selectedClubInfo]);

  return (
    <NaverMap defaultCenter={centerCoords} defaultZoom={15} ref={setMap}>
      <Marker defaultPosition={centerCoords} />
      {/* NOTE: 추후 list 를 받아 표현 */}
      {/* <Marker defaultPosition={new naverMaps.LatLng(37.3595704, 127.105399)} /> */}
    </NaverMap>
  );
}

export default MyMap;
