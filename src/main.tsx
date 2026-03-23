/**
 * src/main.tsx
 *
 * Application entry point. This is the first file that runs in the browser.
 *
 * It:
 * 1. Imports Montserrat font weights from @fontsource/montserrat
 *    (this bundles the font into the app — no Google Fonts network request needed)
 * 2. Imports the global CSS (Tailwind v4 + theme tokens)
 * 3. Mounts the React app into the <div id="root"> in index.html
 *
 * React 19 uses createRoot() for concurrent rendering features.
 * StrictMode renders each component twice in development to help catch bugs
 * (this does NOT happen in production builds).
 */

// Font — load the weights we use (400 = regular, 600 = semibold, 700 = bold)
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

// Global styles + Tailwind v4
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Mount the React app.
// The non-null assertion (!) is safe here because index.html guarantees
// a <div id="root"> exists.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
