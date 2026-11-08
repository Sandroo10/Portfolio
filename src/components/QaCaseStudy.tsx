import { useEffect, useState } from 'react';
import { qaStudies } from '../data/qa-case-studies';
import CaseStudyParagraph from './CaseStudyParagraph';
import './genofit-case-study.css';
export default function QaCaseStudy({ slug }: { slug: string }) {
  const study = qaStudies[slug];
  const [active, setActive] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = `${study.title} | Sandro Saralidze`;
    const update = () => { let current = 0; study.sections.forEach((_,i) => { if ((document.getElementById(`${slug}-${i}`)?.getBoundingClientRect().top ?? Infinity) < 180) current = i; }); setActive(current); };
    window.addEventListener('scroll', update, { passive: true });
    return () => { document.title = previous; window.removeEventListener('scroll', update); };
  }, [slug, study]);
  return <main className="gen-case"><nav className="gen-top"><a href="#projects">← All projects</a><span>Sandro Saralidze / Selected work</span></nav><header className="gen-hero"><p className="gen-kicker">{study.kind ?? 'Test automation · Implementation case study'}</p><h1>{study.title}</h1><p className="gen-intro">{study.summary}</p><a className="gen-live" href={`https://github.com/${study.repo.includes('/') ? study.repo : `Sandroo10/${study.repo}`}`} target="_blank" rel="noopener noreferrer">View test source ↗</a></header><figure className="gen-image"><img src={study.image} style={study.kind || slug === 'qa-banking' ? undefined : { height:230, objectFit:'contain', padding:45 }} alt={study.title}/><figcaption>{study.kind ? 'Project preview · Source-based case study' : 'Implemented test coverage and configuration · Source review'}</figcaption></figure><div className="gen-layout"><aside><p className="gen-kicker">Inside the project</p>{study.sections.map((s,i) => <a key={s.label} href={`#/projects/${slug}`} aria-current={active === i ? 'location' : undefined} onClick={e => { e.preventDefault(); document.getElementById(`${slug}-${i}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}><span>0{i+1}</span>{s.label}</a>)}</aside><div>{study.sections.map((s,i) => <section id={`${slug}-${i}`} key={s.label}><p className="gen-kicker">0{i+1} / {s.label}</p><h2>{s.title}</h2>{s.paragraphs.map(p => <CaseStudyParagraph key={p} text={p}/>)}</section>)}<footer className="gen-bottom"><h2>Inspect the implementation.</h2><a className="gen-live" href={`https://github.com/${study.repo.includes('/') ? study.repo : `Sandroo10/${study.repo}`}`} target="_blank" rel="noopener noreferrer">Open repository ↗</a><a href="#projects">Back to projects</a></footer></div></div></main>;
}
