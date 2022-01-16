import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";
import ContactUs from "../../components/contactUs";
import Meta from "../../components/meta";

export default function Blog({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta
        title="Blog"
        description="Piszę o głównie na tematy związane z moją pasją, czyli programowaniem - Front End. Znajdziesz tutaj też troszkę SEO, poradników itd."
      />
      <Container classes="pb-20">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7 text-mz-default">
            Blog
          </h1>

          <p className="md:text-[18px]">
            Piszę o głównie na tematy związane z moją pasją, czyli
            programowaniem - Front End. Znajdziesz tutaj też troszkę SEO,
            poradników itd.
          </p>
        </div>
      </Container>
      <Container classes="md:grid grid-cols-2 gap-8 mb-10 md:mb-20">
        {allPosts.map((post, index) => {
          const formatted = format(parseISO(post.date), "dd MMMM yyyy", {
            locale: pl,
          });
          return (
            <Link href={`/blog/${post.slug}`}>
              <a className="group relative">
                <article
                  className={`relative mb-5 md:mb-0 bg-[#fafafa] rounded-xl p-5 border border-transparent border-dashed hover:border-mz-default`}
                >
                  <div className="flex justify-between items-center">
                    <p className=" text-sm ">{formatted}</p>
                    {index === 0 ? (
                      <span class="flex h-3 w-8 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mz-default opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-8 bg-[#6995E5]"></span>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-mz-secondary mt-5 mb-5 ">
                    {post.title}
                  </h3>
                  <p className="mb-5">{post.seoDescription}</p>
                  <p>Czytaj dalej</p>
                </article>
              </a>
            </Link>
          );
        })}
      </Container>
      <ContactUs />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "date", "seoDescription"]);

  return {
    props: { allPosts },
  };
}
