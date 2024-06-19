import { useModal } from "../../contexts/modal.context.jsx";

// 확인, 취소 기능이 있는 modal
function Modal({ children, onConfirm }) {
  const modal = useModal();

  return (
    <div className="fixed flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-black-default/70">
      <div className="flex flex-col justify-center items-center max-w-96 w-full rounded-lg p-10 gap-y-4 bg-white">
        {children}
        <div className=" flex justify-end gap-x-2 ">
          <button
            className="bg-blue-400 rounded-lg text-white font-semibold px-6 py-1 mt-2 hover:bg-blue-500"
            onClick={() => {
              if (onConfirm) onConfirm();
              modal.close();
            }}
          >
            확인
          </button>
          <button
            className="border border-blue-300 rounded-lg text-black-400 font-semibold px-6 py-1 mt-2 hover:text-black-500"
            onClick={() => modal.close()}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
