import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';

import enNavbar from '@/components/Common/langs/en.json';
import uzNavbar from '@/components/Common/langs/uz.json';
// import enBlog from '@/pages/Blog/BlogDetails/langs/en-blog.json';
// import uzBlog from '@/pages/Blog/BlogDetails/langs/uz-blog.json';

import enPortfolio from '@/pages/Portfolio/langs/en.json';
import uzPortfolio from '@/pages/Portfolio/langs/uz.json';

/**
 * {@link https://www.i18next.com/overview/configuration-options}
 * {@link https://github.com/i18next/i18next-browser-languageDetector}
 * */
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        portfolio: enPortfolio,
      },
      uz: {
        navbar: uzNavbar,
        portfolio: uzPortfolio,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['navbar', 'portfolio'],
    defaultNS: 'navbar',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default () => {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    if (!['uz', 'en'].includes(i18nInstance.language)) {
      i18nInstance.changeLanguage('en');
    }
  }, []);
};
