import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation('translations');

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <div>{t('title')}</div>
    </Suspense>
  );
};

export default App;
