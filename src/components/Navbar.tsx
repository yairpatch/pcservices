import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrench, LogIn, LogOut } from 'lucide-react';
import { useAppStore } from '../lib/store';
import { Language } from '../types';
import { useLanguageDirection } from '../hooks/useLanguageDirection';

const languages: { value: Language; label: string; flag: string }[] = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'ru', label: 'Русский', flag: '🇷🇺' },
  { value: 'he', label: 'עברית', flag: '🇮🇱' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, language, setLanguage, logout, user } = useAppStore();
  const direction = useLanguageDirection();
  const isRTL = direction === 'rtl';

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className={`flex items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className={`flex items-center ${isRTL ? 'space-x-2 space-x-reverse' : 'space-x-2'}`}>
            <Wrench className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">TechFix Pro</span>
          </Link>

          <div className={`flex items-center ${isRTL ? 'space-x-8 space-x-reverse mr-auto' : 'space-x-8 ml-auto'}`}>
            <Link
              to="/submit-ticket"
              className={`hover:text-blue-600 whitespace-nowrap ${
                location.pathname === '/submit-ticket' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.submitTicket')}
            </Link>
            <Link
              to="/track-ticket"
              className={`hover:text-blue-600 whitespace-nowrap ${
                location.pathname === '/track-ticket' ? 'text-blue-600' : ''
              }`}
            >
              {t('nav.trackTicket')}
            </Link>
            {isAuthenticated && (
              <Link
                to="/admin"
                className={`hover:text-blue-600 whitespace-nowrap ${
                  location.pathname === '/admin' ? 'text-blue-600' : ''
                }`}
              >
                {t('nav.admin')}
              </Link>
            )}

            <div className={`flex items-center ${isRTL ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <div className="relative group">
                <button
                  className={`flex items-center px-3 py-2 rounded-md hover:bg-gray-100 ${
                    isRTL ? 'space-x-2 space-x-reverse' : 'space-x-2'
                  }`}
                >
                  <span className="text-xl">{languages.find(l => l.value === language)?.flag}</span>
                  <span className="whitespace-nowrap">{languages.find(l => l.value === language)?.label}</span>
                </button>
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        onClick={() => {
                          setLanguage(lang.value);
                          i18n.changeLanguage(lang.value);
                        }}
                        className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                          isRTL ? 'space-x-2 space-x-reverse text-right' : 'space-x-2 text-left'
                        } ${language === lang.value ? 'bg-gray-50' : ''}`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="whitespace-nowrap">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleLoginClick}
                className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-100 ${
                  isRTL ? 'space-x-2 space-x-reverse' : 'space-x-2'
                }`}
              >
                {isAuthenticated ? (
                  <>
                    <LogOut className="h-5 w-5" />
                    <span className="whitespace-nowrap">{t('nav.logout')}</span>
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    <span className="whitespace-nowrap">{t('nav.login')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}