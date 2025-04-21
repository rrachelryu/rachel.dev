import React, { createContext, useState, useContext, ReactNode } from 'react'
import { translations } from '../i18n/translations'
import { ThemeMode } from '../types/index'
import { Translations, Language, TranslationKeys } from '../types/types' // types 폴더 내 파일을 경로에 맞게 임포트

interface AppContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys) => string // 여기 수정!
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const [language, setLanguage] = useState<Language>('en')

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const t = (key: TranslationKeys): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <AppContext.Provider
      value={{ themeMode, toggleTheme, language, setLanguage, t }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): AppContextType => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
