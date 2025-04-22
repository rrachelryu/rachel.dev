import React, { useState, useEffect, CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const {
    themeMode,
    toggleTheme,
    language,
    setLanguage,
    t,
    menuOpen,
    setMenuOpen,
  } = useApp()

  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.paddingTop = '70px'
    return () => {
      document.body.style.paddingTop = '0'
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // 👉 메인 페이지 hash 스크롤 이동
  const handleNavigateWithHash = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${hash}`)
    } else {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  const headerStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: themeMode === 'light' ? '#ffffff' : '#121212',
    boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
  }

  return (
    <header className={`header ${themeMode}`} style={headerStyle}>
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
            <a onClick={() => handleNavigateWithHash('home')}>{t('navHome')}</a>
          </li>
          <li>
            <a onClick={() => handleNavigateWithHash('services')}>
              {t('navServices')}
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateWithHash('projects')}>
              {t('navProjects')}
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigateWithHash('about')}>
              {t('navAbout')}
            </a>
          </li>
          <li>
            <Link to="/estimate" onClick={() => setMenuOpen(false)}>
              {t('navContact')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
