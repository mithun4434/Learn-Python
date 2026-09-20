import { motion } from 'framer-motion';
import { ArrowRight, Code2, Gauge, Rocket, Sparkles } from 'lucide-react';
import type { Level } from '../data/topics';

const choices: Array<{id: Level; title: string; description: string; icon: typeof Code2}> = [
  { id:'beginner', title:'Python for Beginners', description:'Start from zero and build the fundamentals.', icon:Code2 },
  { id:'intermediate', title:'Python for Intermediate', description:'Level up into OOP, tooling and software design.', icon:Gauge },
  { id:'pro', title:'Python for Pro', description:'Dive into internals, concurrency and production systems.', icon:Rocket },
];

export default function HeroSection({ level, onChoose }: { level: Level | null; onChoose: (level: Level) => void }) {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />
      <motion.div className="hero-code" initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration: .9 }}>
        <div className="editor-bar"><span /><span /><span /><b>journey.py</b><em>PYTHON</em></div>
        <pre>{`def learn(level):\n    if level == "beginner":\n        return "build foundations"\n    return "go deeper"\n\nprint(learn("python"))`}</pre>
      </motion.div>

      <div className="hero-content">
        <div className="hero-kicker"><Sparkles size={14} /> INTERACTIVE PYTHON SCROLLYTELLING</div>
        <motion.h1 initial={{opacity:0, scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
          <span>PYTHON</span><small>THE JOURNEY</small>
        </motion.h1>
        <p>Understand the language. <em>See what happens behind the code.</em></p>
        <div className="hero-sub">A progressive learning experience covering Python from first principles to advanced runtime and production concepts.</div>
      </div>

      <div className="level-gate">
        <div className="gate-label">01 · CHOOSE YOUR EXPLANATION MODE <span>then start scrolling</span></div>
        <div className="choice-grid">
          {choices.map(({id,title,description,icon:Icon}, i) => (
            <motion.button key={id} className={`choice-card ${level===id ? 'selected' : ''}`} whileHover={{ y:-6 }} whileTap={{ scale:.98 }} onClick={() => onChoose(id)}>
              <div className="choice-number">0{i+1}</div>
              <Icon size={22} />
              <strong>{title}</strong>
              <span>{description}</span>
              <ArrowRight size={17} className="choice-arrow" />
            </motion.button>
          ))}
        </div>
      </div>

      <div className="hero-footer"><span>SCROLL TO EXPLORE</span><b>↓</b><span className="mono">36 LESSONS · 3 PATHS</span></div>
    </section>
  );
}
