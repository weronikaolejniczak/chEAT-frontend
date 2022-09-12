import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

enum ELocales {
  en = 'en',
}

export enum ENamespaces {
  common = 'common',
  login = 'login',
  errors = 'errors',
}

const ns = Object.values(ENamespaces);

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: ELocales.en,
  defaultNS: ENamespaces.common,
  ns,
});

export default i18n;
