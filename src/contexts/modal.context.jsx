import { createContext, useContext, useEffect, useState } from "react";

const initialValue = {
  open: () => {},
  close: () => {},
  isOpen: false,
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
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
  const [modalElement, setModalElement] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // 스크롤 방지 기능
  useEffect(() => {
    if (modalElement) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [modalElement]);

  const value = {
    open: (element) => {
      setModalElement(element);
      setIsOpen(true);
    },
    close: () => {
      setModalElement(null);
      setIsOpen(false);
    },
    isOpen,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
