import React from "react";
import MyMap from "./NaverMap";
import { Container as MapDiv } from "react-naver-maps";

const NaverMapContainer = () => {
  return <MapDiv style={{ width: "100%", height: "100%" }}>{/* <MyMap /> */}</MapDiv>;
};

export default NaverMapContainer;