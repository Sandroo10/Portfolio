import CaseStudyParagraph from './CaseStudyParagraph';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './genofit-case-study.css';
import CaseStudyStack from './CaseStudyStack';

import { evSections as sections } from '../data/case-study-sections';

export default function EvChargerCaseStudy() {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = 'EV Car Charger — E-commerce | Sandro Saralidze';
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
    <header className="gen-hero"><p className="gen-kicker">Freelance · E-commerce · Website + admin</p><h1>EV Car Charger<span>Product discovery.<br/>Connected to checkout.</span></h1><p className="gen-intro">A multilingual e-commerce application for EV charging products, with customer accounts, an admin panel, and Bank of Georgia online payments.</p><div className="gen-tags">{['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'React Query', 'React Hook Form', 'Zod', 'i18next', 'BOG Payments', 'Git'].map(x => <span key={x}>{x}</span>)}</div><a className="gen-live" href="https://evcarcharger.ge" target="_blank" rel="noopener noreferrer">Visit EV Car Charger <ArrowUpRight size={18}/></a><span className="gen-private">Private repository</span></header>
    <figure className="gen-image"><img src="/images/EvCarCharger.webp" alt="EV Car Charger online storefront"/><figcaption>Public storefront · EV charging products</figcaption></figure>
    <div className="gen-layout"><aside><p className="gen-kicker">Inside the project</p>{sections.map((s,i) => <a key={s.id} href="#/projects/evcarcharger" aria-current={active === s.id ? 'location' : undefined} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}><span>0{i+1}</span>{s.label}</a>)}</aside><div>{sections.map((s,i) => <section id={s.id} key={s.id}><p className="gen-kicker">0{i+1} / {s.label}</p><h2>{s.title}</h2>{s.id === 'ev-stack' && <CaseStudyStack project='ev' />}{s.paragraphs.map(p => <CaseStudyParagraph key={p} text={p} />)}</section>)}<footer className="gen-bottom"><h2>Explore the storefront.</h2><a className="gen-live" href="https://evcarcharger.ge" target="_blank" rel="noopener noreferrer">Open EV Car Charger <ArrowUpRight size={18}/></a><a href="#projects">Back to projects</a></footer></div></div>
  </main>;
}
