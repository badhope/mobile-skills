'use client';

import { createContext, useContext, useEffect, ReactNode, useCallback } from 'react';
import { usePreferences } from '@/hooks/usePreferences';
import { translations, type Language, type TranslationKey } from '@/lib/i18n';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationPath = NestedKeyOf<TranslationKey>;

interface I18nContextType {
  language: Language;
  t: (path: TranslationPath, params?: Record<string, string | number>) => string;
  changeLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const { preferences, updatePreference } = usePreferences();
  const language = preferences.language as Language;

  useEffect(() => {
    document.documentElement.lang = language === 'en-US' ? 'en' : 'zh-CN';
  }, [language]);

  const t = useCallback((path: TranslationPath, params?: Record<string, string | number>): string => {
    const keys = path.split('.');
    let value: unknown = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }

    if (typeof value !== 'string') {
      return path;
    }

    if (params) {
      return Object.entries(params).reduce(
        (str, [key, val]) => str.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val)),
        value
      );
    }

    return value;
  }, [language]);

  const changeLanguage = useCallback((newLang: Language) => {
    updatePreference('language', newLang);
  }, [updatePreference]);

  const contextValue: I18nContextType = {
    language,
    t,
    changeLanguage
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18nContext must be used within an I18nProvider');
  }
  return context;
}
