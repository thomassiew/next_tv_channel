import React from "react";
import Container from "../../common/Container";
import { useStore } from "../../store/useStoreContext";
import ChannelBox from "./ChannelBox";

const ChannelListing = () => {
  const { filteredData } = useStore();
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {filteredData &&
        filteredData.map((channel) => {
          return <ChannelBox key={channel.id} channel={channel} />;
        })}
    </Container>
  );
};

export default ChannelListing;
