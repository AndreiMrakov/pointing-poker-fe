import React, { memo } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { store } from '@/store/store';
import { ErrorBoundary } from './ErrorBoundary';

export const Providers = memo(({ children }:{children: React.ReactNode}) => (
  <ErrorBoundary>
    <Router>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  </ErrorBoundary>
));
