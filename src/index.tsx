import React from 'react';
import ReactDOM from 'react-dom/client';
import { Index } from './app.modules/app.module';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);