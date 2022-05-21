import React from "react";
import { GetStaticProps } from "next";

interface ChannelDataType {
  responseCode: number;
  responseMessage: string;
  response: any[];
}

const ChannelBox = ({ channel }: { channel: any }) => {
  return (
    <div className="border rounded-md shadow px-3 py-2">
      <div className="text-lg text-bold py-2">
        {channel.title}{" "}
        <span className="text-sm text-gray-500 ml-3">
          CH{channel.stbNumber}
        </span>
      </div>
      <div className="text-sm text-gray-700">ℹ️ {channel.description}</div>
    </div>
  );
};

export default function Home(props: ChannelDataType) {
  const data = props.response;
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {props && (
        <div className="py-7">
          {data.map((channel) => {
            return <ChannelBox key={channel.id} channel={channel} />;
          })}
        </div>
      )}
    </>
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
