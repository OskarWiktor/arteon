import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Polityka prywatności | Arteon',
  description: 'Polityka prywatności serwisu Arteon - dowiedz się, jak chronimy Twoje dane osobowe.',
};

export default function PrivacyPolicyPage() {
  return (
    <Wrapper className="my-12 md:my-18 lg:my-24 select-none">
      <h1>Polityka prywatności</h1>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">1. Administrator danych</h2>
        <p>
          Administratorem danych osobowych jest Arteon Wiktoria Wiktor z siedzibą w gm. Czernichów, miejsc. Zagacie, ul. Jaśminowa, nr 36, 32-070 
        </p>
        <p>NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p>
        <p>
          Kontakt: <strong>kontakt@arteonagency.pl</strong>, tel. <strong>516 466 255</strong>.
        </p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">2. Zakres zbieranych danych</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>dane podane w formularzu kontaktowym (imię, nazwisko, e-mail, treść wiadomości),</li>
          <li>dane techniczne zbierane automatycznie (adres IP, informacje o urządzeniu, pliki cookies),</li>
          <li>dane analityczne z Google Analytics 4 i Vercel Analytics.</li>
        </ul>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">3. Cele i podstawy prawne przetwarzania</h2>
        <ol className="list-decimal space-y-1 pl-6">
          <li>
            <strong>Kontakt z klientem</strong> - odpowiedź na zapytania z formularza (art. 6 ust. 1 lit. b i f RODO).
          </li>
          <li>
            <strong>Marketing i analityka</strong> - statystyki strony, optymalizacja treści (art. 6 ust. 1 lit. f RODO).
          </li>
          <li>
            <strong>Realizacja usług</strong> - przygotowanie ofert, umów, faktur (art. 6 ust. 1 lit. b RODO).
          </li>
          <li>
            <strong>Obowiązki prawne</strong> - np. przechowywanie dokumentacji księgowej (art. 6 ust. 1 lit. c RODO).
          </li>
        </ol>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">4. Pliki cookies</h2>
        <p>Strona wykorzystuje pliki cookies w celu:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>zapewnienia prawidłowego działania serwisu,</li>
          <li>analizy ruchu (Google Analytics 4, Vercel Analytics),</li>
          <li>celów marketingowych.</li>
        </ul>
        <p>Możesz zarządzać cookies w ustawieniach swojej przeglądarki. Ograniczenie stosowania cookies może wpłynąć na niektóre funkcje serwisu.</p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">5. Odbiorcy danych</h2>
        <p>Dane mogą być przekazywane podmiotom wspierającym nas w świadczeniu usług, takim jak:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>dostawcy hostingu i poczty (np. Vercel),</li>
          <li>dostawcy narzędzi analitycznych (Google Ireland Ltd., Vercel Inc.),</li>
          <li>biuro rachunkowe, podmioty obsługujące płatności lub prawo - jeśli zajdzie taka potrzeba.</li>
        </ul>
        <p>Wszystkie podmioty przetwarzają dane zgodnie z RODO na podstawie umów powierzenia.</p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">6. Przekazywanie danych poza EOG</h2>
        <p>
          Google i Vercel mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. Stosowane są wówczas odpowiednie zabezpieczenia, np. standardowe klauzule umowne zatwierdzone przez Komisję
          Europejską.
        </p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">7. Czas przechowywania danych</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Dane z formularza kontaktowego - do 12 miesięcy od zakończenia korespondencji.</li>
          <li>Dane klientów - przez okres wymagany przepisami prawa (np. dokumentacja księgowa - 5 lat).</li>
          <li>Dane analityczne - zgodnie z polityką Google Analytics (domyślnie 26 miesięcy).</li>
        </ul>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">8. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>dostępu do danych i otrzymania ich kopii,</li>
          <li>sprostowania danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>sprzeciwu wobec przetwarzania (w tym marketingu),</li>
          <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">9. Dobrowolność podania danych</h2>
        <p>Podanie danych osobowych jest dobrowolne, ale niezbędne do kontaktu lub realizacji usługi.</p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">10. Zabezpieczenia</h2>
        <p>Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych osobowych przed nieuprawnionym dostępem, utratą czy zniszczeniem.</p>
      </section>

      <section className="my-6 space-y-4 md:my-10 lg:my-14">
        <h2 className="h4">11. Zmiany polityki</h2>
        <p>Polityka prywatności może być aktualizowana, aby uwzględnić zmiany w przepisach lub technologii. Aktualna wersja jest zawsze dostępna na tej stronie.</p>
      </section>
    </Wrapper>
  );
}
