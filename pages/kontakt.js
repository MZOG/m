import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Meta from "../components/meta";

export default function Kontakt({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta
        title="Kontakt"
        description="Masz pytanie dotyczące strony internetowej? Zadzwoń lub napisz do mnie. Nie martw się, nie będę za wszelką cenę próbował sprzedać Ci swoich usług."
      />
      <Container classes="md:pb-20">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7 text-mz-default">
            Kontakt
          </h1>

          <p className="md:text-[18px]">
            Masz pytanie dotyczące strony internetowej? Zadzwoń lub napisz do
            mnie. Nie martw się, nie będę za wszelką cenę próbował sprzedać Ci
            swoich usług.
          </p>
        </div>
      </Container>
      <Container classes="flex pb-20 mt-10 md:mt-0 justify-center">
        <div className="md:flex">
          <div className="mb-10 md:mb-0">
            <p className="font-medium mb-3 md:text-xl text-mz-default">
              Zadzwoń
            </p>
            <a
              href="tel:+48739907919"
              className="border border-dashed border-mz-default px-8 py-4 md:text-xl font-medium inline-block rounded-full leading-none hover:bg-mz-default hover:text-white"
            >
              +48 739 907 919
            </a>
          </div>
          <div className="md:ml-20">
            <p className="font-medium mb-3 md:text-xl text-mz-default">
              Wyślij wiadomość
            </p>
            <a
              href="mailto:kontakt@marcinzogrodnik.pl"
              className="border border-dashed border-mz-default px-8 py-4 md:text-xl font-medium inline-block rounded-full leading-none hover:bg-mz-default hover:text-white"
            >
              kontakt@marcinzogrodnik.pl
            </a>
          </div>
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
