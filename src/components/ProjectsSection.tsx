import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import '../assets/styles/ProjectsSection.css'

// React에서 이미지 파일을 직접 임포트하는 방식으로 변경
import portalImg from '../assets/img/iScreen Shoter - Google Chrome - 250424201334.png'
import ecommerceImg from '../assets/img/iScreen Shoter - Google Chrome - 250424212334.png'
import enterpriseImg from '../assets/img/iScreen Shoter - Google Chrome - 250424220356.png'

const ProjectsSection: React.FC = () => {
  const { t } = useApp()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  // 이미지 클릭 시 확대 모달 열기
  const openModal = (image: string) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage('')
  }

  // 임포트한 이미지 사용
  const projects = [
    {
      title: t('ecommerce'),
      description: t('ecommerceDesc'),
      image: ecommerceImg,
    },
    {
      title: t('enterprise'),
      description: t('enterpriseDesc'),
      image: enterpriseImg,
    },
    {
      title: t('portal'),
      description: t('portalDesc'),
      image: portalImg,
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
              <div
                className="project-image"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://via.placeholder.com/500x300?text=Project+Image'
                  }}
                />
              </div>
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

      {/* 확대 이미지 모달 */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content">
            <img src={modalImage} alt="Expanded View" />
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
