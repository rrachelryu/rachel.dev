import { useEffect } from 'react'

// 요소 페이드인 애니메이션 적용
export const useFadeInAnimation = (selector: string, delay = 100) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100')
              entry.target.classList.remove('opacity-0', 'translate-y-10')
            }, delay * index)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-10',
        'transition-all',
        'duration-700'
      )
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [selector, delay])
}

// 스크롤 진행률 계산
export const useScrollProgress = (callback: (progress: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      callback(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback])
}

// 애니메이션 클래스 유틸리티
export const animationClasses = {
  fadeIn: 'opacity-0 transition-opacity duration-700 ease-in-out',
  slideUp: 'opacity-0 translate-y-10 transition-all duration-700 ease-in-out',
  slideIn: 'opacity-0 -translate-x-10 transition-all duration-700 ease-in-out',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
}

// 화면에 보일 때 애니메이션 트리거
export const useInViewAnimation = (options = { threshold: 0.1 }) => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animate')

          if (animationType === 'fade-in') {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0')
          } else if (animationType === 'slide-up') {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          } else if (animationType === 'slide-in') {
            entry.target.classList.add('opacity-100', 'translate-x-0')
            entry.target.classList.remove('opacity-0', '-translate-x-10')
          }

          observer.unobserve(entry.target)
        }
      })
    }, options)

    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [options.threshold])
}
