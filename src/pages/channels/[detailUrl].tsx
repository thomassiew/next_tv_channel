import { GetStaticPaths, GetStaticProps } from "next";
import ChannelDetailsBreadCrumbs from "../../components/channelDetails/ChannelDetailsBreadCrumbs";
import ChannelDetailsHeader from "../../components/channelDetails/ChannelDetailsHeader";
import ChannelDetailsSchedule from "../../components/channelDetails/ChannelDetailsSchedule";
import Container from "../../components/common/Container";
import Header from "../../components/common/Header";

import { ChannelDetails } from "../../types/channel.types";

interface PageProps {
  responseCode: number;
  responseMessage: string;
  response: ChannelDetails;
}

export default function Article(props: PageProps) {
  const channelDetails: ChannelDetails = props.response ?? {};
  return (
    props && (
      <>
        <Header />
        <Container className="mx-auto max-w-screen-md">
          <ChannelDetailsBreadCrumbs titles={[channelDetails.title]} />
          <ChannelDetailsHeader details={channelDetails} />
          <ChannelDetailsSchedule schedules={channelDetails.schedule ?? {}} />
        </Container>
      </>
    )
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const detailUrl = context.params?.detailUrl?.toString() ?? "";

  if (detailUrl.indexOf("-") < 0) {
    return {
      notFound: true,
    };
  }
  const id = detailUrl.substring(detailUrl.lastIndexOf("-") + 1);

  const data = await fetch(
    `https://contenthub-api.eco.astro.com.my/channel/${id}.json`
  ).then((res) => res.json());

  return {
    props: data,
    revalidate: 60 * 5,
  };
};
