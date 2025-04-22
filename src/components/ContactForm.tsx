import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './Header'
const EstimatePage: React.FC = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  React.useEffect(() => {
    const section = document.getElementById('contact')
    if (location.hash === '#contact' && section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // 실제 구현에서는 이 부분을 API 호출로 대체
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // API 응답 처리
      setSubmitResult({
        success: true,
        message:
          '견적 요청이 성공적으로 전송되었습니다! 빠른 시일 내에 연락드리겠습니다.',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setSubmitResult({
        success: false,
        message: '요청 전송에 실패했습니다. 다시 시도해주세요.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* 견적 섹션 */}
        <section
          id="estimate"
          className="px-4 py-16 md:py-24 max-w-7xl mx-auto text-gray-800 dark:text-gray-100"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              프리미엄 서비스
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              홈페이지 제작 프리미엄 견적
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              12년차 시니어 개발자의 전문성과 실전 경험을 바탕으로 한 고급
              맞춤형 견적입니다.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800">
                <thead className="bg-gradient-to-r from-primary to-blue-600 text-white">
                  <tr>
                    <th className="p-5 md:p-6 text-left text-base md:text-lg font-semibold rounded-tl-xl">
                      항목
                    </th>
                    <th className="p-5 md:p-6 text-left text-base md:text-lg font-semibold">
                      설명
                    </th>
                    <th className="p-5 md:p-6 text-right text-base md:text-lg font-semibold rounded-tr-xl">
                      예상 비용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        기본형 React 사이트
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      반응형 UI, SEO 최적화, 브랜딩 고려한 초기 템플릿 제공
                      (기업, 병원, 쇼핑몰 등)
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      1,200,000원 ~
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        페이지 추가
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      UI 흐름 고려한 구조 설계, 마이크로 인터랙션 및 고급
                      컴포넌트 포함
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      100,000원 / 페이지
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        Spring Boot 백엔드
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      JPA 기반 DB 설계, REST API + JWT 인증, 예외처리/보안 설계
                      포함
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      2,000,000원 ~
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        AWS 인프라 배포
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      CI/CD, EC2, S3, Route53, 보안 그룹, SSL, 모니터링 포함
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      800,000원 ~
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        관리자 기능 (어드민)
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      대시보드, 검색/필터/정렬, 권한별 접근 제어, 통계/그래프
                      시각화 포함
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      1,800,000원 ~
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6">
                      <div className="font-medium text-primary">
                        AI 챗봇 연동
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-gray-600 dark:text-gray-300">
                      OpenAI API 연동, FAQ 기반 프롬프트 설계, 대화 기록 저장,
                      UX 튜닝 포함
                    </td>
                    <td className="p-4 md:p-6 text-right font-semibold">
                      2,000,000원 ~
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
            * 본 견적은 부가세 별도 기준이며, 요구 사항의 난이도 및 협의 내용에
            따라 조정될 수 있습니다.
          </p>
        </section>

        {/* 문의 양식 섹션 */}
        <section id="contact" className="px-4 py-16 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800"
          >
            <motion.div variants={fadeIn} className="mb-8 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                견적 요청하기
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                구체적인 프로젝트 요구사항을 알려주시면 상세한 견적을 준비해
                드립니다.
              </p>
            </motion.div>

            {submitResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={`mb-6 p-4 rounded-lg flex items-center ${
                  submitResult.success
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-l-4 border-green-500'
                    : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-l-4 border-red-500'
                }`}
              >
                <div className="mr-3">
                  {submitResult.success ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span>{submitResult.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  프로젝트 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="원하시는 기능과 요구사항을 자세히 알려주세요."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white resize-none"
                />
              </motion.div>

              <motion.div variants={fadeIn} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      요청 중...
                    </>
                  ) : (
                    <>
                      <span>견적 요청하기</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default EstimatePage
