export const roles = ['Graduate Student', 'Research Assistant', 'Software Developer', 'Web Developer', 'Web Designer']

export const experiences = [
  { company: 'Fortrip AI', role: 'Software Developer Intern', date: 'Jun — Sept 2025', tasks: [
    { text: 'Built an AI-powered chatbot from scratch (0 → 1) with the Vercel technology stack.', skills: ['JavaScript / TypeScript', 'React.js', 'Next.js', 'Node.js', 'GPT-4o'] },
    { text: 'Connected external APIs and extracted destination information for product experiences.', skills: ['JavaScript / TypeScript', 'Node.js', 'Next.js', 'Google Cloud'] },
    { text: 'Developed Python scripts to process JSON data and persist it in PostgreSQL.', skills: ['Python', 'PostgreSQL', 'Google Cloud'] },
    { text: 'Built and managed a CI/CD pipeline for streamlined deployment workflows.', skills: ['Next.js', 'Netlify', 'Google Cloud', 'Node.js'] },
  ] },
  { company: 'Easy Trip, Inc.', role: 'Software Developer Intern', date: 'Feb — June 2025', tasks: [
    { text: 'Designed and implemented platform features; debugged and resolved technical issues.', skills: ['JavaScript / TypeScript', 'React 18', 'Express', 'Node.js'] },
    { text: 'Worked with UX and Marketing on A/B-tested UI components, increasing engagement by 15%.', skills: ['React 18', 'TypeScript', 'Tailwind'] },
    { text: 'Developed a travel platform covering packages, flights, hotels, and order management.', skills: ['React 18', 'Express', 'MongoDB', 'Node.js'] },
  ] },
  { company: 'York University', role: 'Research Assistant', date: 'Jan — Aug 2024', tasks: [
    { text: 'Collected, cleaned, and analyzed experimental datasets to support ongoing research questions.', skills: ['Python', 'Pandas', 'Research Methods'] },
    { text: 'Used Unity to create 3D models and animations for research-related visualizations and demonstrations.', skills: ['Unity', '3D Modeling', 'Animation'] },
    { text: 'Independently completed all related testing and animation work for the project, ensuring smooth implementation and presentation.', skills: ['Unity', 'Animation', 'Testing'] },
  ] },
  { company: 'York University', role: 'Undergraduate Researcher', date: 'Sept — Dec 2023', tasks: [
    { text: 'Developed a gloss-free Japanese Sign Language translation model with a research team.', skills: ['Python', 'PyTorch', 'TensorFlow', 'BERT'] },
    { text: 'Processed pose data and achieved 90%+ key-gesture capture accuracy.', skills: ['Python', 'OpenCV', 'BlazePose'] },
    { text: 'Improved LSTM accuracy by 14% and reduced rendering time by 73%.', skills: ['Python', 'PyTorch', 'TensorFlow', 'BlazePose'] },
  ] },
]

export const publications = [
  { venue: 'ICSE 2027', status: 'Under review', title: 'NFICodeBench: Benchmarking Coding Agents for Non-Functional Improvements Beyond Functional Correctness', authors: 'Pengyu Xue, HeYang Yuan*, Xin Wang, Junkai Chen, Haonan Zhang, Boyuan Chen, Zishuo Ding, Zhenhao Li, Weiyi Shang' },
  { venue: 'TSE 2026', status: 'Under review', title: 'Reinforcement Learning in the Software Development Lifecycle: Methods, Applications, and Reward Design', authors: 'HeYang Yuan*, Xin Wang, Pengyu Xue, Zhenhao Li, Zishuo Ding, Boyuan Chen, Dayi Lin, Weiyi Shang' },
  { venue: 'FSE 2026', status: 'Conference paper', title: 'Towards Secure Logging: Characterizing and Benchmarking Logging Code Security Issues with LLMs', authors: 'HeYang Yuan*, Xin Wang, Kundi Yao, An Ran Chen, Zishuo Ding, Zhenhao Li', url: 'https://dl.acm.org/doi/10.1145/3797129' },
]
