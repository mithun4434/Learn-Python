import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, Code2, Lock, Palette, RotateCcw, Sparkles, X } from 'lucide-react';
import { levelInfo, topicsByLevel, type Activity, type Level, type Topic } from './data/course';

const levelOrder: Level[] = ['beginner', 'intermediate', 'pro'];


type ThemeName = 'paper' | 'dark' | 'glossy' | 'neo' | 'liquid' | 'terminal' | 'midnight' | 'solarized' | 'cyberpunk' | 'forest';

const themes: { id: ThemeName; name: string; description: string; swatch: string }[] = [
  { id: 'paper', name: 'Paper', description: 'Clean course studio', swatch: '#f5efe4' },
  { id: 'dark', name: 'Dark', description: 'Quiet dark mode', swatch: '#101318' },
  { id: 'glossy', name: 'Glossy', description: 'Polished reflective', swatch: '#cbe2ff' },
  { id: 'neo', name: 'Neo Brutalist', description: 'Bold blocks & shadows', swatch: '#ff6b6b' },
  { id: 'liquid', name: 'Liquid Glass', description: 'Soft glass surfaces', swatch: '#bbd9ff' },
  { id: 'terminal', name: 'Terminal', description: 'Monospace workstation', swatch: '#72ff9f' },
  { id: 'midnight', name: 'Midnight', description: 'Deep violet night', swatch: '#9b8cff' },
  { id: 'solarized', name: 'Solarized', description: 'Warm developer palette', swatch: '#b58900' },
  { id: 'cyberpunk', name: 'Cyberpunk', description: 'Electric neon lab', swatch: '#ff3bd4' },
  { id: 'forest', name: 'Forest', description: 'Calm green workspace', swatch: '#6cc08a' },
];

function applyTheme(theme: ThemeName, scale: number) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.setProperty('--ui-scale', String(scale));
}

function ThemeDock({ theme, scale, onTheme, onScale }: { theme: ThemeName; scale: number; onTheme: (theme: ThemeName) => void; onScale: (scale: number) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="customizer">
      <motion.button className="customizer-launch" onClick={() => setOpen(v => !v)} aria-label="Open appearance settings" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: .97 }}>
        <Palette size={16} /><span>APPEARANCE</span>
      </motion.button>
      <AnimatePresence>
        {open && <motion.div className="customizer-panel" initial={{ opacity: 0, y: -8, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .96 }} transition={{ duration: .18 }}>
          <div className="customizer-title"><span>COURSE VIEW</span><button onClick={() => setOpen(false)} aria-label="Close appearance settings"><X size={15}/></button></div>
          <div className="setting-block">
            <div className="setting-row"><span>TEXT SIZE</span><strong>{Math.round(scale * 100)}%</strong></div>
            <div className="text-size-row">
              <button onClick={() => onScale(Math.max(.75, Number((scale - .05).toFixed(2))))}>A−</button>
              <input type="range" min="0.75" max="3" step="0.05" value={scale} onChange={e => onScale(Number(e.target.value))} aria-label="Text size up to 300 percent" />
              <button onClick={() => onScale(Math.min(3, Number((scale + .05).toFixed(2))))}>A+</button>
            </div>
          </div>
          <div className="setting-block">
            <div className="setting-row"><span>THEME</span><strong>{themes.find(x => x.id === theme)?.name}</strong></div>
            <div className="theme-grid">{themes.map(item => <button key={item.id} className={`theme-choice ${theme === item.id ? 'selected' : ''}`} onClick={() => onTheme(item.id)} title={item.description}><span className="swatch" style={{ background: item.swatch }} /><span>{item.name}</span></button>)}</div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}

function normalizeCode(code: string) {
  return code.toLowerCase().replace(/\s+/g, ' ');
}

