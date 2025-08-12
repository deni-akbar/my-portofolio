'use client';

import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function ButtonSection() {
         const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };
    return (
      <div className="w-full top-0 left-0 z-50 flex justify-center py-2 shadow-sm">
        <div className="switch">
          <input
            id="language-toggle"
            className="check-toggle check-toggle-round-flat"
            type="checkbox"
            onChange={handleLanguageChange}
          />
          <label htmlFor="language-toggle"></label>
          <span className="on">{language === 'ID' ? 'ID' : 'EN'}</span>
          <span className="off">{language === 'ID' ? 'EN' : 'ID'}</span>
        </div>
      </div>
    );
}