import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { Channel } from "../../types/channel.types";
import Link from "next/link";
import { getFilteredChannelSchedules } from "../../services/channelServices";

const ChannelBox = ({ channel }: { channel: Channel }) => {
  const currentSchedule = channel.currentSchedule;
  const channelDetailUrl = channel.detailUrl;

  const filteredSchedule = getFilteredChannelSchedules(
    currentSchedule || [],
    new Date()
  );

  return (
    <Link href={`${channelDetailUrl}`} passHref>
      <div className="flex flex-col rounded shadow-astro p-2 m-2 cursor-pointer hover:shadow-astro-pink">
        <div className="flex flex-row border-b p-3">
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
        <div className="flex flex-col p-3">
          {filteredSchedule && filteredSchedule.length > 0 ? (
            filteredSchedule.slice(0, 3).map((schedule, index) => {
              const isFirstSchedule = index < 1;
              const scheduleTime =
                index < 1
                  ? "On Now"
                  : format(
                      new Date(schedule.datetime.replace(/ /g, "T")),
                      "hh:mm a"
                    );
              return (
                <div key={schedule.eventId} className="flex flex-row">
                  <div className="pr-5 min-w-6rem">
                    <p
                      className={`${
                        isFirstSchedule && "font-semibold text-left"
                      }`}
                    >
                      {scheduleTime ?? "N/A"}
                    </p>
                  </div>

                  <p
                    className={`truncate ${
                      isFirstSchedule && "font-semibold text-left"
                    } `}
                  >
                    {schedule?.title ?? "No information available"}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="flex flex-row">
              <div className="pr-5 min-w-1/4">
                <p className="font-semibold">N/A</p>
              </div>
              <p className="truncate font-semibold">No information available</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChannelBox;
