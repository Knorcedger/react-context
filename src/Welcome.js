import React from 'react';
import LanguageContext from './LanguageContext';

const translations = {
  en: 'Hi',
  gr: 'Geia'
};

const Welcome = () => {
  return (
    <LanguageContext.Consumer>
      {context => {
        return (
          <div>{translations[context.language]}</div>
        );
      }}
    </LanguageContext.Consumer>
  )
}

export default Welcome;
