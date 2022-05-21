import { Schedule } from "../types/channel.types";
import { isSameDay } from "date-fns";

export const getFilteredChannelSchedules = (
  schedules: Schedule[],
  dateTime: Date
) => {
  const filterSameDaySchedule = schedules.filter((s) =>
    isSameDay(dateTime, new Date(s.datetimeInUtc))
  );

  const getCurrentSchedule = filterSameDaySchedule.filter(
    (s) =>
      dateTime.getTime() >
      new Date(s.datetimeInUtc).getTime() +
        convertDurationToMilliSeconds(s.duration)
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
