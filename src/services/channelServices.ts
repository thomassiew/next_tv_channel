import { CurrentSchedule, Schedule } from "../types/channel.types";
import { format, isToday } from "date-fns";

export const getFilteredChannelSchedules = (
  schedules: CurrentSchedule[],
  dateTime: Date
) => {
  const getCurrentSchedule = schedules.filter(
    (s) =>
      dateTime.getTime() <
      new Date(s.datetime).getTime() + convertDurationToMilliSeconds(s.duration)
  );

  return getCurrentSchedule;
};

const convertDurationToMilliSeconds = (duration: string) => {
  const splittedDuration = duration.split(":");

  const seconds =
    +splittedDuration[0] * 60 * 60 +
    +splittedDuration[1] * 60 +
    +splittedDuration[2];

  return seconds * 1000;
};

export const convertScheduletoDaysObjects = (schedules: Schedule | {}) => {
  return Object.keys(schedules).map((s) => {
    const currentDate = new Date(s);

    return {
      day: isToday(currentDate)
        ? "TODAY"
        : format(currentDate, "E").toUpperCase(),
      date: s,
    };
  });
};
