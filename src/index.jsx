import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next';
import { ThemeProvider } from './ThemeContext';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./services/i18n";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
      <ThemeProvider>
  <Suspense fallback={<div>Loading~~</div>}>
        <App />
  </Suspense>,
      </ThemeProvider>
    </I18nextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();