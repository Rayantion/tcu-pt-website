import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { labs } from '../data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const cardHover = {
  scale: 1.02,
  y: -6,
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
}

export default function Labs() {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          {t('實驗室與研究', 'Research & Labs')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('八大專業實驗室，配備先進設備，支持教學與研究', 'Eight specialized labs with advanced equipment supporting teaching and research')}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {labs.map((lab) => (
          <motion.div
            key={lab.name}
            variants={itemVariants}
            whileHover={cardHover}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
              <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {t(lab.name, lab.name_en)}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {t(lab.description, lab.description_en)}
            </p>
            {lab.equipment.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {lab.equipment.map((eq, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
