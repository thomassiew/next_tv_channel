import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChannelHome from "../../pages";
import {
  ONE_MOCK_CHANNEL_DETAIL,
  ONE_MOCK_RESPONSE_CHANNEL,
  ONE_MOCK_RESPONSE_CHANNEL_DETAIL,
} from "../mocks/mock-data";
import ChannelDetailPage from "../../pages/channels/[detailUrl]";
import { getFilteredChannelSchedules } from "../../services/channelServices";

describe("Component Unit Testing", () => {
  it("Renders ChannelHome main page", async () => {
    render(<ChannelHome {...ONE_MOCK_RESPONSE_CHANNEL} />);

    expect(await screen.findByText(/CONTENT GUIDE/)).toBeVisible();
  });

  it("Renders ChannelDetail Page", async () => {
    render(<ChannelDetailPage {...ONE_MOCK_RESPONSE_CHANNEL_DETAIL} />);

    expect(
      screen.getByText(
        "TV1 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH101 now!"
      )
    ).toBeVisible();
  });
});

describe("Function Unit Testing", () => {
  it("getFilteredChannelSchedules", async () => {
    
    const schedule = getFilteredChannelSchedules(
      ONE_MOCK_CHANNEL_DETAIL.schedule["2021-03-09"],
      new Date("2022-05-23 01:30:00.0")
    );

    expect(schedule.length).toBeGreaterThanOrEqual(1);
  });
});
