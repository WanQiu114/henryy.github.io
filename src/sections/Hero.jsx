import { useEffect, useState } from 'react'
import { roles } from '../data/portfolio'

function AtomIcon({ type }) {
  const marks = { code: '</>', spark: '✦', brain: '◌', cube: '◆', pen: '✎' }
  return <span aria-hidden="true">{marks[type]}</span>
}

export default function Hero() {
  const [isChinese, setIsChinese] = useState(false)
  const [role, setRole] = useState(0)
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 })
  const cvUrl = '/henryy.github.io/assets/pdf/HeYang_Yuan_CV.pdf'

  useEffect(() => {
    const nameTimer = setInterval(() => setIsChinese(value => !value), 4200)
    const roleTimer = setInterval(() => setRole(value => (value + 1) % roles.length), 2200)
    return () => { clearInterval(nameTimer); clearInterval(roleTimer) }
  }, [])

  const downloadCv = async event => {
    event.preventDefault()
    try {
      const response = await fetch(cvUrl)
      if (!response.ok) throw new Error('CV file not found')
      const objectUrl = URL.createObjectURL(await response.blob())
      const link = Object.assign(document.createElement('a'), { href: objectUrl, download: 'HeYang_Yuan_CV.pdf' })
      document.body.appendChild(link); link.click(); link.remove()
      setTimeout(() => URL.revokeObjectURL(objectUrl), 0)
    } catch { window.open(cvUrl, '_blank', 'noopener,noreferrer') }
  }

  const tiltCard = event => {
    const rect = event.currentTarget.getBoundingClientRect()
    setCardTilt({ x: (0.5 - (event.clientY - rect.top) / rect.height) * 10, y: ((event.clientX - rect.left) / rect.width - 0.5) * 12 })
  }

  return <section className="hero motion-section" id="home">
    <nav className="nav">
      <a className="brand" href="#home"><span className="brand-mark">HY</span><span className="brand-copy">HEYANG<br/>YUAN</span></a>
      <div className="nav-links"><a href="#skills">Skills</a><a href="#publications">Publications</a></div>
      <a className="nav-contact" href="mailto:yuanheyang1232@gmail.com"><i>●</i> COMMS OPEN <span>↗</span></a>
    </nav>
    <div className="hero-grid">
      <div className="hero-copy"><p className="eyebrow">Toronto, Canada · Available for research & collaboration</p><h1 className="glitch-title" data-text="Building thoughtful software systems.">Building thoughtful<br/><em>software systems.</em></h1><p className="intro">I explore reliable, secure and human-centred AI for software engineering — and turn ideas into polished digital experiences.</p><div className="hero-profile-text"><div><p>ABOUT ME</p><span>I am a graduate student and software developer interested in translating research ideas into reliable, people-centred systems.</span></div><div><p>RESEARCH INTERESTS</p><span>AI for Software Engineering · Intelligent Code Analysis · Program Repair · Reward Engineering · Security-aware Systems</span></div></div><div className="hero-actions"><a className="button button-dark" href="#publications">Explore research <span>↓</span></a><a className="text-link" href={cvUrl} onClick={downloadCv} rel="noreferrer">View CV <span>↗</span></a><a className="text-link" href="mailto:yuanheyang1232@gmail.com">Email <span>↗</span></a><a className="text-link" href="https://www.linkedin.com/in/he-yang-yuan-466407311/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div>
      <div className="orbit-scene hero-walkman" aria-label="Personal profile"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-icons"><i className="orbiter o-one"><AtomIcon type="code"/></i><i className="orbiter o-two"><AtomIcon type="brain"/></i><i className="orbiter o-three"><AtomIcon type="spark"/></i><img className="avatar-orbit avatar-orbit-left" src="/henryy.github.io/assets/img/my_pic.png" alt="My portrait"/><img className="avatar-orbit avatar-orbit-right" src="/henryy.github.io/assets/img/my_logo.png" alt="My logo"/><i className="orbiter o-four"><AtomIcon type="cube"/></i><i className="orbiter o-five"><AtomIcon type="pen"/></i></div><article className="identity-card" onMouseMove={tiltCard} onMouseLeave={() => setCardTilt({ x: 0, y: 0 })} style={{ transform: `translate(-50%, -50%) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)` }}><p className="card-kicker">HELLO, I’M</p><div className={'name-switch ' + (isChinese ? 'chinese' : '')}><span key={isChinese ? 'zh' : 'en'}>{isChinese ? '苑赫洋' : 'HeYang Yuan'}</span></div><div className="card-rule"/><p className="card-label">CURRENTLY</p><p className="role" key={role}>{roles[role]}</p><div className="card-meta"><span className="card-tag">AI4SE</span><span>•</span><span className="card-tag">WEB</span><span>•</span><span className="card-tag">RESEARCH</span></div><div className="education-card"><p>EDUCATION</p><div><b>Master of Information Systems & Technology</b><span>York University</span></div><div><b>Honour Bachelor of Computer Science</b><span>Lassonde School of Engineering Department · York University</span></div></div></article></div>
    </div>
    <a className="scroll-cue" href="#skills"><span>Scroll to explore</span><b>↓</b></a>
  </section>
}
