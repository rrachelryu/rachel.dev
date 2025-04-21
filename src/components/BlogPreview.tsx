import React from 'react'
import { Link } from 'react-router-dom'
import { BlogPost } from '../types'

interface BlogPreviewProps {
  posts: BlogPost[]
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          )}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-indigo-600 dark:text-indigo-400">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              더 읽기 →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPreview
