export interface Channel {
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
  detailUrl?: string;
  currentSchedule?: CurrentSchedule[];
}

export interface CurrentSchedule {
  eventId: string;
  title: string;
  programmeId: null;
  episodeId: null;
  datetime: string;
  datetimeInUtc: string;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
}

export interface Schedule {
  [key: string]: CurrentSchedule[];
}

export interface ChannelDetails extends Channel {
  schedule: Schedule;
}