function validate(code: string, required: string[]) {
  const normalized = normalizeCode(code);
  return required.every(token => normalized.includes(token.toLowerCase()));
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function LevelPicker({ onPick }: { onPick: (level: Level) => void }) {
  return (
    <section className="landing" id="top">
      <div className="landing-grid" />
      <div className="landing-shell">
        <div className="brandline"><span>PyLogic</span><span>15 TOPICS • 5 TASKS EACH</span></div>
        <div className="landing-copy">
          <p className="kicker"><Sparkles size={14}/> SOURCE-LED LEARNING</p>
          <h1>Python.<br /><span>Understand it.</span><br />Build it.</h1>
          <p className="landing-lead">Choose how deeply you want to learn. Every path uses the uploaded course material as its source, then turns each topic into a small coding checkpoint.</p>
        </div>

        <div className="level-question">How do you want to learn Python?</div>
        <div className="level-grid">
          {levelOrder.map((level, index) => {
            const info = levelInfo[level];
            return (
              <motion.button
                key={level}
                className={`level-card level-${level}`}
                onClick={() => onPick(level)}
                whileHover={{ y: -10, rotate: index === 1 ? 0 : index === 0 ? -1 : 1, boxShadow: '0 28px 72px rgba(46,38,25,.16)' }} transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                whileTap={{ scale: .98 }}
              >
                <div className="level-card-top"><span>{info.badge}</span><span>0{index + 1}</span></div>
                <div className="level-title">{info.title}</div>
                <p>{info.summary}</p>
                <div className="level-promise">{info.promise}</div>
                <div className="choose-row">Choose path <ArrowRight size={16}/></div>
              </motion.button>
            );
          })}
        </div>

        <div className="landing-foot"><span>Every lesson ends with a coding activity.</span><span>15 topics • 5 tasks per topic</span><ArrowDown size={16}/></div>
      </div>
    </section>
  );
}

function VisualStage({ topic, level }: { topic: Topic; level: Level }) {
  const colors: Record<Level,string> = { beginner:'#2b6cb0', intermediate:'#d7a600', pro:'#b54708' };
  const accent = colors[level];
  const [probe, setProbe] = useState('');

  const renderVisual = () => {
    const t = topic.title;
    if (t === 'What is Python?') return <div className="flow-visual"><div>PYTHON SOURCE</div><ArrowDown/><div className="highlight">INTERPRETER / RUNTIME</div><ArrowDown/><div>OUTPUT</div><div className="platforms"><span>WEB</span><span>DATA</span><span>AI</span><span>IOT</span></div></div>;
    if (t === 'Python Fundamentals') return <div className="fundamentals"><div className="prompt">&gt;&gt;&gt;</div><div className="typed">print("Hello World")</div><div className="out">Hello World</div><div className="indent-demo"><span>if score &gt;= 50:</span><b>    print("Pass")</b></div></div>;
    if (t === 'Data Types & Typecasting') return <div className="type-map">{['int','float','complex','bool','str','bytes','list','tuple','set','dict','None'].map((x,i)=><motion.div key={x} style={{borderColor: i%2===0 ? accent : '#d9d2c3'}} whileHover={{scale:1.04}}>{x}</motion.div>)}</div>;
    if (t === 'Operators & Expressions') return <div className="operator-wall">{['+','-','*','/','//','%','**','==','!=','and','or','not','&','|','^','<<','>>','in','is'].map(x=><span key={x}>{x}</span>)}</div>;
    if (t === 'Input & Output') return <div className="io-demo"><div className="io-box"><small>INPUT</small><strong>&gt; 100 200</strong></div><div className="io-arrow">→</div><div className="io-box"><small>TRANSFORM</small><strong>int + int</strong></div><div className="io-arrow">→</div><div className="io-box"><small>OUTPUT</small><strong>The Sum: 300</strong></div></div>;
    if (t === 'Control Flow') return <div className="branch-visual"><div className="node start">condition?</div><div className="branch-lines"><span>TRUE → block executes</span><span>FALSE → else block</span></div><div className="loop-card">for / while<br/><small>break • continue • pass</small></div></div>;
    if (t === 'Strings') return <div className="string-lab"><div className="string-source">Learning Python is very very easy</div><div className="string-ops"><button onClick={()=>setProbe('LP')} >slice</button><button onClick={()=>setProbe('LEARNING')}>upper</button><button onClick={()=>setProbe('Learning-Python-is')}>split + join</button><button onClick={()=>setProbe('2')}>count("very")</button></div><div className="string-result">{probe || 'click an operation'}</div></div>;
    if (t === 'Files & Debugging') return <div className="file-visual"><div className="file-node">input.txt</div><ArrowRight/><div className="file-node hot">open()</div><ArrowRight/><div className="file-node">read / search</div><ArrowRight/><div className="file-node">output.txt</div><div className="try-chip">try → except</div></div>;
    if (t === 'Lists') return <div className="list-visual"><div className="list-row">{[10,20,30,40].map(x=><motion.span key={x} whileHover={{y:-5}}>{x}</motion.span>)}</div><div className="list-actions"><span>append()</span><span>extend()</span><span>remove()</span><span>sort()</span><span>pop()</span></div><div className="list-comp">[x*x for x in range(1,21)]</div></div>;
    if (t === 'Tuples') return <div className="tuple-visual"><div className="tuple-pill">("Mithun", 21, "CSE")</div><div className="unpack">name, age, dept = tuple</div><div className="fixed">IMMUTABLE / READ ONLY</div></div>;
    if (t === 'Sets') return <div className="set-visual"><div className="set-circle a">1 2 3 4</div><div className="set-circle b">3 4 5 6</div><div className="set-result"><span>A ∪ B</span><span>A ∩ B</span><span>A − B</span><span>A △ B</span></div></div>;
    if (t === 'Dictionaries') return <div className="dict-visual"><div className="dict-keys">name<br/>role<br/>level</div><div className="dict-arrow">→</div><div className="dict-values">Mithun<br/>student<br/>pro</div><div className="dict-methods">get() • items() • pop() • setdefault()</div></div>;
    if (t === 'Functions') return <div className="function-visual"><div className="fn-box">def total(*values):<br/><span>return sum(values)</span></div><ArrowDown/><div className="call-box">total(10, 20, 30)</div><ArrowDown/><div className="return-box">60</div></div>;
    if (t === 'Modules') return <div className="module-visual"><div>module1.py</div><div className="import-arrow">import →</div><div className="app-box">main.py</div><div className="module-foot">dir(module) • importlib.reload(module1)</div></div>;
    return <div className="regex-visual"><div className="regex-pattern">\\d+</div><div className="regex-target">IDs: 120, 305, 991</div><div className="regex-matches"><span>120</span><span>305</span><span>991</span></div><div className="regex-api">match • fullmatch • search • findall • finditer</div></div>;
  };

  return <motion.div className="visual-stage" whileHover={{ y: -3, boxShadow: '0 18px 40px rgba(46,38,25,.10)' }} transition={{ duration: .2 }}><div className="visual-label">INTERACTIVE MAP <span style={{color:accent}}>●</span></div>{renderVisual()}</motion.div>;
}

function ActivityGate({ topic, level, complete, onComplete }: {topic:Topic; level:Level; complete:boolean; onComplete:()=>void}) {
  const tasks = topic.activity.tasks ?? [topic.activity];
  const [index, setIndex] = useState(0);
  const [code, setCode] = useState('');
  const [choice, setChoice] = useState<number | null>(null);
  const [passed, setPassed] = useState<boolean[]>(() => tasks.map(() => complete));
  const [status, setStatus] = useState<'idle'|'error'|'success'>('idle');
  const [showHint, setShowHint] = useState(false);
  const task = tasks[index];
  const isMcq = task.kind === 'mcq';

  useEffect(() => {
    setIndex(0);
    setCode(taskFor(topic, 0, tasks));
    setChoice(null);
    setPassed(tasks.map(() => complete));
    setStatus(complete ? 'success' : 'idle');
    setShowHint(false);
  }, [topic.id]);

  useEffect(() => {
    const current = tasks[index];
    setCode(current?.starter || '');
    setChoice(null);
    setStatus(passed[index] ? 'success' : 'idle');
    setShowHint(false);
  }, [index]);

  const finishIfReady = (nextPassed: boolean[]) => {
    if (nextPassed.every(Boolean)) onComplete();
  };

  const check = () => {
    let ok = false;
    if (isMcq) ok = choice === task.answer;
    else ok = validate(code, task.required);
    if (!ok) { setStatus('error'); return; }
    const nextPassed = [...passed];
    nextPassed[index] = true;
    setPassed(nextPassed);
    setStatus('success');
    finishIfReady(nextPassed);
    if (index < tasks.length - 1) {
      window.setTimeout(() => setIndex(i => i + 1), 420);
    }
  };

  return (
    <motion.div className={`activity ${complete ? 'activity-done' : ''}`} animate={status==='success' ? {scale:[1,1.015,1]} : {scale:1}} transition={{duration:.38}}>
      <div className="activity-head">
        <div><span className="activity-kicker">5 TASK CHECKPOINT • TASK {index + 1} / {tasks.length}</span><h3>{task.task}</h3></div>
        <span className="gate-pill">{complete ? <><Check size={13}/> COMPLETE</> : <><Lock size={13}/> GATE</>}</span>
      </div>
      <div className="task-progress"><span style={{width:`${(passed.filter(Boolean).length / tasks.length) * 100}%`}} /></div>
      {isMcq ? (
        <div className="mcq-options">{(task.options || []).map((option, i) => <motion.button key={option} className={`mcq-option ${choice===i?'selected':''} ${passed[index] && i===task.answer?'correct':''}`} onClick={()=>!passed[index] && setChoice(i)} whileHover={{x:5, scale:1.01}} whileTap={{scale:.98}}>{String.fromCharCode(65+i)}. {option}</motion.button>)}</div>
      ) : (
        <textarea spellCheck={false} value={code} onChange={e=>{setCode(e.target.value); setStatus('idle')}} aria-label={`Coding activity for ${topic.title}`} />
      )}
      <div className="activity-actions">
        <button className="check-btn" onClick={check} disabled={passed[index]}><Code2 size={15}/> {isMcq ? 'Check answer' : 'Check code'}</button>
        <button className="hint-btn" onClick={()=>setShowHint(v=>!v)}>{showHint ? 'Hide hint' : 'Show hint'}</button>
      </div>
      {showHint && <div className="hint"><span>Hint</span>{task.hint}</div>}
      {status==='error' && <div className="activity-feedback error">Not yet. Try again — this task is specific to {topic.title} and must be completed before the next task unlocks.</div>}
      {status==='success' && <motion.div className="activity-feedback success" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}><Check size={15}/> Task {index+1} complete. {index < tasks.length-1 ? 'Next task unlocked.' : 'All five tasks complete — next topic unlocked.'}</motion.div>}
    </motion.div>
  );
}

