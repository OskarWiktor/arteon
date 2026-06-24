import { describe, it, expect } from 'vitest';
import {
  computeMoveCropUpdate,
  computeResizeCropUpdate,
  type MoveUpdateParams,
  type ResizeUpdateParams,
} from '@/hooks/useCropDrag';

// Geometria bazowa używana w większości przypadków: kwadratowy obraz 1000x1000,
// kwadratowy target (effectiveDims 1:1), podgląd (rect) 1000x1000 zaczynający się w (0,0).
const baseDims = { width: 1, height: 1 };

describe('computeMoveCropUpdate', () => {
  function move(overrides: Partial<MoveUpdateParams> = {}) {
    return computeMoveCropUpdate({
      originalWidth: 1000,
      originalHeight: 1000,
      effectiveDims: baseDims,
      cropZoom: 2,
      startCropX: 0.5,
      startCropY: 0.5,
      startX: 0,
      startY: 0,
      clientX: 0,
      clientY: 0,
      rectWidth: 500,
      rectHeight: 500,
      ...overrides,
    });
  }

  it('przesuwa crop proporcjonalnie do ruchu kursora', () => {
    const result = move({ clientX: 100, clientY: 0 });
    expect(result.cropX).toBeCloseTo(0.9);
    expect(result.cropY).toBeCloseTo(0.5);
  });

  it('nie zmienia pozycji, gdy użytkownik kliknął bez przeciągnięcia (delta 0)', () => {
    const result = move({ clientX: 0, clientY: 0 });
    expect(result.cropX).toBeCloseTo(0.5);
    expect(result.cropY).toBeCloseTo(0.5);
  });

  it('przyciąga (clamp) do 1, gdy użytkownik przeciągnie kursor daleko poza obraz', () => {
    const result = move({ clientX: 100000, clientY: 100000 });
    expect(result.cropX).toBe(1);
    expect(result.cropY).toBe(1);
  });

  it('przyciąga (clamp) do 0, gdy użytkownik przeciągnie kursor daleko w drugą stronę', () => {
    const result = move({ clientX: -100000, clientY: -100000 });
    expect(result.cropX).toBe(0);
    expect(result.cropY).toBe(0);
  });

  it('przy zoomie 1 (brak zoomu) nawet niewielki ruch kursora saturuje crop do krawędzi', () => {
    // Przy zoomie 1 crop obejmuje całe zdjęcie, więc nie ma miejsca na przesunięcie -
    // to oczekiwane, niezmienione zachowanie (range jest zabezpieczone przed dzieleniem przez 0).
    const result = move({ cropZoom: 1, clientX: 1, clientY: 0 });
    expect(result.cropX).toBe(1);
  });

  // Uwaga: rectWidth/rectHeight=0 (kontener bez zmierzonego rozmiaru) nie jest tu testowane,
  // bo handlePointerMove w hooku zawsze zwraca wcześniej (`if (!rect.width || !rect.height) return;`)
  // zanim wywoła tę funkcję - ten stan nigdy nie dociera do computeMoveCropUpdate w praktyce.
});

describe('computeResizeCropUpdate', () => {
  function resize(overrides: Partial<ResizeUpdateParams> = {}) {
    return computeResizeCropUpdate({
      originalWidth: 1000,
      originalHeight: 1000,
      effectiveDims: baseDims,
      anchorX: 0,
      anchorY: 0,
      clientX: 500,
      clientY: 500,
      rectLeft: 0,
      rectTop: 0,
      rectWidth: 1000,
      rectHeight: 1000,
      ...overrides,
    });
  }

  it('zwraca null, gdy użytkownik kliknął bez przeciągnięcia (brak realnego resize)', () => {
    const result = resize({ clientX: 0, clientY: 0, anchorX: 0, anchorY: 0 });
    expect(result).toBeNull();
  });

  it('liczy poprawny crop i zoom dla przeciągnięcia narożnika bottom-right', () => {
    const result = resize();
    expect(result).not.toBeNull();
    expect(result?.cropX).toBeCloseTo(0);
    expect(result?.cropY).toBeCloseTo(0);
    expect(result?.cropZoom).toBeCloseTo(2);
  });

  it('liczy poprawny crop i zoom dla przeciągnięcia w stronę przeciwną (top-left od środka)', () => {
    const result = resize({
      anchorX: 500,
      anchorY: 500,
      clientX: 300,
      clientY: 300,
    });
    expect(result).not.toBeNull();
    expect(result?.cropX).toBeCloseTo(0.375);
    expect(result?.cropY).toBeCloseTo(0.375);
    expect(result?.cropZoom).toBeCloseTo(5);
  });

  it('wymusza minimalny rozmiar crop dla bardzo małego przeciągnięcia (np. drgnięcie ręki)', () => {
    const result = resize({ clientX: 2, clientY: 2 });
    expect(result).not.toBeNull();
    // Minimalny rozmiar wymusza zoom przyciągany do górnego limitu (10).
    expect(result?.cropZoom).toBe(10);
  });

  it('przyciąga zoom do maksimum 10, niezależnie jak małe jest przeciągnięcie', () => {
    const result = resize({ clientX: 1, clientY: 1 });
    expect(result?.cropZoom).toBeLessThanOrEqual(10);
  });

  it('przyciąga zoom do minimum 1, nawet dla bardzo dużego przeciągnięcia', () => {
    const result = resize({ clientX: 999, clientY: 999 });
    expect(result?.cropZoom).toBeGreaterThanOrEqual(1);
  });

  it('daje identyczny wynik dla przeciągnięcia poza granice obrazu jak dla przeciągnięcia dokładnie do krawędzi', () => {
    const atEdge = resize({ clientX: 1000, clientY: 1000 });
    const farBeyond = resize({ clientX: 50000, clientY: 50000 });
    expect(farBeyond).toEqual(atEdge);
  });

  // Uwaga: rectWidth/rectHeight=0 nie jest tu testowane z tego samego powodu co w
  // computeMoveCropUpdate - handlePointerMove gwarantuje niezerowe wymiary przed wywołaniem.
});
