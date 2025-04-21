import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/Header.css'

const Header: React.FC = () => {
  const { themeMode, toggleTheme, language, setLanguage, t } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`header ${themeMode}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Rachel.dev</span>
        </div>

        <div className="controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={themeMode === 'light' ? t('darkMode') : t('lightMode')}
          >
            {themeMode === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="language-selector">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={language === 'ko' ? 'active' : ''}
              onClick={() => setLanguage('ko')}
            >
              KO
            </button>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              {t('navHome')}
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              {t('navServices')}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              {t('navProjects')}
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              {t('navAbout')}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              {t('navContact')}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
