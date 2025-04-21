import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet' // SEO를 위한 헬멧 추가
import { useFadeInAnimation } from '../util/animations'
import { translations } from '../i18n/translations'

// 컴포넌트 분리
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactForm'

// LanguageContext 사용
import { useLanguage } from '../context/LanguageContext'

const Home: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage()
  const t = translations[currentLanguage]

  // 애니메이션 적용
  useFadeInAnimation('.animate-item')

  return (
    <div className="min-h-screen">
      {/* SEO 최적화 */}
      <Helmet>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDescription} />
        <meta name="keywords" content={t.siteKeywords} />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDescription} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://rachelryu.dev/" />
      </Helmet>

      {/* 각 섹션을 별도 컴포넌트로 분리 */}
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Home
