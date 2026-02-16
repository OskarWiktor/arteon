import type { Locale } from '@/types/locale';
import type { PageTypeConfig, TextMetrics, LengthEvaluation } from '@/types/tools/text';
export type { PageType, PageTypeConfig, LengthStatus, TextMetrics, LengthEvaluation } from '@/types/tools/text';

// ---------------------------------------------------------------------------
// Page type definitions per locale (Record<Locale> enforces completeness)
// ---------------------------------------------------------------------------
const PAGE_TYPES: Record<Locale, PageTypeConfig[]> = {
  pl: [
    {
      key: 'product',
      label: 'Opis produktu w sklepie',
      minWords: 80,
      maxWords: 400,
      description: 'Im prostszy produkt, tym krótszy opis. Złożony sprzęt (np. elektronika) wymaga więcej wyjaśnień i specyfikacji.',
    },
    { key: 'service', label: 'Strona usługi', minWords: 500, maxWords: 1500, description: 'Prosta usługa lokalna wymaga mniej słów. Złożona oferta z wieloma etapami i pytaniami klientów - więcej.' },
    {
      key: 'homepage',
      label: 'Strona główna',
      minWords: 400,
      maxWords: 1000,
      description: 'Strona główna to miejsce, które kieruje dalej do podstron. Jasny przekaz i czytelna struktura ułatwiają nawigację.',
    },
    { key: 'landing', label: 'Strona ofertowa', minWords: 600, maxWords: 2500, description: 'Droższa oferta wymaga więcej wyjaśnień i budowania zaufania. Prosta oferta może być krótsza.' },
    {
      key: 'blog',
      label: 'Artykuł blogowy',
      minWords: 1200,
      maxWords: 3000,
      description: 'Długość zależy od złożoności tematu. Tekst powinien odpowiadać na pytania czytelnika w sposób wyczerpujący i konkretny.',
    },
    { key: 'guide', label: 'Poradnik / przewodnik', minWords: 2500, maxWords: 6000, description: 'Szczegółowe opracowanie tematu z wieloma aspektami. Długość zależy od zakresu zagadnienia.' },
  ],
  en: [
    {
      key: 'product',
      label: 'Product description',
      minWords: 80,
      maxWords: 400,
      description: 'Simple products need shorter descriptions. Complex items (e.g. electronics) require more detail and specifications.',
    },
    {
      key: 'service',
      label: 'Service page',
      minWords: 500,
      maxWords: 1500,
      description: 'A simple local service needs fewer words. A complex offering with multiple stages and client questions needs more.',
    },
    { key: 'homepage', label: 'Homepage', minWords: 400, maxWords: 1000, description: 'The homepage guides visitors to subpages. A clear message and readable structure make navigation easier.' },
    { key: 'landing', label: 'Landing page', minWords: 600, maxWords: 2500, description: 'Higher-priced offers require more explanation and trust-building. Simple offers can be shorter.' },
    { key: 'blog', label: 'Blog post', minWords: 1200, maxWords: 3000, description: "Length depends on topic complexity. The text should answer the reader's questions thoroughly and concisely." },
    { key: 'guide', label: 'Guide / tutorial', minWords: 2500, maxWords: 6000, description: 'A detailed treatment of a topic with many aspects. Length depends on the scope of the subject.' },
  ],
  de: [
    {
      key: 'product',
      label: 'Produktbeschreibung',
      minWords: 80,
      maxWords: 400,
      description: 'Je einfacher das Produkt, desto kürzer die Beschreibung. Komplexe Produkte (z.\u00a0B. Elektronik) erfordern mehr Erklärungen und Spezifikationen.',
    },
    {
      key: 'service',
      label: 'Dienstleistungsseite',
      minWords: 500,
      maxWords: 1500,
      description: 'Eine einfache lokale Dienstleistung braucht weniger Text. Ein komplexes Angebot mit mehreren Schritten und häufigen Fragen erfordert mehr.',
    },
    {
      key: 'homepage',
      label: 'Startseite',
      minWords: 400,
      maxWords: 1000,
      description: 'Die Startseite leitet Besucher zu Unterseiten weiter. Eine klare Botschaft und übersichtliche Struktur erleichtern die Navigation.',
    },
    { key: 'landing', label: 'Landingpage', minWords: 600, maxWords: 2500, description: 'Teurere Angebote erfordern mehr Erklärung und Vertrauensaufbau. Ein einfaches Angebot kann kürzer sein.' },
    {
      key: 'blog',
      label: 'Blogartikel',
      minWords: 1200,
      maxWords: 3000,
      description: 'Die Länge hängt von der Komplexität des Themas ab. Der Text sollte die Fragen des Lesers gründlich und konkret beantworten.',
    },
    {
      key: 'guide',
      label: 'Ratgeber / Leitfaden',
      minWords: 2500,
      maxWords: 6000,
      description: 'Eine ausführliche Behandlung eines Themas mit vielen Aspekten. Die Länge hängt vom Umfang des Themas ab.',
    },
  ],
  es: [
    {
      key: 'product',
      label: 'Descripción de producto',
      minWords: 80,
      maxWords: 400,
      description: 'Cuanto más sencillo el producto, más corta la descripción. Productos complejos (p.\u00a0ej. electrónica) requieren más explicaciones y especificaciones.',
    },
    {
      key: 'service',
      label: 'Página de servicio',
      minWords: 500,
      maxWords: 1500,
      description: 'Un servicio local sencillo necesita menos texto. Una oferta compleja con varias etapas y preguntas frecuentes requiere más.',
    },
    {
      key: 'homepage',
      label: 'Página de inicio',
      minWords: 400,
      maxWords: 1000,
      description: 'La página de inicio dirige a los visitantes a las subpáginas. Un mensaje claro y una estructura legible facilitan la navegación.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Las ofertas de mayor precio requieren más explicación y generación de confianza. Una oferta sencilla puede ser más corta.',
    },
    {
      key: 'blog',
      label: 'Artículo de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'La extensión depende de la complejidad del tema. El texto debe responder a las preguntas del lector de forma completa y concreta.',
    },
    { key: 'guide', label: 'Guía / tutorial', minWords: 2500, maxWords: 6000, description: 'Un tratamiento detallado de un tema con muchos aspectos. La extensión depende del alcance del asunto.' },
  ],
  fr: [
    {
      key: 'product',
      label: 'Description de produit',
      minWords: 80,
      maxWords: 400,
      description: "Plus le produit est simple, plus la description est courte. Les produits complexes (ex.\u00a0: électronique) nécessitent plus d'explications et de spécifications.",
    },
    {
      key: 'service',
      label: 'Page de service',
      minWords: 500,
      maxWords: 1500,
      description: 'Un service local simple nécessite moins de texte. Une offre complexe avec plusieurs étapes et questions fréquentes en demande davantage.',
    },
    {
      key: 'homepage',
      label: "Page d'accueil",
      minWords: 400,
      maxWords: 1000,
      description: "La page d'accueil oriente les visiteurs vers les sous-pages. Un message clair et une structure lisible facilitent la navigation.",
    },
    {
      key: 'landing',
      label: "Page d'atterrissage",
      minWords: 600,
      maxWords: 2500,
      description: "Les offres plus coûteuses nécessitent plus d'explications et de mise en confiance. Une offre simple peut être plus courte.",
    },
    {
      key: 'blog',
      label: 'Article de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'La longueur dépend de la complexité du sujet. Le texte doit répondre aux questions du lecteur de manière complète et concrète.',
    },
    {
      key: 'guide',
      label: 'Guide / tutoriel',
      minWords: 2500,
      maxWords: 6000,
      description: "Un traitement détaillé d'un sujet comportant de nombreux aspects. La longueur dépend de l'ampleur du sujet.",
    },
  ],
  pt: [
    {
      key: 'product',
      label: 'Descrição de produto',
      minWords: 80,
      maxWords: 400,
      description: 'Quanto mais simples o produto, mais curta a descrição. Produtos complexos (ex.: eletrónica) exigem mais explicações e especificações.',
    },
    {
      key: 'service',
      label: 'Página de serviço',
      minWords: 500,
      maxWords: 1500,
      description: 'Um serviço local simples necessita de menos texto. Uma oferta complexa com várias etapas e perguntas frequentes exige mais.',
    },
    {
      key: 'homepage',
      label: 'Página inicial',
      minWords: 400,
      maxWords: 1000,
      description: 'A página inicial direciona os visitantes para as subpáginas. Uma mensagem clara e uma estrutura legível facilitam a navegação.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Ofertas de preço mais elevado exigem mais explicação e construção de confiança. Uma oferta simples pode ser mais curta.',
    },
    {
      key: 'blog',
      label: 'Artigo de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'O comprimento depende da complexidade do tema. O texto deve responder às perguntas do leitor de forma completa e concreta.',
    },
    { key: 'guide', label: 'Guia / tutorial', minWords: 2500, maxWords: 6000, description: 'Um tratamento detalhado de um tema com muitos aspetos. O comprimento depende do âmbito do assunto.' },
  ],
  it: [
    {
      key: 'product',
      label: 'Descrizione prodotto',
      minWords: 80,
      maxWords: 400,
      description: 'Pi\u00f9 il prodotto \u00e8 semplice, pi\u00f9 breve la descrizione. Prodotti complessi (es. elettronica) richiedono pi\u00f9 spiegazioni e specifiche.',
    },
    {
      key: 'service',
      label: 'Pagina servizio',
      minWords: 500,
      maxWords: 1500,
      description: 'Un servizio locale semplice necessita di meno testo. Un\u2019offerta complessa con pi\u00f9 fasi e domande frequenti ne richiede di pi\u00f9.',
    },
    {
      key: 'homepage',
      label: 'Homepage',
      minWords: 400,
      maxWords: 1000,
      description: 'La homepage indirizza i visitatori verso le sottopagine. Un messaggio chiaro e una struttura leggibile facilitano la navigazione.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Offerte di prezzo pi\u00f9 elevato richiedono pi\u00f9 spiegazioni e costruzione della fiducia. Un\u2019offerta semplice pu\u00f2 essere pi\u00f9 breve.',
    },
    {
      key: 'blog',
      label: 'Articolo del blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'La lunghezza dipende dalla complessit\u00e0 dell\u2019argomento. Il testo deve rispondere alle domande del lettore in modo completo e concreto.',
    },
    {
      key: 'guide',
      label: 'Guida / tutorial',
      minWords: 2500,
      maxWords: 6000,
      description: 'Un approfondimento dettagliato di un argomento con molteplici aspetti. La lunghezza dipende dall\u2019ampiezza del tema.',
    },
  ],
  ro: [
    {
      key: 'product',
      label: 'Descriere produs',
      minWords: 80,
      maxWords: 400,
      description: 'Cu cat produsul este mai simplu, cu atat descrierea este mai scurta. Produsele complexe (de ex. electronice) necesita mai multe explicatii si specificatii.',
    },
    {
      key: 'service',
      label: 'Pagina serviciu',
      minWords: 500,
      maxWords: 1500,
      description: 'Un serviciu local simplu necesita mai putine cuvinte. O oferta complexa cu mai multe etape si intrebari ale clientilor necesita mai multe.',
    },
    {
      key: 'homepage',
      label: 'Pagina principala',
      minWords: 400,
      maxWords: 1000,
      description: 'Pagina principala directioneaza vizitatorii catre subpagini. Un mesaj clar si o structura lizibila faciliteaza navigarea.',
    },
    {
      key: 'landing',
      label: 'Pagina de oferta',
      minWords: 600,
      maxWords: 2500,
      description: 'Ofertele cu pret mai mare necesita mai multe explicatii si construirea increderii. O oferta simpla poate fi mai scurta.',
    },
    {
      key: 'blog',
      label: 'Articol de blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'Lungimea depinde de complexitatea subiectului. Textul trebuie sa raspunda la intrebarile cititorului intr-un mod complet si concret.',
    },
    { key: 'guide', label: 'Ghid / tutorial', minWords: 2500, maxWords: 6000, description: 'O analiza detaliata a unui subiect cu multiple aspecte. Lungimea depinde de amploarea temei.' },
  ],
  nl: [
    {
      key: 'product',
      label: 'Productbeschrijving',
      minWords: 80,
      maxWords: 400,
      description: 'Hoe eenvoudiger het product, hoe korter de beschrijving. Complexe producten (bijv. elektronica) vereisen meer uitleg en specificaties.',
    },
    {
      key: 'service',
      label: 'Servicepagina',
      minWords: 500,
      maxWords: 1500,
      description: 'Een eenvoudige lokale dienst heeft minder woorden nodig. Een complex aanbod met meerdere fasen en klantvragen heeft meer nodig.',
    },
    {
      key: 'homepage',
      label: 'Homepage',
      minWords: 400,
      maxWords: 1000,
      description: 'De homepage leidt bezoekers naar subpagina\u2019s. Een duidelijke boodschap en leesbare structuur vergemakkelijken de navigatie.',
    },
    {
      key: 'landing',
      label: 'Landingspagina',
      minWords: 600,
      maxWords: 2500,
      description: 'Duurdere aanbiedingen vereisen meer uitleg en het opbouwen van vertrouwen. Een eenvoudig aanbod kan korter zijn.',
    },
    {
      key: 'blog',
      label: 'Blogartikel',
      minWords: 1200,
      maxWords: 3000,
      description: 'De lengte hangt af van de complexiteit van het onderwerp. De tekst moet de vragen van de lezer volledig en concreet beantwoorden.',
    },
    {
      key: 'guide',
      label: 'Gids / handleiding',
      minWords: 2500,
      maxWords: 6000,
      description: 'Een gedetailleerde uitwerking van een onderwerp met meerdere aspecten. De lengte hangt af van de reikwijdte van het thema.',
    },
  ],
  hu: [
    {
      key: 'product',
      label: 'Termleiras',
      minWords: 80,
      maxWords: 400,
      description: 'Minel egyszerubb a termek, annal rovidebb a leiras. Az osszetett termekek (pl. elektronika) tobb magyarazatot es specifikaciot igenyelnek.',
    },
    {
      key: 'service',
      label: 'Szolgaltatas oldal',
      minWords: 500,
      maxWords: 1500,
      description: 'Egy egyszeru helyi szolgaltatas kevesebb szot igenyel. Egy osszetett ajanlat tobb lepcsofokkal es ugyfelkerdesekkel tobbet.',
    },
    {
      key: 'homepage',
      label: 'Fooldal',
      minWords: 400,
      maxWords: 1000,
      description: 'A fooldal az aloldalakra iranyitja a latogatokat. Az egyertelmu uzenet es az olvashato szerkezet megkonnyiti a navigaciot.',
    },
    {
      key: 'landing',
      label: 'Ajanlati oldal',
      minWords: 600,
      maxWords: 2500,
      description: 'A dragabb ajanlatok tobb magyarazatot es bizalomepitesi elemet igenyelnek. Egy egyszeru ajanlat rovidebb is lehet.',
    },
    {
      key: 'blog',
      label: 'Blog cikk',
      minWords: 1200,
      maxWords: 3000,
      description: 'A hossz a tema osszetettsegetol fugg. A szovegnek kimerritoen es konkretan kell valaszolnia az olvaso kerdeseire.',
    },
    { key: 'guide', label: 'Utmutato', minWords: 2500, maxWords: 6000, description: 'Egy tema reszletes kidolgozasa tobb szempontbol. A hossz a tema terjedelmetol fugg.' },
  ],
  id: [
    {
      key: 'product',
      label: 'Deskripsi produk',
      minWords: 80,
      maxWords: 400,
      description: 'Semakin sederhana produknya, semakin pendek deskripsinya. Produk kompleks (mis. elektronik) memerlukan penjelasan dan spesifikasi lebih banyak.',
    },
    {
      key: 'service',
      label: 'Halaman layanan',
      minWords: 500,
      maxWords: 1500,
      description: 'Layanan lokal sederhana memerlukan lebih sedikit kata. Penawaran kompleks dengan banyak tahapan dan pertanyaan klien memerlukan lebih banyak.',
    },
    {
      key: 'homepage',
      label: 'Halaman utama',
      minWords: 400,
      maxWords: 1000,
      description: 'Halaman utama mengarahkan pengunjung ke subhalaman. Pesan yang jelas dan struktur yang mudah dibaca memudahkan navigasi.',
    },
    {
      key: 'landing',
      label: 'Halaman penawaran',
      minWords: 600,
      maxWords: 2500,
      description: 'Penawaran dengan harga lebih tinggi memerlukan lebih banyak penjelasan dan pembangunan kepercayaan. Penawaran sederhana bisa lebih pendek.',
    },
    {
      key: 'blog',
      label: 'Artikel blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'Panjangnya tergantung pada kompleksitas topik. Teks harus menjawab pertanyaan pembaca secara lengkap dan konkret.',
    },
    { key: 'guide', label: 'Panduan / tutorial', minWords: 2500, maxWords: 6000, description: 'Pembahasan detail suatu topik dengan berbagai aspek. Panjangnya tergantung pada cakupan tema.' },
  ],
  vi: [
    {
      key: 'product',
      label: 'Mô tả sản phẩm',
      minWords: 80,
      maxWords: 400,
      description: 'Sản phẩm càng đơn giản, mô tả càng ngắn. Sản phẩm phức tạp (vd. điện tử) cần nhiều giải thích và thông số kỹ thuật hơn.',
    },
    {
      key: 'service',
      label: 'Trang dịch vụ',
      minWords: 500,
      maxWords: 1500,
      description: 'Dịch vụ địa phương đơn giản cần ít từ hơn. Dịch vụ phức tạp với nhiều giai đoạn và câu hỏi của khách hàng cần nhiều hơn.',
    },
    {
      key: 'homepage',
      label: 'Trang chủ',
      minWords: 400,
      maxWords: 1000,
      description: 'Trang chủ hướng dẫn khách truy cập đến các trang con. Thông điệp rõ ràng và cấu trúc dễ đọc giúp việc điều hướng dễ dàng hơn.',
    },
    {
      key: 'landing',
      label: 'Trang chuyển đổi',
      minWords: 600,
      maxWords: 2500,
      description: 'Các ưu đãi có giá cao hơn cần nhiều giải thích và xây dựng lòng tin hơn. Ưu đãi đơn giản có thể ngắn hơn.',
    },
    {
      key: 'blog',
      label: 'Bài blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'Độ dài phụ thuộc vào độ phức tạp của chủ đề. Nội dung phải trả lời câu hỏi của người đọc một cách đầy đủ và cụ thể.',
    },
    { key: 'guide', label: 'Hướng dẫn', minWords: 2500, maxWords: 6000, description: 'Phân tích chi tiết một chủ đề với nhiều khía cạnh. Độ dài phụ thuộc vào phạm vi của chủ đề.' },
  ],
  tr: [
    {
      key: 'product',
      label: 'Ürün açıklaması',
      minWords: 80,
      maxWords: 400,
      description: 'Ürün ne kadar basit olursa, açıklama o kadar kısa olur. Karmaşık ürünler (örn. elektronik) daha fazla açıklama ve teknik özellik gerektirir.',
    },
    {
      key: 'service',
      label: 'Hizmet sayfası',
      minWords: 500,
      maxWords: 1500,
      description: 'Basit bir yerel hizmet daha az kelime gerektirir. Birden fazla aşaması ve müşteri sorusu olan karmaşık bir teklif daha fazla gerektirir.',
    },
    {
      key: 'homepage',
      label: 'Ana sayfa',
      minWords: 400,
      maxWords: 1000,
      description: 'Ana sayfa ziyaretçileri alt sayfalara yönlendirir. Net bir mesaj ve okunabilir bir yapı navigasyonu kolaylaştırır.',
    },
    {
      key: 'landing',
      label: 'Teklif sayfası',
      minWords: 600,
      maxWords: 2500,
      description: 'Daha pahalı talepler daha fazla açıklama ve güven inşası gerektirir. Basit bir teklif daha kısa olabilir.',
    },
    {
      key: 'blog',
      label: 'Blog yazısı',
      minWords: 1200,
      maxWords: 3000,
      description: 'Uzunluk konunun karmaşıklığına bağlıdır. Metin, okuyucunun sorularını kapsamlı ve somut bir şekilde yanıtlamalıdır.',
    },
    { key: 'guide', label: 'Rehber / kılavuz', minWords: 2500, maxWords: 6000, description: 'Bir konunun birden fazla yönüyle ayrıntılı incelenmesi. Uzunluk temanın kapsamına bağlıdır.' },
  ],
  tl: [
    {
      key: 'product',
      label: 'Paglalarawan ng produkto',
      minWords: 80,
      maxWords: 400,
      description: 'Kung mas simple ang produkto, mas maikli ang paglalarawan. Ang mga komplikadong produkto (hal. electronics) ay nangangailangan ng mas maraming paliwanag at detalye.',
    },
    {
      key: 'service',
      label: 'Pahina ng serbisyo',
      minWords: 500,
      maxWords: 1500,
      description: 'Ang simpleng lokal na serbisyo ay nangangailangan ng mas kaunting salita. Ang komplikadong alok na may maraming yugto ay nangangailangan ng mas marami.',
    },
    {
      key: 'homepage',
      label: 'Homepage',
      minWords: 400,
      maxWords: 1000,
      description: 'Ang homepage ay nagdidirekta sa mga subpage. Malinaw na mensahe at maayos na istraktura ang nagpapadali ng pag-navigate.',
    },
    {
      key: 'landing',
      label: 'Landing page',
      minWords: 600,
      maxWords: 2500,
      description: 'Ang mas mahal na alok ay nangangailangan ng mas maraming paliwanag at pagbuo ng tiwala. Ang simpleng alok ay maaaring mas maikli.',
    },
    {
      key: 'blog',
      label: 'Artikulo sa blog',
      minWords: 1200,
      maxWords: 3000,
      description: 'Ang haba ay depende sa komplikasyon ng paksa. Dapat sagutin ng teksto ang mga tanong ng mambabasa nang buo at konkretong paraan.',
    },
    { key: 'guide', label: 'Gabay / tutorial', minWords: 2500, maxWords: 6000, description: 'Detalyadong pagtalakay ng isang paksa na may maraming aspekto. Ang haba ay depende sa saklaw ng paksa.' },
  ],
  sw: [
    {
      key: 'product',
      label: 'Maelezo ya bidhaa',
      minWords: 80,
      maxWords: 400,
      description: 'Bidhaa rahisi inahitaji maelezo mafupi zaidi. Bidhaa changamano (k.m. elektroniki) zinahitaji maelezo na vipimo zaidi.',
    },
    {
      key: 'service',
      label: 'Ukurasa wa huduma',
      minWords: 500,
      maxWords: 1500,
      description: 'Huduma rahisi ya eneo inahitaji maneno machache. Ofa changamano yenye hatua nyingi na maswali ya wateja inahitaji zaidi.',
    },
    {
      key: 'homepage',
      label: 'Ukurasa mkuu',
      minWords: 400,
      maxWords: 1000,
      description: 'Ukurasa mkuu huwaelekeza wageni kwenye kurasa ndogo. Ujumbe wazi na muundo unaosomeka hurahisisha urambazaji.',
    },
    { key: 'landing', label: 'Ukurasa wa ofa', minWords: 600, maxWords: 2500, description: 'Ofa za bei ya juu zinahitaji maelezo zaidi na kujenga imani. Ofa rahisi inaweza kuwa fupi.' },
    { key: 'blog', label: 'Makala ya blogi', minWords: 1200, maxWords: 3000, description: 'Urefu unategemea ugumu wa mada. Maandishi yanapaswa kujibu maswali ya msomaji kwa kina na kwa usahihi.' },
    { key: 'guide', label: 'Mwongozo', minWords: 2500, maxWords: 6000, description: 'Uchambuzi wa kina wa mada yenye vipengele vingi. Urefu unategemea upeo wa mada.' },
  ],
  ms: [
    {
      key: 'product',
      label: 'Penerangan produk',
      minWords: 80,
      maxWords: 400,
      description: 'Produk yang lebih ringkas memerlukan penerangan yang lebih pendek. Produk kompleks (cth. elektronik) memerlukan lebih banyak penjelasan dan spesifikasi.',
    },
    {
      key: 'service',
      label: 'Halaman perkhidmatan',
      minWords: 500,
      maxWords: 1500,
      description: 'Perkhidmatan tempatan yang ringkas memerlukan kurang perkataan. Tawaran kompleks dengan pelbagai peringkat memerlukan lebih banyak.',
    },
    {
      key: 'homepage',
      label: 'Laman utama',
      minWords: 400,
      maxWords: 1000,
      description: 'Laman utama mengarahkan pelawat ke halaman dalaman. Mesej yang jelas dan struktur yang mudah dibaca memudahkan navigasi.',
    },
    {
      key: 'landing',
      label: 'Halaman tawaran',
      minWords: 600,
      maxWords: 2500,
      description: 'Tawaran berharga tinggi memerlukan lebih banyak penjelasan dan pembinaan kepercayaan. Tawaran ringkas boleh lebih pendek.',
    },
    { key: 'blog', label: 'Artikel blog', minWords: 1200, maxWords: 3000, description: 'Panjang bergantung pada kerumitan topik. Teks perlu menjawab soalan pembaca dengan menyeluruh dan konkrit.' },
    { key: 'guide', label: 'Panduan / tutorial', minWords: 2500, maxWords: 6000, description: 'Pembahasan terperinci sesuatu topik dengan pelbagai aspek. Panjang bergantung pada skop topik.' },
  ],
  cs: [
    {
      key: 'product',
      label: 'Popis produktu',
      minWords: 80,
      maxWords: 400,
      description:
        '\u010c\u00edm jednodu\u0161\u0161\u00ed produkt, t\u00edm krat\u0161\u00ed popis. Slo\u017eit\u00e9 produkty (nap\u0159. elektronika) vy\u017eaduj\u00ed v\u00edce vysv\u011btlen\u00ed a specifikac\u00ed.',
    },
    {
      key: 'service',
      label: 'Str\u00e1nka slu\u017eby',
      minWords: 500,
      maxWords: 1500,
      description:
        'Jednoduch\u00e1 lok\u00e1ln\u00ed slu\u017eba vy\u017eaduje m\u00e9n\u011b slov. Slo\u017eit\u00e1 nab\u00eddka s v\u00edce f\u00e1zemi a dotazy klient\u016f vy\u017eaduje v\u00edce.',
    },
    {
      key: 'homepage',
      label: '\u00davod',
      minWords: 400,
      maxWords: 1000,
      description:
        '\u00davodn\u00ed str\u00e1nka sm\u011bruje n\u00e1v\u0161t\u011bvn\u00edky na podstr\u00e1nky. Jasn\u00e1 zpr\u00e1va a p\u0159ehledn\u00e1 struktura usnad\u0148uj\u00ed navigaci.',
    },
    {
      key: 'landing',
      label: 'Nab\u00eddkov\u00e1 str\u00e1nka',
      minWords: 600,
      maxWords: 2500,
      description:
        'Dra\u017e\u0161\u00ed nab\u00eddky vy\u017eaduj\u00ed v\u00edce vysv\u011btlen\u00ed a budov\u00e1n\u00ed d\u016fv\u011bry. Jednoduch\u00e1 nab\u00eddka m\u016f\u017ee b\u00fdt krat\u0161\u00ed.',
    },
    {
      key: 'blog',
      label: '\u010cl\u00e1nek na blogu',
      minWords: 1200,
      maxWords: 3000,
      description: 'D\u00e9lka z\u00e1vis\u00ed na slo\u017eitosti t\u00e9matu. Text by m\u011bl odpov\u00eddat na ot\u00e1zky \u010dten\u00e1\u0159e d\u016fkladn\u011b a konkr\u00e9tn\u011b.',
    },
    {
      key: 'guide',
      label: 'Pr\u016fvodce / n\u00e1vod',
      minWords: 2500,
      maxWords: 6000,
      description: 'Podrobn\u00e9 zpracov\u00e1n\u00ed t\u00e9matu s mnoha aspekty. D\u00e9lka z\u00e1vis\u00ed na rozsahu t\u00e9matu.',
    },
  ],
  sv: [
    {
      key: 'product',
      label: 'Produktbeskrivning',
      minWords: 80,
      maxWords: 400,
      description: 'Ju enklare produkten, desto kortare beskrivningen. Komplexa produkter (t.ex. elektronik) kr\u00e4ver fler f\u00f6rklaringar och specifikationer.',
    },
    {
      key: 'service',
      label: 'Tj\u00e4nstesida',
      minWords: 500,
      maxWords: 1500,
      description: 'En enkel lokal tj\u00e4nst beh\u00f6ver f\u00e4rre ord. Ett komplext erbjudande med flera steg kr\u00e4ver mer.',
    },
    {
      key: 'homepage',
      label: 'Startsida',
      minWords: 400,
      maxWords: 1000,
      description: 'Startsidan v\u00e4gleder bes\u00f6kare till undersidor. Ett tydligt budskap och l\u00e4sbar struktur underl\u00e4ttar navigeringen.',
    },
    {
      key: 'landing',
      label: 'Landningssida',
      minWords: 600,
      maxWords: 2500,
      description: 'Dyrare erbjudanden kr\u00e4ver mer f\u00f6rklaring och f\u00f6rtroendebyggande. Enkla erbjudanden kan vara kortare.',
    },
    {
      key: 'blog',
      label: 'Blogginl\u00e4gg',
      minWords: 1200,
      maxWords: 3000,
      description: 'L\u00e4ngden beror p\u00e5 \u00e4mnets komplexitet. Texten b\u00f6r besvara l\u00e4sarens fr\u00e5gor grundligt och konkret.',
    },
    {
      key: 'guide',
      label: 'Guide / handledning',
      minWords: 2500,
      maxWords: 6000,
      description: 'En detaljerad behandling av ett \u00e4mne med m\u00e5nga aspekter. L\u00e4ngden beror p\u00e5 \u00e4mnets omfattning.',
    },
  ],
  sq: [
    {
      key: 'product',
      label: 'P\u00ebrshkrimi i produktit',
      minWords: 80,
      maxWords: 400,
      description:
        'Sa m\u00eb i thjesht\u00eb produkti, aq m\u00eb i shkurt\u00ebr p\u00ebrshkrimi. Produktet komplekse (p.sh. elektronika) k\u00ebrkojn\u00eb m\u00eb shum\u00eb shpjegime dhe specifika.',
    },
    {
      key: 'service',
      label: 'Faqja e sh\u00ebrbimet',
      minWords: 500,
      maxWords: 1500,
      description: 'Nj\u00eb sh\u00ebrbimet e thjesht\u00eb lokale k\u00ebrkon m\u00eb pak fjal\u00eb. Nj\u00eb ofert\u00eb komplekse me shum\u00eb faza k\u00ebrkon m\u00eb shum\u00eb.',
    },
    {
      key: 'homepage',
      label: 'Faqja kryesore',
      minWords: 400,
      maxWords: 1000,
      description: 'Faqja kryesore drejton vizitor\u00ebt n\u00eb n\u00ebnfaqe. Nj\u00eb mesazh i qart\u00eb dhe nj\u00eb struktur\u00eb e lexueshme leht\u00ebsojn\u00eb navigimin.',
    },
    {
      key: 'landing',
      label: 'Faqja e ofert\u00ebs',
      minWords: 600,
      maxWords: 2500,
      description: 'Ofertat m\u00eb t\u00eb shtrenjta k\u00ebrkojn\u00eb m\u00eb shum\u00eb shpjegime dhe nd\u00ebrtim besimi. Ofertat e thjeshta mund t\u00eb jen\u00eb m\u00eb t\u00eb shkurtra.',
    },
    {
      key: 'blog',
      label: 'Artikull blogu',
      minWords: 1200,
      maxWords: 3000,
      description: 'Gjat\u00ebsia varet nga kompleksiteti i tem\u00ebs. Teksti duhet t\u2019u p\u00ebrgjigjet pyetjeve t\u00eb lexuesit n\u00eb m\u00ebnyr\u00eb t\u00eb plot\u00eb dhe konkrete.',
    },
    {
      key: 'guide',
      label: 'Udh\u00ebzues / tutorial',
      minWords: 2500,
      maxWords: 6000,
      description: 'Trajtim i detajuar i nj\u00eb teme me shum\u00eb aspekte. Gjat\u00ebsia varet nga q\u00ebllimi i tem\u00ebs.',
    },
  ],
  da: [
    {
      key: 'product',
      label: 'Produktbeskrivelse',
      minWords: 80,
      maxWords: 400,
      description: 'Jo enklere produktet, desto kortere beskrivelsen. Komplekse produkter (f.eks. elektronik) kr\u00e6ver flere forklaringer og specifikationer.',
    },
    { key: 'service', label: 'Serviceside', minWords: 500, maxWords: 1500, description: 'En enkel lokal service kr\u00e6ver f\u00e6rre ord. Et komplekst tilbud med flere trin kr\u00e6ver mere.' },
    {
      key: 'homepage',
      label: 'Forside',
      minWords: 400,
      maxWords: 1000,
      description: 'Forsiden guider bes\u00f8gende til undersider. Et klart budskab og l\u00e6sbar struktur g\u00f8r navigation nemmere.',
    },
    { key: 'landing', label: 'Landingsside', minWords: 600, maxWords: 2500, description: 'Dyrere tilbud kr\u00e6ver mere forklaring og tillidsopbygning. Et simpelt tilbud kan v\u00e6re kortere.' },
    {
      key: 'blog',
      label: 'Blogindl\u00e6g',
      minWords: 1200,
      maxWords: 3000,
      description: 'L\u00e6ngden afh\u00e6nger af emnets kompleksitet. Teksten b\u00f8r besvare l\u00e6serens sp\u00f8rgsm\u00e5l grundigt og konkret.',
    },
    { key: 'guide', label: 'Guide / vejledning', minWords: 2500, maxWords: 6000, description: 'En detaljeret gennemgang af et emne med mange aspekter. L\u00e6ngden afh\u00e6nger af emnets omfang.' },
  ],
};

