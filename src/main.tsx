import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { JarProvider } from './context/JarContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JarProvider>
      <App />
    </JarProvider>
  </StrictMode>
);
