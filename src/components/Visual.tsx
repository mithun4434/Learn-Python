import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

const Box = ({ children, className = '' }: { children:ReactNode; className?:string }) => <motion.div className={`viz-box ${className}`} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.25}}>{children}</motion.div>;

function Hello() { return <div className="viz center-viz"><div className="python-logo">Py</div><div className="pulse-ring"/><div className="runtime-path"><span>SOURCE</span><i/> <span>PARSER</span><i/><span>CODE</span><i/><span>RUNTIME</span></div><div className="viz-caption">Readable source → executed behavior</div></div>; }
function Values() { const items=[['int','42'],['float','3.14'],['bool','True'],['str','"Py"'],['None','None']]; return <div className="viz value-viz"><div className="object-cloud">{items.map(([a,b],i)=><motion.div key={a} className="object-chip" animate={{y:[0,-8,0]}} transition={{duration:2+i*.15,repeat:Infinity}}><b>{a}</b><span>{b}</span></motion.div>)}</div><div className="viz-caption">name → object → operation</div></div>; }
function Operators(){const [active,setActive]=useState('=='); const ops=['+','//','%','==','in','is']; return <div className="viz operator-viz"><div className="operator-row">{ops.map(op=><button key={op} className={active===op?'active':''} onClick={()=>setActive(op)}>{op}</button>)}</div><motion.div key={active} className="operator-result" initial={{scale:.75,opacity:0}} animate={{scale:1,opacity:1}}>10 {active} {active==='in' || active==='is' ? 'python' : '3'} <span>→ {active==='=='?'False':active==='in'?'False':'result'}</span></motion.div><div className="viz-caption">Operators ask the objects to perform a protocol.</div></div>; }
function Branch(){const [score,setScore]=useState(82); const label=score>=90?'A':score>=75?'B':'C'; return <div className="viz branch-viz"><input type="range" min="0" max="100" value={score} onChange={e=>setScore(+e.target.value)}/><div className="score">score <b>{score}</b></div><div className="branch-tree"><span className={label==='A'?'hot':''}>≥ 90 → A</span><span className={label==='B'?'hot':''}>≥ 75 → B</span><span className={label==='C'?'hot':''}>else → C</span></div><strong>RESULT: {label}</strong></div>; }
function Loops(){return <div className="viz loop-viz"><div className="loop-track">{['A','B','C','D','E'].map((x,i)=><motion.span key={x} animate={{x:[0,18,0]}} transition={{delay:i*.18,duration:1.1,repeat:Infinity}}>{x}</motion.span>)}</div><div className="loop-center">for item in iterable</div><div className="viz-caption">next() → process → next() → stop</div></div>; }
function FunctionVisual(){return <div className="viz function-viz"><div className="caller">caller()</div><div className="call-arrow">↓</div><div className="frame"><b>local frame</b><span>name = "Mithun"</span><span>return → message</span></div><div className="return-arrow">↑ return value</div></div>; }
function Strings(){const [index,setIndex]=useState(0);const t='PYTHON';return <div className="viz string-viz"><div className="string-line">{[...t].map((c,i)=><button key={`${c}${i}`} className={index===i?'active':''} onClick={()=>setIndex(i)}>{c}</button>)}</div><div className="slice-readout">text[{index}] = <b>"{t[index]}"</b></div><div className="viz-caption">Strings are immutable sequences.</div></div>; }
function Collections(){const cards=[['LIST','[1, 2, 3]'],['TUPLE','(1, 2)'],['SET','{1, 2, 3}'],['DICT','{"a": 1}']];return <div className="viz collections-viz">{cards.map(([a,b])=><Box key={a}><strong>{a}</strong><code>{b}</code></Box>)}</div>; }
function Comprehension(){const nums=[1,2,3,4,5,6];return <div className="viz comprehension-viz"><div className="comp-source">for n in <b>{'[1..6]'}</b></div><div className="comp-filter">if n % 2 == 0</div><div className="comp-output">{nums.filter(n=>n%2===0).map(n=><motion.span key={n} initial={{scale:.4}} whileInView={{scale:1}}>{n*n}</motion.span>)}</div><div className="viz-caption">transform + filter + collect</div></div>; }
function Files(){return <div className="viz resource-viz"><div className="file-window"><div>with open(...)</div><motion.div className="file-packet" animate={{y:[0,52,100],opacity:[1,1,0.5]}} transition={{duration:2,repeat:Infinity}}>DATA</motion.div><div>→ closed safely</div></div><div className="data-badges"><span>JSON</span><span>CSV</span><span>Path</span></div></div>; }
function Exceptions(){const [fail,setFail]=useState(false);return <div className="viz exception-viz"><button className="exception-trigger" onClick={()=>setFail(!fail)}>RUN CODE</button><div className="exception-flow"><span>TRY</span><i className={fail?'hot':''}/><span className={fail?'danger':''}>{fail?'ValueError':'NORMAL'}</span><i/><span>CATCH</span><i/><span>CONTINUE</span></div><div className={fail?'error-readout hot':'error-readout'}>{fail?'Exception handled':'No exception'}</div></div>; }
function Project(){return <div className="viz project-viz"><div className="project-folder">todo-app/</div><div className="project-files"><span>main.py</span><span>models.py</span><span>storage.py</span><span>README.md</span></div><motion.div className="project-flow" animate={{x:[0,12,0]}} transition={{duration:2,repeat:Infinity}}>small ideas → composition → project</motion.div></div>; }
function Modules({packages=false}:{packages?:boolean}){return <div className="viz module-viz"><div className="module-layer"><span>{packages?'app/':'app.py'}</span><i>namespace</i></div><div className="module-arrow">↓ import</div><div className="module-layer secondary"><span>{packages?'services/':'math_utils.py'}</span><i>reusable code</i></div><div className="viz-caption">imports create access to another namespace</div></div>; }
function OOP({poly=false}:{poly?:boolean}){return <div className="viz oop-viz"><div className="class-box"><b>{poly?'INTERFACE':'CLASS'}</b><span>state</span><span>behavior()</span></div><div className="oop-arrow">↓</div><div className="instance-row"><span>{poly?'Dog()':'object #1'}</span><span>{poly?'Cat()':'object #2'}</span></div><div className="oop-call">{poly?'same method call → different behavior':'instance owns its state'}</div></div>; }
function DataModel(){return <div className="viz data-model-viz"><div className="model-row"><Box><strong>@dataclass</strong><span>data</span></Box><Box><strong>Enum</strong><span>named values</span></Box><Box><strong>property</strong><span>controlled access</span></Box></div></div>; }
function Iterators(){return <div className="viz iterator-viz"><div className="generator-box"><span>generator()</span><b>yield 1</b><b>yield 2</b><b>yield 3</b></div><motion.div className="pull-arrow" animate={{y:[0,15,0]}} transition={{duration:1.2,repeat:Infinity}}>next() ↓</motion.div><div className="sink">consumer</div></div>; }
function Decorators({pro=false}:{pro?:boolean}){return <div className="viz decorator-viz"><div className="wrap-stack"><span>{pro?'retry(3)':'@trace'}</span><span className="target">function()</span><span>wrapped()</span></div><div className="decor-line">behavior added around a callable</div></div>; }
function Context(){return <div className="viz context-viz"><div className="context-boundary"><span>__enter__</span><strong>WORK</strong><span>__exit__</span></div><div className="ctx-arrow">exceptions still reach cleanup</div></div>; }
function Typing(){return <div className="viz typing-viz"><div className="type-signature"><b>def</b> label(item: <span>HasName</span>) → <span>str</span></div><div className="protocol-card"><strong>Protocol</strong><small>what it can do</small></div><div className="type-arrow">static tools inspect the contract</div></div>; }
function Testing(){return <div className="viz testing-viz"><div className="test-runner">TEST RUN</div><div className="tests"><span className="pass">✓ add()</span><span className="pass">✓ parse()</span><span className="fail">× save()</span></div><div className="test-summary">2 passed · 1 failed</div></div>; }
function Packaging(){return <div className="viz packaging-viz"><div className="env"><span>.venv</span><b>Python</b><small>site-packages</small></div><div className="pkg-arrow">pip install → isolated env</div><div className="pyproject"><span>[project]</span><span>dependencies = [...]</span></div></div>; }
function Stdlib(){return <div className="viz stdlib-viz">{['pathlib','collections','itertools','re','json','sqlite3','argparse','datetime'].map((x,i)=><motion.span key={x} animate={{y:[0,-6,0]}} transition={{duration:1.8+i*.09,repeat:Infinity}}>{x}</motion.span>)}</div>; }
function DataModelPro(){return <div className="viz pro-object-viz"><div className="protocol-grid"><span>+</span><span>repr</span><span>iter</span><span>call</span><span>getattr</span><span>len</span></div><div className="protocol-core">OBJECT<br/><small>protocols</small></div></div>; }
function Descriptors(){return <div className="viz descriptor-viz"><div className="descriptor-box">descriptor<br/><small>__get__ / __set__</small></div><div className="descriptor-arrow">attribute access →</div><div className="attribute-box">obj.value<br/><small>controlled</small></div></div>; }
function Metaclass(){return <div className="viz meta-viz"><div className="class-node">class body</div><div className="meta-arrow">↓ type creates ↓</div><div className="class-node hot">class object</div><div className="meta-arrow">↓ instance creates ↓</div><div className="class-node">object</div></div>; }
function Threads({process=false}:{process?:boolean}){return <div className="viz concurrency-viz"><div className="concurrency-label">{process?'PROCESS POOL':'EVENT / THREAD POOL'}</div>{[1,2,3].map(i=><motion.div key={i} className="worker" animate={{width:['12%','72%','25%']}} transition={{duration:1.8,delay:i*.22,repeat:Infinity}}><b>{process?'P':'T'}{i}</b></motion.div>)}<div className="concurrency-caption">independent units of work</div></div>; }
function Async(){return <div className="viz async-viz"><div className="event-loop"><b>EVENT LOOP</b><span>Task A</span><span>Task B</span><span>Task C</span></div><div className="await-arrow">await → yield → resume</div></div>; }
function Performance(){return <div className="viz performance-viz"><div className="perf-bars"><span style={{height:'36%'}}>parse</span><span style={{height:'82%'}}>db</span><span className="hot" style={{height:'100%'}}>hotspot</span><span style={{height:'42%'}}>render</span></div><div className="viz-caption">profile → find hotspot → optimize → measure again</div></div>; }
function Garbage(){return <div className="viz gc-viz"><div className="heap-cloud">{['A','B','C','D','E','F'].map((x,i)=><motion.span key={x} className={i===1||i===4?'unreachable':''} animate={{opacity:i===1||i===4?[1,.25,0]:[1,.85,1],scale:i===1||i===4?[1,.8,.1]:[1,1.04,1]}} transition={{duration:2.2,delay:i*.1,repeat:Infinity}}>{x}</motion.span>)}</div><div className="gc-sweep">GC SWEEP → unreachable objects</div></div>; }
function Protocols(){return <div className="viz protocols-viz"><div className="api-shape"><span>dumps(data)</span><span>loads(text)</span><span>supports(value)</span></div><div className="protocol-join">behavior-based API</div></div>; }
function Security(){return <div className="viz security-viz"><div className="trust-boundary"><span>UNTRUSTED INPUT</span><i/><strong>VALIDATE</strong><i/><span className="safe">SAFE DATA</span></div><div className="security-badges"><span>PATH</span><span>SQL</span><span>SHELL</span><span>SECRETS</span></div></div>; }
function ArchitecturePro(){return <div className="viz architecture-pro"><div className="arch-level"><span>HTTP / CLI</span></div><div className="arch-connector">↓</div><div className="arch-level hot"><span>APPLICATION SERVICE</span></div><div className="arch-connector">↓</div><div className="arch-level"><span>REPOSITORY / QUEUE / DB</span></div><div className="arch-footer">observe · test · deploy</div></div>; }

