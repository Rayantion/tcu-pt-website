import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface StatCardProps {
  value: string
  label: string
  label_en: string
  icon?: React.ReactNode
  delay?: number
}

function useCountUp(target: string, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(target.replace(/\D/g, ''), 10) || 0
  const suffix = target.replace(/[\d]/g, '')

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, numericValue, duration])

  return { ref, display: count + suffix }
}

export default function StatCard({ value, label, label_en, icon, delay = 0 }: StatCardProps) {
  const { t } = useLanguage()
  const { ref, display } = useCountUp(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light">
          {icon}
        </div>
      )}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: delay + 0.1 }}
        className="text-3xl sm:text-4xl font-bold text-primary dark:text-primary-light mb-2"
      >
        {display}
      </motion.div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{t(label, label_en)}</p>
    </motion.div>
  )
}
