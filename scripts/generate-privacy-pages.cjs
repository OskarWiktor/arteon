/**
 * Generate privacy policy pages for el, bg, ha, yo, af.
 * Usage: node scripts/generate-privacy-pages.cjs
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const PAGES = {
  el: {
    dir: 'app/el/politiki-aporritou',
    href: '/el/politiki-aporritou',
    h1: 'Πολιτική απορρήτου',
    version: '13.02.2026',
    versionLabel: 'Έκδοση',
    sections: [
      {
        title: '1. Υπεύθυνος επεξεργασίας',
        content:
          '<p>Υπεύθυνος επεξεργασίας προσωπικών δεδομένων είναι η Arteon με έδρα στον Δήμο Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Πολωνία.</p><p>ΑΦΜ: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p><p>Επικοινωνία: <strong>contact@arteonagency.com</strong>, τηλ.: <strong>+48 516 466 255</strong>.</p>',
      },
      {
        title: '2. Εύρος δεδομένων',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>δεδομένα από τη φόρμα επικοινωνίας (όνομα, επώνυμο, email, περιεχόμενο μηνύματος),</li><li>αυτόματα συλλεγόμενα τεχνικά δεδομένα (IP, δεδομένα συσκευής, cookies),</li><li>αναλυτικά δεδομένα από Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics και Vercel Speed Insights,</li><li>αναλυτικά δεδομένα από Metricool (στατιστικά επισκέψεων, πηγές κίνησης),</li><li>δεδομένα που συλλέγει το Google AdSense για προβολή διαφημίσεων (αναγνωριστικά, cookies διαφημίσεων, δεδομένα αλληλεπίδρασης),</li><li>αρχεία καταγραφής διακομιστή και συμβάντα ασφαλείας (π.χ. χρονοσφραγίδες, IP, κεφαλίδες αιτημάτων).</li></ul>',
      },
      {
        title: '3. Σκοποί και νομική βάση',
        content:
          '<ol class="list-decimal space-y-1 pl-6"><li><strong>Επικοινωνία με πελάτες</strong> — επεξεργασία ερωτημάτων φόρμας (Άρθρο 6(1)(β) και (στ) GDPR).</li><li><strong>Μάρκετινγκ και αναλυτικά</strong> — στατιστικά ιστοσελίδας, βελτιστοποίηση περιεχομένου (Άρθρο 6(1)(στ) GDPR).</li><li><strong>Παροχή υπηρεσιών</strong> — προσφορές, συμβάσεις, τιμολόγια (Άρθρο 6(1)(β) GDPR).</li><li><strong>Νομικές υποχρεώσεις</strong> — π.χ. φύλαξη λογιστικών εγγράφων (Άρθρο 6(1)(γ) GDPR).</li><li><strong>Ασφάλεια</strong> — αρχεία καταγραφής, πρόληψη κατάχρησης (Άρθρο 6(1)(στ) GDPR).</li><li><strong>Προβολή διαφημίσεων</strong> — μέσω Google AdSense (Άρθρο 6(1)(α) GDPR — συγκατάθεση).</li></ol>',
      },
      {
        title: '4. Cookies',
        content:
          '<p>Η ιστοσελίδα χρησιμοποιεί cookies για:</p><ul class="list-disc space-y-1 pl-6"><li>σωστή λειτουργία,</li><li>ανάλυση κίνησης (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li><li>σκοπούς μάρκετινγκ,</li><li>προβολή διαφημίσεων (Google AdSense / DoubleClick).</li></ul><p>Μπορείτε να απενεργοποιήσετε εξατομικευμένες διαφημίσεις στις <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="inline-link">ρυθμίσεις Google Ads</a> ή στο <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="inline-link">aboutads.info</a>.</p><p>Η σελίδα χρησιμοποιεί Google Consent Mode v2. Τα scripts δεν συλλέγουν δεδομένα μέχρι τη συγκατάθεση μέσω banner cookies.</p><p>Μπορείτε να διαχειριστείτε τα cookies στις ρυθμίσεις του προγράμματος περιήγησης.</p>',
      },
      {
        title: '5. Αποδέκτες δεδομένων',
        content:
          '<p>Τα δεδομένα μπορεί να κοινοποιηθούν σε:</p><ul class="list-disc space-y-1 pl-6"><li>πάροχο φιλοξενίας (π.χ. Vercel),</li><li>παρόχους αναλυτικών (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li><li>πάροχο διαφημίσεων (Google Ireland Ltd. — Google AdSense),</li><li>ελεγκτή, πάροχο πληρωμών ή νομικό σύμβουλο — κατά περίπτωση.</li></ul><p>Όλοι οι αποδέκτες επεξεργάζονται δεδομένα σύμφωνα με τον GDPR.</p>',
      },
      { title: '6. Συμφωνία επεξεργασίας (DPA)', content: '<p>Κατόπιν αιτήματος, συνάπτουμε συμφωνία επεξεργασίας δεδομένων (DPA) όταν επεξεργαζόμαστε δεδομένα για λογαριασμό πελάτη.</p>' },
      {
        title: '7. Μεταφορά εκτός ΕΟΧ',
        content: '<p>Η Google και η Vercel μπορεί να επεξεργάζονται δεδομένα εκτός ΕΟΧ. Εφαρμόζονται κατάλληλα νομικά μέτρα (τυποποιημένες συμβατικές ρήτρες, τεχνικά μέτρα).</p>',
      },
      {
        title: '8. Περίοδος διατήρησης',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>Φόρμα επικοινωνίας — έως 12 μήνες.</li><li>Δεδομένα πελατών — σύμφωνα με τη νομοθεσία.</li><li>Αναλυτικά — σύμφωνα με Google Analytics (π.χ. 26 μήνες).</li><li>Αρχεία καταγραφής — έως 12 μήνες.</li></ul>',
      },
      {
        title: '9. Τα δικαιώματά σας',
        content:
          '<p>Έχετε δικαίωμα:</p><ul class="list-disc space-y-1 pl-6"><li>πρόσβασης στα δεδομένα σας,</li><li>διόρθωσης,</li><li>διαγραφής,</li><li>περιορισμού επεξεργασίας,</li><li>φορητότητας,</li><li>εναντίωσης (συμπεριλαμβανομένου μάρκετινγκ),</li><li>υποβολής καταγγελίας στην αρμόδια αρχή (στην Πολωνία: UODO).</li></ul>',
      },
      { title: '10. Εθελοντική παροχή', content: '<p>Η παροχή προσωπικών δεδομένων είναι εθελοντική αλλά απαραίτητη για επικοινωνία ή παροχή υπηρεσιών.</p>' },
      { title: '11. Μέτρα ασφαλείας', content: '<p>Εφαρμόζουμε τεχνικά και οργανωτικά μέτρα για την προστασία προσωπικών δεδομένων.</p>' },
      { title: '12. Αλλαγές πολιτικής', content: '<p>Αυτή η πολιτική απορρήτου μπορεί να ενημερωθεί. Η τελευταία έκδοση είναι πάντα διαθέσιμη σε αυτή τη σελίδα.</p>' },
    ],
  },
  bg: {
    dir: 'app/bg/politika-za-poveritelnost',
    href: '/bg/politika-za-poveritelnost',
    h1: 'Политика за поверителност',
    version: '13.02.2026',
    versionLabel: 'Версия',
    sections: [
      {
        title: '1. Администратор на данни',
        content:
          '<p>Администратор на лични данни е Arteon със седалище в община Czernichów, Zagacie, ул. Jasminowa 36, 32-070, Полша.</p><p>ДДС номер: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p><p>Контакт: <strong>contact@arteonagency.com</strong>, тел.: <strong>+48 516 466 255</strong>.</p>',
      },
      {
        title: '2. Обхват на данните',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>данни от контактната форма (име, фамилия, имейл, съдържание),</li><li>автоматично събирани технически данни (IP, данни за устройството, бисквитки),</li><li>аналитични данни от Google Analytics 4, Ahrefs, Vercel Analytics и Vercel Speed Insights,</li><li>аналитични данни от Metricool,</li><li>данни от Google AdSense за показване на реклами,</li><li>сървърни логове и събития за сигурност.</li></ul>',
      },
      {
        title: '3. Цели и правно основание',
        content:
          '<ol class="list-decimal space-y-1 pl-6"><li><strong>Комуникация с клиенти</strong> — обработка на запитвания (чл. 6(1)(б) и (е) GDPR).</li><li><strong>Маркетинг и аналитика</strong> — статистика, оптимизация (чл. 6(1)(е) GDPR).</li><li><strong>Предоставяне на услуги</strong> — оферти, договори, фактури (чл. 6(1)(б) GDPR).</li><li><strong>Законови задължения</strong> — счетоводни документи (чл. 6(1)(в) GDPR).</li><li><strong>Сигурност</strong> — логове, предотвратяване на злоупотреби (чл. 6(1)(е) GDPR).</li><li><strong>Показване на реклами</strong> — чрез Google AdSense (чл. 6(1)(а) GDPR — съгласие).</li></ol>',
      },
      {
        title: '4. Бисквитки',
        content:
          '<p>Сайтът използва бисквитки за:</p><ul class="list-disc space-y-1 pl-6"><li>правилно функциониране,</li><li>анализ на трафика (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li><li>маркетингови цели,</li><li>показване на реклами (Google AdSense / DoubleClick).</li></ul><p>Персонализираните реклами можете да изключите в <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="inline-link">настройките на Google Ads</a> или на <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="inline-link">aboutads.info</a>.</p><p>Сайтът използва Google Consent Mode v2. Скриптовете не събират данни до получаване на съгласие.</p><p>Бисквитките можете да управлявате в настройките на браузъра.</p>',
      },
      {
        title: '5. Получатели на данни',
        content:
          '<p>Данните могат да бъдат споделени с:</p><ul class="list-disc space-y-1 pl-6"><li>доставчик на хостинг (Vercel),</li><li>доставчици на аналитика (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li><li>доставчик на реклами (Google Ireland Ltd. — Google AdSense),</li><li>одитор, платежен посредник или юридически съветник — при необходимост.</li></ul><p>Всички получатели обработват данни съгласно GDPR.</p>',
      },
      { title: '6. Споразумение за обработка (DPA)', content: '<p>При поискване сключваме споразумение за обработка на данни (DPA), когато обработваме данни от името на клиент.</p>' },
      { title: '7. Трансфер извън ЕИП', content: '<p>Google и Vercel могат да обработват данни извън ЕИП. Прилагат се подходящи правни мерки (стандартни договорни клаузи, технически мерки).</p>' },
      {
        title: '8. Период на съхранение',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>Контактна форма — до 12 месеца.</li><li>Клиентски данни — съгласно законодателството.</li><li>Аналитични — съгласно Google Analytics (напр. 26 месеца).</li><li>Логове — до 12 месеца.</li></ul>',
      },
      {
        title: '9. Вашите права',
        content:
          '<p>Имате право на:</p><ul class="list-disc space-y-1 pl-6"><li>достъп до данните си,</li><li>коригиране,</li><li>изтриване,</li><li>ограничаване на обработката,</li><li>преносимост,</li><li>възражение (включително маркетинг),</li><li>подаване на жалба до надзорен орган (в Полша: UODO).</li></ul>',
      },
      { title: '10. Доброволност', content: '<p>Предоставянето на лични данни е доброволно, но необходимо за комуникация или предоставяне на услуги.</p>' },
      { title: '11. Мерки за сигурност', content: '<p>Прилагаме технически и организационни мерки за защита на личните данни.</p>' },
      { title: '12. Промени в политиката', content: '<p>Тази политика за поверителност може да бъде актуализирана. Последната версия е винаги достъпна на тази страница.</p>' },
    ],
  },
  ha: {
    dir: 'app/ha/manufar-sirri',
    href: '/ha/manufar-sirri',
    h1: 'Manufar sirri',
    version: '13.02.2026',
    versionLabel: 'Sigar',
    sections: [
      {
        title: '1. Mai kula da bayanai',
        content:
          '<p>Mai kula da bayanan sirri shine Arteon da ke zaune a \u0199asar Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p><p>NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p><p>Tuntuɓa: <strong>contact@arteonagency.com</strong>, waya: <strong>+48 516 466 255</strong>.</p>',
      },
      {
        title: '2. Irin bayanan da ake tattarawa',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>bayanai daga fom ɗin tuntuɓa (suna, sunan iyali, imel, abin da aka rubuta),</li><li>bayanan fasaha da ake tattara ta atomatik (IP, bayanan na\u2019ura, cookies),</li><li>bayanan bincike daga Google Analytics 4, Ahrefs, Vercel Analytics da Vercel Speed Insights,</li><li>bayanan bincike daga Metricool,</li><li>bayanai da Google AdSense ke tattarawa don nuna tallace-tallace,</li><li>bayanan sabar da abubuwan tsaro.</li></ul>',
      },
      {
        title: '3. Dalilai da tushen doka',
        content:
          '<ol class="list-decimal space-y-1 pl-6"><li><strong>Sadarwa da abokan ciniki</strong> — sarrafa tambayoyi (Sashe 6(1)(b) da (f) GDPR).</li><li><strong>Tallace-tallace da bincike</strong> — kididdiga, ingantawa (Sashe 6(1)(f) GDPR).</li><li><strong>Bayar da ayyuka</strong> — tayin farashi, kwangila, takardar biyan kuɗi (Sashe 6(1)(b) GDPR).</li><li><strong>Wajibin doka</strong> — takardun lissafi (Sashe 6(1)(c) GDPR).</li><li><strong>Tsaro</strong> — bayanan shiga, hana cin zarafi (Sashe 6(1)(f) GDPR).</li><li><strong>Nuna tallace-tallace</strong> — ta hanyar Google AdSense (Sashe 6(1)(a) GDPR — yarda).</li></ol>',
      },
      {
        title: '4. Cookies',
        content:
          '<p>Shafin yanar gizo yana amfani da cookies don:</p><ul class="list-disc space-y-1 pl-6"><li>aiki daidai,</li><li>binciken zirga-zirga (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li><li>dalilai na tallace-tallace,</li><li>nuna tallace-tallace (Google AdSense / DoubleClick).</li></ul><p>Kuna iya kashe tallace-tallacen da aka keɓance a <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="inline-link">saitin Google Ads</a> ko a <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="inline-link">aboutads.info</a>.</p><p>Shafin yana amfani da Google Consent Mode v2.</p><p>Kuna iya sarrafa cookies a saitin mai binciken ku.</p>',
      },
      {
        title: '5. Masu karɓar bayanai',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>mai bayar da masaukin yanar gizo (Vercel),</li><li>masu bayar da bincike (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li><li>mai bayar da tallace-tallace (Google Ireland Ltd. — Google AdSense),</li><li>mai duba lissafi, mai sarrafa biyan kuɗi ko mai ba da shawara kan doka — idan ya cancanta.</li></ul><p>Duk masu karɓa suna sarrafa bayanai bisa GDPR.</p>',
      },
      { title: '6. Yarjejeniyar sarrafa bayanai (DPA)', content: '<p>A kan buƙata, muna yin yarjejeniyar sarrafa bayanai (DPA) lokacin da muke sarrafa bayanai a madadin abokin ciniki.</p>' },
      { title: '7. Canja wuri bayan EEA', content: '<p>Google da Vercel na iya sarrafa bayanai a wajen EEA. Ana amfani da matakan doka masu dacewa.</p>' },
      {
        title: '8. Lokacin ajiye bayanai',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>Fom ɗin tuntuɓa — har zuwa watanni 12.</li><li>Bayanan abokan ciniki — bisa doka.</li><li>Bincike — bisa Google Analytics (misali watanni 26).</li><li>Bayanan shiga — har zuwa watanni 12.</li></ul>',
      },
      {
        title: '9. Haƙƙoƙin ku',
        content:
          '<p>Kuna da haƙƙin:</p><ul class="list-disc space-y-1 pl-6"><li>samun damar bayanan ku,</li><li>gyarawa,</li><li>gogewa,</li><li>taƙaita sarrafawa,</li><li>canjawa,</li><li>ƙin yarda (gami da tallace-tallace),</li><li>shigar da ƙara ga hukumar da ta dace (a Poland: UODO).</li></ul>',
      },
      { title: '10. Son rai', content: '<p>Bayar da bayanan sirri na son rai ne amma ya zama dole don sadarwa ko bayar da ayyuka.</p>' },
      { title: '11. Matakan tsaro', content: '<p>Muna aiwatar da matakan fasaha da na tsari don kare bayanan sirri.</p>' },
      { title: '12. Canje-canjen manufa', content: '<p>Za a iya sabunta wannan manufar sirri. Sigar da ta fi sabuwa tana samuwa a wannan shafin koyaushe.</p>' },
    ],
  },
  yo: {
    dir: 'app/yo/ilana-asiri',
    href: '/yo/ilana-asiri',
    h1: 'Ìlànà àṣírí',
    version: '13.02.2026',
    versionLabel: 'Àtúnyẹ̀wò',
    sections: [
      {
        title: '1. Olùdarí dátà',
        content:
          '<p>Olùdarí dátà tìkan ni Arteon tí ilé iṣẹ́ rẹ̀ wà ní àgbègbè Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Poland.</p><p>NIP: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p><p>Ìkànsí: <strong>contact@arteonagency.com</strong>, tẹlifóònù: <strong>+48 516 466 255</strong>.</p>',
      },
      {
        title: '2. Ìwọ̀n dátà tí a ń kó jọ',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>dátà láti fọ́ọ̀mù ìkànsí (orúkọ, orúkọ ìdílé, ímeèlì, àkóónú),</li><li>dátà ìmọ̀-ẹ̀rọ tí a kó jọ fúnra rẹ̀ (IP, dátà ẹ̀rọ, cookies),</li><li>dátà àyẹ̀wò láti Google Analytics 4, Ahrefs, Vercel Analytics àti Vercel Speed Insights,</li><li>dátà àyẹ̀wò láti Metricool,</li><li>dátà tí Google AdSense ń kó jọ fún fífi ìpolówó hàn,</li><li>àwọn àkọsílẹ̀ sàáfà àti ìṣẹ̀lẹ̀ ààbò.</li></ul>',
      },
      {
        title: '3. Ète àti ìpìlẹ̀ òfin',
        content:
          '<ol class="list-decimal space-y-1 pl-6"><li><strong>Ìbánisọ̀rọ̀ pẹ̀lú àwọn oníbàárà</strong> — ṣíṣe àwọn ìbéèrè (Abala 6(1)(b) àti (f) GDPR).</li><li><strong>Títa àti àyẹ̀wò</strong> — ìṣirò, ìmúdàgbà (Abala 6(1)(f) GDPR).</li><li><strong>Pípèsè iṣẹ́</strong> — àṣeṣe, àdéhùn, ìwé owó (Abala 6(1)(b) GDPR).</li><li><strong>Ojúṣe òfin</strong> — àwọn ìwé ìṣirò owó (Abala 6(1)(c) GDPR).</li><li><strong>Ààbò</strong> — àkọsílẹ̀, ìdènà ìlòkulò (Abala 6(1)(f) GDPR).</li><li><strong>Fífi ìpolówó hàn</strong> — nípasẹ̀ Google AdSense (Abala 6(1)(a) GDPR — ìfọwọ́sí).</li></ol>',
      },
      {
        title: '4. Cookies',
        content:
          '<p>Ojú-ìwé ayélujára náà ń lo cookies fún:</p><ul class="list-disc space-y-1 pl-6"><li>ṣíṣe dáadáa,</li><li>àyẹ̀wò ìjàbọ̀ (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li><li>ète títa,</li><li>fífi ìpolówó hàn (Google AdSense / DoubleClick).</li></ul><p>O lè pa ìpolówó àdáni tì ní <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="inline-link">ètò Google Ads</a> tàbí ní <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="inline-link">aboutads.info</a>.</p><p>Ojú-ìwé náà ń lo Google Consent Mode v2.</p><p>O lè ṣàkóso cookies nínú ètò fèrèsè rẹ.</p>',
      },
      {
        title: '5. Àwọn olùgbà dátà',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>olùpèsè àyè-ìtọ́jú (Vercel),</li><li>àwọn olùpèsè àyẹ̀wò (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li><li>olùpèsè ìpolówó (Google Ireland Ltd. — Google AdSense),</li><li>olùṣàyẹ̀wò, olùṣe ìsanwó tàbí agbẹjọ́rò — tí ó bá yẹ.</li></ul><p>Gbogbo àwọn olùgbà ṣe àṣàyàn dátà gẹ́gẹ́ bí GDPR.</p>',
      },
      { title: '6. Àdéhùn ṣíṣe (DPA)', content: '<p>Lórí ìbéèrè, a ṣe àdéhùn ṣíṣe dátà (DPA) nígbà tí a bá ṣe dátà fún oníbàárà.</p>' },
      { title: '7. Gbígbé lọ sí ìta EEA', content: '<p>Google àti Vercel lè ṣe dátà ní ìta EEA. A ń lo àwọn ìgbésẹ̀ òfin tí ó yẹ.</p>' },
      {
        title: '8. Àkókò ìpamọ́',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>Fọ́ọ̀mù ìkànsí — títí di oṣù 12.</li><li>Dátà oníbàárà — gẹ́gẹ́ bí òfin.</li><li>Àyẹ̀wò — gẹ́gẹ́ bí Google Analytics (àpẹẹrẹ oṣù 26).</li><li>Àkọsílẹ̀ — títí di oṣù 12.</li></ul>',
      },
      {
        title: '9. Àwọn ẹ̀tọ́ rẹ',
        content:
          '<p>O ní ẹ̀tọ́ láti:</p><ul class="list-disc space-y-1 pl-6"><li>wọlé sí dátà rẹ,</li><li>àtúnṣe,</li><li>píparẹ́,</li><li>dídín ṣíṣe kù,</li><li>gbígbé,</li><li>àtakò (pẹ̀lú títa),</li><li>fi ẹ̀sùn sí ajọ tí ó yẹ (ní Poland: UODO).</li></ul>',
      },
      { title: '10. Ìfẹ́-inú', content: '<p>Fífi dátà tìkan fúnni jẹ́ ìfẹ́-inú ṣùgbọ́n ó jẹ́ pàtàkì fún ìbánisọ̀rọ̀ tàbí pípèsè iṣẹ́.</p>' },
      { title: '11. Àwọn ìgbésẹ̀ ààbò', content: '<p>A ń lo àwọn ìgbésẹ̀ ìmọ̀-ẹ̀rọ àti ti ètò láti dáàbòbò dátà tìkan.</p>' },
      { title: '12. Àwọn àyípadà ìlànà', content: '<p>Ìlànà àṣírí yìí lè jẹ́ ìmúdójúìwọ̀n. Àtúnyẹ̀wò tó kẹ̀hìn wà ní ojú-ìwé yìí nígbà gbogbo.</p>' },
    ],
  },
  af: {
    dir: 'app/af/privaatheidsbeleid',
    href: '/af/privaatheidsbeleid',
    h1: 'Privaatheidsbeleid',
    version: '13.02.2026',
    versionLabel: 'Weergawe',
    sections: [
      {
        title: '1. Databestuurder',
        content:
          '<p>Die bestuurder van persoonlike data is Arteon met hoofkantoor in die gemeente Czernichów, Zagacie, ul. Jasminowa 36, 32-070, Pole.</p><p>BTW-nommer: <strong>9442284430</strong>, REGON: <strong>528888241</strong></p><p>Kontak: <strong>contact@arteonagency.com</strong>, tel.: <strong>+48 516 466 255</strong>.</p>',
      },
      {
        title: '2. Omvang van data',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>data uit die kontakvorm (naam, van, e-pos, inhoud),</li><li>outomaties versamelde tegniese data (IP, toesteldata, koekies),</li><li>analitiese data van Google Analytics 4, Ahrefs, Vercel Analytics en Vercel Speed Insights,</li><li>analitiese data van Metricool,</li><li>data wat Google AdSense versamel vir advertensievertoning,</li><li>bedienerloglêers en sekuriteitsgebeurtenisse.</li></ul>',
      },
      {
        title: '3. Doeleindes en regsbasis',
        content:
          '<ol class="list-decimal space-y-1 pl-6"><li><strong>Kommunikasie met kliënte</strong> — verwerking van navrae (Art. 6(1)(b) en (f) GDPR).</li><li><strong>Bemarking en analise</strong> — statistieke, optimalisering (Art. 6(1)(f) GDPR).</li><li><strong>Diensverskaffing</strong> — kwotasies, kontrakte, fakture (Art. 6(1)(b) GDPR).</li><li><strong>Regsverpligtinge</strong> — rekeningkundige dokumente (Art. 6(1)(c) GDPR).</li><li><strong>Sekuriteit</strong> — loglêers, misbruikvoorkoming (Art. 6(1)(f) GDPR).</li><li><strong>Advertensievertoning</strong> — via Google AdSense (Art. 6(1)(a) GDPR — toestemming).</li></ol>',
      },
      {
        title: '4. Koekies',
        content:
          '<p>Die webwerf gebruik koekies vir:</p><ul class="list-disc space-y-1 pl-6"><li>korrekte funksionering,</li><li>verkeeranalise (Google Analytics 4, Ahrefs, Vercel Analytics, Metricool),</li><li>bemarkingsdoeleindes,</li><li>advertensievertoning (Google AdSense / DoubleClick).</li></ul><p>Jy kan gepersonaliseerde advertensies deaktiveer in <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="inline-link">Google Ads-instellings</a> of by <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" class="inline-link">aboutads.info</a>.</p><p>Die webwerf gebruik Google Consent Mode v2. Skrips versamel nie data totdat toestemming gegee word nie.</p><p>Jy kan koekies bestuur in jou blaaierinstellings.</p>',
      },
      {
        title: '5. Data-ontvangers',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>gasheerverskaffer (Vercel),</li><li>analise-verskaffers (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li><li>advertensieverskaffer (Google Ireland Ltd. — Google AdSense),</li><li>ouditeur, betalingsverwerker of regsadviseur — indien nodig.</li></ul><p>Alle ontvangers verwerk data ooreenkomstig die GDPR.</p>',
      },
      { title: '6. Dataverwerkingsooreenkoms (DPA)', content: "<p>Op versoek sluit ons 'n dataverwerkingsooreenkoms (DPA) wanneer ons data namens 'n kliënt verwerk.</p>" },
      { title: '7. Oordrag buite die EER', content: '<p>Google en Vercel kan data buite die EER verwerk. Toepaslike regsmaatreëls word toegepas.</p>' },
      {
        title: '8. Bewaringstydperk',
        content:
          '<ul class="list-disc space-y-1 pl-6"><li>Kontakvorm — tot 12 maande.</li><li>Kliëntdata — volgens wetgewing.</li><li>Analise — volgens Google Analytics (bv. 26 maande).</li><li>Loglêers — tot 12 maande.</li></ul>',
      },
      {
        title: '9. Jou regte',
        content:
          '<p>Jy het die reg om:</p><ul class="list-disc space-y-1 pl-6"><li>toegang tot jou data te kry,</li><li>regstelling,</li><li>uitwissing,</li><li>beperking van verwerking,</li><li>oordraagbaarheid,</li><li>beswaar (insluitend bemarking),</li><li>\'n klagte by die toepaslike owerheid in te dien (in Pole: UODO).</li></ul>',
      },
      { title: '10. Vrywilligheid', content: '<p>Die verskaffing van persoonlike data is vrywillig maar nodig vir kommunikasie of diensverskaffing.</p>' },
      { title: '11. Sekuriteitsmaatreëls', content: '<p>Ons pas tegniese en organisatoriese maatreëls toe om persoonlike data te beskerm.</p>' },
      { title: '12. Beleidveranderinge', content: '<p>Hierdie privaatheidsbeleid kan opgedateer word. Die nuutste weergawe is altyd beskikbaar op hierdie bladsy.</p>' },
    ],
  },
};

function mkdirp(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

let count = 0;
for (const [locale, p] of Object.entries(PAGES)) {
  const dir = path.join(ROOT, p.dir);
  mkdirp(dir);

  const sectionsJsx = p.sections
    .map((s) => {
      return `          <SectionInfo title="${s.title}">
            ${s.content.replace(/<p>/g, '<p>').replace(/<\/p>/g, '</p>').replace(/<ul /g, '<ul ').replace(/<ol /g, '<ol ')}
          </SectionInfo>
          <Gap variant="line" size="sm" />`;
    })
    .join('\n');

  const content = `import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = '${locale}' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('${p.href}'),
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
          <h1>${p.h1}</h1>
          <p className="mt-2 text-sm opacity-70">
            ${p.versionLabel}: <strong>${p.version}</strong>
          </p>
          <Gap size="xs" />
${sectionsJsx}
          <Gap size="xs" />
        </div>
        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>
      <ButtonToTop />
      <Gap />
    </>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf-8');
  console.log(`Created: ${p.dir}/page.tsx`);
  count++;
}

console.log(`\nDone! Created ${count} privacy pages.`);