export default function Visual({type}:{type:string}) {
  if (type==='hello') return <Hello/>;
  if (type==='values') return <Values/>;
  if (type==='operators') return <Operators/>;
  if (type==='branch') return <Branch/>;
  if (type==='loops') return <Loops/>;
  if (type==='function') return <FunctionVisual/>;
  if (type==='strings') return <Strings/>;
  if (type==='collections') return <Collections/>;
  if (type==='comprehension') return <Comprehension/>;
  if (type==='files') return <Files/>;
  if (type==='exceptions') return <Exceptions/>;
  if (type==='project') return <Project/>;
  if (type==='modules') return <Modules/>;
  if (type==='packages') return <Modules packages/>;
  if (type==='oop') return <OOP/>;
  if (type==='polymorphism') return <OOP poly/>;
  if (type==='datamodel') return <DataModel/>;
  if (type==='iterators') return <Iterators/>;
  if (type==='decorators') return <Decorators/>;
  if (type==='context') return <Context/>;
  if (type==='typing') return <Typing/>;
  if (type==='testing') return <Testing/>;
  if (type==='packaging') return <Packaging/>;
  if (type==='stdlib') return <Stdlib/>;
  if (type==='datamodel-pro') return <DataModelPro/>;
  if (type==='descriptors') return <Descriptors/>;
  if (type==='metaclass') return <Metaclass/>;
  if (type==='decorators-pro') return <Decorators pro/>;
  if (type==='threads') return <Threads/>;
  if (type==='processes') return <Threads process/>;
  if (type==='async') return <Async/>;
  if (type==='performance') return <Performance/>;
  if (type==='gc') return <Garbage/>;
  if (type==='protocols') return <Protocols/>;
  if (type==='security') return <Security/>;
  return <ArchitecturePro/>;
}
