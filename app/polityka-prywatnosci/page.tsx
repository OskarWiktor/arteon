import TableOfContents from '@/components/sections/TableOfContent';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Polityka prywatności | Arteon',
  description: 'Polityka prywatności serwisu Arteon - dowiedz się, jak chronimy Twoje dane osobowe.',
  alternates: { canonical: '/polityka-prywatnosci' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="grid gap-8 select-none lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Polityka prywatności</h1>
          <p className="mt-2 text-sm opacity-70">
            Wersja: <strong>1.10.2025</strong>
          </p>
          <Gap size="sm" />

          <SectionInfo title="1. Administrator danych">
            <p>Administratorem danych osobowych jest Arteon Wiktoria Wiktor z siedzibą w gm. Czernichów, miejsc. Zagacie, ul. Jaśminowa, nr 36, 32-070.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>contact@arteonagency.com</strong>, tel. <strong>516 466 255</strong>.
            </p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="2. Zakres zbieranych danych">
            <ul className="list-disc space-y-1 pl-6">
              <li>dane podane w formularzu kontaktowym (imię, nazwisko, e-mail, treść wiadomości),</li>
              <li>dane techniczne zbierane automatycznie (adres IP, informacje o urządzeniu, pliki cookies),</li>
              <li>dane analityczne z Google Analytics 4 i Vercel Analytics,</li>
              <li>logi serwera i zdarzeń bezpieczeństwa (np. znaczniki czasu, adres IP, nagłówki żądania).</li>
            </ul>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="3. Cele i podstawy prawne przetwarzania">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Kontakt z klientem</strong> — odpowiedź na zapytania z formularza (art. 6 ust. 1 lit. b i f RODO).
              </li>
              <li>
                <strong>Marketing i analityka</strong> — statystyki strony, optymalizacja treści (art. 6 ust. 1 lit. f RODO).
              </li>
              <li>
                <strong>Realizacja usług</strong> — przygotowanie ofert, umów, faktur (art. 6 ust. 1 lit. b RODO).
              </li>
              <li>
                <strong>Obowiązki prawne</strong> — np. przechowywanie dokumentacji księgowej (art. 6 ust. 1 lit. c RODO).
              </li>
              <li>
                <strong>Bezpieczeństwo i roszczenia</strong> — prowadzenie logów, zapobieganie nadużyciom, ustalenie/dochodzenie/obrona roszczeń (art. 6 ust. 1 lit. f RODO).
              </li>
            </ol>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="4. Pliki cookies">
            <p>Strona wykorzystuje pliki cookies w celu:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>zapewnienia prawidłowego działania serwisu,</li>
              <li>analizy ruchu (Google Analytics 4, Vercel Analytics),</li>
              <li>celów marketingowych.</li>
            </ul>
            <p>Możesz zarządzać cookies w ustawieniach swojej przeglądarki. Ograniczenie cookies może wpłynąć na niektóre funkcje serwisu.</p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="5. Odbiorcy danych">
            <p>Dane mogą być przekazywane podmiotom wspierającym nas w świadczeniu usług, takim jak:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>dostawcy hostingu/aplikacji (np. Vercel),</li>
              <li>dostawcy narzędzi analitycznych (Google Ireland Ltd., Vercel Inc.),</li>
              <li>biuro rachunkowe, podmioty obsługujące płatności lub prawo — jeśli zajdzie taka potrzeba.</li>
            </ul>
            <p>Wszyscy odbiorcy przetwarzają dane zgodnie z RODO na podstawie odpowiednich umów.</p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="6. Powierzenie przetwarzania (DPA)">
            <p>
              Na życzenie Klienta zawieramy umowę powierzenia przetwarzania danych (DPA), gdy przetwarzamy dane w jego imieniu (np. w ramach utrzymania strony, konfiguracji narzędzi lub systemów).
            </p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="7. Przekazywanie danych poza EOG">
            <p>
              Google i Vercel mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. Stosowane są odpowiednie zabezpieczenia prawne (m.in. standardowe klauzule umowne zatwierdzone przez Komisję
              Europejską) oraz — w miarę możliwości — środki techniczne (pseudonimizacja, minimalizacja).
            </p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="8. Czas przechowywania danych">
            <ul className="list-disc space-y-1 pl-6">
              <li>Dane z formularza kontaktowego — do 12 miesięcy od zakończenia korespondencji.</li>
              <li>Dane klientów — przez okres wymagany przepisami prawa (dokumentacja księgowa).</li>
              <li>Dane analityczne — zgodnie z polityką Google Analytics (np. 26 miesięcy).</li>
              <li>Logi — przez okres niezbędny dla bezpieczeństwa i rozliczalności (co do zasady do 12 miesięcy, chyba że przepisy stanowią inaczej).</li>
            </ul>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="9. Twoje prawa">
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
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="10. Dobrowolność podania danych">
            <p>Podanie danych osobowych jest dobrowolne, ale niezbędne do kontaktu lub realizacji usługi.</p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="11. Zabezpieczenia">
            <p>Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych osobowych przed nieuprawnionym dostępem, utratą czy zniszczeniem.</p>
          </SectionInfo>
          <Gap size="sm" />

          <SectionInfo title="12. Zmiany polityki">
            <p>Polityka prywatności może być aktualizowana, aby uwzględnić zmiany w przepisach lub technologii. Aktualna wersja jest zawsze dostępna na tej stronie.</p>
          </SectionInfo>

          <Gap size="sm" />
          <section>
            <a href="/polityka-prywatnosci-arteon.pdf" className="inline-block underline underline-offset-4" download>
              Pobierz PDF: Polityka prywatności
            </a>
          </section>
        </div>

        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>

      <Gap />
    </>
  );
}
