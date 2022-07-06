import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './app.modules/app.module/root';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);