import en from './dictionaries/en';
// import vi from './dictionaries/vi';
import type { Locale } from './i18n.config';
import { LocalStorage } from './utils/newLocalStorage';

// const dictionaries = { en, vi };
const dictionaries = { en };

export const setLanguage = (lang: Locale) => {
  LocalStorage.set('lang', lang);
};

export const getDictionary = () => {
  return dictionaries[LocalStorage.get('lang') as Locale];
};
