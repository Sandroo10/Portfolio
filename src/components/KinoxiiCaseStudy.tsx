import CaseStudyParagraph from './CaseStudyParagraph';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import './genofit-case-study.css';
import CaseStudyStack from './CaseStudyStack';

import { cinemaSections as sections } from '../data/case-study-sections';

export default function KinoxiiCaseStudy() {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = 'Kinoxii — Cinema booking | Sandro Saralidze';
    const update = () => {
      let current = sections[0].id;
      for (const section of sections) if ((document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) < 180) current = section.id;
      setActive(current);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => { document.title = previous; window.removeEventListener('scroll', update); };
  }, []);
  return <main className="gen-case">
    <nav className="gen-top"><a href="#projects"><ArrowLeft size={17}/> All projects</a><span>Sandro Saralidze / Selected work</span></nav>
    <header className="gen-hero"><p className="gen-kicker">Redberry Bootcamp XII · Frontend & API integration</p><h1>Kinoxii<span>Discover a film.<br/>Make it a cinema night.</span></h1><p className="gen-intro">A React and TypeScript cinema-booking application, from movie discovery and session filters to seat reservations, simulated checkout, and ticket management.</p><div className="gen-tags">{['React', 'TypeScript', 'Vite', 'React Router', 'TanStack Query', 'React Hook Form', 'Zod', 'SCSS Modules', 'Embla', 'REST API', 'Vercel'].map(x => <span key={x}>{x}</span>)}</div><a className="gen-live" href="https://movie-website-sigma-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Kinoxii <ArrowUpRight size={18}/></a><a className="gen-private" href="https://github.com/Sandroo10/Movie-Website" target="_blank" rel="noopener noreferrer"><Github size={14} className="inline"/> Source code</a></header>
    <figure className="gen-image"><img src="/images/movie-website.png" alt="Kinoxii movie discovery homepage with featured-film hero and recently viewed movies"/><figcaption>Kinoxii · Movie discovery and cinema booking</figcaption></figure>
    <div className="gen-layout"><aside><p className="gen-kicker">Inside the project</p>{sections.map((s,i) => <a key={s.id} href="#/projects/kinoxii" aria-current={active === s.id ? 'location' : undefined} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}><span>0{i+1}</span>{s.label}</a>)}</aside><div>{sections.map((s,i) => <section id={s.id} key={s.id}><p className="gen-kicker">0{i+1} / {s.label}</p><h2>{s.title}</h2>{s.id === 'kino-tools' && <CaseStudyStack project='cinema' />}{s.paragraphs.map(p => <CaseStudyParagraph key={p} text={p} />)}</section>)}<footer className="gen-bottom"><h2>Try the booking experience.</h2><a className="gen-live" href="https://movie-website-sigma-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Open Kinoxii <ArrowUpRight size={18}/></a><a href="#projects">Back to projects</a></footer></div></div>
  </main>;
}
