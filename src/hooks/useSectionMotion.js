import { useEffect } from 'react'

export default function useSectionMotion() {
  useEffect(() => {
    const sections = [...document.querySelectorAll('.motion-section')]
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          entry.target.classList.remove('is-exiting')
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('is-exiting')
        }
      })
    }, { threshold: 0.18 })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
}
