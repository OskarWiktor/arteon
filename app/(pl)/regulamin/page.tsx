import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/lib/url';

export const metadata = {
  title: 'Regulamin świadczenia usług - Arteon',
  description: 'Zasady współpracy, płatności, prawa autorskie, reklamacje i wsparcie - regulamin świadczenia usług Arteon.',
  alternates: { canonical: toAbsoluteUrl('/regulamin') },
  openGraph: {
    title: 'Regulamin świadczenia usług - Arteon',
    description: 'Zasady współpracy, płatności, prawa autorskie, reklamacje i wsparcie - regulamin świadczenia usług Arteon.',
    url: toAbsoluteUrl('/regulamin'),
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <Gap size="xs" />

      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Regulamin świadczenia usług</h1>

          <p className="mt-2 text-sm opacity-70">
            Wersja: <strong>1.10.2025</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo id="postanowienia" title="1. Postanowienia ogólne">
            <p>1.1. Usługodawca: Arteon </p>
            <p>1.2. NIP / REGON: 9442284430 / 528888241</p>
            <p>1.3. Adres do korespondencji: Zagacie, ul. Jaśminowa, nr 36, 32-070</p>
            <p>1.4. E-mail do spraw umów i reklamacji: kontakt@arteonagency.pl.</p>
            <p>1.5. Telefon: 516 466 255.</p>
            <p>1.6. Regulamin określa zasady świadczenia usług drogą elektroniczną na terytorium Polski.</p>
            <p>1.7. Język umowy: polski.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="dla-kogo" title="2. Dla kogo świadczymy">
            <p>2.1. Usługi kierowane są do przedsiębiorców (B2B). Na życzenie możliwa obsługa konsumentów oraz przedsiębiorców na prawach konsumenta (art. 38a Ustawy o prawach konsumenta).</p>
            <p>2.2. Dla konsumenta / przedsiębiorcy uprzywilejowanego obowiązuje prawo odstąpienia 14 dni, z wyjątkami wskazanymi w §13.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="zakres-uslug" title="3. Zakres usług">
            <p>
              3.1. <strong>WWW:</strong> projekt i wdrożenia stron, sklepów, blogów i aplikacji (WordPress, Webflow, Next.js oraz inne technologie dopasowane do potrzeb).
            </p>
            <p>
              3.2. <strong>Design:</strong> identyfikacja marki (loga, sygnety, kolory, typografia), materiały drukowane (wizytówki, ulotki, foldery, katalogi, odzież, gadżety), makiety i layouty
              stron, retusz i optymalizacja grafik, retusz zdjęć, treści do social mediów (posty, stories, karuzele, szablony), montaż krótkich filmów.
            </p>
            <p>
              3.3. <strong>Content:</strong> treści na strony (struktura i język dopasowany do branży), artykuły eksperckie i edukacyjne, opisy e-commerce (short i premium), treści do social mediów,
              oferty i case studies, redakcja i korekta, dostosowanie do SEO.
            </p>
            <p>
              3.4. <strong>Marketing:</strong> audyt SEO, optymalizacja SEO, rozwój SEO (content + linki), reklamy (Google / Meta), prowadzenie social mediów, branding psychologiczny (archetyp, język
              marki).
            </p>
            <p>
              3.5. <strong>Hosting i administracja:</strong> Usługodawca nie świadczy hostingu. Administracja (aktualizacje, kopie, drobne prace) możliwa jako oddzielna usługa utrzymaniowa.
            </p>
            <p>
              3.6. <strong>Szkolenia:</strong> instruktaże z obsługi (np. PDF do sklepu/strony), podstawy SEO - wliczone w projekt; brak odrębnej sprzedaży „doradztwa”.
            </p>
            <p>
              3.7. <strong>Wykluczenia:</strong> brak usług sprzecznych z prawem, treści naruszających prawa osób trzecich, działań nieetycznych oraz odpłatnego „doradztwa” jako samodzielnej pozycji.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="umowa" title="4. Zawarcie umowy">
            <p>4.1. Kanały: e-mail, formularz, Oferteo, komunikatory (np. Teams) - zawsze z potwierdzeniem na piśmie (mail/wiadomość).</p>
            <p>4.2. Umowę stanowi: oferta (zakres, cena, terminy) + akceptacja + ewentualny brief/załączniki.</p>
            <div>
              <p>4.3. Płatności domyślne:</p>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>- do 5 000 zł: bez zaliczki, jedna faktura po odbiorze,</li>
                <li>- 5 001-10 000 zł: zaliczka 10%, reszta po odbiorze (możliwe 2 faktury),</li>
                <li>- powyżej 10 000 zł: zaliczka 20%, reszta w kamieniach milowych (kilka faktur).</li>
              </ul>
              <p>Możliwe inne warianty - zgodnie z ustaleniami w ofercie.</p>
            </div>
            <p>4.4. Start prac: po akceptacji oferty (na piśmie) i - gdy dotyczy - po zaksięgowaniu zaliczki oraz ustaleniu daty rozpoczęcia.</p>
            <p>4.5. Ważność oferty: 14 dni od wysłania, chyba że wskazano inaczej.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="platnosci" title="5. Ceny i rozliczenia">
            <p>5.1. Waluta: PLN (inne waluty na życzenie - rozliczenie wg bieżącego kursu banku).</p>
            <p>5.2. Termin płatności: 7 dni, chyba że oferta stanowi inaczej.</p>
            <p>5.3. Forma płatności: przelew na rachunek wskazany na fakturze.</p>
            <p>5.4. Opóźnienie: odsetki ustawowe; przy zwłoce w płatności Usługodawca może wstrzymać prace (w modelu kamieni milowych).</p>
            <p>5.5. Faktury: wystawiane wyłącznie za usługi; brak paragonów. Ceny brutto z adnotacją o zwolnieniu z VAT, jeżeli przysługuje.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="change-request" title="6. Zmiany zakresu (change request)">
            <p>6.1. Dodatkowe prace wyceniane zadaniowo (uwzględniając technologię i złożoność).</p>
            <p>6.2. Liczba koncepcji/poprawek oraz ich zakres - zgodnie z ofertą.</p>
            <p>6.3. Definicje: „poprawka” = modyfikacja w ramach uzgodnionej funkcji i celu; „nowa funkcja” = rzecz nieobjęta ustalonym zakresem - wymaga nowej wyceny.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="odbior" title="7. Odbiór">
            <p>7.1. Odbiory cząstkowe po etapach + odbiór końcowy potwierdzony e-mailem.</p>
            <p>7.2. Milcząca akceptacja: brak uwag w ciągu 5 dni roboczych = akceptacja.</p>
            <p>7.3. Dostępy robocze przekazywane w trakcie prac; pakiet dostępowo-projektowy (repo, pliki, konfiguracje) - po pełnej zapłacie.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="prawa-autorskie" title="8. Prawa autorskie i portfolio">
            <p>
              8.1. Przeniesienie autorskich praw majątkowych/praw do korzystania następuje po pełnej zapłacie, na polach: utrwalanie, zwielokrotnianie, publiczne udostępnianie w Internecie,
              wprowadzanie zmian dla utrzymania/rozwoju, wykorzystanie w działalności klienta.
            </p>
            <p>
              8.2. Portfolio i case study: Usługodawca może publikować miniatury, logo, zrzuty i opis przebiegu współpracy oraz efektów (bez wrażliwych danych). Klient może zgłosić sprzeciw e-mailem -
              wówczas publikacja nie nastąpi.
            </p>
            <p>8.3. Klient oświadcza, że posiada prawa/licencje do materiałów przekazanych do projektu.</p>
            <p>8.4. Licencje osób trzecich (fonty, zdjęcia, wtyczki) zapewnia i finansuje Klient; Usługodawca może pośredniczyć w znalezieniu i zakupie.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="utrzymanie" title="9. Utrzymanie, domeny, kopie">
            <p>9.1. Utrzymanie (opcjonalnie): aktualizacje, kopie, drobne prace, monitoring - wg umowy utrzymaniowej; czas reakcji: do 48h w dni robocze.</p>
            <p>9.2. Domeny rejestruje Klient (Usługodawca może asystować).</p>
            <p>9.3. Kopie: jedna kopia po wdrożeniu; w umowie utrzymaniowej - kopie np. raz w tygodniu (częściej dla serwisów dynamicznych).</p>
            <p>9.4. Infrastruktura zewnętrzna Klienta: odpowiedzialność Usługodawcy ograniczona do konfiguracji i działań w ramach przydzielonych uprawnień.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="seo-reklama" title="10. SEO i reklama - zasady">
            <p>10.1. Brak gwarancji konkretnych pozycji i wyników - na efekt wpływają czynniki zewnętrzne (konkurencja, algorytmy, rynek).</p>
            <p>10.2. Audyty/implementacje SEO mają charakter wdrożeniowy i edukacyjny; konsultacje nie są odrębną, płatną usługą „doradztwa”.</p>
            <p>10.3. Budżety reklamowe rozlicza Klient bezpośrednio z operatorem (Google, Meta); Usługodawca fakturuje wyłącznie obsługę.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="gwarancja" title="11. Gwarancja i wsparcie">
            <p>11.1. Gwarancja na realizacja: 60 dni od odbioru - obejmuje błędy implementacyjne.</p>
            <p>11.2. Gwarancja nie obejmuje: nowych funkcji, zmian przeglądarek/usług zewnętrznych, zdarzeń po stronie hostingu, działań osób trzecich.</p>
            <p>11.3. Po gwarancji: prace serwisowe według indywidualnej wyceny (stawka nie niższa niż 50 zł brutto/h).</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="odpowiedzialnosc" title="12. Odpowiedzialność, poufność, siła wyższa">
            <p>12.1. Odpowiedzialność Usługodawcy wobec Klienta B2B ograniczona jest do wysokości wynagrodzenia za dany etap prac; wyłączone są utracone korzyści.</p>
            <p>12.2. Siła wyższa: strony nie odpowiadają za niewykonanie z przyczyn niezależnych (awarie, ataki, blackouty, kataklizmy).</p>
            <p>12.3. Poufność: każda ze stron zachowuje w tajemnicy informacje techniczne, handlowe i organizacyjne uzyskane w trakcie współpracy.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="konsumenci" title="13. Konsumenci i przedsiębiorcy uprzywilejowani">
            <p>13.1. Informacje przedumowne udostępniane są przed zawarciem umowy (strona/oferta).</p>
            <div>
              <p>13.2. Odstąpienie 14 dni: możliwe w umowach na odległość, z wyjątkami - w szczególności:</p>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>a) pełne wykonanie usługi za wyraźną zgodą przed upływem terminu,</li>
                <li>b) dostarczenie treści cyfrowych przed upływem terminu za zgodą i po potwierdzeniu utraty prawa odstąpienia.</li>
              </ul>
            </div>
            <p>13.3. Na życzenie udostępniamy wzór formularza odstąpienia (PDF).</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="reklamacje" title="14. Reklamacje">
            <p>14.1. Zgłoszenie e-mailem na adres: kontakt@arteonagency.pl z opisem problemu, datą i załącznikami.</p>
            <p>14.2. Odpowiedź w terminie 14 dni.</p>
            <p>14.3. Priorytet: naprawa w rozsądnym terminie; jeżeli naprawa obiektywnie niemożliwa - odpowiednia rekompensata.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="rodo" title="15. Dane osobowe">
            <p>
              15.1. Administratorem danych jest Usługodawca. Zasady przetwarzania opisuje Polityka prywatności dostępna na stronie{' '}
              <a href="/polityka-prywatnosci" className="underline underline-offset-4">
                www.arteonagency.pl/polityka-prywatnosci
              </a>{' '}
              oraz w formie PDF
            </p>
            <p>15.2. Umowy powierzenia (DPA) zawieramy na życzenie Klienta, gdy przetwarzamy jego dane w imieniu.</p>
            <p>15.3. Analityka (np. GA4, Vercel Analytics) i logi - zgodnie z Polityką prywatności.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="zmiany-prawo" title="16. Zmiany regulaminu, prawo i spory">
            <p>
              16.1. Zmiany publikujemy na{' '}
              <a href="/regulamin" className="underline underline-offset-4">
                www.arteonagency.pl/regulamin
              </a>{' '}
              z datą wersji; obowiązują od dnia publikacji i nie naruszają praw nabytych.
            </p>
            <p>16.2. Prawo właściwe: polskie.</p>
            <p>16.3. Spory: w pierwszej kolejności mediacja/negocjacje; w relacjach B2B - sąd właściwy dla siedziby Usługodawcy.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="oferteo" title="17. Oferteo">
            <p>17.1. Zgłoszenie w Oferteo + pisemne potwierdzenie Usługodawcy (np. e-mail) = zawarcie umowy na warunkach oferty i niniejszego Regulaminu.</p>
            <p>17.2. Link do Regulaminu dołączamy w ofertach Oferteo; Regulamin wiąże strony dla zleceń z tego kanału.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo id="wejscie-w-zycie" title="18. Wejście w życie">
            <p>18.1. Regulamin obowiązuje od dnia: 1.10.2025.</p>
          </SectionInfo>

          <Gap size="xs" />

          <section>
            <a href="/regulamin-arteon.pdf" className="inline-link" download>
              Pobierz PDF: Regulamin świadczenia usług
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
