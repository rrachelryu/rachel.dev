import React from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/HeroSection.css'

const HeroSection: React.FC = () => {
  const { t } = useApp()

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <button className="cta-button">{t('ctaButton')}</button>
      </div>
      <div className="shape-decorations">
        <div className="shape shape-1">*</div>
        <div className="shape shape-2">+</div>
        <div className="shape shape-3">○</div>
      </div>
    </section>
  )
}

export default HeroSection
