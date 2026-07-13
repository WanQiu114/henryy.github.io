import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const roles = ['Graduate Student', 'Research Assistant', 'Software Developer', 'Web Developer', 'Web Designer']

const experiences = [
  {
    company: 'Fortrip AI', role: 'Software Developer Intern', date: 'Jun — Sept 2025',
    summary: 'Built an AI-powered chatbot from 0 → 1, destination-data pipelines, and deployment workflows.',
    skills: ['React.js', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'GPT-4o', 'Google Cloud'],
    tasks: [
      { text: 'Built an AI-powered chatbot from scratch (0 → 1) with the Vercel technology stack.', skills: ['JavaScript / TypeScript', 'React.js', 'Next.js', 'Node.js', 'GPT-4o'] },
      { text: 'Connected external APIs and extracted destination information for product experiences.', skills: ['JavaScript / TypeScript', 'Node.js', 'Next.js', 'Google Cloud'] },
      { text: 'Developed Python scripts to process JSON data and persist it in PostgreSQL.', skills: ['Python', 'PostgreSQL', 'Google Cloud'] },
      { text: 'Built and managed a CI/CD pipeline for streamlined deployment workflows.', skills: ['Next.js', 'Netlify', 'Google Cloud', 'Node.js'] },
    ],
  },
  {
    company: 'Easy Trip, Inc.', role: 'Software Developer Intern', date: 'Feb — June 2025',
    summary: 'Shipped A/B-tested travel-platform features across booking, orders, and product interfaces.',
    skills: ['React 18', 'TypeScript', 'Express', 'MongoDB', 'Node.js', 'Tailwind', 'Netlify'],
    tasks: [
      { text: 'Designed and implemented platform features; debugged and resolved technical issues.', skills: ['JavaScript / TypeScript', 'React 18', 'Express', 'Node.js'] },
      { text: 'Worked with UX and Marketing on A/B-tested UI components, increasing engagement by 15%.', skills: ['React 18', 'TypeScript', 'Tailwind'] },
      { text: 'Developed a travel platform covering packages, flights, hotels, and order management.', skills: ['React 18', 'Express', 'MongoDB', 'Node.js'] },
    ],
  },
  {
    company: 'York University', role: 'Research Assistant', date: 'Jan — Aug 2024',
    summary: 'Supported a research team on AI and software engineering projects through experimentation, data analysis, and technical documentation, while also contributing 3D modeling and animation work in Unity.',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'Unity', '3D Modeling', 'Animation', 'Git', 'LaTeX', 'Research Methods'],
    tasks: [
      { text: 'Collected, cleaned, and analyzed experimental datasets to support ongoing research questions.', skills: ['Python', 'Pandas', 'Research Methods'] },
      { text: 'Used Unity to create 3D models and animations for research-related visualizations and demonstrations.', skills: ['Unity', '3D Modeling', 'Animation'] },
      { text: 'Independently completed all related testing and animation work for the project, ensuring smooth implementation and presentation.', skills: ['Unity', 'Animation', 'Testing'] },
    ],
  },
  {
    company: 'York University', role: 'Undergraduate Researcher', date: 'Sept — Dec 2023',
    summary: 'Developed a gloss-free Japanese sign-language translation pipeline with computer vision and NLP.',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'BlazePose', 'OpenCV', 'BERT', 'MySQL'],
    tasks: [
      { text: 'Developed a gloss-free Japanese Sign Language translation model with a research team.', skills: ['Python', 'PyTorch', 'TensorFlow', 'BERT'] },
      { text: 'Processed pose data and achieved 90%+ key-gesture capture accuracy.', skills: ['Python', 'OpenCV', 'BlazePose'] },
      { text: 'Improved LSTM accuracy by 14% and reduced rendering time by 73%.', skills: ['Python', 'PyTorch', 'TensorFlow', 'BlazePose'] },
    ],
  },
]