export function getPageTypes(locale: Locale): PageTypeConfig[] {
  return PAGE_TYPES[locale];
}

export { PAGE_TYPES };

export function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

export function countCharsWithSpaces(text: string): number {
  return text.length;
}

export function countCharsWithoutSpaces(text: string): number {
  return text.replace(/\s/g, '').length;
}

export function countParagraphs(text: string): number {
  if (!text.trim()) return 0;
  return text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
}

export function calculateReadingTime(words: number): number {
  const WORDS_PER_MINUTE = 200;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function analyzeText(text: string): TextMetrics {
  const words = countWords(text);
  return {
    words,
    charsWithSpaces: countCharsWithSpaces(text),
    charsWithoutSpaces: countCharsWithoutSpaces(text),
    paragraphs: countParagraphs(text),
    readingTimeMinutes: calculateReadingTime(words),
  };
}

// ---------------------------------------------------------------------------
// Evaluation & report i18n (Record<Locale> enforces completeness)
// ---------------------------------------------------------------------------
type EvalUi = {
  wordsUnit: string;
  emptyMessage: string;
  tooShort: (min: number, unit: string, missing: number) => string;
  tooLong: (excess: number, unit: string) => string;
  idealInRange: string;
  idealGoodLength: (label: string) => string;
  readingTime: (minutes: number) => string;
  report: {
    title: string;
    pageType: string;
    range: string;
    statistics: string;
    words: string;
    charsWithSpaces: string;
    charsWithoutSpaces: string;
    paragraphs: string;
    readingTime: string;
    evaluation: string;
    statusIdeal: string;
    statusShort: string;
    statusLong: string;
    generatedBy: string;
  };
};

const EVAL_UI: Record<Locale, EvalUi> = {
  pl: {
    wordsUnit: 'słów',
    emptyMessage: 'Wklej lub wpisz tekst, aby zobaczyć analizę.',
    tooShort: (min, unit, missing) => `Tekst poniżej orientacyjnego minimum (${min} ${unit}). Jeśli temat jest wyczerpany - to może wystarczyć. Brakuje około ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Tekst powyżej orientacyjnego maksimum o ${excess} ${unit}. Jeśli każde zdanie wnosi wartość - długość jest uzasadniona.`,
    idealInRange: 'Długość w zalecanym zakresie. Wartość dla czytelnika jest kluczowa, a zakresy służą jako punkt odniesienia.',
    idealGoodLength: (label) => `Dobra długość dla ${label.toLowerCase()}. Każdy akapit powinien wnosić konkretną wartość dla czytelnika.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : m >= 2 && m <= 4 ? `${m} minuty` : `${m} minut`),
    report: {
      title: '📊 RAPORT DŁUGOŚCI TEKSTU',
      pageType: 'Typ strony',
      range: 'Zalecany zakres',
      statistics: '📝 STATYSTYKI:',
      words: 'Słowa',
      charsWithSpaces: 'Znaki (ze spacjami)',
      charsWithoutSpaces: 'Znaki (bez spacji)',
      paragraphs: 'Akapity',
      readingTime: 'Czas czytania',
      evaluation: '📈 OCENA',
      statusIdeal: '✅ Dobra długość',
      statusShort: '⚠️ Za krótki',
      statusLong: '⚠️ Za długi',
      generatedBy: 'Wygenerowano przez: arteonagency.pl/narzedzia/licznik-slow-i-znakow',
    },
  },
  en: {
    wordsUnit: 'words',
    emptyMessage: 'Paste or type text to see the analysis.',
    tooShort: (min, unit, missing) => `Text is below the approximate minimum (${min} ${unit}). If the topic is covered - it may be enough. About ${missing} words short.`,
    tooLong: (excess, unit) => `Text exceeds the approximate maximum by ${excess} ${unit}. If every sentence adds value - the length is justified.`,
    idealInRange: 'Length is within the recommended range. Value for the reader is key - ranges serve as a reference point.',
    idealGoodLength: (label) => `Good length for a ${label.toLowerCase()}. Each paragraph should provide concrete value for the reader.`,
    readingTime: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
    report: {
      title: '📊 TEXT LENGTH REPORT',
      pageType: 'Page type',
      range: 'Recommended range',
      statistics: '📝 STATISTICS:',
      words: 'Words',
      charsWithSpaces: 'Characters (with spaces)',
      charsWithoutSpaces: 'Characters (without spaces)',
      paragraphs: 'Paragraphs',
      readingTime: 'Reading time',
      evaluation: '📈 EVALUATION',
      statusIdeal: '✅ Good length',
      statusShort: '⚠️ Too short',
      statusLong: '⚠️ Too long',
      generatedBy: 'Generated by: arteonagency.pl/en/tools/word-and-character-counter',
    },
  },
  de: {
    wordsUnit: 'Wörter',
    emptyMessage: 'Text einfügen oder eingeben, um die Analyse zu sehen.',
    tooShort: (min, unit, missing) => `Text liegt unter dem ungefähren Minimum (${min} ${unit}). Wenn das Thema abgedeckt ist, kann das ausreichen. Es fehlen etwa ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Text überschreitet das ungefähre Maximum um ${excess} ${unit}. Wenn jeder Satz einen Mehrwert bietet, ist die Länge gerechtfertigt.`,
    idealInRange: 'Länge im empfohlenen Bereich. Der Mehrwert für den Leser ist entscheidend — die Bereiche dienen als Orientierung.',
    idealGoodLength: (label) => `Gute Länge für ${label}. Jeder Absatz sollte dem Leser konkreten Mehrwert bieten.`,
    readingTime: (m) => (m === 1 ? '1 Minute' : `${m} Minuten`),
    report: {
      title: '📊 TEXTLÄNGEN-BERICHT',
      pageType: 'Seitentyp',
      range: 'Empfohlener Bereich',
      statistics: '📝 STATISTIKEN:',
      words: 'Wörter',
      charsWithSpaces: 'Zeichen (mit Leerzeichen)',
      charsWithoutSpaces: 'Zeichen (ohne Leerzeichen)',
      paragraphs: 'Absätze',
      readingTime: 'Lesezeit',
      evaluation: '📈 BEWERTUNG',
      statusIdeal: '✅ Gute Länge',
      statusShort: '⚠️ Zu kurz',
      statusLong: '⚠️ Zu lang',
      generatedBy: 'Erstellt mit: arteonagency.pl/de/werkzeuge/wort-und-zeichenzaehler',
    },
  },
  es: {
    wordsUnit: 'palabras',
    emptyMessage: 'Pega o escribe un texto para ver el análisis.',
    tooShort: (min, unit, missing) => `El texto está por debajo del mínimo aproximado (${min} ${unit}). Si el tema está cubierto, puede ser suficiente. Faltan unas ${missing} ${unit}.`,
    tooLong: (excess, unit) => `El texto supera el máximo aproximado en ${excess} ${unit}. Si cada frase aporta valor, la extensión está justificada.`,
    idealInRange: 'La extensión está dentro del rango recomendado. El valor para el lector es clave: los rangos sirven como referencia.',
    idealGoodLength: (label) => `Buena extensión para ${label.toLowerCase()}. Cada párrafo debería aportar valor concreto al lector.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '📊 INFORME DE EXTENSIÓN DEL TEXTO',
      pageType: 'Tipo de página',
      range: 'Rango recomendado',
      statistics: '📝 ESTADÍSTICAS:',
      words: 'Palabras',
      charsWithSpaces: 'Caracteres (con espacios)',
      charsWithoutSpaces: 'Caracteres (sin espacios)',
      paragraphs: 'Párrafos',
      readingTime: 'Tiempo de lectura',
      evaluation: '📈 EVALUACIÓN',
      statusIdeal: '✅ Buena extensión',
      statusShort: '⚠️ Demasiado corto',
      statusLong: '⚠️ Demasiado largo',
      generatedBy: 'Generado por: arteonagency.pl/es/herramientas/contador-de-palabras-y-caracteres',
    },
  },
  fr: {
    wordsUnit: 'mots',
    emptyMessage: "Collez ou saisissez un texte pour voir l'analyse.",
    tooShort: (min, unit, missing) => `Le texte est en dessous du minimum approximatif (${min} ${unit}). Si le sujet est couvert, cela peut suffire. Il manque environ ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Le texte dépasse le maximum approximatif de ${excess} ${unit}. Si chaque phrase apporte de la valeur, la longueur est justifiée.`,
    idealInRange: 'La longueur se situe dans la plage recommandée. La valeur pour le lecteur est essentielle\u00a0: les plages servent de référence.',
    idealGoodLength: (label) => `Bonne longueur pour ${label.toLowerCase()}. Chaque paragraphe devrait apporter une valeur concrète au lecteur.`,
    readingTime: (m) => (m === 1 ? '1 minute' : `${m} minutes`),
    report: {
      title: '\ud83d\udcca RAPPORT DE LONGUEUR DU TEXTE',
      pageType: 'Type de page',
      range: 'Plage recommandée',
      statistics: '\ud83d\udcdd STATISTIQUES\u00a0:',
      words: 'Mots',
      charsWithSpaces: 'Caractères (avec espaces)',
      charsWithoutSpaces: 'Caractères (sans espaces)',
      paragraphs: 'Paragraphes',
      readingTime: 'Temps de lecture',
      evaluation: '\ud83d\udcc8 \u00c9VALUATION',
      statusIdeal: '\u2705 Bonne longueur',
      statusShort: '\u26a0\ufe0f Trop court',
      statusLong: '\u26a0\ufe0f Trop long',
      generatedBy: 'Généré par\u00a0: arteonagency.pl/fr/outils/compteur-de-mots-et-caracteres',
    },
  },
  pt: {
    wordsUnit: 'palavras',
    emptyMessage: 'Cole ou escreva um texto para ver a análise.',
    tooShort: (min, unit, missing) => `O texto está abaixo do mínimo aproximado (${min} ${unit}). Se o tema está coberto, pode ser suficiente. Faltam cerca de ${missing} ${unit}.`,
    tooLong: (excess, unit) => `O texto excede o máximo aproximado em ${excess} ${unit}. Se cada frase acrescenta valor, o comprimento é justificado.`,
    idealInRange: 'O comprimento está dentro do intervalo recomendado. O valor para o leitor é fundamental\u00a0: os intervalos servem como referência.',
    idealGoodLength: (label) => `Bom comprimento para ${label.toLowerCase()}. Cada parágrafo deve oferecer valor concreto ao leitor.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minutos`),
    report: {
      title: '\ud83d\udcca RELATÓRIO DE COMPRIMENTO DO TEXTO',
      pageType: 'Tipo de página',
      range: 'Intervalo recomendado',
      statistics: '\ud83d\udcdd ESTATÍSTICAS:',
      words: 'Palavras',
      charsWithSpaces: 'Caracteres (com espaços)',
      charsWithoutSpaces: 'Caracteres (sem espaços)',
      paragraphs: 'Parágrafos',
      readingTime: 'Tempo de leitura',
      evaluation: '\ud83d\udcc8 AVALIAÇÃO',
      statusIdeal: '\u2705 Bom comprimento',
      statusShort: '\u26a0\ufe0f Demasiado curto',
      statusLong: '\u26a0\ufe0f Demasiado longo',
      generatedBy: 'Gerado por: arteonagency.pl/pt/ferramentas/contador-de-palavras-e-caracteres',
    },
  },
  it: {
    wordsUnit: 'parole',
    emptyMessage: 'Incolla o digita un testo per visualizzare l\u2019analisi.',
    tooShort: (min, unit, missing) =>
      `Il testo \u00e8 al di sotto del minimo approssimativo (${min} ${unit}). Se l\u2019argomento \u00e8 coperto, potrebbe essere sufficiente. Mancano circa ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Il testo supera il massimo approssimativo di ${excess} ${unit}. Se ogni frase aggiunge valore, la lunghezza \u00e8 giustificata.`,
    idealInRange: 'La lunghezza rientra nell\u2019intervallo consigliato. Il valore per il lettore \u00e8 fondamentale: gli intervalli servono come riferimento.',
    idealGoodLength: (label) => `Buona lunghezza per ${label.toLowerCase()}. Ogni paragrafo dovrebbe offrire valore concreto al lettore.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minuti`),
    report: {
      title: '\ud83d\udcca RAPPORTO LUNGHEZZA TESTO',
      pageType: 'Tipo di pagina',
      range: 'Intervallo consigliato',
      statistics: '\ud83d\udcdd STATISTICHE:',
      words: 'Parole',
      charsWithSpaces: 'Caratteri (con spazi)',
      charsWithoutSpaces: 'Caratteri (senza spazi)',
      paragraphs: 'Paragrafi',
      readingTime: 'Tempo di lettura',
      evaluation: '\ud83d\udcc8 VALUTAZIONE',
      statusIdeal: '\u2705 Buona lunghezza',
      statusShort: '\u26a0\ufe0f Troppo corto',
      statusLong: '\u26a0\ufe0f Troppo lungo',
      generatedBy: 'Generato da: arteonagency.pl/it/strumenti/contatore-di-parole-e-caratteri',
    },
  },
  ro: {
    wordsUnit: 'cuvinte',
    emptyMessage: 'Lipiti sau scrieti un text pentru a vedea analiza.',
    tooShort: (min, unit, missing) => `Textul este sub minimul aproximativ (${min} ${unit}). Daca subiectul este acoperit, poate fi suficient. Mai lipsesc aproximativ ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Textul depaseste maximul aproximativ cu ${excess} ${unit}. Daca fiecare propozitie adauga valoare, lungimea este justificata.`,
    idealInRange: 'Lungimea se incadreaza in intervalul recomandat. Valoarea pentru cititor este esentiala: intervalele servesc drept referinta.',
    idealGoodLength: (label) => `Lungime buna pentru ${label.toLowerCase()}. Fiecare paragraf ar trebui sa ofere valoare concreta cititorului.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minute`),
    report: {
      title: '\ud83d\udcca RAPORT LUNGIME TEXT',
      pageType: 'Tip de pagina',
      range: 'Interval recomandat',
      statistics: '\ud83d\udcdd STATISTICI:',
      words: 'Cuvinte',
      charsWithSpaces: 'Caractere (cu spatii)',
      charsWithoutSpaces: 'Caractere (fara spatii)',
      paragraphs: 'Paragrafe',
      readingTime: 'Timp de citire',
      evaluation: '\ud83d\udcc8 EVALUARE',
      statusIdeal: '\u2705 Lungime buna',
      statusShort: '\u26a0\ufe0f Prea scurt',
      statusLong: '\u26a0\ufe0f Prea lung',
      generatedBy: 'Generat de: arteonagency.pl/ro/instrumente/contor-de-cuvinte-si-caractere',
    },
  },
  nl: {
    wordsUnit: 'woorden',
    emptyMessage: 'Plak of typ een tekst om de analyse te bekijken.',
    tooShort: (min, unit, missing) => `De tekst ligt onder het geschatte minimum (${min} ${unit}). Als het onderwerp gedekt is, kan het voldoende zijn. Er ontbreken ongeveer ${missing} ${unit}.`,
    tooLong: (excess, unit) => `De tekst overschrijdt het geschatte maximum met ${excess} ${unit}. Als elke zin waarde toevoegt, is de lengte gerechtvaardigd.`,
    idealInRange: 'De lengte valt binnen het aanbevolen bereik. De waarde voor de lezer is essentieel: de bereiken dienen als referentie.',
    idealGoodLength: (label) => `Goede lengte voor ${label.toLowerCase()}. Elke alinea moet concrete waarde bieden aan de lezer.`,
    readingTime: (m) => (m === 1 ? '1 minuut' : `${m} minuten`),
    report: {
      title: '\ud83d\udcca RAPPORT TEKSTLENGTE',
      pageType: 'Paginatype',
      range: 'Aanbevolen bereik',
      statistics: '\ud83d\udcdd STATISTIEKEN:',
      words: 'Woorden',
      charsWithSpaces: 'Tekens (met spaties)',
      charsWithoutSpaces: 'Tekens (zonder spaties)',
      paragraphs: 'Alinea\u2019s',
      readingTime: 'Leestijd',
      evaluation: '\ud83d\udcc8 BEOORDELING',
      statusIdeal: '\u2705 Goede lengte',
      statusShort: '\u26a0\ufe0f Te kort',
      statusLong: '\u26a0\ufe0f Te lang',
      generatedBy: 'Gegenereerd door: arteonagency.pl/nl/tools/woorden-en-tekens-tellen',
    },
  },
  hu: {
    wordsUnit: 'szo',
    emptyMessage: 'Illesszen be vagy irjon be szoveget az elemzes megtekitesehez.',
    tooShort: (min, unit, missing) => `A szoveg a becsult minimum alatt van (${min} ${unit}). Ha a tema le van fedve, elegendo lehet. Meg hianyozik korulbelul ${missing} ${unit}.`,
    tooLong: (excess, unit) => `A szoveg ${excess} ${unit}-val meghaladja a becsult maximumot. Ha minden mondat erteket ad, a hossz indokolt.`,
    idealInRange: 'A hossz a javasolt tartomanyon belul van. Az olvaso szamara nyujtott ertek a lenyeg: a tartomanyok referenciaertekkent szolgalnak.',
    idealGoodLength: (label) => `Jo hossz a kovetkezohoz: ${label.toLowerCase()}. Minden bekezdesnek konkret erteket kell nyujtania az olvasonak.`,
    readingTime: (m) => (m === 1 ? '1 perc' : `${m} perc`),
    report: {
      title: '\ud83d\udcca SZOVEGHOSSZ JELENTES',
      pageType: 'Oldaltipus',
      range: 'Javasolt tartomany',
      statistics: '\ud83d\udcdd STATISZTIKAK:',
      words: 'Szavak',
      charsWithSpaces: 'Karakterek (szokozokkel)',
      charsWithoutSpaces: 'Karakterek (szokozok nelkul)',
      paragraphs: 'Bekezdesek',
      readingTime: 'Olvasasi ido',
      evaluation: '\ud83d\udcc8 ERTEKELES',
      statusIdeal: '\u2705 Jo hossz',
      statusShort: '\u26a0\ufe0f Tul rovid',
      statusLong: '\u26a0\ufe0f Tul hosszu',
      generatedBy: 'Generalva: arteonagency.pl/hu/eszkozok/szo-es-karakterszamlalo',
    },
  },
  id: {
    wordsUnit: 'kata',
    emptyMessage: 'Tempel atau ketik teks untuk melihat analisis.',
    tooShort: (min, unit, missing) => `Teks di bawah minimum perkiraan (${min} ${unit}). Jika topik sudah tercakup, mungkin sudah cukup. Masih kurang sekitar ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teks melebihi maksimum perkiraan sebanyak ${excess} ${unit}. Jika setiap kalimat menambah nilai, panjangnya dibenarkan.`,
    idealInRange: 'Panjang berada dalam rentang yang direkomendasikan. Nilai bagi pembaca adalah yang utama: rentang berfungsi sebagai referensi.',
    idealGoodLength: (label) => `Panjang yang baik untuk ${label.toLowerCase()}. Setiap paragraf harus memberikan nilai konkret kepada pembaca.`,
    readingTime: (m) => (m === 1 ? '1 menit' : `${m} menit`),
    report: {
      title: '\ud83d\udcca LAPORAN PANJANG TEKS',
      pageType: 'Jenis halaman',
      range: 'Rentang yang direkomendasikan',
      statistics: '\ud83d\udcdd STATISTIK:',
      words: 'Kata',
      charsWithSpaces: 'Karakter (dengan spasi)',
      charsWithoutSpaces: 'Karakter (tanpa spasi)',
      paragraphs: 'Paragraf',
      readingTime: 'Waktu baca',
      evaluation: '\ud83d\udcc8 EVALUASI',
      statusIdeal: '\u2705 Panjang baik',
      statusShort: '\u26a0\ufe0f Terlalu pendek',
      statusLong: '\u26a0\ufe0f Terlalu panjang',
      generatedBy: 'Dibuat oleh: arteonagency.pl/id/alat/penghitung-kata-dan-karakter',
    },
  },
  vi: {
    wordsUnit: 'từ',
    emptyMessage: 'Dán hoặc nhập văn bản để xem phân tích.',
    tooShort: (min, unit, missing) => `Văn bản dưới mức tối thiểu ước tính (${min} ${unit}). Nếu chủ đề đã được bao phủ, có thể là đủ. Còn thiếu khoảng ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Văn bản vượt quá mức tối đa ước tính ${excess} ${unit}. Nếu mỗi câu đều mang lại giá trị, độ dài là hợp lý.`,
    idealInRange: 'Độ dài nằm trong phạm vi khuyến nghị. Giá trị cho người đọc là điều quan trọng nhất: phạm vi chỉ là tham khảo.',
    idealGoodLength: (label) => `Độ dài tốt cho ${label.toLowerCase()}. Mỗi đoạn văn nên mang lại giá trị cụ thể cho người đọc.`,
    readingTime: (m) => (m === 1 ? '1 phút' : `${m} phút`),
    report: {
      title: '📊 BÁO CÁO ĐỘ DÀI VĂN BẢN',
      pageType: 'Loại trang',
      range: 'Phạm vi khuyến nghị',
      statistics: '📝 THỐNG KÊ:',
      words: 'Từ',
      charsWithSpaces: 'Ký tự (có dấu cách)',
      charsWithoutSpaces: 'Ký tự (không dấu cách)',
      paragraphs: 'Đoạn văn',
      readingTime: 'Thời gian đọc',
      evaluation: '📈 ĐÁNH GIÁ',
      statusIdeal: '✅ Độ dài tốt',
      statusShort: '⚠️ Quá ngắn',
      statusLong: '⚠️ Quá dài',
      generatedBy: 'Tạo bởi: arteonagency.pl/vi/cong-cu/dem-tu-va-ky-tu',
    },
  },
  tr: {
    wordsUnit: 'kelime',
    emptyMessage: 'Analizi görmek için metin yapıştırın veya yazın.',
    tooShort: (min, unit, missing) => `Metin tahmini minimumun altında (${min} ${unit}). Konu kapsanmışsa yeterli olabilir. Yaklaşık ${missing} ${unit} eksik.`,
    tooLong: (excess, unit) => `Metin tahmini maksimumu ${excess} ${unit} aşıyor. Her cümle değer katıyorsa uzunluk haklılaştırılabilir.`,
    idealInRange: 'Uzunluk önerilen aralıkta. Okuyucu için değer önemlidir: aralıklar referans olarak hizmet eder.',
    idealGoodLength: (label) => `${label.toLowerCase()} için iyi uzunluk. Her paragraf okuyucuya somut değer sunmalıdır.`,
    readingTime: (m) => (m === 1 ? '1 dakika' : `${m} dakika`),
    report: {
      title: '📊 METİN UZUNLUĞU RAPORU',
      pageType: 'Sayfa türü',
      range: 'Önerilen aralık',
      statistics: '📝 İSTATİSTİKLER:',
      words: 'Kelimeler',
      charsWithSpaces: 'Karakterler (boşluklu)',
      charsWithoutSpaces: 'Karakterler (boşluksuz)',
      paragraphs: 'Paragraflar',
      readingTime: 'Okuma süresi',
      evaluation: '📈 DEĞERLENDİRME',
      statusIdeal: '✅ İyi uzunluk',
      statusShort: '⚠️ Çok kısa',
      statusLong: '⚠️ Çok uzun',
      generatedBy: 'Oluşturan: arteonagency.pl/tr/araclar/kelime-ve-karakter-sayaci',
    },
  },
  tl: {
    wordsUnit: 'salita',
    emptyMessage: 'Mag-paste o mag-type ng teksto para makita ang pagsusuri.',
    tooShort: (min, unit, missing) =>
      `Ang teksto ay nasa ibaba ng tinatayang minimum (${min} ${unit}). Kung sakop na ang paksa, maaaring sapat na ito. Kulang pa ng humigit-kumulang ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Ang teksto ay lumampas sa tinatayang maximum ng ${excess} ${unit}. Kung bawat pangungusap ay nagdaragdag ng halaga, ang haba ay makatwiran.`,
    idealInRange: 'Ang haba ay nasa loob ng inirerekomendang saklaw. Ang halaga para sa mambabasa ang mahalaga: ang mga saklaw ay nagsisilbing gabay lamang.',
    idealGoodLength: (label) => `Magandang haba para sa ${label.toLowerCase()}. Bawat talata ay dapat mag-alok ng konkretong halaga sa mambabasa.`,
    readingTime: (m) => (m === 1 ? '1 minuto' : `${m} minuto`),
    report: {
      title: '\ud83d\udcca ULAT NG HABA NG TEKSTO',
      pageType: 'Uri ng pahina',
      range: 'Inirerekomendang saklaw',
      statistics: '\ud83d\udcdd ESTADISTIKA:',
      words: 'Salita',
      charsWithSpaces: 'Karakter (may espasyo)',
      charsWithoutSpaces: 'Karakter (walang espasyo)',
      paragraphs: 'Talata',
      readingTime: 'Oras ng pagbasa',
      evaluation: '\ud83d\udcc8 PAGSUSURI',
      statusIdeal: '\u2705 Magandang haba',
      statusShort: '\u26a0\ufe0f Masyadong maikli',
      statusLong: '\u26a0\ufe0f Masyadong mahaba',
      generatedBy: 'Ginawa ng: arteonagency.pl/tl/mga-kasangkapan/tagabilang-ng-salita-at-karakter',
    },
  },
  sw: {
    wordsUnit: 'maneno',
    emptyMessage: 'Bandika au andika maandishi ili kuona uchambuzi.',
    tooShort: (min, unit, missing) =>
      `Maandishi yako ni chini ya kiwango cha chini kilichokadiriwa (${min} ${unit}). Ikiwa mada imeshughulikiwa, inaweza kutosha. Bado yanakosekana takriban ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Maandishi yanazidi kiwango cha juu kilichokadiriwa kwa ${excess} ${unit}. Ikiwa kila sentensi inaongeza thamani, urefu unakubalika.`,
    idealInRange: 'Urefu uko ndani ya safu iliyopendekezwa. Thamani kwa msomaji ndiyo muhimu zaidi: safu zinafanya kazi kama rejea.',
    idealGoodLength: (label) => `Urefu mzuri kwa ${label.toLowerCase()}. Kila aya inapaswa kutoa thamani halisi kwa msomaji.`,
    readingTime: (m) => (m === 1 ? 'Dakika 1' : `Dakika ${m}`),
    report: {
      title: '\ud83d\udcca RIPOTI YA UREFU WA MAANDISHI',
      pageType: 'Aina ya ukurasa',
      range: 'Safu iliyopendekezwa',
      statistics: '\ud83d\udcdd TAKWIMU:',
      words: 'Maneno',
      charsWithSpaces: 'Herufi (pamoja na nafasi)',
      charsWithoutSpaces: 'Herufi (bila nafasi)',
      paragraphs: 'Aya',
      readingTime: 'Muda wa kusoma',
      evaluation: '\ud83d\udcc8 TATHMINI',
      statusIdeal: '\u2705 Urefu mzuri',
      statusShort: '\u26a0\ufe0f Fupi mno',
      statusLong: '\u26a0\ufe0f Ndefu mno',
      generatedBy: 'Imetengenezwa na: arteonagency.pl/sw/zana/kihesabu-maneno-na-herufi',
    },
  },
  ms: {
    wordsUnit: 'perkataan',
    emptyMessage: 'Tampal atau taip teks untuk melihat analisis.',
    tooShort: (min, unit, missing) => `Teks di bawah anggaran minimum (${min} ${unit}). Jika topik sudah diliputi, mungkin sudah mencukupi. Masih kurang lebih kurang ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teks melebihi anggaran maksimum sebanyak ${excess} ${unit}. Jika setiap ayat menambah nilai, panjangnya dibenarkan.`,
    idealInRange: 'Panjang berada dalam julat yang disyorkan. Nilai untuk pembaca adalah yang utama: julat berfungsi sebagai rujukan.',
    idealGoodLength: (label) => `Panjang yang baik untuk ${label.toLowerCase()}. Setiap perenggan harus memberikan nilai konkrit kepada pembaca.`,
    readingTime: (m) => (m === 1 ? '1 minit' : `${m} minit`),
    report: {
      title: '\ud83d\udcca LAPORAN PANJANG TEKS',
      pageType: 'Jenis halaman',
      range: 'Julat yang disyorkan',
      statistics: '\ud83d\udcdd STATISTIK:',
      words: 'Perkataan',
      charsWithSpaces: 'Aksara (dengan ruang)',
      charsWithoutSpaces: 'Aksara (tanpa ruang)',
      paragraphs: 'Perenggan',
      readingTime: 'Masa membaca',
      evaluation: '\ud83d\udcc8 PENILAIAN',
      statusIdeal: '\u2705 Panjang baik',
      statusShort: '\u26a0\ufe0f Terlalu pendek',
      statusLong: '\u26a0\ufe0f Terlalu panjang',
      generatedBy: 'Dijana oleh: arteonagency.pl/ms/alatan/pengira-perkataan-dan-aksara',
    },
  },
  cs: {
    wordsUnit: 'slov',
    emptyMessage: 'Vlo\u017ete nebo napi\u0161te text pro zobrazen\u00ed anal\u00fdzy.',
    tooShort: (min, unit, missing) =>
      `Text je pod odhadovan\u00fdm minimem (${min} ${unit}). Pokud je t\u00e9ma pokryto, m\u016f\u017ee to sta\u010dit. Chyb\u00ed p\u0159ibli\u017en\u011b ${missing} ${unit}.`,
    tooLong: (excess, unit) =>
      `Text p\u0159ekra\u010duje odhadovan\u00e9 maximum o ${excess} ${unit}. Pokud ka\u017ed\u00e1 v\u011bta p\u0159id\u00e1v\u00e1 hodnotu, d\u00e9lka je opr\u00e1vn\u011bn\u00e1.`,
    idealInRange: 'D\u00e9lka je v doporu\u010den\u00e9m rozsahu. Hodnota pro \u010dten\u00e1\u0159e je kl\u00ed\u010dov\u00e1: rozsahy slou\u017e\u00ed jako referen\u010dn\u00ed body.',
    idealGoodLength: (label) => `Dobr\u00e1 d\u00e9lka pro ${label.toLowerCase()}. Ka\u017ed\u00fd odstavec by m\u011bl nab\u00eddnout konkr\u00e9tn\u00ed hodnotu \u010dten\u00e1\u0159i.`,
    readingTime: (m) => (m === 1 ? '1 minuta' : `${m} minut`),
    report: {
      title: '\ud83d\udcca ZPR\u00c1VA O D\u00c9LCE TEXTU',
      pageType: 'Typ str\u00e1nky',
      range: 'Doporu\u010den\u00fd rozsah',
      statistics: '\ud83d\udcdd STATISTIKY:',
      words: 'Slova',
      charsWithSpaces: 'Znaky (s mezerami)',
      charsWithoutSpaces: 'Znaky (bez mezer)',
      paragraphs: 'Odstavce',
      readingTime: 'Doba \u010dten\u00ed',
      evaluation: '\ud83d\udcc8 HODNOCEN\u00cd',
      statusIdeal: '\u2705 Dobr\u00e1 d\u00e9lka',
      statusShort: '\u26a0\ufe0f P\u0159\u00edli\u0161 kr\u00e1tk\u00e9',
      statusLong: '\u26a0\ufe0f P\u0159\u00edli\u0161 dlouh\u00e9',
      generatedBy: 'Vygenerov\u00e1no: arteonagency.pl/cs/nastroje/pocitadlo-slov-a-znaku',
    },
  },
  sv: {
    wordsUnit: 'ord',
    emptyMessage: 'Klistra in eller skriv text f\u00f6r att se analysen.',
    tooShort: (min, unit, missing) =>
      `Texten \u00e4r under det uppskattade minimumet (${min} ${unit}). Om \u00e4mnet \u00e4r t\u00e4ckt kan det r\u00e4cka. Det saknas ungef\u00e4r ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Texten \u00f6verskrider det uppskattade maximumet med ${excess} ${unit}. Om varje mening tillf\u00f6r v\u00e4rde \u00e4r l\u00e4ngden motiverad.`,
    idealInRange: 'L\u00e4ngden ligger inom det rekommenderade intervallet. V\u00e4rdet f\u00f6r l\u00e4saren \u00e4r avg\u00f6rande: intervallen fungerar som referens.',
    idealGoodLength: (label) => `Bra l\u00e4ngd f\u00f6r ${label.toLowerCase()}. Varje stycke b\u00f6r erbjuda konkret v\u00e4rde f\u00f6r l\u00e4saren.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minuter`),
    report: {
      title: '\ud83d\udcca RAPPORT TEXTL\u00c4NGD',
      pageType: 'Sidtyp',
      range: 'Rekommenderat intervall',
      statistics: '\ud83d\udcdd STATISTIK:',
      words: 'Ord',
      charsWithSpaces: 'Tecken (med mellanslag)',
      charsWithoutSpaces: 'Tecken (utan mellanslag)',
      paragraphs: 'Stycken',
      readingTime: 'L\u00e4stid',
      evaluation: '\ud83d\udcc8 BED\u00d6MNING',
      statusIdeal: '\u2705 Bra l\u00e4ngd',
      statusShort: '\u26a0\ufe0f F\u00f6r kort',
      statusLong: '\u26a0\ufe0f F\u00f6r l\u00e5ng',
      generatedBy: 'Genererad av: arteonagency.pl/sv/verktyg/ord-och-teckenraknare',
    },
  },
  sq: {
    wordsUnit: 'fjal\u00eb',
    emptyMessage: 'Ngjitni ose shkruani tekst p\u00ebr t\u00eb par\u00eb analiz\u00ebn.',
    tooShort: (min, unit, missing) =>
      `Teksti \u00ebsht\u00eb n\u00ebn minimumin e p\u00ebrllgaritur (${min} ${unit}). N\u00ebse tema \u00ebsht\u00eb e mbuluar, mund t\u00eb jet\u00eb e mjaftueshme. Mungojn\u00eb rreth ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksti tejkalon maksimumin e p\u00ebrllgaritur me ${excess} ${unit}. N\u00ebse \u00e7do fjali shton vler\u00eb, gjat\u00ebsia \u00ebsht\u00eb e justifikuar.`,
    idealInRange: 'Gjat\u00ebsia \u00ebsht\u00eb brenda gamm\u00ebs s\u00eb rekomanduar. Vlera p\u00ebr lexuesin \u00ebsht\u00eb thelb\u00ebsore: gammat sh\u00ebrbejn\u00eb si referenc\u00eb.',
    idealGoodLength: (label) => `Gjat\u00ebsi e mir\u00eb p\u00ebr ${label.toLowerCase()}. \u00c7do paragraf duhet t\u00eb ofroj\u00eb vler\u00eb konkrete p\u00ebr lexuesin.`,
    readingTime: (m) => (m === 1 ? '1 minut\u00eb' : `${m} minuta`),
    report: {
      title: '\ud83d\udcca RAPORTI I GJAT\u00cbSIS\u00cb S\u00cb TEKSTIT',
      pageType: 'Lloji i faqes',
      range: 'Gamma e rekomanduar',
      statistics: '\ud83d\udcdd STATISTIKAT:',
      words: 'Fjal\u00eb',
      charsWithSpaces: 'Karaktere (me hapësira)',
      charsWithoutSpaces: 'Karaktere (pa hapësira)',
      paragraphs: 'Paragraf\u00eb',
      readingTime: 'Koha e leximit',
      evaluation: '\ud83d\udcc8 VLER\u00cbSIMI',
      statusIdeal: '\u2705 Gjat\u00ebsi e mir\u00eb',
      statusShort: '\u26a0\ufe0f Shum\u00eb e shkurt\u00ebr',
      statusLong: '\u26a0\ufe0f Shum\u00eb e gjat\u00eb',
      generatedBy: 'Gjeneruar nga: arteonagency.pl/sq/mjetet/numeruesi-i-fjaleve-dhe-karaktereve',
    },
  },
  da: {
    wordsUnit: 'ord',
    emptyMessage: 'Inds\u00e6t eller skriv tekst for at se analysen.',
    tooShort: (min, unit, missing) => `Teksten er under det estimerede minimum (${min} ${unit}). Hvis emnet er d\u00e6kket, kan det v\u00e6re tilstr\u00e6kkeligt. Der mangler ca. ${missing} ${unit}.`,
    tooLong: (excess, unit) => `Teksten overskrider det estimerede maksimum med ${excess} ${unit}. Hvis hver s\u00e6tning tilf\u00f8jer v\u00e6rdi, er l\u00e6ngden berettiget.`,
    idealInRange: 'L\u00e6ngden er inden for det anbefalede interval. V\u00e6rdien for l\u00e6seren er afg\u00f8rende: intervallerne fungerer som reference.',
    idealGoodLength: (label) => `God l\u00e6ngde for ${label.toLowerCase()}. Hvert afsnit b\u00f8r tilbyde konkret v\u00e6rdi til l\u00e6seren.`,
    readingTime: (m) => (m === 1 ? '1 minut' : `${m} minutter`),
    report: {
      title: '\ud83d\udcca RAPPORT TEKSTL\u00c6NGDE',
      pageType: 'Sidetype',
      range: 'Anbefalet interval',
      statistics: '\ud83d\udcdd STATISTIK:',
      words: 'Ord',
      charsWithSpaces: 'Tegn (med mellemrum)',
      charsWithoutSpaces: 'Tegn (uden mellemrum)',
      paragraphs: 'Afsnit',
      readingTime: 'L\u00e6setid',
      evaluation: '\ud83d\udcc8 VURDERING',
      statusIdeal: '\u2705 God l\u00e6ngde',
      statusShort: '\u26a0\ufe0f For kort',
      statusLong: '\u26a0\ufe0f For lang',
      generatedBy: 'Genereret af: arteonagency.pl/da/vaerktojer/ord-og-tegntaeller',
    },
  },
};

