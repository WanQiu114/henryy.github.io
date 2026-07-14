import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import FootprintTrail from './footprintTrail'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Publications from './sections/Publications'
import useSectionMotion from './hooks/useSectionMotion'

function App() {
  useSectionMotion()

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return <><FootprintTrail /><Hero /><Skills /><Publications /></>
}

createRoot(document.getElementById('root')).render(<App />)
