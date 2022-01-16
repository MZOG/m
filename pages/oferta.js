import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import ContactUs from "../components/contactUs";
import Meta from "../components/meta";

export default function Oferta({ allPosts }) {
  const offerList = [
    {
      id: 1,
      primary: true,
      title: "Domena",
      line1:
        "Jeżeli już masz domenę, to świetnie! Jeżeli nie, to dostaniesz domenę z końcówką .pl z nazwą swojej firmy za darmo na rok! ",
      line2:
        "Nie musisz się martwić o żadne techniczne sprawy, wszystko będzie pod moją kontrolą, abyś Ty mógł skupić się na swojej firmie. ",
    },
    {
      id: 2,
      primary: true,
      title: "Hosting",
      line1:
        "Podobnie jak w przypadku domeny, hosting jest również bardzo ważnym elementem strony internetowej. Warto wybrać szybki hosting, bo to w głównej mierze od tego zależy szybkość ładowania.",
      line2:
        "Hosting Netlify czy Vercel to świetne serwisy, z których korzystają największe firmy na świecie!",
    },
    {
      id: 3,
      primary: false,
      title: "JAMstack",
      line1:
        "JAMstack to strony internetowe tworzone inaczej. Nie wymagają one drogich hostingów, są dużo bardziej bezpieczne od standardowych stron, a przede wszystkim są szybsze, co w znaczym stopniu przekłada się na pozycjonowanie.",
      line2: "JAMstack to przyszłość, zainwestuj w firmę!",
    },
    {
      id: 4,
      primary: true,
      title: "Certyfikat SSL",
      line1:
        "Bezpieczeństwo w sieci to ciągle gorący temat, staram się aby Twoi potencjalni klienci widzieli, że Twoja strona internetowa jest bezpieczna.",
      line2:
        "Odpowiednie certyfikaty zapewniają ochronę, szczególnie jeśli korzystasz z płatności na swojej stronie.",
    },
    {
      id: 5,
      primary: false,
      title: "CMS",
      line1:
        "Chcesz łatwo zarządzać swoją stroną? Dodawać nowe posty na blog, aktualizować stronę główną?",
      line2:
        "Do każdej strony w bardzo łatwy sposób mogę dodać system zarządzania treścią, który jest dostosowany do Twoich potrzeb. Zero nieprzydatnych nikomu funkcjonalności!",
    },
    {
      id: 6,
      primary: false,
      title: "Gwarancja",
      line1:
        "Bardzo ważne są dla mnie relacje z moimi klientami, nigdy nie zostawię swojego klienta z problemem. ",
      line2:
        "Strony moich klientów są ciągle monitorowane, przez co rzadko spotkasz na nich błąd. Dbam o jakość usług pod którymi się podpisuję.",
    },
  ];

  return (
    <Layout allPosts={allPosts}>
      <Meta
        title="Oferta"
        description="JAMstack? WordPress? Sprawdź jak mogę pomóc Twojej firmie zaistnieć w internecie."
      />
      <Container classes="pb-20">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7 text-mz-default">
            Oferta
          </h1>

          <p className="md:text-[18px]">
            Tworzę strony internetowe JAMstack, oraz WordPress. Sprawdź co
            jeszcze dostaniesz wraz z nową stroną internetową.
          </p>
        </div>
      </Container>

      <Container classes="md:grid grid-cols-2 gap-8 mb-10 md:mb-20">
        {offerList.map((item) => (
          <div
            key={item.id}
            className={`border border-dashed p-6 rounded-xl ${
              item.primary ? "border-mz-default" : "border-mz-secondary"
            }`}
          >
            <h2
              className={`font-bold text-[20px] md:text-[25px] mb-4 ${
                item.primary ? "text-mz-default" : ""
              }`}
            >
              {item.title}
            </h2>
            <p className="mb-2">{item.line1}</p>
            <p>{item.line2}</p>
          </div>
        ))}
      </Container>

      <ContactUs />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "date"]);

  return {
    props: { allPosts },
  };
}
