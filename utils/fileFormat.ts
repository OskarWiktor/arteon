export function getFileFormatLabel(file: File | null | undefined) {
  if (!file) return null;

  const name = file.name;
  const extMatch = /\.([^.]+)$/.exec(name);
  if (extMatch && extMatch[1]) return extMatch[1].toUpperCase();

  if (file.type && file.type.includes('/')) {
    const [, sub] = file.type.split('/');
    return sub.toUpperCase();
  }

  return 'N/D';
}
