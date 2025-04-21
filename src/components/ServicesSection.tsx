import React from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/ServicesSection.css'

const ServicesSection: React.FC = () => {
  const { t } = useApp()

  return (
    <section id="services" className="services-section">
      <h2>{t('servicesTitle')}</h2>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <span>⬚</span>
          </div>
          <h3>{t('webDev')}</h3>
          <p>{t('webDevDesc')}</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>⊞</span>
          </div>
          <h3>{t('backendDev')}</h3>
          <p>{t('backendDevDesc')}</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>⚙</span>
          </div>
          <h3>{t('cloudSolutions')}</h3>
          <p>{t('cloudSolutionsDesc')}</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
