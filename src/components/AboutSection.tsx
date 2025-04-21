import React from 'react'
import { useApp } from '../context/AppContext'
import {
  SiReact,
  SiSpring,
  SiAmazonwebservices,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMysql,
  SiGithub,
  SiThymeleaf,
  SiSpringboot,
  SiPostgresql,
  SiOracle,
  SiGit,
  SiJquery,
  SiVuedotjs,
  SiEclipseide,
} from 'react-icons/si'
import '../assets/styles/AboutSection.css'

const techStack = [
  { icon: <SiReact />, label: 'React' },
  { icon: <SiSpring />, label: 'Spring' },
  { icon: <SiSpringboot />, label: 'Spring Boot' },
  { icon: <SiThymeleaf />, label: 'Thymeleaf' },
  { icon: <SiAmazonwebservices />, label: 'AWS' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiPostgresql />, label: 'PostgreSQL' },
  { icon: <SiOracle />, label: 'Oracle' },
  { icon: <SiGithub />, label: 'GitHub' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiJquery />, label: 'jQuery' },
  { icon: <SiVuedotjs />, label: 'Vue.js' },
  { icon: <SiEclipseide />, label: 'Eclipse' },

  // 아이콘 없는 항목들 (텍스트로 대체)
  { icon: null, label: 'JSP' },
  { icon: null, label: 'IBatis' },
  { icon: null, label: 'MyBatis' },
  { icon: null, label: 'WebSquare' },
  { icon: null, label: 'MSA' },
  { icon: null, label: '전자정부' },
  { icon: null, label: 'STS' },
  { icon: null, label: 'NCRM' },
  { icon: null, label: 'AJAX' },
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
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-icon">
                <div className="tech-logo">{tech.icon}</div>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
