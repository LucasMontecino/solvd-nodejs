export const highlightKeywords = (template, keywords) => {
  return template.replace(/\$\{(\d+)\}/g, (_, index) => {
    const keyword = keywords[Number(index)];
    return `<span class='highlight'>${keyword}</span>`;
  });
};
