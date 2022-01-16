import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import markdownToHtml from "../../lib/markdownToHtml";
import Meta from "../../components/meta";
import ContactUs from "../../components/contactUs";

export default function Post({ post, allPosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout allPosts={allPosts}>
      <Meta
        title={`${post.title}`}
        description={post.seoDescription}
        shareImage={post.ogImage.url}
      />
      <Container classes="md:pt-10">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />

              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
      <ContactUs />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts(["title", "slug", "date"]);

  const post = getPostBySlug(
    params.slug,
    [
      "title",
      "seoDescription",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "excerpt",
    ],
    "_blog"
  );
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
