let language = 'fr';

const translations = {
  en: {
    greet: 'Hello',
    intro: 'Welcome to our website',
  },
  fr: {
    greet: 'Bonjour',
    intro: 'Bienvenue sur notre site web',
  },
};

export const localize = (strings, ...params) => {
  let str = '';
  strings.forEach((string, i) => {
    str += string + (translations[language]?.[params[i]] || params[i] || '');
  });
  return str;
};

export const setLanguage = (lang) => {
  language = lang;
};
