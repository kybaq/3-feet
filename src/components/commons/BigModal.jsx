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
      <div className="flex flex-col justify-center items-center max-w-screen-xl w-full rounded-lg p-10 gap-y-4 bg-white">
        {children}
      </div>
    </div>
  );
}

export default BigModal;
