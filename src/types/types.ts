// src/types.ts

export type TranslationKeys =
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

export type Language = 'en' | 'ko'

export type Translations = {
  [key in Language]: {
    [key in TranslationKeys]?: string // 기존 문자열 키
  } & {
    experiences?: { year: string; company: string; project: string }[] // 추가된 experiences
  }
}
