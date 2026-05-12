import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { stats, news } from '../data'
import StatCard from '../components/StatCard'
import HeroCarousel from '../components/HeroCarousel'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              label={stat.label}
              label_en={stat.label_en}
              delay={i * 0.1}
            />
          ))}
        </motion.div>
      </section>

      {/* CTAs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { zh: '系所簡介', en: 'About', path: '/about', desc: '認識我們的系所', desc_en: 'Learn about our department' },
            { zh: '課程資訊', en: 'Programs', path: '/programs', desc: '大學部與碩士班', desc_en: 'Undergraduate & Graduate' },
            { zh: '師資陣容', en: 'Faculty', path: '/faculty', desc: '專任教師介紹', desc_en: 'Meet our faculty' },
            { zh: '聯絡我們', en: 'Contact', path: '/contact', desc: '與我們取得聯繫', desc_en: 'Get in touch' },
          ].map((item) => (
            <motion.div
              key={item.path}
              variants={itemVariants}
              whileHover={cardHover}
            >
              <Link
                to={item.path}
                className="group block bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {t(item.zh, item.en)}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{t(item.desc, item.desc_en)}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {t('最新消息', 'Latest News')}
          </h2>
          <Link
            to="/news"
            className="text-sm text-primary dark:text-primary-light hover:underline"
          >
            {t('查看全部', 'View All')} →
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {news.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={cardHover}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.date}</span>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mt-2 mb-2">
                {t(item.title, item.title_en)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
