import { Suspense } from "react";
import { NavermapsProvider } from "react-naver-maps";
import "../../App";
import MapArea from "../../components/Map/MapArea";
import MapHeader from "../../components/Map/MapHeader";
import MapSideBar from "../../components/Map/MapSideBar";

function Map() {
  const CLIENT_ID = import.meta.env.VITE_APP_NAVER_MAP_ID;

  return (
    <NavermapsProvider ncpClientId={CLIENT_ID}>
      {/* 
      다양한 컴포넌트가 비동기 로직을 사용하고 있어서 로딩이 안될 시 오류가 발생합니다.
        따라서 컴포넌트가 정상적으로 렌더링이 되기 위해 데이터가 필요한 상황에,
        데이터가 없다면 다른 컴포넌트를 먼저 렌더링 하도록 지도와 관련한 모든 요소들을 Suspense 로 감싸주었습니다!
        Suspense에 fallback 을 통해 컴포넌트를 넘겨주면 로딩 중에 대신 보여줄 컴포넌트를 설정할 수 있습니다!
      */}
      <Suspense>
        <section className="flex w-screen h-screen justify-center items-center p-10 font-Pretendard">
          <section className="w-full h-full">
            <MapHeader />
            <section id="Map" className="flex justify-center items-center h-[calc(100%-7rem)] gap-8 w-full">
              <MapArea className="w-2/3" />
              <MapSideBar className="w-1/3" />
            </section>
          </section>
        </section>
      </Suspense>
    </NavermapsProvider>
  );
}

export default Map;
