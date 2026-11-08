import CaseStudyParagraph from './CaseStudyParagraph';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './genofit-case-study.css';

import { botSections as sections } from '../data/case-study-sections';

const stack = [['Node.js + JavaScript', 'Persistent bot runtime'], ['discord.js v14', 'Slash commands and Discord interactions'], ['@discordjs/voice', 'Voice connections and audio playback'], ['yt-dlp', 'Track search, metadata, and media download'], ['FFmpeg', '48 kHz stereo PCM audio processing'], ['Opus + sodium dependencies', 'Voice-stack support'], ['dotenv', 'Runtime environment configuration'], ['React + TypeScript', 'Companion showcase website'], ['Vite + Tailwind CSS', 'Website build and styling']];

export default function MarionetteCaseStudy() {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = 'Marionette MusicBox — Discord music bot | Sandro Saralidze';
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
    <header className="gen-hero"><p className="gen-kicker">Personal project · Discord music bot</p><h1>Marionette MusicBox<span>Queue a track.<br/>Bring music to voice.</span></h1><p className="gen-intro">A working Discord music bot with slash commands, per-server queues, YouTube search, and an audio pipeline built with Node.js, yt-dlp, and FFmpeg.</p><div className="gen-tags">{['Node.js', 'JavaScript', 'discord.js', '@discordjs/voice', 'yt-dlp', 'FFmpeg', 'React', 'TypeScript'].map(x => <span key={x}>{x}</span>)}</div><a className="gen-live" href="https://marionette-discordbot.vercel.app/" target="_blank" rel="noopener noreferrer">View showcase & demonstration <ArrowUpRight size={18}/></a></header>
    <figure className="gen-image"><img src="/images/Marionette-MusicBox.png" alt="Marionette MusicBox companion website"/><figcaption>Companion showcase website · The music bot runs separately inside Discord</figcaption></figure>
    <div className="gen-layout"><aside><p className="gen-kicker">Inside the project</p>{sections.map((s,i) => <a key={s.id} href="#/projects/marionette" aria-current={active === s.id ? 'location' : undefined} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}><span>0{i+1}</span>{s.label}</a>)}</aside><div>{sections.map((s,i) => <section id={s.id} key={s.id}><p className="gen-kicker">0{i+1} / {s.label}</p><h2>{s.title}</h2>{s.id === 'bot-stack' && <dl className="case-tech-grid">{stack.map(([name,purpose]) => <div key={name}><dt>{name}</dt><dd>{purpose}</dd></div>)}</dl>}{s.paragraphs.map(p => <CaseStudyParagraph key={p} text={p} />)}</section>)}<footer className="gen-bottom"><h2>See the bot in action.</h2><a className="gen-live" href="https://marionette-discordbot.vercel.app/" target="_blank" rel="noopener noreferrer">Open the showcase <ArrowUpRight size={18}/></a><a href="#projects">Back to projects</a></footer></div></div>
  </main>;
}
