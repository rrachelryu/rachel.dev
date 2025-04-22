import React, { useState, useEffect, CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/Header.css'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const { themeMode, toggleTheme, language, setLanguage, t } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // body에 padding을 추가하는 효과
  useEffect(() => {
    document.body.style.paddingTop = '70px' // 헤더 높이에 맞게 조정

    return () => {
      document.body.style.paddingTop = '0'
    }
  }, [])

  const headerStyle: CSSProperties = {
    position: 'fixed' as const,
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
            <Link to="/estimate" onClick={toggleMenu}>
              {t('navContact')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
