import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";

export default function Kontakt({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Head>
        <title>Kontakt - Marcin Zogrodnik</title>
      </Head>
      <Container classes="pb-20 md:flex items-center justify-between flex-wrap">
        <div className="md:w-1/2">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7">
            Kontakt
          </h1>

          <p className="md:text-[18px]">
            Masz pytanie dotyczące strony internetowej? Zadzwoń lub napisz do
            mnie. Nie martw się, nie będę za wszelką cenę próbował sprzedać Ci
            swoich usług.
          </p>
        </div>

        <div className="md:w-1/3 md:flex items-center justify-center p-10 md:p-0">
          <svg
            className="md:max-w-[300px]"
            viewBox="0 0 332 269"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M330.029 14.482H1.97086C1.48367 14.4815 1.01659 14.2878 0.672096 13.9433C0.327603 13.5989 0.133833 13.1319 0.133301 12.6447V1.83729C0.133833 1.35018 0.327603 0.883162 0.672096 0.538718C1.01659 0.194274 1.48367 0.00053171 1.97086 0H330.029C330.516 0.00053171 330.983 0.194274 331.328 0.538718C331.672 0.883162 331.866 1.35018 331.867 1.83729V12.6447C331.866 13.1319 331.672 13.5989 331.328 13.9433C330.983 14.2878 330.516 14.4815 330.029 14.482V14.482Z"
              fill="#E4E4E4"
            />
            <path
              d="M10.7973 9.32235C12.2382 9.32235 13.4062 8.15448 13.4062 6.71385C13.4062 5.27321 12.2382 4.10535 10.7973 4.10535C9.35651 4.10535 8.18848 5.27321 8.18848 6.71385C8.18848 8.15448 9.35651 9.32235 10.7973 9.32235Z"
              fill="white"
            />
            <path
              d="M20.6997 9.32235C22.1405 9.32235 23.3086 8.15448 23.3086 6.71385C23.3086 5.27321 22.1405 4.10535 20.6997 4.10535C19.2589 4.10535 18.0908 5.27321 18.0908 6.71385C18.0908 8.15448 19.2589 9.32235 20.6997 9.32235Z"
              fill="white"
            />
            <path
              d="M30.603 9.32235C32.0439 9.32235 33.2119 8.15448 33.2119 6.71385C33.2119 5.27321 32.0439 4.10535 30.603 4.10535C29.1622 4.10535 27.9941 5.27321 27.9941 6.71385C27.9941 8.15448 29.1622 9.32235 30.603 9.32235Z"
              fill="white"
            />
            <path
              d="M327.545 269H181.637C180.456 268.999 179.323 268.529 178.488 267.694C177.653 266.859 177.183 265.727 177.182 264.546V161.42C177.183 160.239 177.653 159.107 178.488 158.271C179.323 157.436 180.456 156.967 181.637 156.965H327.545C328.726 156.967 329.858 157.436 330.693 158.271C331.529 159.107 331.998 160.239 332 161.42V264.546C331.998 265.727 331.529 266.859 330.693 267.694C329.858 268.529 328.726 268.999 327.545 269V269Z"
              fill="#E6E6E6"
            />
            <path
              d="M321.47 163.038H187.713C186.531 163.04 185.398 163.51 184.563 164.345C183.727 165.181 183.257 166.313 183.256 167.495V258.47C183.257 259.652 183.727 260.785 184.563 261.62C185.398 262.455 186.531 262.925 187.713 262.927H321.47C322.652 262.925 323.784 262.455 324.619 261.62C325.454 260.784 325.923 259.652 325.924 258.47V167.495C325.923 166.313 325.454 165.181 324.619 164.345C323.784 163.51 322.652 163.04 321.47 163.038V163.038Z"
              fill="white"
            />
            <path
              d="M266.781 206.287C269.001 196.62 262.962 186.984 253.294 184.765C243.625 182.545 233.988 188.583 231.768 198.25C229.548 207.917 235.587 217.553 245.256 219.773C254.924 221.992 264.561 215.954 266.781 206.287Z"
              fill="#9E616A"
            />
            <path
              d="M300.933 246.016C300.273 242.895 298.778 240.012 296.608 237.674C294.438 235.335 291.674 233.629 288.611 232.738L288.598 232.73C288.013 232.443 287.394 232.23 286.756 232.099L265.17 227.683L260.845 223.043L242.443 224.217L240.522 229.555L219.383 238.948L219.733 238.702C218.828 239.065 217.947 239.487 217.097 239.966L216.989 240.013C216.38 240.287 215.814 240.648 215.309 241.085C209.934 244.815 206.382 250.803 206.25 257.479L205.692 262.927H304.523L300.933 246.016Z"
              fill="#1858CD"
            />
            <path
              d="M268.932 192.643C267.461 188.05 263.159 184.173 258.338 184.296C258.714 183.15 258.072 181.866 257.112 181.137C256.152 180.408 254.938 180.116 253.757 179.87C251.317 179.362 248.774 178.974 246.348 179.546C243.923 180.119 241.624 181.859 241.078 184.291C238.869 182.22 234.783 182.793 233.229 185.391C232.429 186.729 232.315 188.525 233.18 189.822C234.039 191.11 235.666 191.689 237.213 191.762C238.759 191.835 240.291 191.488 241.831 191.327C245.509 190.94 249.394 191.682 252.368 193.881C255.341 196.08 257.241 199.85 256.713 203.51C257.901 202.751 259.614 203.278 260.444 204.418C261.274 205.559 261.339 207.117 260.954 208.473C260.568 209.83 259.785 211.034 259.014 212.215C257.592 214.388 256.171 216.562 254.75 218.736L255.332 219.124C257.476 220.027 259.795 218.337 261.356 216.612C263.988 213.701 266.108 210.365 267.627 206.746C269.491 202.299 270.402 197.235 268.932 192.643Z"
              fill="#2F2E41"
            />
            <path
              d="M191.448 189.143H5.67228C4.16842 189.142 2.72664 188.543 1.66325 187.48C0.599859 186.417 0.00170224 184.975 0 183.472V52.1679C0.00169684 50.6643 0.599852 49.2227 1.66324 48.1595C2.72663 47.0962 4.16841 46.4982 5.67228 46.4965H191.448C192.952 46.4982 194.394 47.0962 195.457 48.1595C196.52 49.2227 197.119 50.6643 197.12 52.1679V183.472C197.119 184.975 196.52 186.417 195.457 187.48C194.394 188.543 192.952 189.142 191.448 189.143V189.143Z"
              fill="#E6E6E6"
            />
            <path
              d="M183.714 54.2288H13.4087C11.9043 54.2307 10.462 54.8291 9.39815 55.8928C8.33433 56.9564 7.73582 58.3985 7.73389 59.9028V175.737C7.73582 177.241 8.33432 178.683 9.39814 179.747C10.462 180.81 11.9043 181.409 13.4087 181.411H183.714C185.218 181.409 186.66 180.81 187.723 179.746C188.786 178.683 189.383 177.241 189.384 175.737V59.9028C189.383 58.399 188.786 56.957 187.723 55.8932C186.66 54.8295 185.218 54.2309 183.714 54.2288V54.2288Z"
              fill="white"
            />
            <path
              d="M123.066 108.589L122.751 109.155C125.547 102.266 123.005 93.7763 118.017 88.5815C113.03 83.3868 106.096 81.0119 99.2692 80.0697C94.201 79.3702 88.9403 79.3904 84.1212 81.2466C77.1425 83.9347 71.8106 90.1572 67.359 96.6304C65.3227 99.5912 63.3206 102.967 63.5235 106.667C63.7118 110.101 65.7506 113.016 67.4201 115.929C69.0899 118.843 70.4842 122.458 69.2859 125.638C68.5718 127.533 67.0626 128.898 65.8381 130.448C64.6136 131.998 63.6063 134.093 64.1978 136.038C64.6763 137.612 66.1159 138.647 67.5964 138.991C69.0767 139.336 70.6125 139.111 72.1117 138.885L111.027 133.006C113.671 132.606 116.18 131.573 118.339 129.995C120.497 128.417 122.243 126.34 123.425 123.941C124.608 121.543 125.192 118.894 125.13 116.221C125.067 113.548 124.359 110.929 123.066 108.589V108.589Z"
              fill="#2F2E41"
            />
            <path
              d="M94.1197 132.735C104.628 132.735 113.146 124.217 113.146 113.711C113.146 103.204 104.628 94.6871 94.1197 94.6871C83.6117 94.6871 75.0933 103.204 75.0933 113.711C75.0933 124.217 83.6117 132.735 94.1197 132.735Z"
              fill="#FFB9B9"
            />
            <path
              d="M141.576 156.776C140.345 154.079 138.403 151.767 135.958 150.088C133.513 148.409 130.658 147.427 127.697 147.247L122.395 146.926L122.407 146.982V146.982L108.928 138.874C109.259 139.253 87.0015 140.048 87.0015 140.048L78.743 147.172L75.2796 147.382C72.3193 147.562 69.4638 148.544 67.019 150.223C64.5741 151.901 62.6321 154.213 61.4008 156.911L50.1538 181.546H72.5706L73.0906 179.308C73.6563 179.997 74.2048 180.698 74.7363 181.411H152.823L141.576 156.776Z"
              fill="#1858CD"
            />
            <path
              d="M112.167 96.0546C111.676 93.4568 109.026 92.2686 106.755 91.6928C100.17 90.0128 93.3188 89.6367 86.5888 90.5856C81.6827 91.2851 76.6602 92.8277 73.1004 96.6566C70.324 99.6429 68.6441 103.921 68.5134 108.338C68.4373 110.912 68.8976 113.591 70.1786 115.759C71.4597 117.927 73.6431 119.499 75.8972 119.444L76.1254 120.238C85.678 118.907 94.5515 112.964 100.14 104.155C99.0912 107.899 97.0039 111.271 94.1194 113.88C100.569 111.299 106.175 106.979 110.313 101.401C111.443 99.9013 112.54 98.0311 112.167 96.0546Z"
              fill="#2F2E41"
            />
            <path
              d="M320.327 4.91846H308.924C308.813 4.91881 308.703 4.89722 308.6 4.85493C308.497 4.81264 308.404 4.75049 308.325 4.67203C308.246 4.59357 308.184 4.50035 308.141 4.39772C308.099 4.29508 308.077 4.18505 308.077 4.07392C308.077 3.96279 308.099 3.85276 308.141 3.75012C308.184 3.64748 308.246 3.55426 308.325 3.47581C308.404 3.39735 308.497 3.33519 308.6 3.29291C308.703 3.25062 308.813 3.22903 308.924 3.22937H320.327C320.551 3.23007 320.765 3.31936 320.923 3.47766C321.08 3.63597 321.169 3.85039 321.169 4.07392C321.169 4.29745 321.08 4.51187 320.923 4.67017C320.765 4.82848 320.551 4.91777 320.327 4.91846V4.91846Z"
              fill="white"
            />
            <path
              d="M320.327 8.08558H308.924C308.813 8.08592 308.703 8.06433 308.6 8.02204C308.497 7.97976 308.404 7.9176 308.325 7.83914C308.246 7.76069 308.184 7.66747 308.141 7.56483C308.099 7.4622 308.077 7.35216 308.077 7.24104C308.077 7.12991 308.099 7.01987 308.141 6.91723C308.184 6.8146 308.246 6.72138 308.325 6.64292C308.404 6.56446 308.497 6.50231 308.6 6.46002C308.703 6.41773 308.813 6.39614 308.924 6.39649H320.327C320.551 6.39718 320.765 6.48647 320.923 6.64478C321.08 6.80308 321.169 7.0175 321.169 7.24104C321.169 7.46457 321.08 7.67898 320.923 7.83729C320.765 7.9956 320.551 8.08488 320.327 8.08558V8.08558Z"
              fill="white"
            />
            <path
              d="M320.327 11.2526H308.924C308.813 11.2529 308.703 11.2313 308.6 11.189C308.497 11.1467 308.404 11.0846 308.325 11.0061C308.246 10.9277 308.184 10.8345 308.141 10.7318C308.099 10.6292 308.077 10.5191 308.077 10.408C308.077 10.2969 308.099 10.1869 308.141 10.0842C308.184 9.98159 308.246 9.88837 308.325 9.80991C308.404 9.73146 308.497 9.6693 308.6 9.62701C308.703 9.58473 308.813 9.56314 308.924 9.56348H320.327C320.551 9.56418 320.765 9.65346 320.923 9.81177C321.08 9.97008 321.169 10.1845 321.169 10.408C321.169 10.6316 321.08 10.846 320.923 11.0043C320.765 11.1626 320.551 11.2519 320.327 11.2526V11.2526Z"
              fill="white"
            />
          </svg>
        </div>
      </Container>
      <Container classes="flex pb-10 mt-10 md:mt-0">
        <div className="md:flex md:mt-20">
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
