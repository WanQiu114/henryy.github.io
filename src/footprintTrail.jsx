import { useEffect, useMemo, useState } from 'react'

function FootprintTrail() {
  const [steps, setSteps] = useState([])
  const footprintUrl = useMemo(() => '/henryy.github.io/assets/icon/footprint.png', [])

  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let lastTime = 0

    const addStep = (x, y, angle) => {
      const id = `${Date.now()}-${Math.random()}`
      const createdAt = performance.now()
      setSteps(current => [...current, { id, x, y, angle, createdAt }].slice(-40))
    }

    const handlePointerMove = (event) => {
      const now = performance.now()
      if (now - lastTime < 120) return

      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      const distance = Math.hypot(dx, dy)

      if (distance < 3) return

      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      const x = event.clientX
      const y = event.clientY

      addStep(x, y, angle)
      lastX = event.clientX
      lastY = event.clientY
      lastTime = now
    }

    const tick = () => {
      setSteps(current => current.filter(step => performance.now() - step.createdAt < 2000))
      requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', handlePointerMove)
    const frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="footprint-trail" aria-hidden="true">
      {steps.map(step => {
        const age = performance.now() - step.createdAt
        const opacity = Math.max(0, 1 - age / 2000)
        return (
          <img
            key={step.id}
            className="footprint-step"
            src={footprintUrl}
            alt=""
            style={{
              left: step.x,
              top: step.y,
              transform: `translate(-50%, -50%) rotate(${step.angle + 90}deg)`,
              opacity: Math.max(0, Math.min(0.38, opacity * 0.38)),
            }}
          />
        )
      })}
    </div>
  )
}

export default FootprintTrail
