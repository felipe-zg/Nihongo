export function parseRuby(text: string): RubyPart[] {
  const regex = /([^{]+?)(?:\{([^}]+)\})?/g;
  const result: RubyPart[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [, kanji, furigana] = match;
    result.push({ kanji, furigana });
  }

  return result;
}