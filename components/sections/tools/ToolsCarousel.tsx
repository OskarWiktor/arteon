'use client';

import { useMemo, useRef } from 'react';

import { useLocale, type Locale } from '@/lib/LocaleContext';
import { getToolsSections } from '@/lib/i18n/tool-registry';
import { CarouselDots } from '@/components/ui/carousel/CarouselDots';
import { CarouselNavButtons } from '@/components/ui/carousel/CarouselNavButtons';
import { CarouselCard } from '@/components/ui/carousel/CarouselCard';
import SectionHeaderWithAction from '@/components/ui/sections/SectionHeaderWithAction';
import { useCarouselScroller } from '@/hooks/useCarouselScroller';

const AUTO_PLAY_INTERVAL_MS = 6000;

const ui = {
  pl: {
    defaultTitle: 'Darmowe narzędzia online',
    seeAllTools: 'Zobacz wszystkie narzędzia',
    carouselLabel: 'Karuzela narzędzi',
    scrollLeft: 'Przewiń w lewo',
    scrollRight: 'Przewiń w prawo',
    carouselNavigation: 'Nawigacja karuzeli',
    goToSlide: 'Przejdź do slajdu',
    of: 'z',
    slide: 'Slajd',
    tool: 'Narzędzie',
    openTool: 'Otwórz narzędzie',
    urls: {
      tools: '/narzedzia',
    },
  },
  en: {
    defaultTitle: 'Free online tools',
    seeAllTools: 'See all tools',
    carouselLabel: 'Tools carousel',
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
    carouselNavigation: 'Carousel navigation',
    goToSlide: 'Go to slide',
    of: 'of',
    slide: 'Slide',
    tool: 'Tool',
    openTool: 'Open tool',
    urls: {
      tools: '/en/tools',
    },
  },
  de: {
    defaultTitle: 'Kostenlose Online-Tools',
    seeAllTools: 'Alle Tools anzeigen',
    carouselLabel: 'Tool-Karussell',
    scrollLeft: 'Nach links scrollen',
    scrollRight: 'Nach rechts scrollen',
    carouselNavigation: 'Karussell-Navigation',
    goToSlide: 'Zu Folie gehen',
    of: 'von',
    slide: 'Folie',
    tool: 'Tool',
    openTool: 'Tool öffnen',
    urls: {
      tools: '/de/werkzeuge',
    },
  },
  es: {
    defaultTitle: 'Herramientas en línea gratuitas',
    seeAllTools: 'Ver todas las herramientas',
    carouselLabel: 'Carrusel de herramientas',
    scrollLeft: 'Desplazar a la izquierda',
    scrollRight: 'Desplazar a la derecha',
    carouselNavigation: 'Navegación del carrusel',
    goToSlide: 'Ir a la diapositiva',
    of: 'de',
    slide: 'Diapositiva',
    tool: 'Herramienta',
    openTool: 'Abrir herramienta',
    urls: {
      tools: '/es/herramientas',
    },
  },
  fr: {
    defaultTitle: 'Outils en ligne gratuits',
    seeAllTools: 'Voir tous les outils',
    carouselLabel: "Carrousel d'outils",
    scrollLeft: 'Défiler vers la gauche',
    scrollRight: 'Défiler vers la droite',
    carouselNavigation: 'Navigation du carrousel',
    goToSlide: 'Aller à la diapositive',
    of: 'sur',
    slide: 'Diapositive',
    tool: 'Outil',
    openTool: "Ouvrir l'outil",
    urls: {
      tools: '/fr/outils',
    },
  },
  pt: {
    defaultTitle: 'Ferramentas online gratuitas',
    seeAllTools: 'Ver todas as ferramentas',
    carouselLabel: 'Carrossel de ferramentas',
    scrollLeft: 'Deslocar para a esquerda',
    scrollRight: 'Deslocar para a direita',
    carouselNavigation: 'Navegação do carrossel',
    goToSlide: 'Ir para o slide',
    of: 'de',
    slide: 'Slide',
    tool: 'Ferramenta',
    openTool: 'Abrir ferramenta',
    urls: {
      tools: '/pt/ferramentas',
    },
  },
  it: {
    defaultTitle: 'Strumenti online gratuiti',
    seeAllTools: 'Vedi tutti gli strumenti',
    carouselLabel: 'Carosello degli strumenti',
    scrollLeft: 'Scorri a sinistra',
    scrollRight: 'Scorri a destra',
    carouselNavigation: 'Navigazione del carosello',
    goToSlide: 'Vai alla diapositiva',
    of: 'di',
    slide: 'Diapositiva',
    tool: 'Strumento',
    openTool: 'Apri strumento',
    urls: {
      tools: '/it/strumenti',
    },
  },
  ro: {
    defaultTitle: 'Instrumente gratuite',
    seeAllTools: 'Vezi toate instrumentele',
    carouselLabel: 'Carusel de instrumente',
    scrollLeft: 'Derulează la stânga',
    scrollRight: 'Derulează la dreapta',
    carouselNavigation: 'Navigare carusel',
    goToSlide: 'Mergi la slide-ul',
    of: 'din',
    slide: 'Slide',
    tool: 'Instrument',
    openTool: 'Deschide instrumentul',
    urls: {
      tools: '/ro/instrumente',
    },
  },
  nl: {
    defaultTitle: 'Gratis tools',
    seeAllTools: 'Bekijk alle tools',
    carouselLabel: 'Tools-carrousel',
    scrollLeft: 'Naar links scrollen',
    scrollRight: 'Naar rechts scrollen',
    carouselNavigation: 'Carrouselnavigatie',
    goToSlide: 'Ga naar slide',
    of: 'van',
    slide: 'Slide',
    tool: 'Tool',
    openTool: 'Open tool',
    urls: {
      tools: '/nl/tools',
    },
  },
  hu: {
    defaultTitle: 'Ingyenes eszközök',
    seeAllTools: 'Összes eszköz megtekintése',
    carouselLabel: 'Eszköz karuszell',
    scrollLeft: 'Görgetés balra',
    scrollRight: 'Görgetés jobbra',
    carouselNavigation: 'Karuszell navigáció',
    goToSlide: 'Ugrás a diához',
    of: '/',
    slide: 'Dia',
    tool: 'Eszköz',
    openTool: 'Eszköz megnyitása',
    urls: {
      tools: '/hu/eszkozok',
    },
  },
  id: {
    defaultTitle: 'Alat gratis',
    seeAllTools: 'Lihat semua alat',
    carouselLabel: 'Carousel alat',
    scrollLeft: 'Gulir ke kiri',
    scrollRight: 'Gulir ke kanan',
    carouselNavigation: 'Navigasi carousel',
    goToSlide: 'Ke slide',
    of: 'dari',
    slide: 'Slide',
    tool: 'Alat',
    openTool: 'Buka alat',
    urls: {
      tools: '/id/alat',
    },
  },
  vi: {
    defaultTitle: 'Công cụ miễn phí',
    seeAllTools: 'Xem tất cả công cụ',
    carouselLabel: 'Carousel công cụ',
    scrollLeft: 'Cuộn sang trái',
    scrollRight: 'Cuộn sang phải',
    carouselNavigation: 'Điều hướng carousel',
    goToSlide: 'Đến slide',
    of: '/',
    slide: 'Slide',
    tool: 'Công cụ',
    openTool: 'Mở công cụ',
    urls: {
      tools: '/vi/cong-cu',
    },
  },
  tr: {
    defaultTitle: 'Ücretsiz araçlar',
    seeAllTools: 'Tüm araçları gör',
    carouselLabel: 'Araç karuseli',
    scrollLeft: 'Sola kaydır',
    scrollRight: 'Sağa kaydır',
    carouselNavigation: 'Karusel navigasyonu',
    goToSlide: 'Slayta git',
    of: '/',
    slide: 'Slayt',
    tool: 'Araç',
    openTool: 'Aracı aç',
    urls: {
      tools: '/tr/araclar',
    },
  },
  tl: {
    defaultTitle: 'Mga libreng tool',
    seeAllTools: 'Tingnan lahat ng tool',
    carouselLabel: 'Carousel ng mga tool',
    scrollLeft: 'I-scroll pakaliwa',
    scrollRight: 'I-scroll pakanan',
    carouselNavigation: 'Nabigasyon ng carousel',
    goToSlide: 'Pumunta sa slide',
    of: 'ng',
    slide: 'Slide',
    tool: 'Tool',
    openTool: 'Buksan ang tool',
    urls: {
      tools: '/tl/mga-kasangkapan',
    },
  },
  sw: {
    defaultTitle: 'Zana za bure',
    seeAllTools: 'Tazama zana zote',
    carouselLabel: 'Carousel ya zana',
    scrollLeft: 'Sogeza kushoto',
    scrollRight: 'Sogeza kulia',
    carouselNavigation: 'Urambazaji wa carousel',
    goToSlide: 'Nenda slaidi',
    of: 'ya',
    slide: 'Slaidi',
    tool: 'Zana',
    openTool: 'Fungua zana',
    urls: {
      tools: '/sw/zana',
    },
  },
  ms: {
    defaultTitle: 'Alat percuma',
    seeAllTools: 'Lihat semua alat',
    carouselLabel: 'Karusel alat',
    scrollLeft: 'Tatal ke kiri',
    scrollRight: 'Tatal ke kanan',
    carouselNavigation: 'Navigasi karusel',
    goToSlide: 'Pergi ke slaid',
    of: 'daripada',
    slide: 'Slaid',
    tool: 'Alat',
    openTool: 'Buka alat',
    urls: {
      tools: '/ms/alatan',
    },
  },
  cs: {
    defaultTitle: 'Bezplatn\u00e9 n\u00e1stroje',
    seeAllTools: 'Zobrazit v\u0161echny n\u00e1stroje',
    carouselLabel: 'Karusel n\u00e1stroj\u016f',
    scrollLeft: 'Posunout doleva',
    scrollRight: 'Posunout doprava',
    carouselNavigation: 'Navigace karuselu',
    goToSlide: 'P\u0159ej\u00edt na sn\u00edmek',
    of: 'z',
    slide: 'Sn\u00edmek',
    tool: 'N\u00e1stroj',
    openTool: 'Otev\u0159\u00edt n\u00e1stroj',
    urls: {
      tools: '/cs/nastroje',
    },
  },
  sv: {
    defaultTitle: 'Gratis verktyg',
    seeAllTools: 'Visa alla verktyg',
    carouselLabel: 'Verktygskarusell',
    scrollLeft: 'Scrolla v\u00e4nster',
    scrollRight: 'Scrolla h\u00f6ger',
    carouselNavigation: 'Karusellnavigering',
    goToSlide: 'G\u00e5 till bild',
    of: 'av',
    slide: 'Bild',
    tool: 'Verktyg',
    openTool: '\u00d6ppna verktyg',
    urls: {
      tools: '/sv/verktyg',
    },
  },
  sq: {
    defaultTitle: 'Mjete falas',
    seeAllTools: 'Shiko t\u00eb gjitha mjetet',
    carouselLabel: 'Karuseli i mjeteve',
    scrollLeft: 'L\u00ebviz majtas',
    scrollRight: 'L\u00ebviz djathtas',
    carouselNavigation: 'Navigimi i karuselit',
    goToSlide: 'Shko te slajdi',
    of: 'nga',
    slide: 'Slajd',
    tool: 'Mjet',
    openTool: 'Hap mjetin',
    urls: {
      tools: '/sq/mjetet',
    },
  },
  da: {
    defaultTitle: 'Gratis v\u00e6rkt\u00f8jer',
    seeAllTools: 'Se alle v\u00e6rkt\u00f8jer',
    carouselLabel: 'V\u00e6rkt\u00f8jskarrusel',
    scrollLeft: 'Scroll til venstre',
    scrollRight: 'Scroll til h\u00f8jre',
    carouselNavigation: 'Karruselnavigation',
    goToSlide: 'G\u00e5 til slide',
    of: 'af',
    slide: 'Slide',
    tool: 'V\u00e6rkt\u00f8j',
    openTool: '\u00c5bn v\u00e6rkt\u00f8j',
    urls: {
      tools: '/da/vaerktojer',
    },
  },
  no: {
    defaultTitle: 'Gratis verkt\u00f8y',
    seeAllTools: 'Se alle verkt\u00f8y',
    carouselLabel: 'Verkt\u00f8ykarusell',
    scrollLeft: 'Bla til venstre',
    scrollRight: 'Bla til h\u00f8yre',
    carouselNavigation: 'Karusellnavigasjon',
    goToSlide: 'G\u00e5 til lysbilde',
    of: 'av',
    slide: 'Lysbilde',
    tool: 'Verkt\u00f8y',
    openTool: '\u00c5pne verkt\u00f8y',
    urls: {
      tools: '/no/verktoy',
    },
  },
  fi: {
    defaultTitle: 'Ilmaiset ty\u00f6kalut',
    seeAllTools: 'N\u00e4yt\u00e4 kaikki ty\u00f6kalut',
    carouselLabel: 'Ty\u00f6kalukaruselli',
    scrollLeft: 'Vierit\u00e4 vasemmalle',
    scrollRight: 'Vierit\u00e4 oikealle',
    carouselNavigation: 'Karusellinavigaatio',
    goToSlide: 'Siirry diaan',
    of: '/',
    slide: 'Dia',
    tool: 'Ty\u00f6kalu',
    openTool: 'Avaa ty\u00f6kalu',
    urls: {
      tools: '/fi/tyokalut',
    },
  },
  sk: {
    defaultTitle: 'Bezplatn\u00e9 n\u00e1stroje',
    seeAllTools: 'Zobrazi\u0165 v\u0161etky n\u00e1stroje',
    carouselLabel: 'Karusel n\u00e1strojov',
    scrollLeft: 'Posun\u00fa\u0165 v\u013eavo',
    scrollRight: 'Posun\u00fa\u0165 vpravo',
    carouselNavigation: 'Navig\u00e1cia karuselu',
    goToSlide: 'Prejs\u0165 na sn\u00edmku',
    of: 'z',
    slide: 'Sn\u00edmka',
    tool: 'N\u00e1stroj',
    openTool: 'Otvori\u0165 n\u00e1stroj',
    urls: {
      tools: '/sk/nastroje',
    },
  },
  hr: {
    defaultTitle: 'Besplatni alati',
    seeAllTools: 'Prika\u017ei sve alate',
    carouselLabel: 'Karusel alata',
    scrollLeft: 'Pomakni lijevo',
    scrollRight: 'Pomakni desno',
    carouselNavigation: 'Navigacija karusela',
    goToSlide: 'Idi na slajd',
    of: 'od',
    slide: 'Slajd',
    tool: 'Alat',
    openTool: 'Otvori alat',
    urls: {
      tools: '/hr/alati',
    },
  },
  lt: {
    defaultTitle: 'Nemokami \u012frankiai',
    seeAllTools: 'Rodyti visus \u012frankius',
    carouselLabel: '\u012erankiu\u0303 karusel\u0117',
    scrollLeft: 'Slinkti kair\u0117n',
    scrollRight: 'Slinkti de\u0161in\u0117n',
    carouselNavigation: 'Karusel\u0117s navigacija',
    goToSlide: 'Eiti \u012f skaidr\u0119',
    of: 'i\u0161',
    slide: 'Skaidr\u0117',
    tool: '\u012erankis',
    openTool: 'Atidaryti \u012frank\u012f',
    urls: {
      tools: '/lt/irankiai',
    },
  },
  sl: {
    defaultTitle: 'Brezpla\u010dna orodja',
    seeAllTools: 'Prika\u017ei vsa orodja',
    carouselLabel: 'Vrtiljak orodij',
    scrollLeft: 'Pomakni levo',
    scrollRight: 'Pomakni desno',
    carouselNavigation: 'Navigacija vrtiljaka',
    goToSlide: 'Pojdi na diapozitiv',
    of: 'od',
    slide: 'Diapozitiv',
    tool: 'Orodje',
    openTool: 'Odpri orodje',
    urls: {
      tools: '/sl/orodja',
    },
  },
} as const satisfies Record<Locale, unknown>;

