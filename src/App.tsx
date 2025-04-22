import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import './assets/styles/App.css'
import './index.css'
import { LanguageProvider } from './context/LanguageContext'
import ContactForm from './components/ContactForm'
import TechStack from './components/TechStack'

const AppContent: React.FC = () => {
  const { themeMode } = useApp()

  return (
    <div className={`app-container ${themeMode}`}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TechStack />
      </main>
    </div>
  )
}

const App: React.FC = () => {
  return <AppContent />
}

export default App
