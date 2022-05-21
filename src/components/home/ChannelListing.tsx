import React from "react";
import { ChannelDetails } from "../../types/channel.types";
import Container from "../common/Container";
import ChannelBox from "./ChannelBox";

const ChannelListing = ({ channels }: { channels: ChannelDetails[] }) => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {channels &&
        channels.map((channel) => {
          return <ChannelBox key={channel.id} channel={channel} />;
        })}
    </Container>
  );
};

export default ChannelListing;