const publications = [
  {
    venue: 'ICSE 2027', status: 'Under review',
    title: 'NFICodeBench: Benchmarking Coding Agents for Non-Functional Improvements Beyond Functional Correctness',
    authors: 'Pengyu Xue, HeYang Yuan*, Xin Wang, Junkai Chen, Haonan Zhang, Boyuan Chen, Zishuo Ding, Zhenhao Li, Weiyi Shang',
  },
  {
    venue: 'TSE 2026', status: 'Under review',
    title: 'Reinforcement Learning in the Software Development Lifecycle: Methods, Applications, and Reward Design',
    authors: 'HeYang Yuan*, Xin Wang, Pengyu Xue, Zhenhao Li, Zishuo Ding, Boyuan Chen, Dayi Lin, Weiyi Shang',
  },
  {
    venue: 'FSE 2026', status: 'Conference paper',
    title: 'Towards Secure Logging: Characterizing and Benchmarking Logging Code Security Issues with LLMs',
    authors: 'HeYang Yuan*, Xin Wang, Kundi Yao, An Ran Chen, Zishuo Ding, Zhenhao Li',
    url: 'https://dl.acm.org/doi/10.1145/3797129',
  },
]

function AtomIcon({ type }) {
  const marks = { code: '</>', spark: '✦', brain: '◌', cube: '◆', pen: '✎' }
  return <span aria-hidden="true">{marks[type]}</span>
}

function Hero() {
  const [isChinese, setIsChinese] = useState(false)
  const [role, setRole] = useState(0)

  useEffect(() => {
    const nameTimer = setInterval(() => setIsChinese(value => !value), 4200)
    const roleTimer = setInterval(() => setRole(value => (value + 1) % roles.length), 2200)
    return () => { clearInterval(nameTimer); clearInterval(roleTimer) }
  }, [])

  return <section className="hero" id="home">
    <nav className="nav">
      <a className="brand" href="#home">HY<span>.</span></a>
      <div className="nav-links"><a href="#skills">Skills</a><a href="#publications">Publications</a><a href="#about">About</a></div>
      <a className="nav-contact" href="mailto:yuanheyang1232@gmail.com">Let’s talk <span>↗</span></a>
    </nav>
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Toronto, Canada · Available for research & collaboration</p>
        <h1>Building thoughtful<br/><em>software systems.</em></h1>
        <p className="intro">I explore reliable, secure and human-centred AI for software engineering — and turn ideas into polished digital experiences.</p>
        <div className="hero-actions"><a className="button button-dark" href="#publications">Explore my research <span>↓</span></a><a className="text-link" href={`${import.meta.env.BASE_URL}assets/pdf/HeYang_Yuan_CV.pdf`} target="_blank" rel="noreferrer">View CV <span>↗</span></a></div>
      </div>
      <div className="orbit-scene" aria-label="Introduction card with rotating technology orbit">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="orbit-icons">
          <i className="orbiter o-one"><AtomIcon type="code"/></i><i className="orbiter o-two"><AtomIcon type="brain"/></i><i className="orbiter o-three"><AtomIcon type="spark"/></i><i className="orbiter o-four"><AtomIcon type="cube"/></i><i className="orbiter o-five"><AtomIcon type="pen"/></i>
        </div>
        <article className="identity-card">
          <p className="card-kicker">HELLO, I’M</p>
          <div className={'name-switch ' + (isChinese ? 'chinese' : '')}>
            <span key={isChinese ? 'zh' : 'en'}>{isChinese ? '苑赫洋' : 'HeYang Yuan'}</span>
          </div>
          <div className="card-rule"/>
          <p className="card-label">CURRENTLY</p>
          <p className="role" key={role}>{roles[role]}</p>
          <div className="card-meta"><span>AI4SE</span><span>•</span><span>WEB</span><span>•</span><span>RESEARCH</span></div>
        </article>
      </div>
    </div>
    <a className="scroll-cue" href="#skills"><span>Scroll to explore</span><b>↓</b></a>
  </section>
}

