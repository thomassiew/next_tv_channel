import { ChannelHomeProps } from "../../pages";
import { ChannelDetailProps } from "../../pages/channels/[detailUrl]";
import { Channel, ChannelDetails } from "../../types/channel.types";

export const ONE_MOCK_CHANNEL: Channel = {
  id: 395,
  title: "TV1 HD",
  description:
    "TV1 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH101 now!",
  isHd: true,
  stbNumber: "101",
  language: "Malay",
  category: "Variety Entertainment",
  originalImage: "http://linear-poster.astro.com.my/prod/logo/TV1_v1.png",
  backupImage:
    "http://linear-poster.astro.com.my/prod/poster/ivp_default_1028_IVP_LAND_448x252.jpg",
  imageUrl:
    "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/395_144.png",
  isAstroGoExclusive: false,
  filters: ["Set Top Box", "NJOI", "Variety Entertainment"],
  detailUrl: "/channels/TV1-HD-395",
  currentSchedule: [
    {
      eventId: "39408323",
      title: "Daun Ketupat Kering",
      programmeId: null,
      episodeId: null,
      datetime: "2022-05-23 03:30:00.0",
      datetimeInUtc: "2022-05-22 19:30:00.0",
      duration: "02:00:00",
      siTrafficKey: "1:10000501:46557472",
      detailUrl: "/details/Daun-Ketupat-Kering-1:10000501:46557472",
    },
  ],
};

export const ONE_MOCK_CHANNEL_DETAIL: ChannelDetails = {
  id: 395,
  title: "TV1 HD",
  description:
    "TV1 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH101 now!",
  isHd: true,
  stbNumber: "101",
  language: "Malay",
  category: "Variety Entertainment",
  originalImage: "http://linear-poster.astro.com.my/prod/logo/TV1_v1.png",
  backupImage:
    "http://linear-poster.astro.com.my/prod/poster/ivp_default_1028_IVP_LAND_448x252.jpg",
  imageUrl:
    "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/395_144.png",
  isAstroGoExclusive: false,
  filters: ["Set Top Box", "NJOI", "Variety Entertainment"],
  detailUrl: "/channels/TV1-HD-395",
  schedule: {
    "2021-03-09": [
      {
        eventId: "39408323",
        title: "Daun Ketupat Kering",
        programmeId: null,
        episodeId: null,
        datetime: "2022-05-23 03:30:00.0",
        datetimeInUtc: "2022-05-22 19:30:00.0",
        duration: "02:00:00",
        siTrafficKey: "1:10000501:46557472",
        detailUrl: "/details/Daun-Ketupat-Kering-1:10000501:46557472",
      },
    ],
  },
};

export const ONE_MOCK_RESPONSE_CHANNEL: ChannelHomeProps = {
  responseCode: 200,
  responseMessage: "Test",
  response: [ONE_MOCK_CHANNEL],
};

export const ONE_MOCK_RESPONSE_CHANNEL_DETAIL: ChannelDetailProps = {
  responseCode: 200,
  responseMessage: "Test",
  response: ONE_MOCK_CHANNEL_DETAIL,
};
