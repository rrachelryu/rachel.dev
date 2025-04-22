import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import '../assets/styles/Estimater.css'

const EstimatePage = () => {
  const location = useLocation()
  const { t } = useApp() // 번역 hook 추가

  React.useEffect(() => {
    const section = document.getElementById('estimate')
    if (location.hash === '#contact' && section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="estimate" className="estimate-section">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="estimate-header"
      >
        <span className="service-badge">{t('estimateBadge')}</span>
        <h2 className="gradient-title">{t('estimateTitle')}</h2>
        <p className="estimate-description">{t('estimateDescription')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="table-container"
      >
        <div className="table-wrapper">
          <table className="estimate-table">
            <thead className="table-head">
              <tr>
                <th className="table-header-cell header-first">
                  {t('estimateTableHeader1')}
                </th>
                <th className="table-header-cell">
                  {t('estimateTableHeader2')}
                </th>
                <th className="table-header-cell header-last">
                  {t('estimateTableHeader3')}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: t('basicReactSite'),
                  description: t('basicReactSiteDesc'),
                  price: t('basicReactSitePrice'),
                },
                {
                  title: t('additionalPage'),
                  description: t('additionalPageDesc'),
                  price: t('additionalPagePrice'),
                },
                {
                  title: t('springBackend'),
                  description: t('springBackendDesc'),
                  price: t('springBackendPrice'),
                },
                {
                  title: t('awsDeployment'),
                  description: t('awsDeploymentDesc'),
                  price: t('awsDeploymentPrice'),
                },
                {
                  title: t('adminFeatures'),
                  description: t('adminFeaturesDesc'),
                  price: t('adminFeaturesPrice'),
                },
                {
                  title: t('aiChatbot'),
                  description: t('aiChatbotDesc'),
                  price: t('aiChatbotPrice'),
                },
              ].map((item, index, array) => (
                <tr
                  key={index}
                  className={`table-row ${
                    index === array.length - 1 ? 'last-row' : ''
                  }`}
                >
                  <td className="table-cell">
                    <div className="item-title">{item.title}</div>
                  </td>
                  <td className="table-cell description-cell">
                    {item.description}
                  </td>
                  <td className="table-cell price-cell">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="contact-form-container">
        <h3 className="section-title">{t('estimateContactTitle')}</h3>
        <p className="contact-description">{t('estimateContactDesc')}</p>

        <form
          className="estimate-form"
          action="https://formspree.io/f/mqaqkabj" // 여러분의 form ID로 바꾸세요
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t('formName')}</label>
              <input
                type="text"
                className="form-input"
                placeholder={t('formNamePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t('formPhone')}</label>
              <input
                type="tel"
                className="form-input"
                placeholder={t('formPhonePlaceholder')}
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label className="form-label">{t('formEmail')}</label>
            <input
              type="email"
              className="form-input"
              placeholder={t('formEmailPlaceholder')}
            />
          </div>
          <div className="form-group full-width">
            <label className="form-label">{t('formProject')}</label>
            <textarea
              className="form-textarea"
              placeholder={t('formProjectPlaceholder')}
            ></textarea>
          </div>
          <div className="form-group full-width">
            <button className="submit-button">{t('formSubmit')}</button>
          </div>
        </form>
      </div>

      <p className="disclaimer">{t('estimateDisclaimer')}</p>
    </section>
  )
}

export default EstimatePage
