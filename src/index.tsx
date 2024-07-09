import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './Components/GlobalStyles';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { LoadingProvider } from './Components/Loading';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './i18n/pt.json';
import en from './i18n/en.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt
      },
      en: {
        translation: en
      }
    },
    lng: 'pt',
    fallbackLng: 'pt',

    interpolation: {
      escapeValue: false
    }
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router} />
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
