export type ThemeMode = 'light' | 'dark'
export type Language = 'en' | 'ko'
export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  details?: string
  role?: string
  technologies: string[]
  outcome?: string
}

export interface Skill {
  name: string
  level: number // 1-10
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud'
}

export interface TimelineItem {
  id: string
  title: string
  period: string
  description: string
  tags?: string[]
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  text: string
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  thumbnail?: string
  slug: string
}
