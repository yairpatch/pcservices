import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrench, LogIn, LogOut, Menu, X } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">TechFix Pro</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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

            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100">
                <span className="text-xl">{languages.find(l => l.value === language)?.flag}</span>
                <span className="whitespace-nowrap">{languages.find(l => l.value === language)?.label}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => {
                        setLanguage(lang.value);
                        i18n.changeLanguage(lang.value);
                      }}
                      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === lang.value ? 'bg-gray-50' : ''
                      }`}
                    >
                      <span className="text-xl mr-2">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
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

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/submit-ticket"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${
                location.pathname === '/submit-ticket' ? 'text-blue-600 bg-gray-50' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.submitTicket')}
            </Link>
            <Link
              to="/track-ticket"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${
                location.pathname === '/track-ticket' ? 'text-blue-600 bg-gray-50' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.trackTicket')}
            </Link>
            {isAuthenticated && (
              <Link
                to="/admin"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${
                  location.pathname === '/admin' ? 'text-blue-600 bg-gray-50' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.admin')}
              </Link>
            )}

            <div className="px-3 py-2">
              <div className="font-medium mb-2">Language</div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => {
                      setLanguage(lang.value);
                      i18n.changeLanguage(lang.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-50 ${
                      language === lang.value ? 'bg-gray-50' : ''
                    }`}
                  >
                    <span className="text-xl mr-2">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleLoginClick}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 flex items-center space-x-2"
            >
              {isAuthenticated ? (
                <>
                  <LogOut className="h-5 w-5" />
                  <span>{t('nav.logout')}</span>
                </>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  <span>{t('nav.login')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}