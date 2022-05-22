import React from "react";
import { useStore } from "../../store/useStoreContext";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const { setIsOpenModal, resetAll } = useStore();

  return (
    <div className="fixed z-50 w-full h-full bg-modal-black overflow-hidden">
      <div className="fixed w-full max-w-sm top-0 right-0 bg-white h-full z-80 overflow-auto">
        <div className="flex flex-col h-screen ">
          <div className="flex justify-between items-center p-5 border-b">
            <button
              onClick={() => resetAll()}
              type="button"
              className="text-black font-bold bg-transparent rounded border-2 border-black p-3"
            >
              RESET
            </button>
            <button
              type="button"
              className="bg-transparent"
              onClick={() => setIsOpenModal(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
