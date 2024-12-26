import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/Button.tsx'
import { SectionTitle } from './components/SectionTitle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button text="ボタンだよ" />
    <SectionTitle title="セクションタイトルだよ" />
  </StrictMode>,
)
