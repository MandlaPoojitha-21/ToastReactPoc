import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('peersonlineroot')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
