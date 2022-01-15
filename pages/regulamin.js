import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Meta from "../components/meta";

export default function Regulamin({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta title="Regulamin" description="Regulamin strony Marcin Zogrodnik" />
      <Container classes="py-10 md:py-20 md:flex items-center justify-between flex-wrap">
        <div className="md:w-1/2">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7">
            Regulamin
          </h1>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "date"]);

  return {
    props: { allPosts },
  };
}
