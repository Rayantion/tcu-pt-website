import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { zh: '首頁', en: 'Home', path: '/' },
  { zh: '系所簡介', en: 'About', path: '/about' },
  { zh: '師資陣容', en: 'Faculty', path: '/faculty' },
  { zh: '課程資訊', en: 'Programs', path: '/programs' },
  { zh: '實驗室', en: 'Labs', path: '/labs' },
  { zh: '最新消息', en: 'News', path: '/news' },
  { zh: '聯絡我們', en: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const { dark, toggle } = useTheme()
  const location = useLocation()

  const { scrollY } = useScroll()
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.85)']
  )
  const navBgDark = useTransform(
    scrollY,
    [0, 50],
    ['rgba(23,23,23,0.6)', 'rgba(23,23,23,0.85)']
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ backgroundColor: dark ? navBgDark : navBg }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? 'border-neutral-300/60 dark:border-neutral-600/60 shadow-lg'
          : 'border-neutral-200/30 dark:border-neutral-700/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">PT</span>
            </div>
            <span className="font-bold text-primary dark:text-primary-light text-sm sm:text-base truncate">
              {t('慈濟大學物理治療學系', 'TCU Physical Therapy')}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {t(link.zh, link.en)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="p-2 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={t('切換語言', 'Switch language')}
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label={t('切換主題', 'Toggle theme')}
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t('選單', 'Menu')}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-neutral-200/50 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {t(link.zh, link.en)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
