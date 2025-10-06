import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero.tsx'
import './styles.css'

import NavBar from './NavBar.tsx'
import Contact from './contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Contact />
  </StrictMode>
)
