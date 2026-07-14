export default function SectionStamp({ code, label }) {
  return <div className="section-stamp" aria-hidden="true"><span>{code}</span><b>{label}</b><i>///</i></div>
}
