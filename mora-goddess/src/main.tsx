import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PayPalContextProvider } from './contexts/PayPalContext.tsx';
import { RenderPageContextProvider } from './contexts/RenderPageContext.tsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RenderPageContextProvider>
      <PayPalContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </PayPalContextProvider>
    </RenderPageContextProvider>
  </StrictMode>,
)
