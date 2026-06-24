// Pierwszy test jednostkowy w projekcie — uczymy się na czystych funkcjach
// z lib/tools/text/readability.ts.
//
// Importujemy narzędzia testowe wprost z 'vitest'. Dzięki temu TypeScript
// w edytorze wie, skąd pochodzą describe/it/expect (żadnych czerwonych
// podkreśleń), a kod czyta się jasno — widać każde użyte narzędzie.
import { describe, it, expect } from 'vitest';
// Importujemy też to, CO testujemy:
import {
  calculateSpeakingTime,
  getReadabilityLabel,
} from '@/lib/tools/text/readability';

// `describe(...)` to pudełko grupujące powiązane testy jednej funkcji.
// Czytaj nazwy jak zdania: "calculateSpeakingTime → zwraca minimum 1 minutę".
describe('calculateSpeakingTime', () => {
  // `it(...)` to jeden konkretny przypadek. Wzorzec AAA w środku:
  it('zwraca minimum 1 minutę nawet dla 0 słów', () => {
    const wynik = calculateSpeakingTime(0); // Act — wywołujemy funkcję
    expect(wynik).toBe(1); // Assert — toBe sprawdza dokładną równość
  });

  it('mieści 130 słów w 1 minucie (130 słów/min)', () => {
    expect(calculateSpeakingTime(130)).toBe(1);
  });

  it('zaokrągla w górę: 131 słów to już 2 minuty', () => {
    // Math.ceil — nawet jedno słowo ponad limit przeskakuje do następnej minuty.
    expect(calculateSpeakingTime(131)).toBe(2);
  });

  it('liczy dłuższy tekst: 390 słów to 3 minuty', () => {
    expect(calculateSpeakingTime(390)).toBe(3);
  });
});

describe('getReadabilityLabel', () => {
  // Gdy nie ma wyniku (null), funkcja zwraca myślnik zamiast etykiety.
  it('zwraca "-" gdy wynik jest null', () => {
    expect(getReadabilityLabel(null, 'en')).toBe('-');
  });

  // Domyślne progi dla angielskiego: 90 / 70 / 50 / 30.
  it('etykietuje wysoki wynik jako "Very easy" (EN)', () => {
    expect(getReadabilityLabel(95, 'en')).toBe('Very easy');
  });

  it('etykietuje średni wynik jako "Moderate" (EN)', () => {
    expect(getReadabilityLabel(60, 'en')).toBe('Moderate');
  });

  it('etykietuje niski wynik jako "Very difficult" (EN)', () => {
    expect(getReadabilityLabel(10, 'en')).toBe('Very difficult');
  });

  // Polski ma INNE progi (80/60/40/20) i polskie etykiety — to dobry test,
  // bo pilnuje, że logika per-locale nie zostanie przypadkiem zepsuta.
  it('używa polskich progów i etykiet (PL)', () => {
    expect(getReadabilityLabel(85, 'pl')).toBe('Bardzo łatwy');
  });
});
