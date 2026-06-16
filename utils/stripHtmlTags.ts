export function stripHtmlTags(input: string): string {
  let result = '';
  let insideTag = false;
  for (const ch of input) {
    if (ch === '<') {
      insideTag = true;
    } else if (ch === '>' && insideTag) {
      insideTag = false;
    } else if (!insideTag) {
      result += ch;
    }
  }
  return result;
}
