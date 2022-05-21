import React from "react";
import { GetStaticProps } from "next";
import Header from "../components/home/Header";
import ChannelListing from "../components/home/ChannelListing";

interface ChannelDataType {
  responseCode: number;
  responseMessage: string;
  response: any[];
}

export default function ChannelHome(props: ChannelDataType) {
  const data = props.response;
  return (
    props && (
      <>
        <Header />
        <ChannelListing channels={data} />
      </>
    )
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    `https://contenthub-api.eco.astro.com.my/channel/all.json`
  ).then((res) => res.json());

  return {
    props: data,
  };
};
