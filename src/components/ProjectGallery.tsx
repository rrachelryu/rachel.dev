import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { Project } from '../types'

interface ProjectGalleryProps {
  projects: Project[]
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // 모든 프로젝트에서 고유한 태그 추출
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  )

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      )
    }
  }, [activeFilter, projects])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1 rounded-full ${
            activeFilter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
          } transition-colors duration-300`}
        >
          전체
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-3 py-1 rounded-full ${
              activeFilter === tag
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            } transition-colors duration-300`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          해당 필터에 맞는 프로젝트가 없습니다.
        </div>
      )}
    </div>
  )
}

export default ProjectGallery
