import { createContext, useContext, useEffect, useState } from "react";

const initialValue = {
  open: () => {},
  close: () => {},
  isOpen: 0,
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export const useClickOutside = (ref, callback, modalId) => {
  const handleClick = (e) => {
    const modalElement = document.querySelector(`[data-modal-id="${modalId}"]`);

    if (modalElement && !ref.current?.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default function ModalProvider({ children }) {
  const [modalElementStack, setModalElementStack] = useState([]);

  // 스크롤 방지 기능
  useEffect(() => {
    if (modalElementStack.length > 0) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [modalElementStack]);

  const value = {
    open: (element) => {
      setModalElementStack((prevStack) => [...prevStack, element]);
    },
    close: () => {
      setModalElementStack((prevStack) => prevStack.slice(0, -1));
    },
    isOpen: modalElementStack.length > 0,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElementStack.map((ModalElement, index) => (
        <div key={index}>{ModalElement}</div>
      ))}
    </ModalContext.Provider>
  );
}
