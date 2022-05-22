import Image from "next/image";
import React from "react";
import { useStore } from "../../store/useStoreContext";
import { ChannelDetails } from "../../types/channel.types";
import Container from "../common/Container";

const ChannelDetailsHeader = ({ details }: { details: ChannelDetails }) => {
  const channel = details;
  const { favouriteChannels, handleFavouriteData } = useStore();
  let isFavourite = favouriteChannels.find(
    (channel) => channel.id === details.id
  );

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
          <div className="ml-4">
            <button
              type="button"
              className="bg-transparent"
              onClick={() => handleFavouriteData(channel)}
            >
              <svg
                className={`w-6 h-6 text-gray-300 dark: ${
                  isFavourite ? "text-yellow-400" : "text-grey-400"
                } `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
          </div>
        </div>

        <h1 className="p-3 font-medium">{channel.description}</h1>
        <p className="px-3 font-normal text-sm text-gray-600">
          Language: {channel.language}
        </p>
        <p className="px-3 font-normal text-sm text-gray-600">
          Category: {channel.category}
        </p>
      </div>
    </Container>
  );
};

export default ChannelDetailsHeader;
