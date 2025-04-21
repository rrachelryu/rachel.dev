import React from 'react'
import { TimelineItem } from '../types'

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* 중앙 선 */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900"></div>

      {items.map((item, index) => (
        <div key={item.id} className="relative pl-12 mb-8">
          {/* 동그라미 포인트 */}
          <div className="absolute left-2.5 -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900"></div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {item.description}
            </p>
            {item.tags && (
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
