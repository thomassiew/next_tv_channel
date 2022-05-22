import React from "react";
import { useStore } from "../../../store/useStoreContext";
import _ from "lodash";

const ChannelLanguage = () => {
  const { initialData, languageKey, setLanguageKey } = useStore();
  const language = _.uniq(initialData.map((el) => el.language));

  return (
    <div className="flex flex-col mb-5">
      <h1 className="font-semibold text-sm mb-3">Language</h1>
      <div className="flex flex-wrap">
        {language.map((el) => {
          return (
            <button
              className={`mr-2 px-3 py-2 font-medium text-sm rounded-md min-w-fit mr-3 mb-3 ${
                languageKey !== el
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-black text-white"
              }`}
              key={el}
              onClick={() => {
                if (languageKey === el) {
                  setLanguageKey(undefined);
                } else {
                  setLanguageKey(el);
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

export default ChannelLanguage;
