import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type LanguageType = 'ko' | 'en'

interface LanguageContextType {
  currentLanguage: LanguageType
  setLanguage: (lang: LanguageType) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>('ko')

  useEffect(() => {
    // 로컬 스토리지에서 언어 설정 가져오기
    const storedLanguage = localStorage.getItem('language') as LanguageType
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage)
    }
  }, [])

  const setLanguage = (lang: LanguageType) => {
    setCurrentLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
