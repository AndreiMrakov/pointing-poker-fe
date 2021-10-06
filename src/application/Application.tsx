import React from 'react';
import { Providers } from './Providers';
import { Routes } from './Routes';

export const Application = (): JSX.Element => (
  <Providers>
    <Routes />
  </Providers>
);
