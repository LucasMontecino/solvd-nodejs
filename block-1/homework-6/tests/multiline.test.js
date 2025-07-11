const { multiline } = require('../src/multiline');

describe('multiline tagged template', () => {
  it('should number each line starting from 1', () => {
    const result = multiline`
line one
line two
line three`;

    expect(result).toBe(`1 line one\n2 line two\n3 line three`);
  });

  it('should preserve indentation of each line', () => {
    const result = multiline`
function test() {
  return true;
}`;

    expect(result).toBe(`1 function test() {\n2   return true;\n3 }`);
  });

  it('should handle a single line', () => {
    const result = multiline`just one line`;
    expect(result).toBe(`1 just one line`);
  });

  it('should return an empty string if there is no content', () => {
    const result = multiline``;
    expect(result).toBe('');
  });

  it('should handle lines with only whitespace', () => {
    const result = multiline`
      
    test
      `;

    expect(result).toBe(`1       \n2     test\n3       `);
  });
});
