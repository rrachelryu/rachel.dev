import React from 'react'
import {
  Code,
  Database,
  Server,
  Globe,
  Terminal,
  Layout,
  Package,
} from 'lucide-react'

import { useApp } from '../context/AppContext'
import { translations } from '../i18n/translations'

const TechStack = () => {
  const { language } = useApp()
  const t = translations[language]

  const categories = [
    {
      name: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: [
        'React',
        'Vue.js',
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'jQuery',
        'AJAX',
        'JSP',
        'Thymeleaf',
      ],
    },
    {
      name: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Java', 'Spring', 'Spring Boot', 'e-gov', 'Node.js'],
    },
    {
      name: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'MySQL',
        'PostgreSQL',
        'Oracle',
        'IBatis',
        'MyBatis',
        'Tibero',
        'DB2',
      ],
    },
    {
      name: 'Tools & DevOps',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        'Git',
        'GitHub',
        'AWS',
        'DOCKER',
        'IntelliJ',
        'Eclipse',
        'STS',
        'WebSquare',
        'NCRM',
        'DataGrip',
      ],
    },
    {
      name: 'Other',
      icon: <Code className="w-6 h-6" />,
      skills: ['MSA', 'Hexagonal Architecture'],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-400">
        {t.techStackTitle}
      </h2>

      <div className="grid gap-8 mb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl"
          >
            <div className="flex items-center p-4 bg-indigo-50 dark:bg-indigo-900">
              <div className="mr-3 text-indigo-600 dark:text-indigo-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {category.name}
              </h3>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