type Props = {
  max?: number;
  title?: string;
  subtitle?: string;
};

export default function ToolsCarousel({ max = 10, title, subtitle }: Props) {
  const locale = useLocale();
  const t = ui[locale];
  const displayTitle = title ?? t.defaultTitle;
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const toolsSections = getToolsSections(locale);
  const items = useMemo(() => {
    return toolsSections.flatMap((section) => section.items).slice(0, max);
  }, [max, toolsSections]);

  const { currentSlide, maxSlides, isScrollable, scrollByCards, goToSlide, onKeyDown } = useCarouselScroller({
    itemCount: items.length,
    scrollRef,
    cardRef,
    autoPlay: true,
    autoPlayIntervalMs: AUTO_PLAY_INTERVAL_MS,
  });

  if (!items.length) return null;

  return (
    <section className="w-full" aria-labelledby="tools-heading">
      <SectionHeaderWithAction
        subtitle={subtitle}
        title={displayTitle}
        headingLevel="h2"
        headingClassName=""
        titleId="tools-heading"
        actionLabel={t.seeAllTools}
        actionLink={t.urls.tools}
        actionAriaLabel={t.seeAllTools}
      />

      <div className="relative">
        <div
          ref={scrollRef}
          className="no-scrollbar focus-visible:ring-primary flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.carouselLabel}
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {items.map((tool, i) => (
            <div
              key={tool.key}
              ref={
                i === 0
                  ? (el: HTMLDivElement | null) => {
                      cardRef.current = el;
                    }
                  : null
              }
              className="w-[340px] shrink-0 snap-start md:w-[420px] lg:w-[520px]"
              aria-label={`${t.tool} ${i + 1} ${t.of} ${items.length}`}
            >
              <CarouselCard variant="tool" title={tool.title} href={tool.href} description={tool.description} image={tool.image} buttonLabel={t.openTool} />
            </div>
          ))}
        </div>

        <CarouselNavButtons isScrollable={isScrollable} onPrev={() => scrollByCards('left')} onNext={() => scrollByCards('right')} prevLabel={t.scrollLeft} nextLabel={t.scrollRight} />
      </div>

      <CarouselDots
        isScrollable={isScrollable}
        currentSlide={currentSlide}
        maxSlides={maxSlides}
        onDotClick={goToSlide}
        carouselNavigationLabel={t.carouselNavigation}
        goToSlideLabel={t.goToSlide}
        ofLabel={t.of}
        slideLabel={t.slide}
      />
    </section>
  );
}