function taskFor(topic: Topic, index: number, tasks: Activity[]) { return tasks[index]?.starter || ''; }

function TopicSection({ topic, index, level, unlocked, completed, onComplete, onNext }: {topic:Topic; index:number; level:Level; unlocked:boolean; completed:boolean; onComplete:()=>void; onNext:()=>void}) {
  return (
    <section id={`topic-${topic.id}`} className={`topic-screen ${unlocked ? 'topic-unlocked' : 'locked-screen'}`}>
      {!unlocked && <div className="topic-lock"><Lock size={30}/><strong>Topic locked</strong><span>Finish the coding checkpoint in the previous topic to continue.</span></div>}
      <div className="topic-shell">
        <div className="topic-header"><span>{topic.unit}</span><span>{topic.number} / 15</span></div>
        <div className="topic-layout">
          <motion.div className="topic-copy" initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.25}} transition={{duration:.55}}>
            <div className="topic-label">{topic.subtitle}</div>
            <h2>{topic.title}</h2>
            <p className="level-focus">{topic.levelExplanation}</p>
            <div className="source-card"><div className="source-title"><BookOpen size={14}/> {topic.sourceLabel}</div><pre>{topic.sourceText}</pre></div>
            <div className="coverage"><span>THIS TOPIC COVERS</span><div>{topic.coverage.map(item=><span key={item}>{item}</span>)}</div></div>
          </motion.div>
          <motion.div className="topic-right" initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true, amount:.2}} transition={{duration:.55, delay:.08}}>
            <VisualStage topic={topic} level={level}/>
            <div className="code-card"><div className="code-head"><span><Code2 size={14}/> EXAMPLE</span><span>PYTHON</span></div><pre><code>{topic.code}</code></pre></div>
            <ActivityGate topic={topic} level={level} complete={completed} onComplete={onComplete}/>
            <div className="topic-bottom"><button className="back-link" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ArrowLeft size={15}/> course home</button><button className="next-btn" disabled={!completed} onClick={onNext}>{completed ? 'Next topic' : 'Complete activity'} <ArrowRight size={15}/></button></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgressRail({ topics, active, completed, level, onJump }: {topics:Topic[]; active:number; completed:boolean[]; level:Level; onJump:(index:number)=>void}) {
  return <aside className="progress-rail"><div className="rail-label">{levelInfo[level].title.replace('Python for ','')}</div><div className="rail-count">{String(active+1).padStart(2,'0')} / {topics.length}</div><div className="rail-items">{topics.map((t,i)=><button key={t.id} disabled={i>0 && !completed[i-1] && i!==active} className={i===active?'active':''} onClick={()=>onJump(i)} title={t.title}><i>{completed[i] ? <Check size={10}/> : String(i+1).padStart(2,'0')}</i><span>{t.title}</span></button>)}</div></aside>;
}

