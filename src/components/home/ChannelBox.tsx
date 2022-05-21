import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { ChannelDetails } from "../../types/channel.types";

const ChannelBox = ({ channel }: { channel: ChannelDetails }) => {
  const currentSchedule = channel.currentSchedule;

  
  return (
    <div className="flex flex-col rounded shadow-astro p-2 m-2">
      <div className="flex flex-row border-b p-3">
        <div className="h-40px relative w-72px ">
          <Image
            src={channel.imageUrl}
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
        {currentSchedule &&
          currentSchedule.length > 0 &&
          currentSchedule.slice(0, 3).map((schedule, index) => {
            const isFirstSchedule = index < 1;
            const scheduleTime =
              index < 1
                ? "On Now"
                : format(new Date(schedule.datetimeInUtc), "h:mm a");
            return (
              <div key={schedule.eventId} className="flex flex-row">
                <div className="pr-5 min-w-1/3">
                  <p className={`${isFirstSchedule && "font-semibold"}`}>
                    {scheduleTime}
                  </p>
                </div>
                <div>
                  <p className={`${isFirstSchedule && "font-semibold"}`}>
                    {schedule.title}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChannelBox;
