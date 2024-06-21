import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import buliding from "../../assets/Icons/building.png";
import locationIcon from "../../assets/Icons/pngegg.png";
import sampleImg2 from "../../assets/Img/sampleImg.jpg";
import { useClickOutside, useModal } from "../../contexts/modal.context";
import DetailPage from "../../pages/DetailPage/DetailPage";
import useCenterCoordsStore from "../../store/useCenterCoordsStore";
import usePlacesCoordsStore from "../../store/usePlacesCoordsStore";
import useStoreInfo from "../../store/useStoreInfo.store";

function MapListItem({ placeInfo }) {
  const modal = useModal();
  const modalRef = useRef(null);
  const { setStoreInfo } = useStoreInfo();
  const { setCenterCoords } = useCenterCoordsStore();
  const { addPlaceCoords } = usePlacesCoordsStore();
  const coord = { latitude: placeInfo.mapy, longitude: placeInfo.mapx };

  const [searchParams, setSearchParams] = useSearchParams();
  const handleOpenModal = () => {
    const storeInfo = {
      title: placeInfo.title,
      address: placeInfo.addr1,
      image: placeInfo.firstimage,
      contentId: placeInfo.contentid,
    };
    setStoreInfo(storeInfo);

    setSearchParams({
      id: placeInfo.contentid,
    });
  };
  const onClose = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  useClickOutside(modalRef, () => {
    onClose();
  });

  useEffect(() => {
    addPlaceCoords(coord);
    const modalId = searchParams.get("id");
    if (modalId && !modal.isOpen) {
      modal.open(<DetailPage ref={modalRef} images={sampleImg2} onClose={onClose} />);
    } else if (!modalId && modal.isOpen) {
      modal.close();
    }
  }, [searchParams, modal, onClose]);

  return (
    <li
      key={placeInfo.contentid}
      className="flex justify-evenly items-center h-24 w-96 border border-slate-300 bg-gray-200 rounded-xl p-2"
    >
      <div className="w-24 hover:cursor-pointer" onClick={handleOpenModal}>
        <img
          className="object-cover h-16 rounded-xl"
          src={`${placeInfo.firstimage}` || `${buliding}`}
          alt="가게 사진"
        />
      </div>
      <div className="w-36">
        <span className="hover:cursor-pointer" onClick={handleOpenModal}>
          {placeInfo.title}
        </span>
      </div>
      <div className="w-6 cursor-pointer" onClick={() => setCenterCoords(placeInfo.mapy, placeInfo.mapx)}>
        <img className="object-cover h-8" src={`${locationIcon}`} alt="좌표 이동" />
      </div>
    </li>
  );
}

export default MapListItem;
