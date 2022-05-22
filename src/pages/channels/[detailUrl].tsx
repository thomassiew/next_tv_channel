import { GetStaticPaths, GetStaticProps } from "next";

interface PageProps {
  detailUrl: string;
}
export default function Article(props: PageProps) {
  return <h1>{props.detailUrl}</h1>;
}

export const getStaticPaths: GetStaticPaths = async (props) => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const detailUrl = context.params?.detailUrl?.toString();

  return {
    props: {
      detailUrl,
    },
  };
};
