'use client';

import { useEffect, useMemo } from 'react';
import Button from '@/components/ui/buttons/Button';
import Wrapper from '@/components/ui/Wrapper';

type ErrorTranslations = {
  title: string;
  description: string;
  tryAgain: string;
  backHome: string;
  contact: string;
  contactHref: string;
  errorCode: string;
  homeHref: string;
};

const ERROR_TRANSLATIONS: Record<string, ErrorTranslations> = {
  pl: {
    title: 'Coś poszło nie tak',
    description: 'Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami, jeśli problem się powtarza.',
    tryAgain: 'Spróbuj ponownie',
    backHome: 'Wróć na stronę główną',
    contact: 'Skontaktuj się',
    contactHref: '/kontakt',
    errorCode: 'Kod błędu',
    homeHref: '/',
  },
  en: {
    title: 'Something went wrong',
    description: 'An unexpected error occurred. Try refreshing the page or contact us if the problem persists.',
    tryAgain: 'Try again',
    backHome: 'Back to homepage',
    contact: 'Contact us',
    contactHref: '/en/contact',
    errorCode: 'Error code',
    homeHref: '/en',
  },
  de: {
    title: 'Etwas ist schiefgelaufen',
    description: 'Ein unerwarteter Fehler ist aufgetreten. Versuchen Sie, die Seite zu aktualisieren, oder kontaktieren Sie uns.',
    tryAgain: 'Erneut versuchen',
    backHome: 'Zur Startseite',
    contact: 'Kontakt',
    contactHref: '/de/kontakt',
    errorCode: 'Fehlercode',
    homeHref: '/de',
  },
  es: {
    title: 'Algo salió mal',
    description: 'Se produjo un error inesperado. Intenta actualizar la página o contáctanos si el problema persiste.',
    tryAgain: 'Intentar de nuevo',
    backHome: 'Volver al inicio',
    contact: 'Contáctanos',
    contactHref: '/es/contacto',
    errorCode: 'Código de error',
    homeHref: '/es',
  },
  fr: {
    title: 'Une erreur est survenue',
    description: "Une erreur inattendue s'est produite. Essayez de rafraîchir la page ou contactez-nous si le problème persiste.",
    tryAgain: 'Réessayer',
    backHome: "Retour à l'accueil",
    contact: 'Contactez-nous',
    contactHref: '/fr/contact',
    errorCode: "Code d'erreur",
    homeHref: '/fr',
  },
  pt: {
    title: 'Algo correu mal',
    description: 'Ocorreu um erro inesperado. Tente atualizar a página ou contacte-nos se o problema persistir.',
    tryAgain: 'Tentar novamente',
    backHome: 'Voltar ao início',
    contact: 'Contacte-nos',
    contactHref: '/pt/contacto',
    errorCode: 'Código de erro',
    homeHref: '/pt',
  },
  it: {
    title: 'Qualcosa è andato storto',
    description: 'Si è verificato un errore imprevisto. Prova ad aggiornare la pagina o contattaci se il problema persiste.',
    tryAgain: 'Riprova',
    backHome: 'Torna alla home',
    contact: 'Contattaci',
    contactHref: '/it/contatto',
    errorCode: 'Codice errore',
    homeHref: '/it',
  },
  ro: {
    title: 'Ceva nu a funcționat',
    description: 'A apărut o eroare neașteptată. Încercați să reîmprospătați pagina sau contactați-ne dacă problema persistă.',
    tryAgain: 'Încearcă din nou',
    backHome: 'Înapoi la pagina principală',
    contact: 'Contactați-ne',
    contactHref: '/ro/contact',
    errorCode: 'Cod eroare',
    homeHref: '/ro',
  },
  nl: {
    title: 'Er ging iets mis',
    description: 'Er is een onverwachte fout opgetreden. Probeer de pagina te vernieuwen of neem contact met ons op.',
    tryAgain: 'Opnieuw proberen',
    backHome: 'Terug naar home',
    contact: 'Neem contact op',
    contactHref: '/nl/contact',
    errorCode: 'Foutcode',
    homeHref: '/nl',
  },
  hu: {
    title: 'Valami hiba történt',
    description: 'Váratlan hiba történt. Próbálja meg frissíteni az oldalt, vagy lépjen kapcsolatba velünk.',
    tryAgain: 'Próbálja újra',
    backHome: 'Vissza a kezdőlapra',
    contact: 'Kapcsolat',
    contactHref: '/hu/kapcsolat',
    errorCode: 'Hibakód',
    homeHref: '/hu',
  },
  cs: {
    title: 'Něco se pokazilo',
    description: 'Došlo k neočekávané chybě. Zkuste stránku obnovit nebo nás kontaktujte, pokud problém přetrvává.',
    tryAgain: 'Zkusit znovu',
    backHome: 'Zpět na hlavní stránku',
    contact: 'Kontaktujte nás',
    contactHref: '/cs/kontakt',
    errorCode: 'Kód chyby',
    homeHref: '/cs',
  },
  sv: {
    title: 'Något gick fel',
    description: 'Ett oväntat fel uppstod. Försök att uppdatera sidan eller kontakta oss om problemet kvarstår.',
    tryAgain: 'Försök igen',
    backHome: 'Tillbaka till startsidan',
    contact: 'Kontakta oss',
    contactHref: '/sv/kontakt',
    errorCode: 'Felkod',
    homeHref: '/sv',
  },
  da: {
    title: 'Noget gik galt',
    description: 'Der opstod en uventet fejl. Prøv at genindlæse siden eller kontakt os, hvis problemet fortsætter.',
    tryAgain: 'Prøv igen',
    backHome: 'Tilbage til forsiden',
    contact: 'Kontakt os',
    contactHref: '/da/kontakt',
    errorCode: 'Fejlkode',
    homeHref: '/da',
  },
  no: {
    title: 'Noe gikk galt',
    description: 'Det oppstod en uventet feil. Prøv å laste siden på nytt eller kontakt oss hvis problemet vedvarer.',
    tryAgain: 'Prøv igjen',
    backHome: 'Tilbake til forsiden',
    contact: 'Kontakt oss',
    contactHref: '/no/kontakt',
    errorCode: 'Feilkode',
    homeHref: '/no',
  },
  fi: {
    title: 'Jokin meni pieleen',
    description: 'Tapahtui odottamaton virhe. Yritä päivittää sivu tai ota meihin yhteyttä, jos ongelma jatkuu.',
    tryAgain: 'Yritä uudelleen',
    backHome: 'Takaisin etusivulle',
    contact: 'Ota yhteyttä',
    contactHref: '/fi/yhteystiedot',
    errorCode: 'Virhekoodi',
    homeHref: '/fi',
  },
  el: {
    title: 'Κάτι πήγε στραβά',
    description: 'Παρουσιάστηκε ένα μη αναμενόμενο σφάλμα. Δοκιμάστε να ανανεώσετε τη σελίδα ή επικοινωνήστε μαζί μας.',
    tryAgain: 'Δοκιμάστε ξανά',
    backHome: 'Επιστροφή στην αρχική',
    contact: 'Επικοινωνήστε μαζί μας',
    contactHref: '/el/epikoinonia',
    errorCode: 'Κωδικός σφάλματος',
    homeHref: '/el',
  },
};

const LOCALE_PREFIXES = new Set(['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el']);

function detectLocale(): string {
  if (typeof window === 'undefined') return 'pl';
  const segment = window.location.pathname.split('/')[1];
  if (segment && LOCALE_PREFIXES.has(segment)) return segment;
  return 'pl';
}

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useMemo(() => {
    const locale = detectLocale();
    return ERROR_TRANSLATIONS[locale] || ERROR_TRANSLATIONS.pl;
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <Wrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4">{t.title}</h1>
        <p className="text-light mb-8 max-w-md text-lg leading-relaxed">{t.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={reset} variant="accent" arrow>
            {t.tryAgain}
          </Button>
          <Button link={t.homeHref} variant="accent">
            {t.backHome}
          </Button>
          <Button link={t.contactHref} arrow>
            {t.contact}
          </Button>
        </div>
        {error.digest && (
          <p className="text-light mt-8 text-xs">
            {t.errorCode}: <code className="rounded bg-neutral-100 px-2 py-1">{error.digest}</code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
