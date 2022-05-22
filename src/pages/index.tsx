/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import Header from "../components/common/Header";
import { Channel } from "../types/channel.types";
import ChannelListing from "../components/channels/ChannelListing";
import Search from "../components/common/Search";
import { useStore } from "../store/useStoreContext";
import ChannelRefineButton from "../components/channels/ChannelRefineButton";
import Modal from "../components/common/Modal";
import ChannelSort from "../components/channels/ChannelSort";
import { Seo } from "../components/common/Seo";
import ChannelFilter from "../components/channels/filter/ChannelFilter";
import ChannelFavouriteListing from "../components/channels/ChannelFavouriteListing";

export interface ChannelHomeProps {
  responseCode: number;
  responseMessage: string;
  response: Channel[];
}

export default function ChannelHome(props: ChannelHomeProps) {
  const data: Channel[] = props.response;
  const { setInitialData, setSearchKey, isOpenModal } = useStore();
  useEffect(() => {
    if (data) setInitialData(data);
  }, []);

  return (
    props && (
      <>
        <Seo
          title="Channels | Astro Content Guide"
          description="Astro Content Guide, astro coding challenge"
        />
        {isOpenModal && (
          <Modal>
            <ChannelSort />
            <ChannelFilter />
          </Modal>
        )}
        <Header />
        <Search onSubmit={setSearchKey} />
        <ChannelFavouriteListing />
        <ChannelRefineButton />
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
    revalidate: 60 * 5,
  };
};
