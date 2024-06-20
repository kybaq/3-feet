import { Suspense, useCallback, useEffect, useRef } from "react";
import { NavermapsProvider } from "react-naver-maps";
import { useSearchParams } from "react-router-dom";
import "../../App";
import sampleImg2 from "../../assets/Img/sampleImg.jpg";
import MapArea from "../../components/Map/MapArea";
import MapHeader from "../../components/Map/MapHeader";
import MapSideBar from "../../components/Map/MapSideBar";
import { useClickOutside, useModal } from "../../contexts/modal.context";
import DetailPage from "../DetailPage/DetailPage";

function Map() {
  const CLIENT_ID = import.meta.env.VITE_APP_NAVER_MAP_ID;
  const modal = useModal();
  const modalRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenModal = () => {
    setSearchParams({
      id: 123,
    });
  };

  const onClose = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  useClickOutside(modalRef, () => {
    onClose();
  });

  useEffect(() => {
    const modalId = searchParams.get("id");
    if (modalId && !modal.isOpen) {
      modal.open(<DetailPage ref={modalRef} images={sampleImg2} onClose={onClose} />);
    } else if (!modalId && modal.isOpen) {
      modal.close();
    }
  }, [searchParams, modal, onClose]);

  return (
    <NavermapsProvider ncpClientId={CLIENT_ID}>
      {/* 
      다양한 컴포넌트가 비동기 로직을 사용하고 있어서 로딩이 안될 시 오류가 발생합니다.
        따라서 컴포넌트가 정상적으로 렌더링이 되기 위해 데이터가 필요한 상황에,
        데이터가 없다면 다른 컴포넌트를 먼저 렌더링 하도록 지도와 관련한 모든 요소들을 Suspense 로 감싸주었습니다!
        Suspense 에 fallback 을 통해 컴포넌트를 넘겨주면 로딩 중에 대신 보여줄 컴포넌트를 설정할 수 있습니다!
      */}
      <Suspense>
        <section className="flex w-screen h-screen justify-center items-center p-10 font-Pretendard">
          <section className="w-full h-full">
            <button
              className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
              onClick={handleOpenModal}
            >
              디테일 페이지
            </button>
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
