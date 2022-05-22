/* eslint-disable react-hooks/exhaustive-deps */
import { format, isToday } from "date-fns";
import React, { useEffect, useState } from "react";
import {
  convertScheduletoDaysObjects,
  getFilteredChannelSchedules,
} from "../../services/channelServices";
import { CurrentSchedule, Schedule } from "../../types/channel.types";
import Container from "../common/Container";

const ChannelDetailsSchedule = ({ schedules }: { schedules: Schedule }) => {
  const allDays = convertScheduletoDaysObjects(schedules);
  const [selectedDay, setSelectedDay] = useState<string>("TODAY");
  const [selectedSchedule, setSelectedSchedule] = useState<CurrentSchedule[]>(
    []
  );

  useEffect(() => {
    const selectedDateObj = allDays.find((el) => el.day === selectedDay);
    const selectedDate = selectedDateObj?.date;
    if (selectedDate) {
      const selectedSchedule = schedules[selectedDate];

      if (isToday(new Date(selectedDate))) {
        const filteredSchedule = getFilteredChannelSchedules(
          selectedSchedule,
          new Date()
        );
        setSelectedSchedule(filteredSchedule);
      } else {
        setSelectedSchedule(schedules[selectedDate]);
      }
    }
  }, [selectedDay]);

  return (
    <Container className="p-0 mt-4">
      <div className="flex flex-row py-3 px-5 text-black overflow-auto">
        {allDays &&
          allDays.length > 0 &&
          allDays.map(({ day }, index) => {
            return (
              <div key={index} className="flex items-center mr-4">
                <div
                  onClick={() => {
                    setSelectedDay(day);
                  }}
                  className={`flex items-center cursor-pointer py-2 min-w-max ${
                    selectedDay === day && "border-b-2 border-astro-pink"
                  }`}
                >
                  <p
                    className={`items-center ${
                      selectedDay === day
                        ? "text-black font-bold"
                        : "hover:text-black hover:font-bold "
                    }`}
                  >
                    {day}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col py-3 px-5">
        {selectedSchedule &&
          selectedSchedule.length > 0 &&
          selectedSchedule.map((schedule, index) => {
            const specialToday =
              isToday(new Date(schedule.datetime)) && index === 0;
            const scheduleTime = specialToday
              ? "On Now"
              : format(new Date(schedule.datetime), "hh:mm a");

            return (
              <div key={schedule.eventId} className="flex flex-row">
                <div className="pr-5 min-w-6rem mr-4">
                  <p className={`text-gray-600 ${specialToday && "font-semibold text-left"}`}>
                    {scheduleTime ?? "N/A"}
                  </p>
                </div>

                <p
                  className={`truncate text-gray-600 ${
                    specialToday && "font-semibold text-left"
                  }`}
                >
                  {schedule?.title ?? "No information available"}
                </p>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default ChannelDetailsSchedule;
