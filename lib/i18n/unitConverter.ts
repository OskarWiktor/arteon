import type { Locale } from '@/types/locale';

/**
 * Zlokalizowane teksty UI domeny konwerterów jednostek — współdzielone przez
 * `RelatedUnitConverters` (serwer) i `FormatPickerModal` (klient).
 *
 * Wcześniej te same ciągi żyły jako mapy `Record<string, …>` rozsiane wewnątrz
 * obu komponentów (m.in. `TITLE_CONVERT_TO/FROM`, `UNIT_CONNECTOR`,
 * `PICKER_HEADER`). Konsolidacja w jednym module daje jedno źródło prawdy,
 * a typ `Record<Locale, …>` wymusza komplet wszystkich 16 języków w czasie
 * kompilacji (brak tłumaczenia = błąd builda).
 */
export interface UnitConverterI18n {
  /** Nagłówek sekcji „Konwertuj inne jednostki do {jednostka}”. */
  titleConvertTo: (unit: string) => string;
  /** Nagłówek sekcji „Konwertuj {jednostka} do innych jednostek”. */
  titleConvertFrom: (unit: string) => string;
  /** Nagłówek sekcji z pozostałymi konwerterami. */
  titleOtherConverters: string;
  /** Łącznik w etykiecie „{źródło} {łącznik} {cel}”, np. „na” / „to”. */
  connector: string;
  /** Nagłówek strony źródłowej pickera („Konwertuj z”). */
  pickerSource: string;
  /** Nagłówek strony docelowej pickera („Konwertuj na”). */
  pickerTarget: string;
}

export const UNIT_CONVERTER_I18N: Record<Locale, UnitConverterI18n> = {
  pl: {
    titleConvertTo: u => `Konwertuj inne jednostki do ${u}`,
    titleConvertFrom: u => `Konwertuj ${u} do innych jednostek`,
    titleOtherConverters: 'Sprawdź konwertery innych jednostek',
    connector: 'na',
    pickerSource: 'Konwertuj z',
    pickerTarget: 'Konwertuj na',
  },
  en: {
    titleConvertTo: u => `Convert other units to ${u}`,
    titleConvertFrom: u => `Convert ${u} to other units`,
    titleOtherConverters: 'Explore other unit converters',
    connector: 'to',
    pickerSource: 'Convert from',
    pickerTarget: 'Convert to',
  },
  de: {
    titleConvertTo: u => `Andere Einheiten in ${u} umrechnen`,
    titleConvertFrom: u => `${u} in andere Einheiten umrechnen`,
    titleOtherConverters: 'Weitere Einheitenkonverter entdecken',
    connector: 'in',
    pickerSource: 'Konvertieren von',
    pickerTarget: 'Konvertieren nach',
  },
  es: {
    titleConvertTo: u => `Convertir otras unidades a ${u}`,
    titleConvertFrom: u => `Convertir ${u} a otras unidades`,
    titleOtherConverters: 'Explorar otros conversores de unidades',
    connector: 'a',
    pickerSource: 'Convertir de',
    pickerTarget: 'Convertir a',
  },
  fr: {
    titleConvertTo: u => `Convertir d'autres unités en ${u}`,
    titleConvertFrom: u => `Convertir ${u} en d'autres unités`,
    titleOtherConverters: "Découvrir d'autres convertisseurs d'unités",
    connector: 'en',
    pickerSource: 'Convertir de',
    pickerTarget: 'Convertir vers',
  },
  pt: {
    titleConvertTo: u => `Converter outras unidades para ${u}`,
    titleConvertFrom: u => `Converter ${u} para outras unidades`,
    titleOtherConverters: 'Explorar outros conversores de unidades',
    connector: 'para',
    pickerSource: 'Converter de',
    pickerTarget: 'Converter para',
  },
  it: {
    titleConvertTo: u => `Converti altre unità in ${u}`,
    titleConvertFrom: u => `Converti ${u} in altre unità`,
    titleOtherConverters: 'Esplora altri convertitori di unità',
    connector: 'in',
    pickerSource: 'Converti da',
    pickerTarget: 'Converti in',
  },
  ro: {
    titleConvertTo: u => `Convertește alte unități în ${u}`,
    titleConvertFrom: u => `Convertește ${u} în alte unități`,
    titleOtherConverters: 'Explorează alte convertoare de unități',
    connector: 'în',
    pickerSource: 'Convertește din',
    pickerTarget: 'Convertește în',
  },
  nl: {
    titleConvertTo: u => `Andere eenheden naar ${u} converteren`,
    titleConvertFrom: u => `${u} naar andere eenheden converteren`,
    titleOtherConverters: 'Ontdek andere eenhedenconverters',
    connector: 'naar',
    pickerSource: 'Converteer van',
    pickerTarget: 'Converteer naar',
  },
  hu: {
    titleConvertTo: u => `Más egységek átváltása ${u} egységre`,
    titleConvertFrom: u => `${u} átváltása más egységekre`,
    titleOtherConverters: 'További mértékegység-átváltók',
    connector: '→',
    pickerSource: 'Konvertálás forrás',
    pickerTarget: 'Konvertálás cél',
  },
  cs: {
    titleConvertTo: u => `Převést jiné jednotky na ${u}`,
    titleConvertFrom: u => `Převést ${u} na jiné jednotky`,
    titleOtherConverters: 'Další převodníky jednotek',
    connector: 'na',
    pickerSource: 'Převést z',
    pickerTarget: 'Převést na',
  },
  sv: {
    titleConvertTo: u => `Konvertera andra enheter till ${u}`,
    titleConvertFrom: u => `Konvertera ${u} till andra enheter`,
    titleOtherConverters: 'Utforska andra enhetskonverterare',
    connector: 'till',
    pickerSource: 'Konvertera från',
    pickerTarget: 'Konvertera till',
  },
  no: {
    titleConvertTo: u => `Konverter andre enheter til ${u}`,
    titleConvertFrom: u => `Konverter ${u} til andre enheter`,
    titleOtherConverters: 'Utforsk andre enhetskonverterere',
    connector: 'til',
    pickerSource: 'Konverter fra',
    pickerTarget: 'Konverter til',
  },
  fi: {
    titleConvertTo: u => `Muunna muut yksiköt yksiköksi ${u}`,
    titleConvertFrom: u => `Muunna ${u} muiksi yksiköiksi`,
    titleOtherConverters: 'Tutustu muihin yksikkömuuntimeen',
    connector: '→',
    pickerSource: 'Muunna muodosta',
    pickerTarget: 'Muunna muotoon',
  },
  el: {
    titleConvertTo: u => `Μετατρέψτε άλλες μονάδες σε ${u}`,
    titleConvertFrom: u => `Μετατρέψτε ${u} σε άλλες μονάδες`,
    titleOtherConverters: 'Εξερευνήστε άλλους μετατροπείς μονάδων',
    connector: 'σε',
    pickerSource: 'Μετατροπή από',
    pickerTarget: 'Μετατροπή σε',
  },
};

/** Zwraca teksty konwertera jednostek dla danego języka (fallback: angielski). */
export function getUnitConverterI18n(locale: Locale): UnitConverterI18n {
  return UNIT_CONVERTER_I18N[locale] ?? UNIT_CONVERTER_I18N.en;
}
