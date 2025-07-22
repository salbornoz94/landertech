"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </Button>
  );
}; 