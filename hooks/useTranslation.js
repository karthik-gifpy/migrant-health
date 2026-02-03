import { useRouter } from 'next/router';
import en from '../locales/en.json';

const translations = {
  en
};

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale] || translations.en;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  return { t, locale };
}
