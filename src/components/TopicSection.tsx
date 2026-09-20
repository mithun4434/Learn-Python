import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';
import Visual from './Visual';
import type { Level, Topic } from '../data/topics';

export default function TopicSection({ topic, index, level, refProp }: { topic:Topic; index:number; level:Level; refProp:(el:HTMLElement|null)=>void }) {
  return (
    <section ref={refProp} id={topic.id} className="topic-section">
      <div className="topic-grid">
        <motion.div className="topic-copy" initial={{opacity:0,x:-45}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:.22}} transition={{duration:.65,ease:'easeOut'}}>
          <div className="eyebrow"><span>{topic.number}</span>{level.toUpperCase()} · {topic.eyebrow}</div>
          <h2>{topic.title}</h2>
          <p className="lead">{topic.description}</p>
          <div className="mental-model"><small>MENTAL MODEL</small><p>{topic.mentalModel}</p></div>
          <div className="behind"><small>BEHIND THE SCENES</small><p>{topic.behind}</p></div>
          <CodeBlock code={topic.code} language={topic.language} />
          <div className="topic-tags">{topic.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="takeaway"><b>TAKEAWAY</b><span>{topic.takeaway}</span></div>
          <div className="scroll-hint">CONTINUE <span>↓</span></div>
        </motion.div>
        <motion.div className="visual-wrap" initial={{opacity:0,scale:.95}} whileInView={{opacity:1,scale:1}} viewport={{once:false,amount:.18}} transition={{duration:.8,ease:'easeOut'}}>
          <Visual type={topic.visual} />
        </motion.div>
      </div>
    </section>
  );
}
