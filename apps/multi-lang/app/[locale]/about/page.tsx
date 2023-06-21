import React from 'react';
import { useTranslations } from 'next-intl';
const HomePage = () => {
  const t = useTranslations('About');
  return (
    <div
      style={{
        minHeight: 'calc(90vh)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {t('title')}
    </div>
  );
};

export default HomePage;
