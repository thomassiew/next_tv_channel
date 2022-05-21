export interface ChannelDetails {
  id: number;
  title: string;
  description: string;
  isHd: boolean;
  stbNumber: string;
  language: string;
  category: string;
  originalImage: string;
  backupImage: string;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  filters: string[];
  currentSchedule: Schedule[];
}

export interface Schedule {
  eventId: string;
  title: string;
  programmeId: null;
  episodeId: null;
  datetime: Date;
  datetimeInUtc: Date;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
}
