import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getPrivacyAlternates } from '@/lib/i18n/pages/privacy';

export const metadata = {
  title: 'Polityka prywatności - Arteon',
  description: 'Polityka prywatności strony Arteon - dowiedz się w jaki sposób chronimy Twoje dane osobowe i z jakich narzędzi analitycznych korzystamy',
  alternates: getPrivacyAlternates('pl'),
  openGraph: {
    title: 'Polityka prywatności - Arteon',
    description: 'Polityka prywatności strony Arteon - dowiedz się w jaki sposób chronimy Twoje dane osobowe i z jakich narzędzi analitycznych korzystamy',
    url: toAbsoluteUrl('/polityka-prywatnosci'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Polityka prywatności</h1>
          <p className="mt-2 text-sm opacity-70">
            Wersja: <strong>03.03.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Administrator danych">
            <p>Administratorem danych osobowych jest Arteon z siedzibą w gm. Czernichów, miejsc. Zagacie, ul. Jaśminowa, nr 36, 32-070.</p>
            <p>
              NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong>
            </p>
            <p>
              Kontakt: <strong>kontakt@arteonagency.pl</strong>, tel. <strong>516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Zakres zbieranych danych">
            <ul className="list-disc space-y-1 pl-6">
              <li>dane podane w formularzu kontaktowym (imię, nazwisko, e-mail, treść wiadomości),</li>
              <li>dane techniczne zbierane automatycznie (adres IP, informacje o urządzeniu, pliki cookie),</li>
              <li>dane analityczne z Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics i Vercel Speed Insights,</li>
              <li>dane analityczne z Metricool (statystyki odwiedzin, źródła ruchu),</li>
              <li>dane zbierane przez Google AdSense w celu wyświetlania reklam (identyfikatory reklamowe, pliki cookie reklamowe, dane o interakcjach z reklamami, ciągi zgody IAB TCF v2.3),</li>
              <li>logi serwera i zdarzeń bezpieczeństwa (np. znaczniki czasu, adres IP, nagłówki żądania).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Cele i podstawy prawne przetwarzania">
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
              <li>
                <strong>Bezpieczeństwo i roszczenia</strong> - prowadzenie logów, zapobieganie nadużyciom, ustalenie/dochodzenie/obrona roszczeń (art. 6 ust. 1 lit. f RODO).
              </li>
              <li>
                <strong>Wyświetlanie reklam</strong> - wyświetlanie reklam dopasowanych do zainteresowań użytkownika za pośrednictwem Google AdSense (art. 6 ust. 1 lit. a RODO - zgoda użytkownika
                wyrażona w oknie zgód Google Privacy & Messaging).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Pliki cookie i zgody">
            <p>Strona wykorzystuje pliki cookie w celu:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>zapewnienia prawidłowego działania serwisu,</li>
              <li>analizy ruchu (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>celów marketingowych,</li>
              <li>wyświetlania reklam dopasowanych do zainteresowań użytkowników (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              Google AdSense może wykorzystywać pliki cookie DoubleClick do wyświetlania reklam opartych na wcześniejszych wizytach użytkownika w naszej witrynie lub innych witrynach. Zewnętrzni
              dostawcy (w tym Google) używają tych plików cookie do serwowania reklam na podstawie historii odwiedzin.
            </p>
            <h3 className="h5 mt-4 mb-3">Zarządzanie zgodami (CMP)</h3>
            <p>
              Do zbierania i zarządzania zgodami na pliki cookie i przetwarzanie danych w celach reklamowych strona korzysta z narzędzia Google Privacy &amp; Messaging - certyfikowanej platformy
              zarządzania zgodami (CMP) zintegrowanej ze standardem IAB Transparency and Consent Framework (TCF) w wersji 2.3.
            </p>
            <p>
              Użytkownicy z Europejskiego Obszaru Gospodarczego (EOG), Wielkiej Brytanii i Szwajcarii zostaną poproszeni o wyrażenie zgody za pośrednictwem okna dialogowego Google. Użytkownicy ze
              stanów USA objętych przepisami o ochronie prywatności zobaczą odpowiedni komunikat zgodny z regulacjami stanowymi (w tym obsługę sygnałów Global Privacy Control).
            </p>
            <p>Możesz zmienić swoje preferencje dotyczące zgód w dowolnym momencie, klikając link &quot;Ustawienia plików cookie&quot; w stopce strony.</p>
            <h3 className="h5 mt-4 mb-3">Google Consent Mode v2</h3>
            <p>
              Strona wykorzystuje mechanizm Google Consent Mode v2 w trybie zaawansowanym (Advanced). Dla użytkowników z regionów objętych regulacjami wszystkie sygnały zgody (ad_storage,
              ad_user_data, ad_personalization, analytics_storage) są domyślnie ustawione na &quot;denied&quot; i aktualizowane dopiero po wyrażeniu zgody. Dla użytkowników z pozostałych regionów
              zgody są domyślnie ustawione na &quot;granted&quot;.
            </p>
            <p>
              Możesz zrezygnować z personalizacji reklam na stronie{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Ustawienia reklam Google
              </a>{' '}
              lub na stronie{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>Możesz zarządzać plikami cookie w ustawieniach swojej przeglądarki. Ograniczenie plików cookie może wpłynąć na niektóre funkcje serwisu.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Odbiorcy danych">
            <p>Dane mogą być przekazywane podmiotom wspierającym nas w świadczeniu usług, takim jak:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>dostawcy hostingu/aplikacji (np. Vercel),</li>
              <li>dostawcy narzędzi analitycznych (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>dostawcy usług reklamowych (Google Ireland Ltd. - Google AdSense),</li>
              <li>biuro rachunkowe, podmioty obsługujące płatności lub prawo - jeśli zajdzie taka potrzeba.</li>
            </ul>
            <p>Wszyscy odbiorcy przetwarzają dane zgodnie z RODO na podstawie odpowiednich umów.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Powierzenie przetwarzania (DPA)">
            <p>
              Na życzenie Klienta zawieramy umowę powierzenia przetwarzania danych (DPA), gdy przetwarzamy dane w jego imieniu (np. w ramach utrzymania strony, konfiguracji narzędzi lub systemów).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Przekazywanie danych poza EOG">
            <p>
              Google i Vercel mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. Stosowane są odpowiednie zabezpieczenia prawne (m.in. standardowe klauzule umowne zatwierdzone przez Komisję
              Europejską) oraz - w miarę możliwości - środki techniczne (pseudonimizacja, minimalizacja).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Czas przechowywania danych">
            <ul className="list-disc space-y-1 pl-6">
              <li>Dane z formularza kontaktowego - do 12 miesięcy od zakończenia korespondencji.</li>
              <li>Dane klientów - przez okres wymagany przepisami prawa (dokumentacja księgowa).</li>
              <li>Dane analityczne - zgodnie z polityką Google Analytics (np. 26 miesięcy).</li>
              <li>Logi - przez okres niezbędny dla bezpieczeństwa i rozliczalności (co do zasady do 12 miesięcy, chyba że przepisy stanowią inaczej).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

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

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Dobrowolność podania danych">
            <p>Podanie danych osobowych jest dobrowolne, ale niezbędne do kontaktu lub realizacji usługi.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Zabezpieczenia">
            <p>Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych osobowych przed nieuprawnionym dostępem, utratą czy zniszczeniem.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Zmiany polityki">
            <p>Polityka prywatności może być aktualizowana, aby uwzględnić zmiany w przepisach lub technologii. Aktualna wersja jest zawsze dostępna na tej stronie.</p>
          </SectionInfo>

          <Gap size="xs" />

          <section>
            <a href="/polityka-prywatnosci-arteon.pdf" className="inline-link" download>
              Pobierz PDF: Polityka prywatności
            </a>
          </section>
        </div>

        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>

      <ButtonToTop />

      <Gap />
    </>
  );
}
