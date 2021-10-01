import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from '@/store/store';
import { ErrorBoundary } from './ErrorBoundary';
import history from '@/utils/history';

export const Providers = memo(({ children }:{children: React.ReactNode}) => (
  <ErrorBoundary>
    <Router history={history}>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  </ErrorBoundary>
));
