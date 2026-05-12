import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { programs } from '../data'

export default function Programs() {
  const { t } = useLanguage()
  const p = programs

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('課程資訊', 'Programs')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('培育具備專業知識與人文素養的物理治療專業人才', 'Cultivating physical therapy professionals with expertise and humanistic literacy')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bachelor */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{t(p.bachelor.title, p.bachelor.title_en)}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {p.bachelor.duration} · {p.bachelor.credits} {t('學分', 'Credits')}
              </p>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 mb-6">{t(p.bachelor.description, p.bachelor.description_en)}</p>

          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">{t('核心課程', 'Core Courses')}</h3>
          <div className="flex flex-wrap gap-2">
            {p.bachelor.courses.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Master */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{t(p.master.title, p.master.title_en)}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {p.master.duration} · {p.master.credits} {t('學分', 'Credits')}
              </p>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 mb-6">{t(p.master.description, p.master.description_en)}</p>

          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">{t('核心課程', 'Core Courses')}</h3>
          <div className="flex flex-wrap gap-2">
            {p.master.courses.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-accent/10 dark:bg-accent/20 text-accent"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
