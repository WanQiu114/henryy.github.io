import { useState } from 'react'
import SectionStamp from '../components/SectionStamp'
import { experiences } from '../data/portfolio'

export default function Skills() {
  const [activeWork, setActiveWork] = useState(0)
  const [selectedTask, setSelectedTask] = useState(0)
  const [hoveredTask, setHoveredTask] = useState(null)
  const experience = experiences[activeWork]
  const activeTask = hoveredTask ?? selectedTask
  const task = experience.tasks[activeTask]
  const allSkills = [...new Set(experience.tasks.flatMap(item => item.skills))]
  const chooseWork = index => { setActiveWork(index); setSelectedTask(0); setHoveredTask(null) }
  const tiltCard = event => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--tilt-x', `${((event.clientY - rect.top) / rect.height - .5) * -7}deg`); event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - .5) * 8}deg`) }
  const clearTilt = event => { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg') }

  return <section className="section skills-section motion-section" id="skills"><SectionStamp code="01" label="WORK TAPE"/><div className="section-heading"><p className="eyebrow">01 / EXPERIENCE MAP</p><h2>Field <em>work</em><br/>archive.</h2><p>Choose a role, then hover a work detail to reveal the exact technologies behind it.</p></div><div className="work-tabs" role="tablist">{experiences.map((item, index) => <button role="tab" aria-selected={activeWork === index} className={activeWork === index ? 'is-active' : ''} onClick={() => chooseWork(index)} key={`${item.company}-${item.role}`}><span>0{index + 1}</span>{item.company}</button>)}</div><div className="work-map"><header className="work-map-header"><div><p>{experience.role}</p><h3>{experience.company}</h3></div><span>{experience.date}</span></header><div className="work-map-layout"><div className="task-list">{experience.tasks.map((item, index) => <button className={'task-card ' + (selectedTask === index ? 'is-active ' : '') + (activeTask === index && selectedTask !== index ? 'is-preview' : '')} onMouseEnter={() => setHoveredTask(index)} onMouseMove={tiltCard} onMouseLeave={event => { clearTilt(event); setHoveredTask(null) }} onFocus={() => setHoveredTask(index)} onBlur={() => setHoveredTask(null)} onClick={() => { setSelectedTask(index); setHoveredTask(null) }} key={item.text}><span>0{index + 1}</span><p>{item.text}</p><i>↗</i></button>)}</div><div className="task-connector" aria-hidden="true"><span/><b>→</b><span/></div><div className="crt-tv-shell"><i className="tv-antenna antenna-left"/><i className="tv-antenna antenna-right"/><div className="tv-chassis"><div className="tv-screen" key={`${activeWork}-${activeTask}`}><div className="tv-static"/><div className="technology-board"><p>TECHNOLOGIES USED IN THIS DETAIL</p><div className="technology-grid">{allSkills.map(skill => <span className={task.skills.includes(skill) ? 'is-used' : ''} key={skill}>{skill}</span>)}</div><div className="active-note"><span>PATH ACTIVE</span><p>{task.skills.join(' · ')}</p></div></div></div><aside className="tv-controls"><b>CH<br/>{String(activeTask + 1).padStart(2, '0')}</b><i/><i/><span>FREQ</span></aside></div><div className="tv-legs"><i/><i/></div></div></div><p className="work-map-tip">Hover a work detail to trace its technology path.</p></div></section>
}
