import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PayPalContextProvider } from './contexts/PayPalContext.tsx';
import { RenderPageContextProvider } from './contexts/RenderPageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RenderPageContextProvider>
      <PayPalContextProvider>
        <App />
      </PayPalContextProvider>
    </RenderPageContextProvider>
  </StrictMode>,
)
