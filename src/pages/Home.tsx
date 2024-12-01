import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Wrench, Clock, Shield } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: t('home.features.expert.title'),
      description: t('home.features.expert.description'),
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: t('home.features.quick.title'),
      description: t('home.features.quick.description'),
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: t('home.features.warranty.title'),
      description: t('home.features.warranty.description'),
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">{t('home.hero.title')}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/submit-ticket"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {t('home.hero.cta')}
          </Link>
          <Link
            to="/track-ticket"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            {t('home.hero.track')}
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {t('home.process.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">{t('home.process.step1.title')}</h3>
            <p className="text-gray-600">{t('home.process.step1.description')}</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">{t('home.process.step2.title')}</h3>
            <p className="text-gray-600">{t('home.process.step2.description')}</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">{t('home.process.step3.title')}</h3>
            <p className="text-gray-600">{t('home.process.step3.description')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}