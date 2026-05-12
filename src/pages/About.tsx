import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { mission, history } from '../data'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('系所簡介', 'About Us')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t(mission.zh, mission.en)}
        </p>
      </motion.div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">
          {t('發展歷程', 'Our History')}
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 dark:bg-primary-light/30" />
          <div className="space-y-8">
            {history.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                <div className={`hidden sm:block w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg inline-block">
                    <span className="text-primary dark:text-primary-light font-bold text-lg">{item.year}</span>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">{t(item.title, item.title_en)}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-primary dark:bg-primary-light rounded-full -translate-x-1.5 mt-2" />
                <div className="sm:hidden ml-8 flex-1">
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                    <span className="text-primary dark:text-primary-light font-bold text-lg">{item.year}</span>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">{t(item.title, item.title_en)}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
