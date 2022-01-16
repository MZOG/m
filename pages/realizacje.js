import { getAllPosts, getAllShowcase } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import ContactUs from "../components/contactUs";
import Meta from "../components/meta";

export default function Realizacje({ allPosts, allShowcase }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta
        title="Realizacje"
        description="Realizacje stron internetowych JAMstack oraz WordPress."
      />
      <Container classes="pb-20">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7 text-mz-default">
            Realizacje
          </h1>

          <p className="md:text-[18px]">
            Spradź moje ostatnie realizacje stron internetowych JAMstack oraz
            WordPress.
          </p>
        </div>
      </Container>
      <Container classes="md:grid grid-cols-2 gap-8 mb-10 md:mb-20">
        {allShowcase.map((showcase) => (
          <a
            target="_blank"
            key={showcase.slug}
            href={showcase.fullURL}
            className="group block pb-10"
          >
            <img className="rounded-xl mb-5" src={showcase.coverImage} />
            <div className="md:px-5">
              <h3 className="text-[22px] md:text-[27px] font-bold text-mz-default mb-5">
                {showcase.title}
              </h3>
              <p className="text-mz-default bg-blue-50 inline-block px-4 py-1 rounded-full mb-6 group-hover:bg-mz-default group-hover:text-white">
                {showcase.shortURL}
              </p>
              <p>{showcase.excerpt}</p>
            </div>
          </a>
        ))}
      </Container>
      <ContactUs />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "date"]);
  const allShowcase = getAllShowcase([
    "title",
    "slug",
    "date",
    "excerpt",
    "fullURL",
    "shortURL",
    "coverImage",
  ]);

  return {
    props: { allPosts, allShowcase },
  };
}
