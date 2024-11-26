import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
          <p className="text-gray-400 mb-8">{t('newsletter.subtitle')}</p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-red-500 px-6 py-3 rounded-r-lg hover:bg-red-600 transition-colors flex items-center">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;