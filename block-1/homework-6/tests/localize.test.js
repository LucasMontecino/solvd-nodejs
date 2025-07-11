const { localize, setLanguage } = require('../src/localize');

const translations = {
  en: { greet: 'Hello', intro: 'Welcome to our website' },
  fr: { greet: 'Bonjour', intro: 'Bienvenue sur notre site web' },
};

describe('localize (quasi-tagged template)', () => {
  it('should return correct translation in French', () => {
    const greeting = 'greet';
    const intro = 'intro';
    expect(localize`${greeting}`).toBe(translations.fr.greet);
    expect(localize`${intro}`).toBe(translations.fr.intro);
  });

  it('should return correct translation in English', () => {
    setLanguage('en');
    const greeting = 'greet';
    const intro = 'intro';
    expect(localize`${greeting}`).toBe(translations.en.greet);
    expect(localize`${intro}`).toBe(translations.en.intro);
  });

  it('should return key itself if translation is missing', () => {
    setLanguage('fr');
    expect(localize`unknown_key`).toBe('unknown_key');
  });
});
