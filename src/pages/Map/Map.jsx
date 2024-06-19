import { useNavigate } from "react-router-dom";
import sampleImg2 from "../../assets/Img/sampleImg.jpg";
import { useModal } from "../../contexts/modal.context";
import DetailPage from "../DetailPage/DetailPage";

function Map() {
  const modal = useModal();
  const navigate = useNavigate();

  const id = 123;

  const handleOpenModal = () => {
    navigate(`detail/${id}`);
    modal.open(<DetailPage images={sampleImg2} />);
  };

  return (
    <>
      <button
        className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
        onClick={handleOpenModal}
      >
        디테일 페이지
      </button>
    </>
  );
}

export default Map;
