import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import HireMeModal from './HireMeModal'

import '../assets/styles/HeroSection.css'
// ✅ props 타입 정의
interface Props {
  onHireMeClick: () => void
}
const HeroSection: React.FC<Props> = ({ onHireMeClick }) => {
  const { t } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="hero-section bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-800 dark:to-purple-900 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center hero-content">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            aria-label={t('heroTitleAria')}
            dangerouslySetInnerHTML={{ __html: t('heroTitle') }}
          />

          <motion.p
            className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: t('heroSubtitle') }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-button cursor-pointer"
              aria-label={t('ctaButtonAria')}
            >
              {t('ctaButton')}
            </button>
          </motion.div>
        </div>

        {/* Shape Decorations */}
        <div className="shape-decorations">
          <div className="shape shape-1">✨</div>
          <div className="shape shape-2">🌟</div>
          <div className="shape shape-3">🌸</div>
        </div>
      </section>

      {isModalOpen && <HireMeModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default HeroSection
