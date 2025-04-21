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

// AppContextType 정의
interface AppContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: StringTranslationKeys) => string
  tArray: (key: 'experiences') => Experience[]
}

// AppContext 생성
const AppContext = createContext<AppContextType | undefined>(undefined)

// AppProvider 컴포넌트
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // 테마 상태
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  // 언어 상태
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'ko')) {
      return savedLang
    }
    return navigator.language.startsWith('ko') ? 'ko' : 'en'
  })

  // 테마 변경 효과 및 로컬 스토리지 저장
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(themeMode)
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  // 언어 변경 시 document의 lang 속성 업데이트 및 로컬 스토리지 저장
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('language', language)
  }, [language])

  // 테마 토글 함수
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // 언어 설정 함수
  const handleSetLanguage = (lang: Language) => {
    if (lang === 'en' || lang === 'ko') {
      setLanguage(lang)
    }
  }

  // 번역 반환 함수 (문자열 번역)
  const t = (key: StringTranslationKeys): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  // 번역 반환 함수 (배열 번역)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// AppContext 사용을 위한 custom hook
export const useApp = (): AppContextType => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
