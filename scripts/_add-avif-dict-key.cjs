const fs = require('fs');
const msgs = {
  pl: 'Twoja przeglądarka nie obsługuje kodowania AVIF. Użyj Chrome, Edge lub Firefox.',
  en: 'Your browser does not support AVIF encoding. Use Chrome, Edge, or Firefox.',
  de: 'Ihr Browser unterstützt keine AVIF-Kodierung. Verwenden Sie Chrome, Edge oder Firefox.',
  es: 'Tu navegador no admite la codificación AVIF. Usa Chrome, Edge o Firefox.',
  fr: "Votre navigateur ne prend pas en charge l'encodage AVIF. Utilisez Chrome, Edge ou Firefox.",
  pt: 'O seu navegador não suporta codificação AVIF. Use Chrome, Edge ou Firefox.',
  it: 'Il tuo browser non supporta la codifica AVIF. Usa Chrome, Edge o Firefox.',
  ro: 'Browserul tău nu suportă codificarea AVIF. Folosește Chrome, Edge sau Firefox.',
  nl: 'Je browser ondersteunt geen AVIF-codering. Gebruik Chrome, Edge of Firefox.',
  hu: 'A böngésződ nem támogatja az AVIF kódolást. Használj Chrome-ot, Edge-et vagy Firefoxot.',
  cs: 'Váš prohlížeč nepodporuje kódování AVIF. Použijte Chrome, Edge nebo Firefox.',
  sv: 'Din webbläsare stöder inte AVIF-kodning. Använd Chrome, Edge eller Firefox.',
  da: 'Din browser understøtter ikke AVIF-kodning. Brug Chrome, Edge eller Firefox.',
  no: 'Nettleseren din støtter ikke AVIF-koding. Bruk Chrome, Edge eller Firefox.',
  fi: 'Selaimesi ei tue AVIF-koodausta. Käytä Chromea, Edgeä tai Firefoxia.',
  el: 'Ο περιηγητής σας δεν υποστηρίζει κωδικοποίηση AVIF. Χρησιμοποιήστε Chrome, Edge ή Firefox.',
};

for (const [loc, msg] of Object.entries(msgs)) {
  const p = `data/${loc}/dictionary.json`;
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  d.imageConverter.errorAvifNotSupported = msg;
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('OK:', loc);
}
