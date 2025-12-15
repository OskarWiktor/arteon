export function revokeObjectUrl(url: string | null | undefined) {
  if (!url) return;
  URL.revokeObjectURL(url);
}

export function revokeObjectUrls(urls: Array<string | null | undefined>) {
  urls.forEach(revokeObjectUrl);
}
