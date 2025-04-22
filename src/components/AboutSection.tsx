import React from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/AboutSection.css'

const AboutSection: React.FC = () => {
  const { t } = useApp()

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* 추후 실제 이미지로 대체 가능 */}
          <div className="avatar-placeholder" />
        </div>
        <div className="about-content">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p className="section-description">{t('aboutDesc1')}</p>
          <p className="section-description">{t('aboutDesc2')}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
