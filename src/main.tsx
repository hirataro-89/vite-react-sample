import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Button } from './components/Button.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Button text="ボタンだよ" />
    <SectionTitle title="セクションタイトルだよ" />
  </StrictMode>,
)
