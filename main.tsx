import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// global styles
import './index.css'          // tailwind output or base utilities
import './styles/globals.css' // custom variables and base overrides

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
