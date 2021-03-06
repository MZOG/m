import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Meta from "../components/meta";

export default function Polityka({ allPosts }) {
  return (
    <Layout allPosts={allPosts}>
      <Meta title="Polityka prywatności" />
      <Container classes="py-10 md:py-20 custom-post">
        <h1 className="text-[25px] md:text-[37px] font-bold mb-4 md:mb-7">
          Polityka prywatności
        </h1>

        <h2>Informacje ogólne</h2>

        <ol>
          <li>
            Niniejsza polityka dotyczy serwisu www, funkcjonującego pod adresem:{" "}
            <a href="https://marcinzogrodnik.pl">marcinzogrodnik.pl</a>
          </li>
          <li>
            Operatorem serwisu oraz administratorem danych osobowych jest:
            Marcin Zogrodnik - Strony Internetowe, ul. Ułańska 66, 43-143
            Lędziny
          </li>
          <li>
            Adres kontaktowy poczty elektronicznej operatora:{" "}
            <a href="mailto:kontakt@marcinzogrodnik.pl">
              kontakt@marcinzogrodnik.pl
            </a>
          </li>
          <li>
            Operator jest administratorem Twoich danych osobowych w odniesieniu
            do danych podanych dobrowolnie w serwisie.
          </li>
          <li>
            Serwis wykorzystuje dane osobowe w następujących celach:
            <ul>
              <li>Realizacja zamówionych usług</li>
              <li>Prezentacja oferty lub informacji</li>
            </ul>
          </li>
          <li>
            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
            ich zachowaniu w następujący sposób:
            <ul>
              <li>
                Poprzez dobrowolnie wprowadzone w formularzach dane, które
                zostają wprowadzone do systemów operatora
              </li>
              <li>
                Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw.
                „ciasteczka”)
              </li>
            </ul>
          </li>
        </ol>

        <h2>Metody ochrony danych</h2>

        <ol>
          <li>
            W celu ochrony danych Operator regularnie wykonuje kopie
            bezpieczeństwa
          </li>
          <li>Operator okresowo zmienia swoje hasła administracyjne</li>
          <li>
            Miejsca logowania i wprowadzania danych osobowych są chronione w
            warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
            dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
            komputerze użytkownika i mogą być odczytane jedynie na docelowym
            serwerze
          </li>
          <li>
            Istotnym elementem ochrony danych jest regularna aktualizacja
            wszelkiego oprogramowania, wykorzystywanego przez Operatora do
            przetwarzania danych osobowych, co w szczególności oznacza regularne
            aktualizacje komponentów programistycznych
          </li>
        </ol>

        <h2>
          Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
        </h2>

        <ol>
          <li>
            W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
            dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
            zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
            administratorze. Dotyczy to takich grup odbiorców:
            <ul>
              <li>
                osoby upoważnione przez nas, pracownicy i współpracownicy,
                którzy muszą mieć dostęp do danych osobowych w celu wykonywania
                swoich obowiązków
              </li>
              <li>firma hostingowa</li>
              <li>
                firmy, z którymi Administrator współpracuje w zakresie
                marketingu własnego
              </li>
              <li>kancelarie prawne i windykatorzy</li>
              <li>operatorzy płatności</li>
              <li>organy publiczne</li>
            </ul>
          </li>
          <li>
            Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż
            jest to konieczne do wykonania związanych z nimi czynności
            określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
            odniesieniu do danych marketingowych dane nie będą przetwarzane
            dłużej niż przez 3 lata
          </li>
          <li>
            Przysługuje Ci prawo żądania od administratora:
            <ul>
              <li>dostępu do danych osobowych Ciebie dotyczących</li>
              <li>ich sprostowania</li>
              <li>usunięcia</li>
              <li>ograniczenia przetwarzania</li>
              <li>oraz przenoszenia danych</li>
            </ul>
          </li>
          <li>
            Na działania Administratora przysługuje skarga do Prezesa Urzędu
            Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa
          </li>
          <li>
            Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi
            serwisu
          </li>
          <li>
            W stosunku do Ciebie mogą być podejmowane czynności polegające na
            zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
            świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
            przez Administratora marketingu bezpośredniego
          </li>
          <li>
            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
            przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy
            ich poza teren Unii Europejskiej.
          </li>
        </ol>

        <h2>Logi Administratora</h2>
        <ol>
          <li>
            Informacje zachowaniu użytkowników w serwisie mogą podlegać
            logowaniu. Dane te są wykorzystywane w celu administrowania serwisem
          </li>
        </ol>
        <h2>Istotne techniki marketingowe</h2>
        <ol>
          <li>
            Operator stosuje analizę statystyczną ruchu na stronie, poprzez
            Google Analytics (Google Inc. z siedzibą w USA). Operator nie
            przekazuje do operatora tej usługi danych osobowych, a jedynie
            zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek
            w urządzeniu końcowym użytkownika. W zakresie informacji o
            preferencjach użytkownika gromadzonych przez sieć reklamową Google
            użytkownik może przeglądać i edytować informacje wynikające z plików
            cookies przy pomocy narzędzia:
            https://www.google.com/ads/preferences/
          </li>
          <li>
            Operator korzysta z piksela Facebooka. Ta technologia powoduje, że
            serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba
            w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na
            danych, wobec których sam jest administratorem, Operator nie
            przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi
            Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu
            końcowym użytkownika.
          </li>
        </ol>

        <h2>Informacja o plikach cookies</h2>
        <ol>
          <li>Serwis korzysta z plików cookies</li>
          <li>
            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
            szczególności pliki tekstowe, które przechowywane są w urządzeniu
            końcowym użytkownika serwisu i przeznaczone są do korzystania ze
            stron internetowych serwisu. Cookies zazwyczaj zawierają nazwę
            strony internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer
          </li>
          <li>
            Podmiotem zamieszczającym na urządzeniu końcowym użytkownika serwisu
            pliki cookies oraz uzyskującym do nich dostęp jest operator serwisu
          </li>
          <li>
            Pliki cookies wykorzystywane są w następujących celach:
            <ul>
              <li>
                realizacji celów określonych powyżej w części „Istotne techniki
                marketingowe”
              </li>
            </ul>
          </li>
          <li>
            W ramach serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
            „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
            Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
            urządzeniu końcowym użytkownika do czasu wylogowania, opuszczenia
            strony internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
            końcowym użytkownika przez czas określony w parametrach plików
            cookies lub do czasu ich usunięcia przez użytkownika
          </li>
          <li>
            Oprogramowanie do przeglądania stron internetowych (przeglądarka
            internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
            cookies w urządzeniu końcowym użytkownika. Użytkownicy serwisu mogą
            dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa
            umożliwia usunięcie plików cookies. Możliwe jest także automatyczne
            blokowanie plików cookies. Szczegółowe informacje na ten temat
            zawiera pomoc lub dokumentacja przeglądarki internetowej
          </li>
          <li>
            Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
            funkcjonalności dostępne na stronach internetowych serwisu
          </li>
          <li>
            Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
            wykorzystywane mogą być również przez współpracujące z operatorem
            Serwisu podmioty, w szczególności dotyczy to firm: Google (Google
            Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA)
          </li>
        </ol>

        <h2>Zarządzanie plikami cookies</h2>
        <ol>
          <li>
            Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
            ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
            cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
            utrzymania preferencji użytkownika może utrudnić, a w skrajnych
            przypadkach może uniemożliwić korzystanie ze stron www
          </li>
        </ol>

        <h2>Zmiany Polityki Prywatności</h2>
        <ol>
          <li>
            Niniejsza Polityka Prywatności może ulegać zmianom, które będą
            publikowane na stronie marcinzogrodnik.pl W przypadku zmian
            polityki, obowiązują one od dnia ich ogłoszenia na stronach w/w
            serwisu, a jako że wymagają one zgody obu stron, dotyczą one zgód na
            przetwarzanie danych osobowych udzielonych po dacie dokonania zmiany
            Polityki Prywatności. W odniesieniu do zgód na przetwarzanie danych
            osobowych udzielonych przed zmianą Polityki Prywatności,
            zastosowanie ma Polityka Prywatności w brzmieniu obowiązującym w
            chwili udzielenia zgody
          </li>
          <li>
            Zmiany wprowadzane do Polityki Prywatności nie wpływają i nigdy nie
            wpłyną na podstawową zasadę: Marcin Zogrodnik - Strony Internetowy
            nie sprzedaje podmiotom trzecim danych personalnych czy adresowych
            klientów oraz użytkowników należącego do serwisu Marcin Zogrodnik -
            Strony Internetowe i jego ewentualnych newsletter’ów.
          </li>
        </ol>
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
