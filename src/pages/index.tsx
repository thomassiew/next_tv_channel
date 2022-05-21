/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import Header from "../components/common/Header";
import { ChannelDetails } from "../types/channel.types";
import ChannelListing from "../components/home/Channel/ChannelListing";
import Search from "../components/common/Search";
import { useStore } from "../components/store/useStoreContext";

interface ChannelDataType {
  responseCode: number;
  responseMessage: string;
  response: ChannelDetails[];
}

export default function ChannelHome(props: ChannelDataType) {
  const data: ChannelDetails[] = props.response;
  const { searchKey, setFilteredData, setSearchKey } = useStore();

  useEffect(() => {
    if (data) setFilteredData(data);
  }, []);

  useEffect(() => {
    if (!searchKey) setFilteredData(data);
  }, [searchKey]);
  return (
    props && (
      <>
        <Header />
        <Search onSubmit={setSearchKey} />
        <ChannelListing />
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
