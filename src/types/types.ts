// StringTranslationKeys 타입 정의
export type StringTranslationKeys =
  | 'navHome'
  | 'navServices'
  | 'navProjects'
  | 'navAbout'
  | 'navContact'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'ctaButton'
  | 'servicesTitle'
  | 'webDev'
  | 'webDevDesc'
  | 'backendDev'
  | 'backendDevDesc'
  | 'cloudSolutions'
  | 'cloudSolutionsDesc'
  | 'projectsTitle'
  | 'enterprise'
  | 'enterpriseDesc'
  | 'ecommerce'
  | 'ecommerceDesc'
  | 'portal'
  | 'portalDesc'
  | 'aboutTitle'
  | 'aboutDesc'
  | 'experienceTitle'
  | 'experienceDesc'
  | 'skillsTitle'
  | 'backendSkills'
  | 'frontendSkills'
  | 'databaseSkills'
  | 'cloudSkills'
  | 'frameworksSkills'
  | 'toolsSkills'
  | 'darkMode'
  | 'lightMode'
  // SEO 관련 키 추가
  | 'siteTitle'
  | 'siteDescription'
  | 'siteKeywords'
  | 'heroTitleAria'
  | 'ctaButtonAria'

// 경험 타입 정의
export interface Experience {
  year: string
  company: string
  project: string
}

// 언어 타입
export type Language = 'en' | 'ko'

// Translations 타입 정의 (experiences를 각 언어에 포함)
export interface Translations {
  en: {
    [key in StringTranslationKeys]: string
    // experiences가 추가된 타입
  } & {
    experiences: Experience[]
  }
  ko: {
    [key in StringTranslationKeys]: string
    // experiences가 추가된 타입
  } & {
    experiences: Experience[]
  }
}

// 테마 모드 타입
export type ThemeMode = 'light' | 'dark'
