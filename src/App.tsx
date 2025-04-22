import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AppProvider, useApp } from './context/AppContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TechStack from './components/TechStack'
import ContactForm from './components/ContactForm'
import HireMeModal from './components/HireMeModal'
import EstimatePage from './pages/EstimatePage'

import './assets/styles/App.css'
import './index.css'

const MainPage: React.FC = () => {
  const { themeMode } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={`app-container ${themeMode}`}>
      <Header />
      <main>
        <HeroSection onHireMeClick={() => setIsModalOpen(true)} />
        {isModalOpen && <HireMeModal onClose={() => setIsModalOpen(false)} />}
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TechStack />
      </main>
    </div>
  )
}

// 헤더를 포함한 EstimatePage 래퍼 컴포넌트
const EstimatePageWithHeader: React.FC = () => {
  const { themeMode } = useApp()

  return (
    <div className={`app-container ${themeMode}`}>
      <Header />
      <main>
        <EstimatePage />
      </main>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/estimate" element={<EstimatePageWithHeader />} />
      </Routes>
    </Router>
  )
}

export default App
