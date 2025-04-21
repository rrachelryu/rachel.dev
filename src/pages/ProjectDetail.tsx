import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Project } from '../types'
import { translations } from '../i18n/translations'

// 프로젝트 데이터를 컴포넌트 내에 직접 정의
const projectsData: Project[] = [
  {
    id: 'hospital-system',
    title: '병원 시스템',
    description: '환자 관리 및 예약을 위한 클리닉 전용 시스템',
    thumbnail: '/images/projects/hospital.jpg',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    demoUrl: 'https://hospital-demo.example.com',
    githubUrl: 'https://github.com/rachelryu/hospital-system',
    details:
      '병원 시스템에 대한 상세 설명으로, 환자 예약 관리, 의료진 스케줄링, 전자 의무 기록(EMR) 관리 등의 기능을 포함합니다. 병원 내 워크플로우를 최적화하고 환자 경험을 개선하는 데 중점을 두었습니다.',
    role: '프론트엔드 개발 및 백엔드 API 설계',
    technologies: [
      'React',
      'TypeScript',
      'Spring Boot',
      'JPA',
      'PostgreSQL',
      'Docker',
    ],
    outcome:
      '효율적인 환자 관리와 예약 시스템 구현으로 병원 운영 효율 30% 개선',
  },
  {
    id: 'enterprise-website',
    title: '기업 홈페이지',
    description: '기업의 브랜딩을 위한 반응형 홈페이지 구축',
    thumbnail: '/images/projects/enterprise.jpg',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    demoUrl: 'https://enterprise-demo.example.com',
    githubUrl: 'https://github.com/rachelryu/enterprise-website',
    details:
      '기업의 브랜딩과 정보 제공을 위한 현대적이고 반응형 웹사이트입니다. 고객 유치를 위한 마케팅 기능과 SEO 최적화를 포함하고 있습니다.',
    role: '풀스택 개발 및 UI/UX 설계',
    technologies: ['Vue.js', 'Vuex', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    outcome: '신규 고객 유입 40% 증가 및 모바일 사용자 경험 개선',
  },
  {
    id: 'ecommerce-platform',
    title: '쇼핑몰 플랫폼',
    description: '결제 기능이 포함된 온라인 쇼핑몰 시스템',
    thumbnail: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Redux', 'Node.js', 'MySQL'],
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/rachelryu/ecommerce-platform',
    details:
      '다양한 결제 방식을 지원하는 완전한 기능을 갖춘 전자상거래 플랫폼입니다. 상품 관리, 장바구니, 주문 처리, 결제 통합 및 관리자 대시보드를 포함합니다.',
    role: '백엔드 개발 및 결제 시스템 통합',
    technologies: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MySQL',
      'Redis',
      'Docker',
    ],
    outcome: '온라인 매출 50% 증가 및 구매 전환율 개선',
  },
]

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentLanguage, setCurrentLanguage] = useState<'ko' | 'en'>('ko')
  const t = translations[currentLanguage]

  useEffect(() => {
    // 언어 설정 가져오기 (실제로는 context나 상태 관리 도구에서 가져올 수 있음)
    const storedLanguage = localStorage.getItem('language') as 'ko' | 'en'
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    // 프로젝트 데이터를 가져오는 대신, 로컬 데이터를 사용
    const loadProject = async () => {
      try {
        // 실제 앱에서의 로딩 시간을 시뮬레이션
        await new Promise((resolve) => setTimeout(resolve, 300))
        const foundProject = projectsData.find((p) => p.id === id)
        setProject(foundProject || null)
      } catch (error) {
        console.error('프로젝트 정보를 가져오는 중 오류 발생:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h2>
        <p className="mb-6">요청하신 프로젝트 정보가 존재하지 않습니다.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {t.navHome}으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center mb-6 text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {t.navProjects}
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>{project.description}</p>

            {project.details && (
              <>
                <h2>프로젝트 상세</h2>
                <p>{project.details}</p>
              </>
            )}

            {project.role && (
              <>
                <h2>담당 역할</h2>
                <p>{project.role}</p>
              </>
            )}

            <h2>사용 기술</h2>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            {project.outcome && (
              <>
                <h2>프로젝트 성과</h2>
                <p>{project.outcome}</p>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                데모 보기
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub 저장소
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
