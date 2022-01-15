import Container from "./container";
import Link from "next/link";

import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";

export default function Blog({ allPosts }) {
  return (
    <Container classes="pt-10 pb-10 md:mt-20 md:pb-20" id="realizacje">
      <h2 className="text-2xl mb-10 md:mb-20 md:text-[32px] font-bold">
        Poczytaj trochę.
      </h2>

      <div className="md:grid grid-cols-3 gap-4 mb-10 md:mb-20">
        {allPosts.slice(0, 3).map((post, index) => {
          const formatted = format(parseISO(post.date), "dd MMMM yyyy", {
            locale: pl,
          });

          return (
            <Link href={`/blog/${post.slug}`}>
              <a className="group">
                <article
                  key={post.slug}
                  className="mb-5 md:mb-0 bg-[#fafafa] rounded-xl p-5 border border-transparent border-dashed hover:border-mz-default"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm">{formatted}</p>
                    {index === 0 ? (
                      <span class="flex h-3 w-8 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mz-default opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-8 bg-[#6995E5]"></span>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h3 className="text-lg md:min-h-[60px] font-medium text-mz-default mt-5 mb-5 ">
                    {post.title}
                  </h3>
                  <p>Czytaj dalej</p>
                </article>
              </a>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-0 md:mt-20">
        <Link href="/blog">
          <a className="px-5 py-2 inline-block text-mz-default rounded-full border border-dashed border-mz-default hover:bg-mz-default hover:text-white">
            Więcej postów
          </a>
        </Link>
      </div>
    </Container>
  );
}
