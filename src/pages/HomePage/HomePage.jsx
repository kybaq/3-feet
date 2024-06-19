import { useNavigate } from "react-router-dom";
import BigModal from "../../components/commons/BigModal";
import Modal from "../../components/commons/Modal";
import { useModal } from "../../contexts/modal.context.jsx";

function HomePage() {
  const modal = useModal();
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/map");
  };
  return (
    <div>
      <p className="text-2xl text-primary-blue">색상 테스트</p>
      <p className="text-2xl text-secondary-color">색상 테스트</p>
      <br />
      <p className="text-2xl text-black-100">색상 테스트</p>
      <p className="text-2xl text-black-200">색상 테스트</p>
      <p className="text-2xl text-black-300">색상 테스트</p>
      <p className="text-2xl text-black-400">색상 테스트</p>
      <p className="text-2xl text-black-500">색상 테스트</p>
      <p className="text-2xl text-black-600">색상 테스트</p>
      <p className="text-2xl text-black-700">색상 테스트</p>
      <p className="text-2xl text-black-800">색상 테스트</p>
      <p className="text-2xl text-black-900">색상 테스트</p>
      <br />

      <p className="text-2xl text-blue-100">색상 테스트</p>
      <p className="text-2xl text-blue-200">색상 테스트</p>
      <p className="text-2xl text-blue-300">색상 테스트</p>
      <p className="text-2xl text-blue-400">색상 테스트</p>
      <p className="text-2xl text-blue-500">색상 테스트</p>
      <p className="text-2xl text-blue-600">색상 테스트</p>
      <p className="text-2xl text-blue-700">색상 테스트</p>
      <p className="text-2xl text-blue-800">색상 테스트</p>
      <p className="text-2xl text-blue-900">색상 테스트</p>

      <p className="text-2xl text-blue-100">색상 테스트</p>
      <p className="text-2xl text-blue-200">색상 테스트</p>
      <p className="text-2xl text-blue-300">색상 테스트</p>
      <p className="text-2xl text-blue-400">색상 테스트</p>
      <p className="text-2xl text-blue-500">색상 테스트</p>
      <p className="text-2xl text-blue-600">색상 테스트</p>
      <p className="text-2xl text-blue-700">색상 테스트</p>
      <p className="text-2xl text-blue-800">색상 테스트</p>
      <p className="text-2xl text-blue-900">색상 테스트</p>
      <div className="flex gap-x-4">
        <button
          className="bg-blue-400 rounded-lg text-white font-semibold px-4 py-1 mt-2 hover:bg-blue-500"
          onClick={() =>
            modal.open(
              <Modal onConfirm={handleConfirm}>
                <h2 className="text-2xl font-bold">제목입니다</h2>
                <p>
                  여기에 알맞는 내용을 넣어주세요
                  <br />
                  두줄이어야 뭔가 그럴싸 하네요
                </p>
              </Modal>,
            )
          }
        >
          모달 오픈
        </button>
        <button
          className="bg-blue-400 rounded-lg text-white font-semibold px-4 py-1 mt-2 hover:bg-blue-500"
          onClick={() =>
            modal.open(
              <BigModal>
                <h2 className="text-2xl font-bold">BigModal입니다</h2>
              </BigModal>,
            )
          }
        >
          빅 모달 오픈
        </button>
      </div>
    </div>
  );
}

export default HomePage;
