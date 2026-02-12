import { downloadFromUrl } from '@/utils/download';

export function exportSignatureAsHtml(html: string, filename = 'stopka-email.html'): void {
  const fullHtml = `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopka e-mail</title>
</head>
<body>
${html}
</body>
</html>`;

  const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  downloadFromUrl(url, filename);
  URL.revokeObjectURL(url);
}
