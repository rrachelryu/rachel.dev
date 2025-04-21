import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/ProjectsSection.css'

const ProjectsSection: React.FC = () => {
  const { t } = useApp()
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      title: t('ecommerce'),
      description: t('ecommerceDesc'),
      image: 'ecommerce-placeholder.jpg',
    },
    {
      title: t('enterprise'),
      description: t('enterpriseDesc'),
      image: 'booking-placeholder.jpg',
    },
    {
      title: t('portal'),
      description: t('portalDesc'),
      image: 'portfolio-placeholder.jpg',
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section id="projects" className="projects-section">
      <h2>{t('projectsTitle')}</h2>

      <div className="projects-slider">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-placeholder"></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button onClick={prevSlide} className="slider-arrow prev">
            &#10094;
          </button>
          <div className="slider-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <button onClick={nextSlide} className="slider-arrow next">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
