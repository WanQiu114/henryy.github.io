import SectionStamp from '../components/SectionStamp'
import { publications } from '../data/portfolio'

export default function Publications() {
  return <section className="section publication-section motion-section" id="publications">
    <SectionStamp code="02" label="SIGNAL LOG"/>
    <div className="publication-top"><div><p className="eyebrow">02 / SELECTED RESEARCH</p><h2>Signal<br/><em>log.</em></h2></div><p>My work centres on AI for software engineering: making agents more reliable, code more secure, and evaluation more meaningful.</p></div>
    <div className="publication-list">{publications.map((item, index) => <article className="publication" key={item.title}><div className="pub-index">0{index + 1}</div><div className="pub-main"><div className="pub-tags"><span>{item.venue}</span><span>{item.status}</span></div><h3>{item.title}</h3><p>{item.authors}</p></div>{item.url ? <a className="pub-arrow" href={item.url} target="_blank" rel="noreferrer" aria-label={`Read ${item.title} on ACM Digital Library`}>↗</a> : <div className="pub-arrow">↗</div>}</article>)}</div>
  </section>
}
