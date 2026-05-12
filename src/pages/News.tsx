import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { news } from '../data'

export default function News() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(3)
  const hasMore = visible < news.length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('最新消息', 'News & Announcements')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {t('系所公告與活動資訊', 'Department announcements and events')}
        </p>
      </motion.div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {news.slice(0, visible).map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 dark:bg-primary/20 flex flex-col items-center justify-center">
                  <span className="text-xs text-primary dark:text-primary-light font-medium">{item.date.split('-')[0]}</span>
                  <span className="text-lg font-bold text-primary dark:text-primary-light">{item.date.split('-')[1]}/{item.date.split('-')[2]}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                  {t(item.title, item.title_en)}
                </h3>
                <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{item.date}</span>
                  {item.pdf_link && (
                    <a
                      href={item.pdf_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-light hover:underline inline-flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisible((v) => v + 3)}
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            {t('載入更多', 'Load More')}
          </button>
        </div>
      )}
    </div>
  )
}
