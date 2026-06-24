import { cn } from '@/lib/clsx';

type BackdropProps = {
  onClose: () => void;
  className?: string;
};

/**
 * Półprzezroczysta warstwa tła modala, klikalna w celu zamknięcia.
 *
 * Renderowana jako natywny `<button>`, więc obsługa kliknięcia jest poprawna dla
 * ESLinta (jsx-a11y) i czytników. Backdrop jest ukryty przed czytnikami
 * (`aria-hidden`) i wyjęty z kolejności Tab (`tabIndex={-1}`) — to wygoda dla
 * myszy. Użytkownicy klawiatury zamykają modal klawiszem Escape lub przyciskiem
 * zamknięcia/anulowania wewnątrz dialogu.
 *
 * Umieszczaj jako pierwszego potomka kontenera pozycjonującego (`relative`/
 * `fixed`), a treść dialogu jako kolejne rodzeństwo z `relative`, aby leżała nad
 * backdropem.
 */
export default function Backdrop({ onClose, className }: BackdropProps) {
  return (
    <button
      type='button'
      aria-hidden='true'
      tabIndex={-1}
      onClick={onClose}
      className={cn('absolute inset-0 bg-black/40', className)}
    />
  );
}
