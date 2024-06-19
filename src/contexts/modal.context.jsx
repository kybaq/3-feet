import { createContext, useContext, useEffect, useState } from "react";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
  const [modalElement, setModalElement] = useState(null);

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
    },
    close: () => {
      setModalElement(null);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* <Outlet /> */}
      {modalElement}
    </ModalContext.Provider>
  );
}
