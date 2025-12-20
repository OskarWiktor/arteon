export function canWriteTextToClipboard(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.clipboard?.writeText === 'function';
}

export async function writeTextToClipboard(text: string): Promise<void> {
  if (!canWriteTextToClipboard()) {
    throw new Error('Clipboard API is not available');
  }

  await navigator.clipboard.writeText(text);
}

export function copyTextWithTextareaExecCommand(text: string): void {
  if (typeof document === 'undefined') {
    throw new Error('Document is not available');
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

export async function copyTextToClipboard(text: string): Promise<void> {
  if (canWriteTextToClipboard()) {
    await writeTextToClipboard(text);
    return;
  }

  copyTextWithTextareaExecCommand(text);
}

export function copyHtmlWithExecCommand(html: string): boolean {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    throw new Error('DOM is not available');
  }

  const temp = document.createElement('div');
  temp.style.position = 'fixed';
  temp.style.pointerEvents = 'none';
  temp.style.opacity = '0';
  temp.innerHTML = html;

  document.body.appendChild(temp);

  try {
    const range = document.createRange();
    range.selectNodeContents(temp);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    return document.execCommand('copy');
  } finally {
    window.getSelection()?.removeAllRanges();
    temp.remove();
  }
}
