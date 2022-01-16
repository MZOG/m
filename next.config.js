const markdownIt = require("markdown-it");
const markdownItPrism = require("markdown-it-prism");

module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        markdownIt: markdownIt({ html: true }).use(markdownItPrism),
      },
    });
    return configuration;
  },

  async redirects() {
    return [
      {
        source: "/blog/obsluga-zamowien-online",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/nowa-wersja-strony",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/podsumowanie-miesiaca-pazdziernik-2020",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/voucher-20-na-uslugi-nazwa-pl",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/grudniowe-zmiany-na-stronie",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/zarabiaj-ze-mna-zgarnij-20",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/przydatne-tricki-w-vs-code",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/css-zmiana-koloru-zaznaczonego-tekstu",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/strona-internetowa-html-css-1",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/programy-i-wyposazenie-programisty",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/nowy-dzial-frontend",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/dlaczego-nie-warto-polegac-tylko-na-facebooku",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/audyt-losowej-strony-jest-zle",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/pierwszy-tydzien-w-nowej-pracy",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/alternatywa-dla-wordpressa",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/cos-sie-konczy-cos-zaczyna",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/interesuje-cie-jezyk-niemiecki-mam-cos-dla-ciebie",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/strona-internetowa-pytania-i-odpowiedzi",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/wyznacz-sobie-cel-na-2021-rok-i-realizuj-go",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/jaki-hosting-dla-malych-i-srednich-firm",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/unikalnosc-czy-gotowiec",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/unikalnosc-czy-gotowiec",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
