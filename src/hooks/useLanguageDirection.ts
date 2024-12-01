import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useLanguageDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get RTL languages from i18n config
    const rtlLanguages = i18n.options.rtl || ['he', 'ar'];
    const isRTL = rtlLanguages.includes(i18n.language);

    // Set direction on html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
}
