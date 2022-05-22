import React from "react";
import { useStore } from "../../../store/useStoreContext";
import _ from "lodash";

const ChannelResolution = () => {
  const { resolutionKey, setResolutionKey } = useStore();
  const resolution = ["NON HD", "HD"];
  return (
    <div className="flex flex-col mb-5">
      <h1 className="font-semibold text-sm mb-3">Resolution</h1>
      <div className="flex flex-wrap">
        {resolution.map((el) => {
          return (
            <button
              className={`mr-2 px-3 py-2 font-medium text-sm rounded-md min-w-fit mr-3 mb-3 ${
                resolutionKey !== el
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-black text-white"
              }`}
              key={el}
              onClick={() => {
                if (resolutionKey === el) {
                  setResolutionKey(undefined);
                } else {
                  setResolutionKey(el);
                }
              }}
            >
              <p>{el}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChannelResolution;