function App() {
  const [level,setLevel]=useState<Level|null>(null);
  const [active,setActive]=useState(0);
  const [completed,setCompleted]=useState<boolean[]>(Array(15).fill(false));
  const [theme,setTheme]=useState<ThemeName>(() => (localStorage.getItem('pylogic-theme') as ThemeName) || 'paper');
  const [scale,setScale]=useState(() => Number(localStorage.getItem('pylogic-scale') || '1'));

  useEffect(()=>{ applyTheme(theme, scale); localStorage.setItem('pylogic-theme', theme); localStorage.setItem('pylogic-scale', String(scale)); },[theme,scale]);

  const topics = useMemo(()=>level ? topicsByLevel[level] : [], [level]);

  useEffect(()=>{
    if(!level) return;
    const key=`pylogic-progress-v3-${level}`;
    const stored=localStorage.getItem(key);
    if(stored){ try { const parsed=JSON.parse(stored); if(Array.isArray(parsed) && parsed.length===15) setCompleted(parsed); } catch {} }
    else setCompleted(Array(15).fill(false));
  },[level]);

  useEffect(()=>{
    if(!level) return;
    const sections=topics.map(t=>document.getElementById(`topic-${t.id}`));
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible){ const idx=sections.findIndex(s=>s===visible.target); if(idx>=0) setActive(idx); }
    },{threshold:[.2,.45,.7], rootMargin:'-20% 0px -55% 0px'});
    sections.forEach(s=>s&&observer.observe(s));
    return()=>observer.disconnect();
  },[level,topics]);

  const choose=(next:Level)=>{
    setLevel(next); setActive(0); setCompleted(Array(15).fill(false));
    requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'smooth'}));
  };

  const completeTopic=(i:number)=>{
    setCompleted(prev=>{const next=[...prev];next[i]=true; if(level) localStorage.setItem(`pylogic-progress-v3-${level}`,JSON.stringify(next)); return next;});
  };

  const jump=(index:number)=>{
    if(index>0 && !completed[index-1]) return;
    scrollToId(`topic-${topics[index].id}`);
  };

  const reset=()=>{ setLevel(null); setActive(0); setCompleted(Array(15).fill(false)); window.scrollTo({top:0,behavior:'smooth'}); };

  return <div className="app">
    <ThemeDock theme={theme} scale={scale} onTheme={setTheme} onScale={setScale}/>
    <AnimatePresence mode="wait">
      {!level ? <LevelPicker key="picker" onPick={choose}/> : <motion.div key="course" initial={{opacity:0}} animate={{opacity:1}}>
        <header className="course-bar"><button onClick={reset} className="course-brand">PyLogic</button><div className="course-mode"><span>{levelInfo[level].badge}</span>{levelInfo[level].title}</div><button onClick={reset} className="switch-btn"><RotateCcw size={14}/> Switch level</button></header>
        <ProgressRail topics={topics} active={active} completed={completed} level={level} onJump={jump}/>
        <main>
          {topics.map((topic,i)=><TopicSection key={topic.id} topic={topic} index={i} level={level} unlocked={i===0 || completed[i-1]} completed={completed[i]} onComplete={()=>completeTopic(i)} onNext={()=>{if(i<topics.length-1) jump(i+1)}}/>)}
          <section className="completion-screen"><div className="completion-card"><div className="completion-overline">PATH COMPLETE</div><h2>You finished<br/><span>{levelInfo[level].title}</span></h2><p>All 15 master topics in this path are complete. The next level is waiting whenever you are ready.</p><div className="complete-actions"><button onClick={()=>jump(0)} className="primary"><ArrowLeft size={16}/> Review from start</button><button onClick={reset} className="secondary">Choose another level <ChevronDown size={16}/></button></div></div></section>
        </main>
        <div className="mobile-progress">{active+1} / {topics.length} • {completed.filter(Boolean).length} complete</div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}

export default App;
