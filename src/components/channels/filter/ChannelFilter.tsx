import React from "react";
import ChannelCategory from "./ChannelCategory";
import ChannelLanguage from "./ChannelLanguage";
import ChannelResolution from "./ChannelResolution";

const ChannelFilter = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-lg my-5">Filter By</h1>
      <ChannelCategory />
      <ChannelLanguage />
      <ChannelResolution />
    </div>
  );
};

export default ChannelFilter;
