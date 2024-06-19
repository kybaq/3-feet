import cancel from "../../assets/Icons/cancel.png";
import { useModal } from "../../contexts/modal.context.jsx";

function BigModal({ children }) {
  const modal = useModal();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      modal.close();
    }
  };

  return (
    <div
      className="fixed flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-black-default/70"
      onClick={handleBackgroundClick}
    >
      <div className="w-8 h-8">
        <img src={cancel} alt="x" className="fixed top-4 right-4 cursor-pointer" onClick={() => modal.close()} />
      </div>
      <div className="flex flex-col justify-start items-start max-w-screen-xl w-full bg-white">{children}</div>
    </div>
  );
}

export default BigModal;
