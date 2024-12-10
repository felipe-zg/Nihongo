export function getOptionsStep5(length: number): number[] {
  const options = [];
  for (let i = 5; i < length; i += 5) {
    options.push(i);
  }
  options.push(length);
  return options;
};