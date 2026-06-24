// This file deliberately contains 'javascript:' literals to verify sanitizeHrefUrl/
// sanitizeSrcUrl reject them — never executed, only used as denylisted test input.
/* eslint-disable sonarjs/code-eval */
import { describe, it, expect } from 'vitest';
import { buildSignatureHtml } from '@/lib/tools/email/buildSignatureHtml';
import {
  DEFAULT_SPACING,
  DEFAULT_STYLE,
  DEFAULT_TEXT_STYLE,
  getDefaultSignature,
  getSignatureLabels,
} from '@/lib/tools/email/signatureDefaults';
import type { LayoutType, SignatureConfig } from '@/types/tools/email';

const LAYOUTS: LayoutType[] = [
  'standard',
  'top-banner',
  'label-column',
  'centered',
  'compact',
  'two-column',
  'minimal',
  'bottom-bar',
];

const fullConfig = getDefaultSignature('pl');
const labels = getSignatureLabels('pl');

const emptyConfig: SignatureConfig = {
  fullName: '',
  jobTitle: '',
  company: '',
  topLine: '',
  nameTag: '',
  email: '',
  phone: '',
  website: '',
  address: '',
  extraLine: '',
  ctaLabel: '',
  ctaUrl: '',
  cta2Label: '',
  cta2Url: '',
  socials: {
    linkedin: '',
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
    x: '',
    github: '',
    dribbble: '',
    behance: '',
    whatsapp: '',
    telegram: '',
    pinterest: '',
  },
  legalNote: '',
  formalLine: '',
  avatarUrl: '',
};

describe('buildSignatureHtml - pełna konfiguracja, wszystkie layouty', () => {
  for (const layout of LAYOUTS) {
    it(`renderuje layout "${layout}" z pełnymi danymi bez wyjątku`, () => {
      const html = buildSignatureHtml(
        fullConfig,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
        DEFAULT_TEXT_STYLE,
      );
      expect(html).toContain(fullConfig.fullName);
      expect(html).toContain(fullConfig.company);
      expect(html).toContain(fullConfig.email);
      expect(html.length).toBeGreaterThan(50);
    });
  }
});

describe('buildSignatureHtml - konfiguracja z samymi pustymi polami (użytkownik nic nie wypełnił)', () => {
  for (const layout of LAYOUTS) {
    it(`renderuje layout "${layout}" bez wyjątku, gdy wszystkie pola są puste`, () => {
      const html = buildSignatureHtml(
        emptyConfig,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
      );
      expect(typeof html).toBe('string');
      // Nie powinno wywalić się i nie powinno zawierać niezdefiniowanych wartości.
      expect(html).not.toContain('undefined');
      expect(html).not.toContain('null');
      expect(html).not.toContain('NaN');
    });
  }
});

describe('buildSignatureHtml - bezpieczeństwo (próby XSS / wstrzyknięcia skryptu)', () => {
  it('escapuje znaki HTML w imieniu i nazwisku (ochrona przed XSS)', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      fullName: '<script>alert(1)</script>',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  it('blokuje "javascript:" jako URL strony www', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      website: 'javascript:alert(1)',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toContain('javascript:alert');
  });

  it('blokuje "javascript:" jako URL przycisku CTA', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      ctaLabel: 'Kliknij',
      ctaUrl: 'javascript:alert(1)',
    };
    for (const layout of LAYOUTS) {
      const html = buildSignatureHtml(
        config,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
      );
      expect(html).not.toContain('javascript:alert');
    }
  });

  it('blokuje "javascript:" jako URL avatara', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      avatarUrl: 'javascript:alert(1)',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toContain('javascript:alert');
  });

  it('blokuje "javascript:" w linku social media', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      socials: { ...emptyConfig.socials, linkedin: 'javascript:alert(1)' },
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toContain('javascript:alert');
  });

  it('escapuje znaki HTML w notatce prawnej (wieloliniowej)', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      legalNote: '<img src=x onerror=alert(1)>\nDruga linia',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toContain('<img src=x onerror');
    expect(html).toContain('<br />');
  });
});

