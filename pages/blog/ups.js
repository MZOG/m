import { getAllPosts } from "../../lib/api";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Meta from "../../components/meta";
import Link from "next/link";

export default function Regulamin({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta title="Ups.." description="Regulamin strony Marcin Zogrodnik" />
      <Container classes="py-10 md:py-20">
        <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7">
          Ups..
        </h1>
        <p className="mb-2">
          Szukasz postu, który nie istnieje na nowej wersji strony.
        </p>
        <p className="mb-2">
          W Styczniu 2022 stworzyłem nową stronę i usunąłem poprzednie wpisy.
        </p>
        <p>
          Niedługo napiszę nowe, bardziej merytoryczne posty i na pewno
          znajdziesz coś ciekawego dla siebie.
        </p>

        <p className="mt-10">
          Na chwilę obecną zapraszam Cię do aktualnych postów.
        </p>

        <Link href="/blog">
          <a className="bg-blue-50 px-5 py-3 font-medium text-mz-default hover:text-white hover:bg-mz-default inline-block mt-5 rounded-full">
            Przejdź do sekcji blog
          </a>
        </Link>
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
