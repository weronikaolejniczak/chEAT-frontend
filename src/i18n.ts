import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

enum ELocales {
  en = 'en',
}

const fallbackLng = ELocales.en;

export enum ENamespaces {
  common = 'common',
}

const defaultNS = ENamespaces.common;
const ns = Object.values(ENamespaces);

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng,
  defaultNS,
  ns,
});

export default i18n;
