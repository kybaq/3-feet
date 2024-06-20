import { useCallback, useEffect, useRef } from "react";
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
    <section className="flex w-screen h-screen justify-center items-center p-10 font-Pretendard">
      <section className="w-full h-full">
        <MapHeader />
        <button
          className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
          onClick={handleOpenModal}
        >
          디테일 페이지
        </button>
        <section id="Map" className="flex justify-center items-center h-[calc(100%-7rem)] gap-8">
          <NavermapsProvider ncpClientId={CLIENT_ID}>
            <MapArea />
          </NavermapsProvider>
          <MapSideBar />
        </section>
      </section>
    </section>
  );
}

export default Map;
