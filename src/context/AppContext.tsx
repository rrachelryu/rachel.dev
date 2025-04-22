import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { translations } from '../i18n/translations'
import {
  ThemeMode,
  Language,
  StringTranslationKeys,
  Experience,
} from '../types/types'

interface AppContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: StringTranslationKeys) => string
  tArray: (key: 'experiences') => Experience[]
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'ko')) {
      return savedLang
    }
    return navigator.language.startsWith('ko') ? 'ko' : 'en'
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(themeMode)
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleSetLanguage = (lang: Language) => {
    if (lang === 'en' || lang === 'ko') {
      setLanguage(lang)
    }
  }

  const t = (key: StringTranslationKeys): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const tArray = (key: 'experiences'): Experience[] => {
    return translations[language]?.[key] || translations.en[key] || []
  }

  return (
    <AppContext.Provider
      value={{
        themeMode,
        toggleTheme,
        language,
        setLanguage: handleSetLanguage,
        t,
        tArray,
        menuOpen,
        setMenuOpen,
      }}
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
