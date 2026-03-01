/**
 * Add errorPages section to all 16 dictionary.json files.
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

const errorPages = {
  pl: {
    notFound: {
      title: 'Nie znaleziono strony',
      code: '404',
      description: 'Wygląda na to, że nie mamy strony o tym adresie. Kliknij przycisk aby wrócić na stronę główną.',
      backHome: 'Wróć na stronę główną',
    },
    error: {
      title: 'Coś poszło nie tak',
      description: 'Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami, jeśli problem się powtarza.',
      tryAgain: 'Spróbuj ponownie',
      backHome: 'Wróć na stronę główną',
      contact: 'Skontaktuj się',
      contactHref: '/kontakt',
      errorCode: 'Kod błędu',
    },
  },
  en: {
    notFound: {
      title: 'Page not found',
      code: '404',
      description: 'It looks like the page you are looking for does not exist. Click the button to go back to the homepage.',
      backHome: 'Back to homepage',
    },
    error: {
      title: 'Something went wrong',
      description: 'An unexpected error occurred. Try refreshing the page or contact us if the problem persists.',
      tryAgain: 'Try again',
      backHome: 'Back to homepage',
      contact: 'Contact us',
      contactHref: '/en/contact',
      errorCode: 'Error code',
    },
  },
  de: {
    notFound: {
      title: 'Seite nicht gefunden',
      code: '404',
      description: 'Die gesuchte Seite existiert leider nicht. Klicken Sie auf die Schaltfläche, um zur Startseite zurückzukehren.',
      backHome: 'Zur Startseite',
    },
    error: {
      title: 'Etwas ist schiefgelaufen',
      description: 'Ein unerwarteter Fehler ist aufgetreten. Versuchen Sie, die Seite zu aktualisieren, oder kontaktieren Sie uns, wenn das Problem weiterhin besteht.',
      tryAgain: 'Erneut versuchen',
      backHome: 'Zur Startseite',
      contact: 'Kontakt',
      contactHref: '/de/kontakt',
      errorCode: 'Fehlercode',
    },
  },
  es: {
    notFound: {
      title: 'Página no encontrada',
      code: '404',
      description: 'Parece que la página que buscas no existe. Haz clic en el botón para volver a la página principal.',
      backHome: 'Volver al inicio',
    },
    error: {
      title: 'Algo salió mal',
      description: 'Se produjo un error inesperado. Intenta actualizar la página o contáctanos si el problema persiste.',
      tryAgain: 'Intentar de nuevo',
      backHome: 'Volver al inicio',
      contact: 'Contáctanos',
      contactHref: '/es/contacto',
      errorCode: 'Código de error',
    },
  },
  fr: {
    notFound: {
      title: 'Page non trouvée',
      code: '404',
      description: "La page que vous recherchez n'existe pas. Cliquez sur le bouton pour revenir à la page d'accueil.",
      backHome: "Retour à l'accueil",
    },
    error: {
      title: 'Une erreur est survenue',
      description: "Une erreur inattendue s'est produite. Essayez de rafraîchir la page ou contactez-nous si le problème persiste.",
      tryAgain: 'Réessayer',
      backHome: "Retour à l'accueil",
      contact: 'Contactez-nous',
      contactHref: '/fr/contact',
      errorCode: "Code d'erreur",
    },
  },
  pt: {
    notFound: {
      title: 'Página não encontrada',
      code: '404',
      description: 'A página que procura não existe. Clique no botão para voltar à página inicial.',
      backHome: 'Voltar ao início',
    },
    error: {
      title: 'Algo correu mal',
      description: 'Ocorreu um erro inesperado. Tente atualizar a página ou contacte-nos se o problema persistir.',
      tryAgain: 'Tentar novamente',
      backHome: 'Voltar ao início',
      contact: 'Contacte-nos',
      contactHref: '/pt/contacto',
      errorCode: 'Código de erro',
    },
  },
  it: {
    notFound: {
      title: 'Pagina non trovata',
      code: '404',
      description: 'La pagina che stai cercando non esiste. Clicca il pulsante per tornare alla pagina principale.',
      backHome: 'Torna alla home',
    },
    error: {
      title: 'Qualcosa è andato storto',
      description: 'Si è verificato un errore imprevisto. Prova ad aggiornare la pagina o contattaci se il problema persiste.',
      tryAgain: 'Riprova',
      backHome: 'Torna alla home',
      contact: 'Contattaci',
      contactHref: '/it/contatto',
      errorCode: 'Codice errore',
    },
  },
  ro: {
    notFound: {
      title: 'Pagina nu a fost găsită',
      code: '404',
      description: 'Pagina pe care o căutați nu există. Faceți clic pe buton pentru a reveni la pagina principală.',
      backHome: 'Înapoi la pagina principală',
    },
    error: {
      title: 'Ceva nu a funcționat',
      description: 'A apărut o eroare neașteptată. Încercați să reîmprospătați pagina sau contactați-ne dacă problema persistă.',
      tryAgain: 'Încearcă din nou',
      backHome: 'Înapoi la pagina principală',
      contact: 'Contactați-ne',
      contactHref: '/ro/contact',
      errorCode: 'Cod eroare',
    },
  },
  nl: {
    notFound: {
      title: 'Pagina niet gevonden',
      code: '404',
      description: 'De pagina die u zoekt bestaat niet. Klik op de knop om terug te gaan naar de startpagina.',
      backHome: 'Terug naar home',
    },
    error: {
      title: 'Er ging iets mis',
      description: 'Er is een onverwachte fout opgetreden. Probeer de pagina te vernieuwen of neem contact met ons op als het probleem aanhoudt.',
      tryAgain: 'Opnieuw proberen',
      backHome: 'Terug naar home',
      contact: 'Neem contact op',
      contactHref: '/nl/contact',
      errorCode: 'Foutcode',
    },
  },
  hu: {
    notFound: {
      title: 'Az oldal nem található',
      code: '404',
      description: 'A keresett oldal nem létezik. Kattintson a gombra a kezdőlapra való visszatéréshez.',
      backHome: 'Vissza a kezdőlapra',
    },
    error: {
      title: 'Valami hiba történt',
      description: 'Váratlan hiba történt. Próbálja meg frissíteni az oldalt, vagy lépjen kapcsolatba velünk, ha a probléma továbbra is fennáll.',
      tryAgain: 'Próbálja újra',
      backHome: 'Vissza a kezdőlapra',
      contact: 'Kapcsolat',
      contactHref: '/hu/kapcsolat',
      errorCode: 'Hibakód',
    },
  },
  cs: {
    notFound: {
      title: 'Stránka nenalezena',
      code: '404',
      description: 'Stránka, kterou hledáte, neexistuje. Kliknutím na tlačítko se vrátíte na hlavní stránku.',
      backHome: 'Zpět na hlavní stránku',
    },
    error: {
      title: 'Něco se pokazilo',
      description: 'Došlo k neočekávané chybě. Zkuste stránku obnovit nebo nás kontaktujte, pokud problém přetrvává.',
      tryAgain: 'Zkusit znovu',
      backHome: 'Zpět na hlavní stránku',
      contact: 'Kontaktujte nás',
      contactHref: '/cs/kontakt',
      errorCode: 'Kód chyby',
    },
  },
  sv: {
    notFound: {
      title: 'Sidan hittades inte',
      code: '404',
      description: 'Sidan du letar efter finns inte. Klicka på knappen för att gå tillbaka till startsidan.',
      backHome: 'Tillbaka till startsidan',
    },
    error: {
      title: 'Något gick fel',
      description: 'Ett oväntat fel uppstod. Försök att uppdatera sidan eller kontakta oss om problemet kvarstår.',
      tryAgain: 'Försök igen',
      backHome: 'Tillbaka till startsidan',
      contact: 'Kontakta oss',
      contactHref: '/sv/kontakt',
      errorCode: 'Felkod',
    },
  },
  da: {
    notFound: {
      title: 'Siden blev ikke fundet',
      code: '404',
      description: 'Siden du leder efter findes ikke. Klik på knappen for at gå tilbage til forsiden.',
      backHome: 'Tilbage til forsiden',
    },
    error: {
      title: 'Noget gik galt',
      description: 'Der opstod en uventet fejl. Prøv at genindlæse siden eller kontakt os, hvis problemet fortsætter.',
      tryAgain: 'Prøv igen',
      backHome: 'Tilbage til forsiden',
      contact: 'Kontakt os',
      contactHref: '/da/kontakt',
      errorCode: 'Fejlkode',
    },
  },
  no: {
    notFound: {
      title: 'Siden ble ikke funnet',
      code: '404',
      description: 'Siden du leter etter finnes ikke. Klikk på knappen for å gå tilbake til forsiden.',
      backHome: 'Tilbake til forsiden',
    },
    error: {
      title: 'Noe gikk galt',
      description: 'Det oppstod en uventet feil. Prøv å laste siden på nytt eller kontakt oss hvis problemet vedvarer.',
      tryAgain: 'Prøv igjen',
      backHome: 'Tilbake til forsiden',
      contact: 'Kontakt oss',
      contactHref: '/no/kontakt',
      errorCode: 'Feilkode',
    },
  },
  fi: {
    notFound: {
      title: 'Sivua ei löytynyt',
      code: '404',
      description: 'Etsimääsi sivua ei ole olemassa. Napsauta painiketta palataksesi etusivulle.',
      backHome: 'Takaisin etusivulle',
    },
    error: {
      title: 'Jokin meni pieleen',
      description: 'Tapahtui odottamaton virhe. Yritä päivittää sivu tai ota meihin yhteyttä, jos ongelma jatkuu.',
      tryAgain: 'Yritä uudelleen',
      backHome: 'Takaisin etusivulle',
      contact: 'Ota yhteyttä',
      contactHref: '/fi/yhteystiedot',
      errorCode: 'Virhekoodi',
    },
  },
  el: {
    notFound: {
      title: 'Η σελίδα δεν βρέθηκε',
      code: '404',
      description: 'Η σελίδα που αναζητάτε δεν υπάρχει. Κάντε κλικ στο κουμπί για να επιστρέψετε στην αρχική σελίδα.',
      backHome: 'Επιστροφή στην αρχική',
    },
    error: {
      title: 'Κάτι πήγε στραβά',
      description: 'Παρουσιάστηκε ένα μη αναμενόμενο σφάλμα. Δοκιμάστε να ανανεώσετε τη σελίδα ή επικοινωνήστε μαζί μας εάν το πρόβλημα επιμένει.',
      tryAgain: 'Δοκιμάστε ξανά',
      backHome: 'Επιστροφή στην αρχική',
      contact: 'Επικοινωνήστε μαζί μας',
      contactHref: '/el/epikoinonia',
      errorCode: 'Κωδικός σφάλματος',
    },
  },
};

const locales = Object.keys(errorPages);
let updated = 0;

for (const locale of locales) {
  const dictPath = path.join(dataDir, locale, 'dictionary.json');
  if (!fs.existsSync(dictPath)) {
    console.log('SKIP:', locale);
    continue;
  }

  const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
  dict.errorPages = errorPages[locale];
  fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
  updated++;
  console.log('✓', locale);
}

console.log(`\n✅ Updated ${updated} dictionary files`);
