import React, { useState, useEffect } from 'react'
import { Testimonial } from '../types'

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  // 자동 슬라이드 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-700 dark:text-indigo-300 font-medium text-lg">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 dark:text-gray-300">
                  "{item.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 네비게이션 도트 */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex
                ? 'bg-indigo-600'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>

      {/* 이전/다음 버튼 */}
      <button
        onClick={() =>
          setActiveIndex((current) =>
            current === 0 ? testimonials.length - 1 : current - 1
          )
        }
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
        aria-label="이전"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          setActiveIndex((current) =>
            current === testimonials.length - 1 ? 0 : current + 1
          )
        }
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
        aria-label="다음"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default TestimonialSlider
