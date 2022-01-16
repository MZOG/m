import Link from "next/link";
import Container from "./container";

export default function Footer({ allPosts }) {
  return (
    <footer>
      <Container classes="border-t pt-5 pb-5 md:flex justify-between gap-3">
        <div className="flex flex-col md:w-1/3">
          <p className="font-medium mb-1">
            Marcin Zogrodnik - Strony internetowe
          </p>
          <a href="tel:+48739907919" className="mb-1">
            T: +48 739 907 919
          </a>
          <a href="mailto:kontakt@marcinzogrodnik.pl">
            kontakt@marcinzogrodnik.pl
          </a>
          <p className="mt-4">NIP: 6462985329</p>
        </div>
        <div className="mt-5 md:w-1/3 md:mt-0">
          <p className="font-medium">Blog</p>
          <ul>
            {allPosts.slice(0, 3).map((post) => (
              <li key={post.slug} className="mt-1">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-mz-default hover:underline">
                    {post.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 md:w-1/3 md:mt-0">
          <p className="font-medium">Inne</p>
          <ul>
            <li className="mt-1">
              <Link href="/regulamin">
                <a className="text-mz-default hover:underline">Regulamin</a>
              </Link>
            </li>
            <li className="mt-1">
              <Link href="/prywatnosc">
                <a className="text-mz-default hover:underline">
                  Polityka prywatności
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
