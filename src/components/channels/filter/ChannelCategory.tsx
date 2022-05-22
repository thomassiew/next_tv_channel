import React from "react";
import { useStore } from "../../../store/useStoreContext";
import _ from "lodash";

const ChannelCategory = () => {
  const { initialData, categoryKey, setCategoryKey } = useStore();
  const categories = _.uniq(initialData.map((el) => el.category));

  return (
    <div className="flex flex-col mb-5">
      <h1 className="font-semibold text-sm mb-3">Category</h1>
      <div className="flex flex-wrap">
        {categories.map((el) => {
          return (
            <button
              className={`mr-2 px-3 py-2 font-medium text-sm rounded-md min-w-fit mr-3 mb-3 ${
                categoryKey !== el
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-black text-white"
              }`}
              key={el}
              onClick={() => {
                if (categoryKey === el) {
                  setCategoryKey(undefined);
                } else {
                  setCategoryKey(el);
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

export default ChannelCategory;
