export const multiline = (strings) => {
  const fullString = strings[0];
  const raws = fullString.split('\n');
  const numeredLines = raws
    .filter((el) => el)
    .map((el, idx) => `${idx + 1} ${el}`);

  return numeredLines.join('\n');
};