export function evaluateLength(words: number, pageType: PageTypeConfig, locale: Locale = 'pl'): LengthEvaluation {
  const t = EVAL_UI[locale];

  if (words === 0) {
    return { status: 'empty', percentage: 0, message: t.emptyMessage };
  }

  const { minWords, maxWords } = pageType;
  const midPoint = (minWords + maxWords) / 2;

  if (words < minWords) {
    const percentage = Math.round((words / minWords) * 100);
    const missing = minWords - words;
    return { status: 'too-short', percentage: Math.min(percentage, 99), message: t.tooShort(minWords, t.wordsUnit, missing) };
  }

  if (words > maxWords) {
    const excess = words - maxWords;
    return { status: 'too-long', percentage: 100, message: t.tooLong(excess, t.wordsUnit) };
  }

  const percentage = Math.round(((words - minWords) / (maxWords - minWords)) * 100);

  if (words < midPoint) {
    return { status: 'ideal', percentage: Math.max(percentage, 1), message: t.idealInRange };
  }

  return { status: 'ideal', percentage, message: t.idealGoodLength(pageType.label) };
}

export function formatReadingTime(minutes: number, locale: Locale = 'pl'): string {
  return EVAL_UI[locale].readingTime(minutes);
}

export function formatReportText(metrics: TextMetrics, pageType: PageTypeConfig, evaluation: LengthEvaluation, locale: Locale = 'pl'): string {
  const r = EVAL_UI[locale].report;
  const statusLabel = evaluation.status === 'ideal' ? r.statusIdeal : evaluation.status === 'too-short' ? r.statusShort : evaluation.status === 'too-long' ? r.statusLong : '-';

  const lines = [
    r.title,
    '─'.repeat(30),
    `${r.pageType}: ${pageType.label}`,
    `${r.range}: ${pageType.minWords}–${pageType.maxWords} ${EVAL_UI[locale].wordsUnit}`,
    '',
    r.statistics,
    `• ${r.words}: ${metrics.words}`,
    `• ${r.charsWithSpaces}: ${metrics.charsWithSpaces}`,
    `• ${r.charsWithoutSpaces}: ${metrics.charsWithoutSpaces}`,
    `• ${r.paragraphs}: ${metrics.paragraphs}`,
    `• ${r.readingTime}: ${formatReadingTime(metrics.readingTimeMinutes, locale)}`,
    '',
    `${r.evaluation}: ${statusLabel}`,
    evaluation.message,
    '',
    '─'.repeat(30),
    r.generatedBy,
  ];

  return lines.join('\n');
}
