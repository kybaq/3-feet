import { useNavigate } from "react-router-dom";
import sampleImg from "../../assets/Icons/user.png";
import Modal from "../../components/commons/Modal";
import { useModal } from "../../contexts/modal.context";
import BigModal from "./../../components/commons/BigModal";

function DetailPage() {
  const modal = useModal();
  const navigate = useNavigate();

  const handleGoHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <button
        className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
        onClick={() =>
          modal.open(
            <Modal onConfirm={handleGoHomePage}>
              <h2 className="text-2xl font-bold">제목입니다.</h2>
              <p>
                넣으실 컨텐츠를 작성해주세요. <br />
                예시는 두 줄로 넣었습니다.
              </p>
            </Modal>,
          )
        }
      >
        모달 오픈
      </button>
      <button
        className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
        onClick={() =>
          modal.open(
            <BigModal onConfirm={handleGoHomePage}>
              <img src={sampleImg} alt="샘플" className="w-[600px] h-[600px]" />
            </BigModal>,
          )
        }
      >
        big 모달 오픈
      </button>
    </>
  );
}

export default DetailPage;
