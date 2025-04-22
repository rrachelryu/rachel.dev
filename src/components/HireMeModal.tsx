import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onClose: () => void
}

const HireMeModal: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 메일 처리 로직은 서버나 메일 서비스로 연동 필요
    alert(
      `✅ 메시지 전송됨!\n\n이름: ${name}\n이메일: ${email}\n내용: ${message}`
    )
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
      <motion.div
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Let’s Work Together
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          I’m available for freelance, consulting, or exciting collaborations.
        </p>

        <form
          action="https://formspree.io/f/mqaqkabj" // 여러분의 form ID로 바꾸세요
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <button type="submit" className="cta-button w-full">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default HireMeModal
