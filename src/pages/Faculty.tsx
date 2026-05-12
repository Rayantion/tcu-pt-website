import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { faculty } from '../data'

type Role = 'all' | 'professor' | 'associate' | 'assistant'

export default function Faculty() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Role>('all')
  const [search, setSearch] = useState('')

  const filtered = faculty.filter((f) => {
    const matchRole = filter === 'all' || f.role === filter
    const matchSearch = search === '' || f.name.includes(search) || f.name_en.toLowerCase().includes(search.toLowerCase())
    return matchRole && matchSearch
  })

  const filters: { key: Role; zh: string; en: string }[] = [
    { key: 'all', zh: '全部', en: 'All' },
    { key: 'professor', zh: '教授', en: 'Professor' },
    { key: 'associate', zh: '副教授', en: 'Associate' },
    { key: 'assistant', zh: '助理教授', en: 'Assistant' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('師資陣容', 'Faculty')}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f.key
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-neutral-900'
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
              >
                {t(f.zh, f.en)}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('搜尋教師姓名', 'Search faculty name')}
            className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light w-full sm:w-64"
          />
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map((f) => (
            <motion.div
              key={f.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center">{f.name}</h3>
              <p className="text-sm text-primary dark:text-primary-light text-center mb-1">{t(f.title, f.title_en)}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-3">{f.degree}</p>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                <span className="font-medium">{t('專長：', 'Specialty: ')}</span>
                {f.specialty}
              </div>
              {f.email && (
                <a
                  href={`mailto:${f.email}`}
                  className="flex items-center justify-center gap-1 text-sm text-primary dark:text-primary-light hover:underline"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {f.email}
                </a>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