function Skills() {
  const [activeWork, setActiveWork] = useState(0)
  const [activeTask, setActiveTask] = useState(0)
  const experience = experiences[activeWork]
  const task = experience.tasks[activeTask]
  const allSkills = [...new Set(experience.tasks.flatMap(item => item.skills))]
  const chooseWork = (index) => { setActiveWork(index); setActiveTask(0) }
  return <section className="section skills-section" id="skills">
    <div className="section-heading"><p className="eyebrow">01 / EXPERIENCE MAP</p><h2>Skills shaped by<br/><em>real work.</em></h2><p>Choose a role, then hover a work detail to reveal the exact technologies behind it.</p></div>
    <div className="work-tabs" role="tablist">{experiences.map((item, index) => <button role="tab" aria-selected={activeWork === index} className={activeWork === index ? 'is-active' : ''} onClick={() => chooseWork(index)} key={item.company}><span>0{index + 1}</span>{item.company}</button>)}</div>
    <div className="work-map">
      <header className="work-map-header"><div><p>{experience.role}</p><h3>{experience.company}</h3></div><span>{experience.date}</span></header>
      <div className="work-map-layout"><div className="task-list">{experience.tasks.map((item, index) => <button className={'task-card ' + (activeTask === index ? 'is-active' : '')} onMouseEnter={() => setActiveTask(index)} onFocus={() => setActiveTask(index)} onClick={() => setActiveTask(index)} key={item.text}><span>0{index + 1}</span><p>{item.text}</p><i>↗</i></button>)}</div><div className="task-connector" aria-hidden="true"><span/><b>→</b><span/></div><div className="technology-board"><p>TECHNOLOGIES USED IN THIS DETAIL</p><div className="technology-grid">{allSkills.map(skill => <span className={task.skills.includes(skill) ? 'is-used' : ''} key={skill}>{skill}</span>)}</div><div className="active-note"><span>PATH ACTIVE</span><p>{task.skills.join(' · ')}</p></div></div></div>
      <p className="work-map-tip">Hover a work detail to trace its technology path.</p>
    </div>
  </section>
}

function Publications() {
  return <section className="section publication-section" id="publications">
    <div className="publication-top"><div><p className="eyebrow">02 / SELECTED RESEARCH</p><h2>Ideas made<br/><em>concrete.</em></h2></div><p>My work centres on AI for software engineering: making agents more reliable, code more secure, and evaluation more meaningful.</p></div>
    <div className="publication-list">{publications.map((item, index) => <article className="publication" key={item.title}><div className="pub-index">0{index + 1}</div><div className="pub-main"><div className="pub-tags"><span>{item.venue}</span><span>{item.status}</span></div><h3>{item.title}</h3><p>{item.authors}</p></div>{item.url ? <a className="pub-arrow" href={item.url} target="_blank" rel="noreferrer" aria-label={`Read ${item.title} on ACM Digital Library`}>↗</a> : <div className="pub-arrow">↗</div>}</article>)}</div>
  </section>
}

function About() {
 return <section className="about-section" id="about"><div className="about-card"><p className="eyebrow">03 / AT A GLANCE</p><h2>Researcher by<br/>curiosity. Builder<br/>by nature.</h2><div className="about-details"><p>Master of Information Systems & Technology at York University, supervised by Zhenhao Li.</p><p>My interests include intelligent code analysis, automatic program repair, reward engineering and security-aware software systems.</p><a className="button button-light" href="mailto:yuanheyang1232@gmail.com">Start a conversation <span>↗</span></a></div></div><footer><span>© 2026 HeYang Yuan</span><div><a href="https://www.linkedin.com/in/he-yang-yuan-466407311/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:yuanheyang1232@gmail.com">Email ↗</a></div></footer></section>
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return <><Hero/><Skills/><Publications/><About/></>
}

createRoot(document.getElementById('root')).render(<App />)
