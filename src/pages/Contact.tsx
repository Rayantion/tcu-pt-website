import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { contact } from '../data'

const cardHover = {
  scale: 1.01,
  y: -3,
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('聯絡我們', 'Contact Us')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {t('歡迎與我們聯繫，了解更多系所資訊', 'Feel free to reach out for more information')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <motion.div whileHover={cardHover} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200">{t('地址', 'Address')}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{t(contact.address_zh, contact.address_en)}</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={cardHover} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200">{t('電話', 'Phone')}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{contact.phone}</p>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={cardHover} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-200">{t('電子郵件', 'Email')}</p>
                <a href={`mailto:${contact.email}`} className="text-sm text-primary dark:text-primary-light hover:underline">
                  {contact.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div whileHover={cardHover} className="bg-neutral-200 dark:bg-neutral-700 rounded-2xl h-48 flex items-center justify-center cursor-pointer">
            <p className="text-neutral-500 dark:text-neutral-400">{t('地圖位置', 'Map Location')}</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg h-fit"
        >
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            {t('寄送訊息', 'Send a Message')}
          </h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
            >
              {t('訊息已送出，謝謝您的聯繫！', 'Message sent. Thank you for reaching out!')}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('姓名', 'Name')}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                placeholder={t('您的姓名', 'Your name')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('電子郵件', 'Email')}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t('訊息', 'Message')}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light resize-none"
                placeholder={t('請輸入您的訊息...', 'Enter your message...')}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
              {t('送出訊息', 'Send Message')}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
