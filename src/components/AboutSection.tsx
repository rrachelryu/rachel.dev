import React from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/AboutSection.css'

const techStack = [
  { label: 'React' },
  { label: 'Spring' },
  { label: 'Spring Boot' },
  { label: 'Thymeleaf' },
  { label: 'AWS' },
  { label: 'JavaScript' },
  { label: 'TypeScript' },
  { label: 'HTML5' },
  { label: 'CSS3' },
  { label: 'Node.js' },
  { label: 'MySQL' },
  { label: 'PostgreSQL' },
  { label: 'Oracle' },
  { label: 'GitHub' },
  { label: 'Git' },
  { label: 'jQuery' },
  { label: 'Vue.js' },
  { label: 'Eclipse' },

  // 아이콘 없는 항목들 (텍스트로 대체)
  { label: 'JSP' },
  { label: 'IBatis' },
  { label: 'MyBatis' },
  { label: 'WebSquare' },
  { label: 'IntelliJ' },
  { label: 'DataGrip' },
  { label: 'MSA' },
  { label: '전자정부' },
  { label: 'STS' },
  { label: 'NCRM' },
  { label: 'AJAX' },
]

const AboutSection: React.FC = () => {
  const { t } = useApp()

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="avatar-placeholder"></div>
        </div>
        <div className="about-content">
          <h2>{t('aboutTitle')}</h2>
          <p>{t('aboutDesc')}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
