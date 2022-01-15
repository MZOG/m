import Container from "./container";
import Link from "next/link";

export default function Showcase({ allShowcase }) {
  return (
    <Container classes="mt:10 pb-10 md:mt-20 md:pb-0" id="realizacje">
      <h2 className="text-2xl md:text-[32px] font-bold mb-10 md:mb-20">
        Wybrane <span className="text-mz-default">realizacje</span>.
      </h2>

      <div className="md:grid grid-cols-2 gap-10">
        {allShowcase.slice(0, 4).map((showcase) => (
          <a
            target="_blank"
            rel="noopener"
            key={showcase.slug}
            href={showcase.fullURL}
            className="group block pb-10"
          >
            <img
              className="rounded-xl mb-5"
              src={showcase.coverImage}
              alt={showcase.title}
            />
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
      </div>

      <div className="flex justify-center md:mt-10 md:pb-10">
        <Link href="/realizacje">
          <a className="px-5 py-2 inline-block text-mz-default rounded-full border border-dashed border-mz-default hover:bg-mz-default hover:text-white">
            Sprawdź inne realizacje
          </a>
        </Link>
      </div>
    </Container>
  );
}
