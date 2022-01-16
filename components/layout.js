import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, allPosts }) {
  return (
    <>
      <Header />
      <main className="mt-[80px] md:mt-[100px]">{children}</main>
      <Footer allPosts={allPosts} />
    </>
  );
}
