import React from "react";
import { useStore } from "../../store/useStoreContext";

const ChannelSort = () => {
  const { setSortKey, sortKey } = useStore();
  const sorting = ["Name", "Number"];

  return (
    <div className="flex flex-col pb-6 border-b">
      <h1 className="font-semibold text-lg mb-3">Sort By</h1>
      <div className="flex flex-row">
        {sorting.map((el) => {
          return (
            <button
              className={`mr-2 px-3 py-2 font-medium rounded-md w-20 ${
                sortKey !== el
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-black text-white"
              }`}
              key={el}
              onClick={() => {
                if (sortKey === el) {
                  setSortKey(undefined);
                } else {
                  setSortKey(el);
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

export default ChannelSort;
