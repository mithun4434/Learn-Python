import { motion } from 'framer-motion';
import { RotateCcw, Shuffle } from 'lucide-react';
import type { Level } from '../data/topics';

export default function FinalSection({ level, onRestart, onSwitch }: { level:Level; onRestart:()=>void; onSwitch:()=>void }) {
  return (
    <section className="final-section">
      <div className="final-grid" />
      <div className="final-content">
        <div className="eyebrow"><span>∞</span>{level.toUpperCase()} PATH COMPLETE</div>
        <motion.h2 initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>You now see <em>Python as a system.</em></motion.h2>
        <p>From source code and data structures to runtime behavior, tooling, concurrency and production architecture.</p>
        <div className="journey-line">
          {['SOURCE','OBJECTS','FUNCTIONS','MODULES','RUNTIME','CONCURRENCY','SYSTEMS'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b></div>)}
        </div>
        <div className="final-actions">
          <button className="primary-btn" onClick={onRestart}><RotateCcw size={17}/> START AGAIN</button>
          <button className="ghost-btn" onClick={onSwitch}><Shuffle size={17}/> CHANGE LEVEL</button>
        </div>
      </div>
    </section>
  );
}
