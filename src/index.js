import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { CalculatorProvider } from './context/CalculatorContext';
import './styles/design-tokens.css';
import './styles/global.css';
import './styles/components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CalculatorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CalculatorProvider>
    </HelmetProvider>
  </React.StrictMode>
);
