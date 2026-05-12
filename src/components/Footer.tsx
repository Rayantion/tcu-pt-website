import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const quickLinks = [
  { zh: '首頁', en: 'Home', path: '/' },
  { zh: '系所簡介', en: 'About', path: '/about' },
  { zh: '師資陣容', en: 'Faculty', path: '/faculty' },
  { zh: '課程資訊', en: 'Programs', path: '/programs' },
  { zh: '實驗室', en: 'Labs', path: '/labs' },
  { zh: '最新消息', en: 'News', path: '/news' },
  { zh: '聯絡我們', en: 'Contact', path: '/contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="font-bold text-primary dark:text-primary-light">
                {t('慈濟大學物理治療學系', 'TCU Physical Therapy')}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {t('慈悲喜捨 · 專業照護', 'Compassion · Professional Care')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('快速連結', 'Quick Links')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {t(link.zh, link.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {t('聯絡資訊', 'Contact')}
            </h3>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>97004 {t('花蓮市中央路三段701號', 'No. 701, Sec. 3, Zhongyang Rd., Hualien')}</p>
              <p>T: +886-3-856-5301</p>
              <p>E: pt@tcu.edu.tw</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center text-sm text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} {t('慈濟大學物理治療學系', 'Tzu Chi University Dept. of Physical Therapy')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
