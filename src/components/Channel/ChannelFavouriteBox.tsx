import Image from "next/image";
import React from "react";
import { ChannelDetails } from "../../types/channel.types";
import Link from "next/link";

const ChannelFavouriteBox = ({ channel }: { channel: ChannelDetails }) => {
  const channelFavouriteURL = `${channel.title.replace(" ", "-")}-${
    channel.id
  }`;

  return (
    <Link href={`/channels/${channelFavouriteURL}`} passHref>
      <div className="flex flex-col rounded shadow-astro p-2 m-2 cursor-pointer hover:shadow-black">
        <div className="flex flex-row p-3">
          <div className="h-40px relative w-72px ">
            <Image
              src={
                channel.imageUrl || channel.backupImage || channel.originalImage
              }
              alt={channel.title}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">CH{channel.stbNumber}</p>
            <p className="font-bold">{channel.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChannelFavouriteBox;
