import { forwardRef } from "react";
import cancel from "../../assets/Icons/cancel.png";
import { useModal } from "../../contexts/modal.context.jsx";

const BigModal = forwardRef(function BigModal({ children, onClose }, ref) {
  const modal = useModal();

  const closeModal = () => {
    modal.close();
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-black-default/70"
      data-modal-id="bigModal"
    >
      <div className="w-8 h-8">
        <img src={cancel} alt="x" className="fixed top-4 right-4 cursor-pointer" onClick={closeModal} />
      </div>
      <div
        className="flex flex-col justify-start items-start max-w-[calc(100%-80px)] w-full max-h-[calc(100%-80px)] h-full m-10 bg-white overflow-hidden"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
});

export default BigModal;
