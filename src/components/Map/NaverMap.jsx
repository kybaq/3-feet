import React from "react";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";

function MyMap() {
  const naverMaps = useNavermaps();
  return (
    <NaverMap defaultCenter={new naverMaps.LatLng(37.3595704, 127.105399)} defaultZoom={15}>
      <Marker defaultPosition={new naverMaps.LatLng(37.3595704, 127.105399)} />
      <Marker defaultPosition={new naverMaps.LatLng(37.3595704, 128.105323)} />
    </NaverMap>
  );
}

export default MyMap;
