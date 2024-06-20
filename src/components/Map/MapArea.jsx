import { Container as MapContainer } from "react-naver-maps";
import MyMap from "./MyMap";

const NaverMapContainer = () => {
  return (
    <MapContainer className="w-full h-full">
      {/* NOTE: MyMap 컴포넌트에 lat 과 lng 를 prop 로 넘겨 외부에서 좌표 값을 받아올 수 있도록 설정함 */}
      <MyMap />
    </MapContainer>
  );
};

export default NaverMapContainer;
