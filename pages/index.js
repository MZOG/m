import { getAllPosts, getAllShowcase, getAllTestimonials } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Meta from "../components/meta";
import Layout from "../components/layout";
import Head from "next/head";
import Hero from "../components/hero";
import HomepageOffer from "../components/homepageOffer";
import Showcase from "../components/showcase";
import Testimonials from "../components/testimonials";
import Blog from "../components/homepageBlog";
import ContactUs from "../components/contactUs";

export default function Index({ allPosts, allShowcase, allTestimonials }) {
  return (
    <>
      <Layout allPosts={allPosts}>
        <Meta description="Rozwiń swój biznes w internecie. Tworzę proste i szybkie strony internetowe JAMstack dla małych i średnich firm." />
        <Hero />
        <HomepageOffer />
        <Showcase allShowcase={allShowcase} />
        <Testimonials allTestimonials={allTestimonials} />
        <Blog allPosts={allPosts} />
        <ContactUs />
      </Layout>
    </>
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

  const allTestimonials = getAllTestimonials(["author", "company", "content"]);

  return {
    props: { allPosts, allShowcase, allTestimonials },
  };
}
