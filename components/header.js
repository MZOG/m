import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./container";

export default function Header() {
  const navLinks = [
    {
      id: 1,
      name: "Oferta",
      link: "/oferta",
    },
    {
      id: 2,
      name: "Realizacje",
      link: "/realizacje",
    },
    {
      id: 3,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 4,
      name: "Kontakt",
      link: "/kontakt",
    },
  ];

  const nav = navLinks.map((item) => (
    <li
      key={item.id}
      className="md:inline md:ml-8 xl:ml-12 md:hover:text-mz-default"
    >
      <Link href={item.link}>
        <a className="text-lg md:text-base font-medium p-2 md:p-0 block md:inline">
          {item.name}
        </a>
      </Link>
    </li>
  ));

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`fixed backdrop-filter backdrop-blur-lg bg-white/50 w-full top-0 py-2 md:py-4 z-50 trasition ease-in-out duration-500 ${
        animateHeader && "shadow-sm"
      }`}
    >
      <Container classes="flex justify-between items-start md:items-center">
        <div className="flex items-center">
          <Link href="/">
            <a aria-label="Marcin Zogrodnik Start">
              <svg
                className="max-w-[40px] md:max-w-[50px] my-2 md:my-0"
                width="100%"
                height="100%"
                viewBox="0 0 55 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.6883 31.3436C47.5781 31.3421 46.4877 31.0493 45.526 30.4946C44.5644 29.9399 43.765 29.1426 43.2078 28.1823L39.3187 21.4474L45.3002 11.0876C45.8058 10.212 46.1428 9.24942 46.2938 8.24969L54.1539 21.8635C54.708 22.8237 54.9998 23.9128 55 25.0215C55.0002 26.1301 54.7088 27.2193 54.1551 28.1797C53.6013 29.1402 52.8047 29.9381 51.8452 30.4934C50.8857 31.0488 49.7969 31.342 48.6883 31.3436L48.6883 31.3436Z"
                  fill="#1858CD"
                />
                <path
                  d="M7.19282 31.4928C6.0841 31.4914 4.99525 31.1983 4.03559 30.643C3.07592 30.0878 2.27919 29.2899 1.72538 28.3293C1.17156 27.3688 0.880144 26.2796 0.880371 25.1708C0.880598 24.0621 1.17246 22.9729 1.72667 22.0127L11.8934 4.40341C11.9017 4.3891 11.9095 4.37461 11.917 4.35987C12.4311 3.34354 13.2103 2.48503 14.1722 1.87514C15.134 1.26524 16.2429 0.926633 17.3814 0.895116C18.5199 0.8636 19.6458 1.14035 20.6399 1.6961C21.6341 2.25184 22.4596 3.06593 23.0291 4.05226L27.1699 11.2245C27.2469 11.3579 27.3577 11.4687 27.4911 11.5458C27.6245 11.6228 27.7758 11.6633 27.9299 11.6634C28.084 11.6634 28.2353 11.6228 28.3687 11.5458C28.5021 11.4688 28.6129 11.358 28.69 11.2246L32.8396 4.03838C33.254 3.31936 33.806 2.68912 34.4643 2.18369C35.1225 1.67826 35.8739 1.30758 36.6755 1.09285C37.4771 0.87812 38.3132 0.823555 39.1359 0.932279C39.9586 1.041 40.7518 1.31088 41.4702 1.72647C42.3113 2.20976 43.0283 2.88242 43.5643 3.69108C43.6044 3.75048 43.6414 3.80654 43.6768 3.86413C43.7098 3.9171 43.7397 3.96732 43.7694 4.01807C43.7847 4.04738 43.7999 4.07275 43.8138 4.0946C43.8138 4.0946 43.8631 4.17997 43.8641 4.18177C44.3811 5.13172 44.6453 6.19862 44.6313 7.28007C44.6172 8.36151 44.3254 9.4212 43.7839 10.3574L33.4276 28.2949C32.6943 29.563 31.5439 30.5375 30.1725 31.0523C30.1623 31.0558 30.1324 31.0671 30.1287 31.0686C30.0775 31.0884 30.0252 31.1059 29.9738 31.1235L29.9456 31.1331C29.8869 31.1526 29.8269 31.1728 29.7668 31.19C28.3999 31.6104 26.9307 31.5545 25.5997 31.0315C24.2686 30.5084 23.1544 29.5492 22.4393 28.3107L18.3233 21.1791C18.2463 21.0456 18.1355 20.9348 18.0021 20.8578C17.8686 20.7807 17.7173 20.7402 17.5632 20.7402H17.5631C17.4091 20.7402 17.2577 20.7807 17.1243 20.8577C16.9909 20.9347 16.8801 21.0455 16.8031 21.1789L12.6728 28.3318C12.1158 29.2921 11.3166 30.0895 10.355 30.6442C9.39335 31.1989 8.30298 31.4915 7.19282 31.4928Z"
                  fill="#1D2C46"
                />
              </svg>
            </a>
          </Link>
          <a
            href="tel:739907919"
            className="hidden md:block font-medium leading-none text-mz-default text-[14px] inline-block ml-10 px-4 py-2 rounded-full border border-dashed border-mz-default hover:bg-mz-default hover:text-white"
          >
            Zadzwo??: +48 739 907 919
          </a>
        </div>

        <div className="flex flex-col items-end">
          <label
            htmlFor="menu-toggle"
            className="p-2 block md:hidden pointer-cursor "
          >
            <svg
              className="fill-current text-mz-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          <input className="hidden" type="checkbox" id="menu-toggle" />

          <nav className="hidden md:block" id="menu">
            <ul className="text-right md:text-left  my-5 md:my-0">{nav}</ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
