import Image from "next/image";
import React from "react";
import { ChannelDetails } from "../../types/channel.types";
import Container from "../common/Container";

const ChannelDetailsHeader = ({ details }: { details: ChannelDetails }) => {
  const channel = details;
  return (
    <Container className="p-0">
      <div className="flex flex-col px-2">
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
            <p className="font-semibold">CH{channel.stbNumber} </p>
            <p className="font-bold">{channel.title}</p>
          </div>
          {channel.isAstroGoExclusive && (
            <div className="px-5 h-16px relative w-16px ">
              <Image
                src={"/astrogo.png"}
                alt="astro-go"
                layout={"fill"}
                objectFit={"contain"}
              />
            </div>
          )}
        </div>

        <h1 className="p-3 font-medium">{channel.description}</h1>
        <p className="px-3 font-normal text-sm text-gray-600">Language: {channel.language}</p>
        <p className="px-3 font-normal text-sm text-gray-600">Category: {channel.category}</p>
      </div>
    </Container>
  );
};

export default ChannelDetailsHeader;
