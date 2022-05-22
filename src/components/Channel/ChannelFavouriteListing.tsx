import React from "react";
import Container from "../common/Container";
import { useStore } from "../../store/useStoreContext";

import ChannelFavouriteBox from "./ChannelFavouriteBox";

const ChannelFavouriteListing = () => {
  const { favouriteChannels } = useStore();

  if (!favouriteChannels || favouriteChannels.length < 1) {
    return <div />;
  }
  return (
    <Container>
      <div className="mb-2">
        <h1 className="text-xl font-semibold p-3">
          My Favourite Channel{favouriteChannels.length > 1 && "s"}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {favouriteChannels &&
          favouriteChannels.length > 0 &&
          favouriteChannels.map((channel) => {
            return <ChannelFavouriteBox key={channel.id} channel={channel} />;
          })}
      </div>
    </Container>
  );
};

export default ChannelFavouriteListing;
