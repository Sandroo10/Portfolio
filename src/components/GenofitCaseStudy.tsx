import CaseStudyParagraph from './CaseStudyParagraph';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './genofit-case-study.css';

import { genofitSections as sections } from '../data/case-study-sections';

export default function GenofitCaseStudy() {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = 'GenOfIT — Full-stack case study | Sandro Saralidze';
    const update = () => {
      let current = sections[0].id;
      for (const section of sections) if ((document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) < 180) current = section.id;
      setActive(current);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => { document.title = previous; window.removeEventListener('scroll', update); };
  }, []);
  return <main className="gen-case">
    <nav className="gen-top"><a href="#projects"><ArrowLeft size={17} /> All projects</a><span>Sandro Saralidze / Selected work</span></nav>
    <header className="gen-hero"><p className="gen-kicker">Freelance · Full-stack development · QA</p><h1>GenOfIT<span>From a public presence<br />to a working platform.</span></h1><p className="gen-intro">A website for software testing services and QA education, with administration, course enrollment, payments, and the infrastructure supporting launch.</p><div className="gen-tags">{['Next.js', 'Supabase', 'Stripe', 'Resend', 'Cloudflare Turnstile', 'Vercel', 'GitHub Actions', 'Google Search Console'].map(x => <span key={x}>{x}</span>)}</div><a className="gen-live" href="https://www.genofit.tech/" target="_blank" rel="noopener noreferrer">Visit GenOfIT <ArrowUpRight size={18} /></a><span className="gen-private">Private repository</span></header>
    <figure className="gen-image"><img src="/images/genofit.png" alt="GenOfIT website homepage presenting testing services and QA courses" /><figcaption>Public website · Services and QA education</figcaption></figure>
    <div className="gen-layout"><aside><p className="gen-kicker">Inside the project</p>{sections.map((s,i) => <a key={s.id} href={`#/projects/genofit`} aria-current={active === s.id ? 'location' : undefined} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}><span>0{i+1}</span>{s.label}</a>)}</aside><div>{sections.map((s,i) => <section id={s.id} key={s.id}><p className="gen-kicker">0{i+1} / {s.label}</p><h2>{s.title}</h2>{s.paragraphs.map(p => <CaseStudyParagraph key={p} text={p} />)}{s.id === 'stack' && <div className="gen-services">{[['Application','Next.js'],['Data & storage','Supabase'],['Payments','Stripe Checkout + webhooks'],['Email','Resend'],['Form protection','Cloudflare Turnstile'],['Delivery','Vercel + GitHub Actions'],['Search visibility','Google Search Console']].map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}</section>)}<footer className="gen-bottom"><h2>Explore the finished website.</h2><a className="gen-live" href="https://www.genofit.tech/" target="_blank" rel="noopener noreferrer">Open GenOfIT <ArrowUpRight size={18}/></a><a href="#projects">Back to projects</a></footer></div></div>
  </main>;
}
