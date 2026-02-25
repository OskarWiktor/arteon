/**
 * Phase 1.3: Add CTA blocks to all non-PL tool files.
 * Each CTA is unique per locale × tool combination.
 * Run: node scripts/_add-cta-blocks.cjs
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['cs','da','de','el','en','es','fi','fr','hu','it','nl','no','pt','ro','sv'];

// CTA content per locale per tool — unique, not mirrored
const CTA_DATA = {
  'contrast-checker': {
    cs: { title: "Potřebujete přístupný web?", description: "Navrhujeme webové stránky s ohledem na všechny uživatele — správný barevný kontrast, čitelná typografie a logická struktura.", btnOne: "Webové stránky", btnOneLink: "/cs/nastroje", btnTwo: "Kontakt", btnTwoLink: "/cs/kontakt" },
    da: { title: "Har du brug for en tilgængelig hjemmeside?", description: "Vi designer hjemmesider med alle brugere i tankerne — korrekt farvekontrast, læsbar typografi og logisk struktur.", btnOne: "Se vores tjenester", btnOneLink: "/da/kontakt", btnTwo: "Kontakt os", btnTwoLink: "/da/kontakt" },
    de: { title: "Brauchen Sie eine barrierefreie Website?", description: "Wir erstellen Websites für alle Nutzer — mit korrektem Farbkontrast, lesbarer Typografie und logischer Struktur. Ab Juni 2025 verlangt das BFSG digitale Barrierefreiheit.", btnOne: "Unsere Leistungen", btnOneLink: "/de/kontakt", btnTwo: "Kontakt aufnehmen", btnTwoLink: "/de/kontakt" },
    el: { title: "Χρειάζεστε μια προσβάσιμη ιστοσελίδα;", description: "Σχεδιάζουμε ιστοσελίδες με γνώμονα όλους τους χρήστες — σωστή αντίθεση χρωμάτων, ευανάγνωστη τυπογραφία και λογική δομή.", btnOne: "Οι υπηρεσίες μας", btnOneLink: "/el/epikoinonia", btnTwo: "Επικοινωνία", btnTwoLink: "/el/epikoinonia" },
    en: { title: "Need an accessible website?", description: "We build websites with every user in mind — proper color contrast, readable typography, logical structure and WCAG compliance.", btnOne: "Our services", btnOneLink: "/en/contact", btnTwo: "Get in touch", btnTwoLink: "/en/contact" },
    es: { title: "¿Necesitas un sitio web accesible?", description: "Creamos sitios web pensando en todos los usuarios — contraste de color adecuado, tipografía legible y estructura lógica.", btnOne: "Nuestros servicios", btnOneLink: "/es/contacto", btnTwo: "Contáctanos", btnTwoLink: "/es/contacto" },
    fi: { title: "Tarvitsetko saavutettavan verkkosivuston?", description: "Suunnittelemme verkkosivustoja kaikki käyttäjät huomioiden — oikea värikontrasti, luettava typografia ja looginen rakenne.", btnOne: "Palvelumme", btnOneLink: "/fi/yhteystiedot", btnTwo: "Ota yhteyttä", btnTwoLink: "/fi/yhteystiedot" },
    fr: { title: "Besoin d'un site web accessible ?", description: "Nous concevons des sites pour tous les utilisateurs — contraste de couleurs adapté, typographie lisible et structure logique. La loi RGAA impose l'accessibilité numérique.", btnOne: "Nos services", btnOneLink: "/fr/contact", btnTwo: "Nous contacter", btnTwoLink: "/fr/contact" },
    hu: { title: "Akadálymentes weboldalt keres?", description: "Minden felhasználóra gondolva tervezzük a weboldalakat — megfelelő színkontraszt, olvasható tipográfia és logikus struktúra.", btnOne: "Szolgáltatásaink", btnOneLink: "/hu/kapcsolat", btnTwo: "Kapcsolat", btnTwoLink: "/hu/kapcsolat" },
    it: { title: "Hai bisogno di un sito web accessibile?", description: "Progettiamo siti web pensati per tutti gli utenti — contrasto colori adeguato, tipografia leggibile e struttura logica. La Legge Stanca impone l'accessibilità digitale.", btnOne: "I nostri servizi", btnOneLink: "/it/contatti", btnTwo: "Contattaci", btnTwoLink: "/it/contatti" },
    nl: { title: "Een toegankelijke website nodig?", description: "Wij ontwerpen websites voor alle gebruikers — correct kleurcontrast, leesbare typografie en logische structuur.", btnOne: "Onze diensten", btnOneLink: "/nl/contact", btnTwo: "Neem contact op", btnTwoLink: "/nl/contact" },
    no: { title: "Trenger du en universelt utformet nettside?", description: "Vi lager nettsider med alle brukere i tankene — riktig fargekontrast, lesbar typografi og logisk struktur. Norges krav om universell utforming gjelder også privat sektor.", btnOne: "Våre tjenester", btnOneLink: "/no/kontakt", btnTwo: "Kontakt oss", btnTwoLink: "/no/kontakt" },
    pt: { title: "Precisa de um site acessível?", description: "Criamos sites pensados para todos os utilizadores — contraste de cores adequado, tipografia legível e estrutura lógica.", btnOne: "Os nossos serviços", btnOneLink: "/pt/contacto", btnTwo: "Contacte-nos", btnTwoLink: "/pt/contacto" },
    ro: { title: "Aveți nevoie de un site accesibil?", description: "Creăm site-uri web gândite pentru toți utilizatorii — contrast de culori adecvat, tipografie lizibilă și structură logică.", btnOne: "Serviciile noastre", btnOneLink: "/ro/contact", btnTwo: "Contactați-ne", btnTwoLink: "/ro/contact" },
    sv: { title: "Behöver du en tillgänglig webbplats?", description: "Vi bygger webbplatser för alla användare — korrekt färgkontrast, läsbar typografi och logisk struktur. DOS-lagen kräver digital tillgänglighet.", btnOne: "Våra tjänster", btnOneLink: "/sv/kontakt", btnTwo: "Kontakta oss", btnTwoLink: "/sv/kontakt" },
  },
  'color-palette': {
    cs: { title: "Potřebujete vizuální identitu pro svou značku?", description: "Navrhujeme loga, systémy barev a firemní materiály — od vizitek po šablony pro sociální sítě.", btnOne: "Naše služby", btnOneLink: "/cs/nastroje", btnTwo: "Kontakt", btnTwoLink: "/cs/kontakt" },
    da: { title: "Har du brug for en visuel identitet til dit brand?", description: "Vi designer logoer, farvepaletter og brandmaterialer — fra visitkort til skabeloner til sociale medier.", btnOne: "Se vores tjenester", btnOneLink: "/da/kontakt", btnTwo: "Kontakt os", btnTwoLink: "/da/kontakt" },
    de: { title: "Brauchen Sie eine einheitliche Markenidentität?", description: "Wir gestalten Logos, Farbsysteme und Firmenmaterialien — von Visitenkarten bis zu Social-Media-Vorlagen.", btnOne: "Unsere Leistungen", btnOneLink: "/de/kontakt", btnTwo: "Kontakt aufnehmen", btnTwoLink: "/de/kontakt" },
    el: { title: "Χρειάζεστε οπτική ταυτότητα για το brand σας;", description: "Σχεδιάζουμε λογότυπα, χρωματικά συστήματα και εταιρικό υλικό — από επαγγελματικές κάρτες μέχρι πρότυπα για social media.", btnOne: "Οι υπηρεσίες μας", btnOneLink: "/el/epikoinonia", btnTwo: "Επικοινωνία", btnTwoLink: "/el/epikoinonia" },
    en: { title: "Need a consistent brand identity?", description: "We design logos, color systems and brand materials — from business cards to social media templates.", btnOne: "Our services", btnOneLink: "/en/contact", btnTwo: "Get in touch", btnTwoLink: "/en/contact" },
    es: { title: "¿Necesitas una identidad visual para tu marca?", description: "Diseñamos logotipos, sistemas de color y materiales corporativos — desde tarjetas de visita hasta plantillas para redes sociales.", btnOne: "Nuestros servicios", btnOneLink: "/es/contacto", btnTwo: "Contáctanos", btnTwoLink: "/es/contacto" },
    fi: { title: "Tarvitsetko yhtenäisen brändi-identiteetin?", description: "Suunnittelemme logoja, värijärjestelmiä ja yritysmateriaaleja — käyntikorteista sosiaalisen median pohjiin.", btnOne: "Palvelumme", btnOneLink: "/fi/yhteystiedot", btnTwo: "Ota yhteyttä", btnTwoLink: "/fi/yhteystiedot" },
    fr: { title: "Besoin d'une identité visuelle cohérente ?", description: "Nous concevons logos, systèmes de couleurs et supports de marque — des cartes de visite aux modèles pour les réseaux sociaux.", btnOne: "Nos services", btnOneLink: "/fr/contact", btnTwo: "Nous contacter", btnTwoLink: "/fr/contact" },
    hu: { title: "Egységes márkaidentitásra van szüksége?", description: "Logókat, színrendszereket és vállalati anyagokat tervezünk — névjegykártyáktól a közösségi média sablonokig.", btnOne: "Szolgáltatásaink", btnOneLink: "/hu/kapcsolat", btnTwo: "Kapcsolat", btnTwoLink: "/hu/kapcsolat" },
    it: { title: "Hai bisogno di un'identità visiva coerente?", description: "Progettiamo loghi, sistemi cromatici e materiali aziendali — dai biglietti da visita ai template per i social media.", btnOne: "I nostri servizi", btnOneLink: "/it/contatti", btnTwo: "Contattaci", btnTwoLink: "/it/contatti" },
    nl: { title: "Een consistente merkidentiteit nodig?", description: "Wij ontwerpen logo's, kleursystemen en bedrijfsmaterialen — van visitekaartjes tot social media templates.", btnOne: "Onze diensten", btnOneLink: "/nl/contact", btnTwo: "Neem contact op", btnTwoLink: "/nl/contact" },
    no: { title: "Trenger du en helhetlig visuell identitet?", description: "Vi designer logoer, fargesystemer og profilmateriell — fra visittkort til maler for sosiale medier.", btnOne: "Våre tjenester", btnOneLink: "/no/kontakt", btnTwo: "Kontakt oss", btnTwoLink: "/no/kontakt" },
    pt: { title: "Precisa de uma identidade visual coerente?", description: "Criamos logótipos, sistemas de cores e materiais corporativos — de cartões de visita a templates para redes sociais.", btnOne: "Os nossos serviços", btnOneLink: "/pt/contacto", btnTwo: "Contacte-nos", btnTwoLink: "/pt/contacto" },
    ro: { title: "Aveți nevoie de o identitate vizuală coerentă?", description: "Creăm logo-uri, sisteme de culori și materiale de brand — de la cărți de vizită la template-uri pentru social media.", btnOne: "Serviciile noastre", btnOneLink: "/ro/contact", btnTwo: "Contactați-ne", btnTwoLink: "/ro/contact" },
    sv: { title: "Behöver du en enhetlig visuell identitet?", description: "Vi designar logotyper, färgsystem och varumärkesmaterial — från visitkort till mallar för sociala medier.", btnOne: "Våra tjänster", btnOneLink: "/sv/kontakt", btnTwo: "Kontakta oss", btnTwoLink: "/sv/kontakt" },
  },
  'word-counter': {
    cs: { title: "Potřebujete profesionální texty pro svůj web?", description: "Píšeme texty, které se dobře umisťují ve vyhledávačích a přesvědčují k akci. Popisy služeb, blogové články a webový obsah.", btnOne: "Naše služby", btnOneLink: "/cs/nastroje", btnTwo: "Kontakt", btnTwoLink: "/cs/kontakt" },
    da: { title: "Har du brug for professionelt indhold til din hjemmeside?", description: "Vi skriver tekster, der rangerer godt i søgeresultaterne og overbeviser til handling. Servicebeskrivelser, blogartikler og webindhold.", btnOne: "Se vores tjenester", btnOneLink: "/da/kontakt", btnTwo: "Kontakt os", btnTwoLink: "/da/kontakt" },
    de: { title: "Brauchen Sie professionelle Texte für Ihre Website?", description: "Wir schreiben Texte, die in Google ranken und zum Handeln überzeugen. Leistungsbeschreibungen, Blogartikel und Webinhalte.", btnOne: "Unsere Leistungen", btnOneLink: "/de/kontakt", btnTwo: "Kontakt aufnehmen", btnTwoLink: "/de/kontakt" },
    el: { title: "Χρειάζεστε επαγγελματικό περιεχόμενο για τον ιστότοπό σας;", description: "Γράφουμε κείμενα που κατατάσσονται καλά στη Google και πείθουν για δράση. Περιγραφές υπηρεσιών, άρθρα blog και περιεχόμενο ιστού.", btnOne: "Οι υπηρεσίες μας", btnOneLink: "/el/epikoinonia", btnTwo: "Επικοινωνία", btnTwoLink: "/el/epikoinonia" },
    en: { title: "Need professional content for your website?", description: "We write texts that rank well in Google and convince visitors to act. Service descriptions, blog articles and web content.", btnOne: "Our services", btnOneLink: "/en/contact", btnTwo: "Get in touch", btnTwoLink: "/en/contact" },
    es: { title: "¿Necesitas contenido profesional para tu web?", description: "Escribimos textos que se posicionan en Google y convencen a los visitantes. Descripciones de servicios, artículos de blog y contenido web.", btnOne: "Nuestros servicios", btnOneLink: "/es/contacto", btnTwo: "Contáctanos", btnTwoLink: "/es/contacto" },
    fi: { title: "Tarvitsetko ammattimaista sisältöä verkkosivuillesi?", description: "Kirjoitamme tekstejä, jotka sijoittuvat hyvin Googlessa ja vakuuttavat kävijät toimimaan. Palvelukuvaukset, blogiartikkelit ja verkkosisältö.", btnOne: "Palvelumme", btnOneLink: "/fi/yhteystiedot", btnTwo: "Ota yhteyttä", btnTwoLink: "/fi/yhteystiedot" },
    fr: { title: "Besoin de contenus professionnels pour votre site ?", description: "Nous rédigeons des textes qui se positionnent sur Google et incitent les visiteurs à agir. Descriptions de services, articles de blog et contenus web.", btnOne: "Nos services", btnOneLink: "/fr/contact", btnTwo: "Nous contacter", btnTwoLink: "/fr/contact" },
    hu: { title: "Professzionális tartalomra van szüksége weboldalához?", description: "Olyan szövegeket írunk, amelyek jól rangsorolnak a Google-ben és cselekvésre ösztönzik a látogatókat. Szolgáltatásleírások, blogcikkek és webtartalmak.", btnOne: "Szolgáltatásaink", btnOneLink: "/hu/kapcsolat", btnTwo: "Kapcsolat", btnTwoLink: "/hu/kapcsolat" },
    it: { title: "Hai bisogno di contenuti professionali per il tuo sito?", description: "Scriviamo testi che si posizionano bene su Google e convincono i visitatori ad agire. Descrizioni di servizi, articoli blog e contenuti web.", btnOne: "I nostri servizi", btnOneLink: "/it/contatti", btnTwo: "Contattaci", btnTwoLink: "/it/contatti" },
    nl: { title: "Professionele content nodig voor uw website?", description: "Wij schrijven teksten die goed scoren in Google en bezoekers overtuigen tot actie. Dienstbeschrijvingen, blogartikelen en webcontent.", btnOne: "Onze diensten", btnOneLink: "/nl/contact", btnTwo: "Neem contact op", btnTwoLink: "/nl/contact" },
    no: { title: "Trenger du profesjonelt innhold til nettsiden?", description: "Vi skriver tekster som rangerer godt i Google og overbeviser besøkende til handling. Tjenestebeskrivelser, bloggartikler og webinnhold.", btnOne: "Våre tjenester", btnOneLink: "/no/kontakt", btnTwo: "Kontakt oss", btnTwoLink: "/no/kontakt" },
    pt: { title: "Precisa de conteúdo profissional para o seu site?", description: "Escrevemos textos que se posicionam bem no Google e convencem os visitantes a agir. Descrições de serviços, artigos de blog e conteúdo web.", btnOne: "Os nossos serviços", btnOneLink: "/pt/contacto", btnTwo: "Contacte-nos", btnTwoLink: "/pt/contacto" },
    ro: { title: "Aveți nevoie de conținut profesional pentru site?", description: "Scriem texte care se clasează bine în Google și conving vizitatorii să acționeze. Descrieri de servicii, articole de blog și conținut web.", btnOne: "Serviciile noastre", btnOneLink: "/ro/contact", btnTwo: "Contactați-ne", btnTwoLink: "/ro/contact" },
    sv: { title: "Behöver du professionellt innehåll till din webbplats?", description: "Vi skriver texter som rankar bra i Google och övertygar besökare att agera. Tjänstebeskrivningar, bloggartiklar och webbinnehåll.", btnOne: "Våra tjänster", btnOneLink: "/sv/kontakt", btnTwo: "Kontakta oss", btnTwoLink: "/sv/kontakt" },
  }
};

let updated = 0;
let skipped = 0;

for (const tool of ['contrast-checker', 'color-palette', 'word-counter']) {
  for (const locale of LOCALES) {
    const filePath = path.join('data', locale, 'tools', tool + '.json');
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Skip if CTA already exists
      if (data.cta) {
        console.log(`SKIP ${locale}/${tool} — CTA already exists`);
        skipped++;
        continue;
      }
      
      const ctaContent = CTA_DATA[tool][locale];
      if (!ctaContent) {
        console.log(`WARN ${locale}/${tool} — no CTA data defined`);
        continue;
      }
      
      data.cta = {
        title: ctaContent.title,
        description: ctaContent.description,
        btnOne: ctaContent.btnOne,
        btnOneLink: ctaContent.btnOneLink,
        btnTwo: ctaContent.btnTwo,
        btnTwoLink: ctaContent.btnTwoLink,
        backgroundImage: "/assets/arteon-logo-on-mockup.webp",
        overlay: "black"
      };
      
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
      
      // Validate JSON
      JSON.parse(fs.readFileSync(filePath, 'utf8'));
      console.log(`OK   ${locale}/${tool}`);
      updated++;
    } catch (e) {
      console.error(`ERR  ${locale}/${tool}: ${e.message}`);
    }
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
