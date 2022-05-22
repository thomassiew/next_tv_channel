import React from "react";
import { useStore } from "../../store/useStoreContext";
import Container from "../common/Container";

const ChannelRefineButton = () => {
  const { setIsOpenModal, languageKey, categoryKey, sortKey, resolutionKey } =
    useStore();

  const isRefined = () => {
    return languageKey || categoryKey || sortKey || resolutionKey;
  };
  return (
    <Container className="mt-3">
      <div className="flex flex-row-reverse">
        {isRefined() && (
          <div className="rounded-full w-3 h-3 bg-astro-pink absolute"></div>
        )}
        <button
          type="button"
          data-testid="refine-button"
          className="bg-transparent flex flex-row align-center"
          onClick={() => setIsOpenModal(true)}
        >
          <p className="mr-2 text-lg">Refine</p>
          <div className="block m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16.147"
              width="16"
              height="16"
            >
              <g>
                <path d="M0 0h16v16H0z" fill="none"></path>
                <g>
                  <path
                    fill="#333"
                    d="M6.076 7.63a1 1 0 01.262.674v7.342A.5.5 0 007.19 16l2.048-2.347c.274-.329.425-.492.425-.817v-4.53a1 1 0 01.262-.674l5.877-6.377A.748.748 0 0015.251 0H.749a.747.747 0 00-.55 1.254z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </Container>
  );
};

export default ChannelRefineButton;
