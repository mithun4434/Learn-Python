import type { Topic } from '../data/topics';

export default function ProgressIndicator({ active, onJump, topics, levelTitle }: { active:number; onJump:(index:number)=>void; topics:Topic[]; levelTitle:string }) {
  return (
    <aside className="progress" aria-label="Lesson progress">
      <div className="progress-label">{String(active + 1).padStart(2,'0')} <span>/ {String(topics.length).padStart(2,'0')}</span></div>
      <div className="progress-level">{levelTitle}</div>
      <div className="progress-list">
        {topics.map((topic, i) => (
          <button key={topic.id} className={active === i ? 'active' : ''} onClick={() => onJump(i)}>
            <span>{topic.number}</span><i /><em>{topic.title}</em>
          </button>
        ))}
      </div>
    </aside>
  );
}
