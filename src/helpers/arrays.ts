export function getOptionsStep5(length: number): number[] {
  const options = [];
  for (let i = 5; i < length; i += 5) {
    options.push(i);
  }
  options.push(length);
  return options;
};

export function arrayToString(text: string | string[], separator = ','): string {
  if (Array.isArray(text)) {
    return text.join(separator);
  }
  return text;
}