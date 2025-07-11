const { highlightKeywords } = require('../src/highlightKeywords');

describe('highlightKeywords', () => {
  it('should highlight all keywords in the template using span', () => {
    const keywords = ['JavaScript', 'template', 'tagged'];
    const template =
      'Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.';

    const result = highlightKeywords(template, keywords);

    expect(result).toBe(
      "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
    );
  });

  it('should return the template unchanged if no placeholders exist', () => {
    const keywords = ['test'];
    const template = 'There are no dynamic placeholders here.';

    expect(highlightKeywords(template, keywords)).toBe(template);
  });

  it('should return an empty string if template is empty', () => {
    expect(highlightKeywords('', ['anything'])).toBe('');
  });
});