describe('buildSignatureHtml - przypadki brzegowe danych wejściowych', () => {
  it('działa, gdy podano tylko CTA bez drugiego CTA i bez socials', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      fullName: 'Test User',
      ctaLabel: 'Zadzwoń',
      ctaUrl: 'example.com/kontakt',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).toContain('https://example.com/kontakt');
  });

  it('automatycznie dodaje https:// do strony www podanej bez protokołu', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      website: 'mojadomena.pl',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).toContain('https://mojadomena.pl');
  });

  it('nie dodaje drugiego https:// gdy użytkownik już je podał', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      website: 'https://mojadomena.pl',
    };
    const html = buildSignatureHtml(
      config,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).toContain('https://mojadomena.pl');
    expect(html).not.toContain('https://https://');
  });

  it('renderuje poprawnie, gdy jest tylko jobTitle bez company (i odwrotnie)', () => {
    const onlyJobTitle: SignatureConfig = {
      ...emptyConfig,
      fullName: 'Test User',
      jobTitle: 'Dyrektor',
    };
    const onlyCompany: SignatureConfig = {
      ...emptyConfig,
      fullName: 'Test User',
      company: 'Firma SA',
    };
    for (const layout of LAYOUTS) {
      const a = buildSignatureHtml(
        onlyJobTitle,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
      );
      const b = buildSignatureHtml(
        onlyCompany,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
      );
      expect(a).toContain('Dyrektor');
      expect(b).toContain('Firma SA');
    }
  });

  it('respektuje niestandardowe kolory i rozmiary z textStyle dla każdego layoutu', () => {
    const config: SignatureConfig = {
      ...emptyConfig,
      fullName: 'Test User',
      jobTitle: 'Dyrektor',
      company: 'Firma SA',
    };
    const textStyle = {
      ...DEFAULT_TEXT_STYLE,
      name: { color: '#ff0000', sizeOffset: 4 },
    };
    for (const layout of LAYOUTS) {
      const html = buildSignatureHtml(
        config,
        DEFAULT_STYLE,
        DEFAULT_SPACING,
        layout,
        labels,
        textStyle,
      );
      // "top-banner" renderuje imię/tytuł na kolorowym tle banera i celowo
      // używa color:inherit (biały tekst na tle akcentu) zamiast koloru z textStyle.
      if (layout === 'top-banner') {
        expect(html).toContain('color:inherit');
      } else {
        expect(html).toContain('#ff0000');
      }
    }
  });

  it('zachowuje minimalny wynik dla wszystkich opcji ramki (border) bez wywołania błędu', () => {
    const borderVariants = [
      { left: true, right: true, top: true, bottom: true },
      { left: true, right: false, top: false, bottom: false },
      { left: false, right: false, top: false, bottom: false },
    ];
    for (const border of borderVariants) {
      const html = buildSignatureHtml(
        fullConfig,
        { ...DEFAULT_STYLE, border },
        DEFAULT_SPACING,
        'standard',
        labels,
      );
      expect(html.length).toBeGreaterThan(0);
    }
  });

  it('minifikuje wynikowy HTML do jednej linii (brak nadmiarowych białych znaków)', () => {
    const html = buildSignatureHtml(
      fullConfig,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'standard',
      labels,
    );
    expect(html).not.toMatch(/\n/);
    expect(html).not.toMatch(/ {2,}/);
  });

  it('nieznany/nieobsługiwany layout nie wywala generatora (zwraca string, niekoniecznie treść)', () => {
    const html = buildSignatureHtml(
      fullConfig,
      DEFAULT_STYLE,
      DEFAULT_SPACING,
      'this-layout-does-not-exist' as LayoutType,
      labels,
    );
    expect(typeof html).toBe('string');
  });
});
