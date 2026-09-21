import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Contrast,
  Eye,
  Gauge,
  Lock,
  Palette,
  RotateCcw,
  Sparkles,
  X,
  ZoomIn,
} from 'lucide-react';
import { conceptMap, type Concept } from './data/concepts';
import { levelInfo, topicsByLevel, type Level, type Topic } from './data/course';

type ThemeName =
  | 'paper'
  | 'dark'
  | 'glossy'
  | 'neo'
  | 'liquid'
  | 'terminal'
  | 'midnight'
  | 'solarized'
  | 'cyberpunk'
  | 'forest';

const levelOrder: Level[] = ['beginner', 'intermediate', 'pro'];
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

function normalizeCode(code: string) {
  return code.toLowerCase().replace(/\s+/g, ' ');
}

function validate(code: string, required: string[]) {
  const normalized = normalizeCode(code);
  return required.every((token) => normalized.includes(token.toLowerCase()));
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyTheme(theme: ThemeName, scale: number) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.setProperty('--ui-scale', String(scale));
}

function ThemeDock({
  theme,
  scale,
  onTheme,
  onScale,
}: {
  theme: ThemeName;
  scale: number;
  onTheme: (theme: ThemeName) => void;
  onScale: (scale: number) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="customizer">
      <button className="customizer-launch" onClick={() => setOpen((v) => !v)} aria-label="Open appearance settings">
        <Palette size={16} />
        <span>APPEARANCE</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="customizer-panel" initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}>
            <div className="customizer-title"><span>COURSE VIEW</span><button onClick={() => setOpen(false)} aria-label="Close appearance settings"><X size={15}/></button></div>
            <div className="setting-block">
              <div className="setting-row"><span>TEXT SIZE</span><strong>{Math.round(scale * 100)}%</strong></div>
              <div className="text-size-row">
                <button onClick={() => onScale(Math.max(0.9, Number((scale - 0.05).toFixed(2))))}>A−</button>
                <input type="range" min="0.9" max="1.35" step="0.05" value={scale} onChange={(e) => onScale(Number(e.target.value))} aria-label="Text size" />
                <button onClick={() => onScale(Math.min(1.35, Number((scale + 0.05).toFixed(2))))}>A+</button>
              </div>
            </div>
            <div className="setting-block">
              <div className="setting-row"><span>THEME</span><strong>{themes.find((x) => x.id === theme)?.name}</strong></div>
              <div className="theme-grid">
                {themes.map((item) => (
                  <button key={item.id} className={`theme-choice ${theme === item.id ? 'selected' : ''}`} onClick={() => onTheme(item.id)} title={item.description}>
                    <span className="swatch" style={{ background: item.swatch }} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LevelPicker({ onPick, theme, scale, onTheme, onScale }: { onPick: (level: Level) => void; theme: ThemeName; scale: number; onTheme: (theme: ThemeName) => void; onScale: (scale: number) => void; }) {
  const reduce = useReducedMotion();
  return (
    <section className="landing" id="top">
      <div className="ambient orb-a" /><div className="ambient orb-b" /><div className="landing-grid" />
      <ThemeDock theme={theme} scale={scale} onTheme={onTheme} onScale={onScale} />
      <div className="landing-shell">
        <div className="brandline"><span>PYTHON // THE JOURNEY</span><span>6 UNITS • 15 TOPICS • 3 LEARNING PATHS</span></div>
        <div className="hero-layout">
          <motion.div className="landing-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.65 }}>
            <p className="kicker"><Sparkles size={14}/> INTERACTIVE PYTHON COURSE</p>
            <h1>Python.<br /><span>See the idea.</span><br />Build the code.</h1>
            <p className="landing-lead">A scrolling course built from the supplied Python Programming course material. Pick your depth, explore the concepts, then unlock the next lesson by completing a coding checkpoint.</p>
            <div className="hero-pills"><span>PDF-LED CONTENT</span><span>INTERACTIVE MAPS</span><span>CODE CHECKPOINTS</span></div>
          </motion.div>
          <motion.div className="hero-code" initial={{ opacity: 0, rotate: 2, y: 30 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.1 }}>
            <div className="window-bar"><span className="dot"/><span className="dot"/><span className="dot"/><span>hello_world.py</span></div>
            <pre><code>{`print("Hello World")\n\na = 10\nb = 20\nprint("The Sum:", a + b)`}</code></pre>
            <div className="hero-output"><span>&gt;&gt;&gt;</span> Hello World <span className="muted">•</span> The Sum: 30</div>
          </motion.div>
        </div>

        <div className="level-question">HOW DO YOU WANT TO LEARN PYTHON?</div>
        <div className="level-grid">
          {levelOrder.map((level, index) => {
            const info = levelInfo[level];
            return (
              <motion.button key={level} className={`level-card level-${level}`} onClick={() => onPick(level)} whileHover={{ y: -8 }} whileTap={{ scale: 0.985 }}>
                <div className="level-card-top"><span>{info.badge}</span><span>0{index + 1}</span></div>
                <div className="level-title">{info.title}</div>
                <p>{info.summary}</p>
                <div className="level-promise">{info.promise}</div>
                <div className="choose-row">Choose path <ArrowRight size={16}/></div>
              </motion.button>
            );
          })}
        </div>
        <div className="landing-foot"><span>Every lesson ends with a coding activity.</span><ArrowDown size={16}/></div>
      </div>
    </section>
  );
}

function ConceptSheet({ concept, onClose }: { concept: Concept; onClose: () => void }) {
  return (
    <motion.div className="concept-sheet" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
      <div className="concept-sheet-top"><span>CONCEPT DETAIL</span><button onClick={onClose} aria-label="Close concept"><X size={15}/></button></div>
      <div className="concept-sheet-grid">
        <div><span>DEFINITION</span><p>{concept.definition}</p></div>
        <div><span>HOW IT WORKS</span><p>{concept.how}</p></div>
        <div><span>PURPOSE</span><p>{concept.purpose}</p></div>
        <div className="concept-example"><span>EXAMPLE</span><pre>{concept.example}</pre></div>
      </div>
    </motion.div>
  );
}

function InteractiveMap({ topic }: { topic: Topic }) {
  const concepts = conceptMap[topic.title] ?? [];
  const [selected, setSelected] = useState<Concept | null>(null);
  return (
    <div className="interactive-map">
      <div className="visual-label"><span>INTERACTIVE OBJECTS</span><span><Eye size={13}/> Click a term to inspect it</span></div>
      <div className="concept-grid">
        {concepts.map((concept, index) => (
          <motion.button key={concept.name} className={`concept-chip ${selected?.name === concept.name ? 'active' : ''}`} onClick={() => setSelected(concept)} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: .98 }}>
            <span className="concept-index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{concept.name}</strong>
            <span className="concept-cta">open ↗</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">{selected && <ConceptSheet key={selected.name} concept={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </div>
  );
}

function VisualStage({ topic, level }: { topic: Topic; level: Level }) {
  const [probe, setProbe] = useState('');
  const reduce = useReducedMotion();
  const accents: Record<Level, string> = { beginner: 'blue', intermediate: 'amber', pro: 'orange' };
  const accent = accents[level];

  const handleProbe = (value: string) => setProbe(value);

  const renderVisual = () => {
    const t = topic.title;
    if (t === 'What is Python?') return <div className="flow-visual"><motion.div animate={reduce ? {} : { y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>PYTHON PROGRAM</motion.div><ArrowDown/><motion.div animate={reduce ? {} : { scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2.6 }} className="highlight">INTERPRETER / RUNTIME</motion.div><ArrowDown/><div>OUTPUT</div><div className="platforms"><span>DESKTOP</span><span>WEB</span><span>DATA</span><span>AI</span><span>IOT</span></div></div>;
    if (t === 'Python Fundamentals') return <div className="fundamentals"><div className="prompt">&gt;&gt;&gt;</div><motion.div className="typed" animate={reduce ? {} : { boxShadow: ['0 0 0 transparent', '0 0 24px var(--accent-glow)', '0 0 0 transparent'] }} transition={{ repeat: Infinity, duration: 3 }}>print("Hello World")</motion.div><div className="out">Hello World</div><div className="indent-demo"><span>if score &gt;= 50:</span><b>    print("Pass")</b></div></div>;
    if (t === 'Data Types & Typecasting') return <div className="type-map">{['int','float','complex','bool','str','bytes','bytearray','range','list','tuple','set','frozenset','dict','None'].map((x, i) => <motion.button key={x} onClick={() => handleProbe(`${x} → ${conceptMap[t].find((c) => c.name === x)?.definition ?? 'See the concept map for details.'}`)} whileHover={{ scale: 1.04, y: -3 }} className={`type-node ${i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'amber' : 'neutral'}`}>{x}</motion.button>)}<div className="probe-result">{probe || 'Click a data type to inspect it.'}</div></div>;
    if (t === 'Operators & Expressions') return <div className="operator-wall">{['+','-','*','/','//','%','**','==','!=','>','<','>=','<=','and','or','not','&','|','^','~','<<','>>','in','not in','is','is not'].map((x) => <motion.button key={x} whileHover={{ scale: 1.07 }} onClick={() => handleProbe(`${x} → operator used in Python expressions`)}>{x}</motion.button>)}<div className="probe-result">{probe || 'Click an operator.'}</div></div>;
    if (t === 'Input & Output') return <div className="io-demo"><div className="io-box"><small>INPUT</small><strong>&gt; 100 200</strong></div><div className="io-arrow">→</div><div className="io-box"><small>TRANSFORM</small><strong>int + int</strong></div><div className="io-arrow">→</div><div className="io-box"><small>OUTPUT</small><strong>The Sum: 300</strong></div><div className="io-controls"><button onClick={() => handleProbe('input() → reads keyboard input as str in Python 3')}>input()</button><button onClick={() => handleProbe('sep → controls the separator between printed arguments')}>sep</button><button onClick={() => handleProbe('end → controls what print() writes at the end')}>end</button></div><div className="probe-result">{probe || 'Click input(), sep or end.'}</div></div>;
    if (t === 'Control Flow') return <div className="branch-visual"><button className="node start" onClick={() => handleProbe('if → based on some condition result, some group of statements will be executed and some group will not be executed.')}>condition?</button><div className="branch-lines"><button onClick={() => handleProbe('if → execute the indented block when the condition is true')}>TRUE → block executes</button><button onClick={() => handleProbe('else → default branch when the condition is false')}>FALSE → else block</button></div><div className="loop-card"><button onClick={() => handleProbe('for → iterative statement for repeated execution')}>for</button><button onClick={() => handleProbe('while → iterative statement controlled by a condition')}>while</button><small>break • continue • pass</small></div><div className="probe-result">{probe || 'Click a flow-control object.'}</div></div>;
    if (t === 'Strings') return <div className="string-lab"><div className="string-source">Learning Python is very very easy</div><div className="string-ops"><button onClick={() => setProbe('LP')}>slice [0:2]</button><button onClick={() => setProbe('LEARNING PYTHON IS VERY VERY EASY'.toUpperCase())}>upper()</button><button onClick={() => setProbe('Learning|Python|is|very|very|easy')}>split() + join()</button><button onClick={() => setProbe('2')}>count("very")</button><button onClick={() => setProbe('True')}>"Python" in text</button></div><div className="string-result">{probe || 'click an operation'}</div></div>;
    if (t === 'Files & Debugging') return <div className="file-visual"><button className="file-node" onClick={() => setProbe('open() → open a file and work with the returned file object')}>input.txt</button><ArrowRight/><button className="file-node hot" onClick={() => setProbe('open()')}>open()</button><ArrowRight/><button className="file-node" onClick={() => setProbe('read() → read content from an open file')}>read / search</button><ArrowRight/><button className="file-node" onClick={() => setProbe('write() → persist data to a file')}>output.txt</button><div className="try-chip" onClick={() => setProbe('try / except → handle exceptions around risky file operations')}>try → except</div><div className="probe-result">{probe || 'Click a file operation.'}</div></div>;
    if (t === 'Lists') return <div className="list-visual"><div className="list-row">{[10,20,30,40].map((x) => <motion.button key={x} whileHover={{y:-5, rotate:-2}} onClick={() => setProbe(`index → access list element ${x}`)}>{x}</motion.button>)}</div><div className="list-actions">{['append()','insert()','extend()','remove()','pop()','reverse()','sort()'].map((x) => <button key={x} onClick={() => setProbe(`${x} is an important list function in the syllabus.`)}>{x}</button>)}</div><button className="list-comp" onClick={() => setProbe('[x*x for x in range(1,6)] → list comprehension')}>[x*x for x in range(1,6)]</button><div className="probe-result">{probe || 'Click a list object or method.'}</div></div>;
    if (t === 'Tuples') return <div className="tuple-visual"><button className="tuple-pill" onClick={() => setProbe('Tuple is exactly same as List except that it is immutable.')}>(&quot;Hello World&quot;, 21, &quot;Python&quot;)</button><button className="unpack" onClick={() => setProbe('Packing groups values into a tuple; unpacking assigns them to variables.')}>name, age, subject = tuple</button><div className="fixed">IMMUTABLE / READ ONLY</div><div className="probe-result">{probe || 'Click the tuple or unpacking example.'}</div></div>;
    if (t === 'Sets') return <div className="set-visual"><button className="set-circle a" onClick={() => setProbe('Set → collection designed around unique values')}>1 2 3 4</button><button className="set-circle b" onClick={() => setProbe('Set operations include mathematical set operations and membership.')}>3 4 5 6</button><div className="set-result">{['A ∪ B','A ∩ B','A − B','A △ B'].map((x) => <button key={x} onClick={() => setProbe(`${x} → set mathematical operation`)}>{x}</button>)}</div><div className="probe-result">{probe || 'Click a set operation.'}</div></div>;
    if (t === 'Dictionaries') return <div className="dict-visual"><button className="dict-keys" onClick={() => setProbe('Dictionary access is done using keys.')}>name<br/>role<br/>level</button><div className="dict-arrow">→</div><button className="dict-values" onClick={() => setProbe('Values are stored against keys.')}>Hello World<br/>student<br/>pro</button><div className="dict-methods">{['get()','keys()','values()','items()','pop()','popitem()','setdefault()'].map((x) => <button key={x} onClick={() => setProbe(`${x} → dictionary method`)}>{x}</button>)}</div><div className="probe-result">{probe || 'Click a key, value or method.'}</div></div>;
    if (t === 'Functions') return <div className="function-visual"><button className="fn-box" onClick={() => setProbe('def is mandatory when creating a user defined function.')}>def greet():<br/><span>print("Hello World")</span></button><ArrowDown/><button className="call-box" onClick={() => setProbe('Calling a function runs the function body with the provided arguments.')}>greet()</button><ArrowDown/><button className="return-box" onClick={() => setProbe('return is optional and sends a value back to the caller.')}>return value</button><div className="probe-result">{probe || 'Click def, the call, or return.'}</div></div>;
    if (t === 'Modules') return <div className="module-visual"><button onClick={() => setProbe('A module is a reusable Python file containing definitions and statements.')}>module1.py</button><div className="import-arrow">import →</div><button className="app-box" onClick={() => setProbe('from import statement is included in Unit VI.')}>main.py</button><div className="module-foot"><button onClick={() => setProbe('dir(moduleName) → list all members of a specified module')}>dir(module)</button><button onClick={() => setProbe('importlib.reload(module1) → reload a module explicitly')}>reload()</button></div><div className="probe-result">{probe || 'Click a module operation.'}</div></div>;
    return <div className="regex-visual"><button className="regex-pattern" onClick={() => setProbe('\\d → Any digit from 0 to 9')}>\\d+</button><button className="regex-target" onClick={() => setProbe('Pattern target: IDs: 120, 305, 991')}>IDs: 120, 305, 991</button><div className="regex-matches">{['120','305','991'].map((x) => <button key={x} onClick={() => setProbe(`findall() match → ${x}`)}>{x}</button>)}</div><div className="regex-api">{['match()','fullmatch()','search()','findall()','finditer()','compile()'].map((x) => <button key={x} onClick={() => setProbe(`${x} is an important re module function in the course material.`)}>{x}</button>)}</div><div className="probe-result">{probe || 'Click a regex object.'}</div></div>;
  };

  return <div className={`visual-stage ${accent}`}><div className="visual-stage-inner">{renderVisual()}</div></div>;
}

type Task =
  | { kind: 'mcq'; question: string; options: string[]; answer: number; explanation: string }
  | { kind: 'code'; question: string; starter: string; required: string[]; hint: string; preview?: string };

const mcqBank: Record<string, [string, string, string, string, string][]> = {
  'What is Python?': [
    ['Python is best described as…', 'A general-purpose high-level programming language', 'A database engine', 'An operating system', 'A markup language'],
    ['Who developed Python according to the supplied course material?', 'Guido Van Rossum', 'James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup'],
    ['Which area is explicitly listed as an application area of Python?', 'Data Science and Machine Learning', 'BIOS firmware only', 'CPU microcode only', 'HTML rendering only'],
  ],
  'Python Fundamentals': [
    ['What does Python indentation primarily define?', 'The structure of blocks', 'Variable data types', 'Internet connections', 'File compression'],
    ['Which command prints a message in Python?', 'print("Hello World")', 'echo("Hello World")', 'printf.message("Hello World")', 'display.text("Hello World")'],
    ['Which feature is emphasized by the one-line Hello World example?', 'Concise and readable syntax', 'Mandatory braces', 'Mandatory semicolons', 'Manual memory allocation'],
  ],
  'Data Types & Typecasting': [
    ['What is the type of 10 in Python?', 'int', 'str', 'float', 'list'],
    ['Which function is used to inspect the type of an object?', 'type()', 'kind()', 'typeof()', 'classof()'],
    ['Which built-in value represents the absence of a value?', 'None', 'NullPoint', 'Empty', 'Void'],
  ],
  'Operators & Expressions': [
    ['What does // perform?', 'Floor division', 'Exponentiation', 'Bitwise OR', 'Membership testing'],
    ['Which operator tests membership?', 'in', 'is', '==', '=>'],
    ['Which operator checks object identity?', 'is', '==', 'in', 'equals()'],
  ],
  'Input & Output': [
    ['What type does input() return in Python 3 before conversion?', 'str', 'int', 'float', 'bool'],
    ['What does sep control in print()?', 'The separator between printed arguments', 'The input prompt', 'The loop step', 'The file mode'],
    ['What does end control in print()?', 'What is written after the printed arguments', 'The number of arguments', 'The input data type', 'The function return type'],
  ],
  'Control Flow': [
    ['Which statement chooses a branch based on a condition?', 'if', 'import', 'class', 'with'],
    ['What does continue do inside a loop?', 'Skip the current iteration and continue with the next', 'Stop the entire program', 'Restart Python', 'Delete the loop'],
    ['What does break do inside a loop?', 'Terminate the loop', 'Skip one line', 'Repeat the current iteration forever', 'Define a function'],
  ],
  'Strings': [
    ['Which direction does a negative string index address?', 'From right to left', 'From left to right only', 'Randomly', 'Only from the middle'],
    ['In s[begin:end], the end index is…', 'Excluded', 'Included twice', 'Always ignored', 'Converted to a string'],
    ['Which method splits a string into parts?', 'split()', 'join()', 'count()', 'strip()'],
  ],
  'Files & Debugging': [
    ['Which built-in function opens a file?', 'open()', 'file()', 'readfile()', 'load()'],
    ['Which construct is commonly used for safe resource handling in the course material?', 'with open(...)', 'switch open(...)', 'try file(...) only', 'loop file(...)'],
    ['Which block handles an exception?', 'except', 'catch', 'error', 'handle'],
  ],
  'Lists': [
    ['Which list method adds one item to the end?', 'append()', 'extendone()', 'push()', 'addLast()'],
    ['Which method removes and returns an item from a list?', 'pop()', 'removeAt()', 'discard()', 'shift()'],
    ['What is a list comprehension used for?', 'Building a list from an expression and iteration/filter logic', 'Opening a file', 'Defining a module', 'Matching regex text'],
  ],
  'Tuples': [
    ['What is the key property emphasized for tuples?', 'They are immutable', 'They are always sorted', 'They only hold numbers', 'They require unique values'],
    ['What is tuple packing?', 'Grouping multiple values into a tuple', 'Sorting tuple values', 'Removing tuple values', 'Converting a tuple to a set'],
    ['What is tuple unpacking?', 'Assigning tuple elements to separate variables', 'Deleting a tuple', 'Appending to a tuple', 'Sorting tuple keys'],
  ],
  'Sets': [
    ['What is a key property of a set?', 'It stores unique values', 'It preserves duplicate values', 'It requires key-value pairs', 'It is always indexed'],
    ['Which operator represents set intersection?', '&', '+', '//', '**'],
    ['Which method removes an item without raising an error when it is absent?', 'discard()', 'remove()', 'popitem()', 'delete()'],
  ],
  'Dictionaries': [
    ['How are dictionary values normally accessed?', 'By keys', 'By numeric position only', 'By character index', 'By loop count only'],
    ['Which method safely reads a value and can return a default?', 'get()', 'read()', 'fetchKey()', 'lookupValue()'],
    ['Which method returns key-value pairs as a view?', 'items()', 'pairs()', 'entriesOnly()', 'map()'],
  ],
  'Functions': [
    ['Which keyword starts a user-defined function?', 'def', 'func', 'function', 'lambda'],
    ['What does a default argument provide?', 'A value used when that argument is not supplied', 'A required file handle', 'A new module', 'A regex match'],
    ['What must a recursive function have to avoid unbounded recursion?', 'A base case', 'A class variable', 'A menu', 'A list comprehension'],
  ],
  'Modules': [
    ['Which statement imports a module?', 'import module_name', 'include module_name', 'use module_name', 'load module_name'],
    ['What does from module import name do?', 'Imports a selected name from a module', 'Creates a new interpreter', 'Deletes a module', 'Compiles a package into Java'],
    ['What does dir(module) help you inspect?', 'Members available in a module', 'Only file permissions', 'Only runtime errors', 'Only Python versions'],
  ],
  'Regular Expressions': [
    ['In the regex course examples, what does \\d match?', 'A digit', 'A whitespace character only', 'A word boundary only', 'A newline only'],
    ['Which function extracts all non-overlapping matches from text?', 'findall()', 'findone()', 'extractall()', 'matchall()'],
    ['Which function checks whether the entire string matches a pattern?', 'fullmatch()', 'startswith()', 'findall()', 'searchall()'],
  ],
};

const bonusCodeByTopic: Record<string, (level: Level) => Omit<Extract<Task, {kind:'code'}>, 'kind'>> = {
  'What is Python?': (level) => ({ question: `${level === 'beginner' ? 'Print' : 'Build'} a tiny Python application that demonstrates Python being a general-purpose language by printing two application areas.`, starter: 'print("Python")\n', required: ['print(', 'Data Science', 'Web'], hint: 'Use two print statements and keep the application names exactly visible in the output.', preview: 'Python\nData Science\nWeb Applications' }),
  'Python Fundamentals': () => ({ question: 'Create a short program with an assignment, a conditional expression and a print statement.', starter: 'a = 10\nb = 20\n', required: ['if', 'else', 'print('], hint: 'Follow the course example: value_if_true if condition else value_if_false.', preview: '40' }),
  'Data Types & Typecasting': () => ({ question: 'Create values of two different data types, inspect them with type(), then convert a numeric string to int.', starter: 'a = 10\nb = "20"\n', required: ['type(', 'int('], hint: 'Keep one numeric value and one numeric string so the conversion is visible.', preview: "<class 'int'>\n20" }),
  'Operators & Expressions': () => ({ question: 'Write one expression that demonstrates arithmetic, comparison, logical and membership operators.', starter: 'x = 8\ny = 3\n', required: ['+', '>', 'and', 'in'], hint: 'Use the same values in a compact set of print statements.', preview: '11\nTrue\nTrue' }),
  'Input & Output': () => ({ question: 'Read two values from one line, convert them to integers, and print their sum using sep.', starter: 'a, b = input().split()\n', required: ['map(', 'sep=', 'print('], hint: 'map(int, ...) is a compact way to convert both values.', preview: 'Sum: 30' }),
  'Control Flow': () => ({ question: 'Print odd numbers below 10 using a for loop and continue.', starter: 'for i in range(10):\n    pass\n', required: ['for ', 'continue', 'print('], hint: 'Skip even numbers, then print the remaining values.', preview: '1\n3\n5\n7\n9' }),
  'Strings': () => ({ question: 'Take a string, strip spaces, split it into words, and join the words with a dash.', starter: 'text = " Learning Python "\n', required: ['strip(', 'split(', 'join('], hint: 'Chain the transformation: clean first, split second, join last.', preview: 'Learning-Python' }),
  'Files & Debugging': () => ({ question: 'Show a safe file-reading pattern using try/except and a with-open block.', starter: 'try:\n    pass\nexcept Exception:\n    pass\n', required: ['with open(', 'except', 'read('], hint: 'Read all text inside the managed file block.', preview: 'File handled safely.' }),
  'Lists': () => ({ question: 'Create a list, append a value, sort it and build a squared list with a comprehension.', starter: 'values = [3, 1, 2]\n', required: ['append(', 'sort(', '[', '*'], hint: 'Use the original list for mutation and a comprehension for the squared result.', preview: '[1, 2, 3, 16]' }),
  'Tuples': () => ({ question: 'Pack three values in a tuple and unpack them into three variables.', starter: 'record = ("Hello World", 21, "Python")\n', required: ['record', '=', ','], hint: 'Use direct tuple unpacking such as a, b, c = record.', preview: 'Hello World 21 Python' }),
  'Sets': () => ({ question: 'Create two sets and print their union and intersection.', starter: 'a = {1, 2, 3}\nb = {3, 4, 5}\n', required: ['print(', '&', '|'], hint: 'The ampersand is intersection; the pipe is union.', preview: '{1, 2, 3, 4, 5}\n{3}' }),
  'Dictionaries': () => ({ question: 'Create a dictionary, read a value with get(), add a default entry with setdefault(), then print items().', starter: 'data = {"name": "Hello World"}\n', required: ['get(', 'setdefault(', 'items('], hint: 'Use get() for lookup, setdefault() for a default value, then iterate or print items().', preview: 'Hello World\nlevel pro' }),
  'Functions': () => ({ question: 'Define a function with a default argument and return a value, then call it.', starter: 'def greet(name="Hello World"):\n    pass\n', required: ['def ', 'return', 'greet('], hint: 'Return a greeting string and call the function without supplying the default argument.', preview: 'Hello World' }),
  'Modules': () => ({ question: 'Import a standard-library module, import one selected name from it, and inspect the module with dir().', starter: 'import math\n', required: ['import math', 'from math import', 'dir('], hint: 'Use sqrt as the selected import, then inspect math.', preview: '[' + 'many module members' + ']' }),
  'Regular Expressions': () => ({ question: 'Use a regular expression to extract all numbers from a text string.', starter: 'import re\ntext = "IDs: 120, 305, 991"\n', required: ['findall(', '\\d+', 'print('], hint: 'Use the digit class with + to capture complete numbers.', preview: "['120', '305', '991']" }),
};

function buildTasks(topic: Topic, level: Level): Task[] {
  const bank = mcqBank[topic.title] ?? [];
  const levelPrefix = level === 'beginner'
    ? 'Foundation check:'
    : level === 'intermediate'
      ? 'Scenario check:'
      : 'Mastery check:';
  const mcqs: Task[] = bank.map(([q, a, b, c, d]) => {
    const raw = [a, b, c, d];
    const order = level === 'pro' ? [2, 0, 3, 1] : level === 'intermediate' ? [1, 2, 0, 3] : [0, 1, 2, 3];
    const options = order.map(i => raw[i]);
    return {
      kind: 'mcq',
      question: `${levelPrefix} ${q}`,
      options,
      answer: options.indexOf(a),
      explanation: `${a} is the expected answer for this topic according to the course material.`,
    };
  });
  const base = topic.activity;
  const bonus = bonusCodeByTopic[topic.title]?.(level);
  return [
    ...mcqs.slice(0, 3),
    { kind: 'code', question: `${level === 'beginner' ? 'Code it' : level === 'intermediate' ? 'Implement it' : 'Engineer it'}: ${base.task}`, starter: base.starter, required: base.required, hint: base.hint, preview: base.preview },
    ...(bonus ? [{ kind: 'code' as const, ...bonus }] : []),
  ];
}

function ActivityGate({ topic, level, complete, onComplete }: { topic: Topic; level: Level; complete: boolean; onComplete: () => void }) {
  const tasks = useMemo(() => buildTasks(topic, level), [topic, level]);
  const [taskIndex, setTaskIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [mcqStatus, setMcqStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [code, setCode] = useState('');
  const [codeStatus, setCodeStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [ran, setRan] = useState(false);

  useEffect(() => {
    setTaskIndex(0); setSelected(null); setMcqStatus('idle'); setCode(''); setCodeStatus('idle'); setShowHint(false); setRan(false);
  }, [topic.id, level]);

  useEffect(() => {
    const task = tasks[taskIndex];
    if (task?.kind === 'code') setCode(task.starter);
    setSelected(null); setMcqStatus('idle'); setCodeStatus('idle'); setShowHint(false); setRan(false);
  }, [taskIndex, tasks]);

  const finish = () => {
    if (taskIndex < tasks.length - 1) setTaskIndex((i) => i + 1);
    else onComplete();
  };

  const task = tasks[taskIndex];
  if (complete) {
    return (
      <div className="activity activity-done">
        <div className="activity-head">
          <div><span className="activity-kicker">5 TASK CHECKPOINT • 5 / 5</span><h3>All five tasks are complete.</h3></div>
          <span className="gate-pill"><Check size={13}/> COMPLETE</span>
        </div>
        <div className="checkpoint-complete"><Check size={22}/><div><strong>Next topic unlocked.</strong><span>3 MCQs and 2 coding tasks cleared for this topic.</span></div></div>
      </div>
    );
  }
  const checkMcq = () => {
    if (!task || task.kind !== 'mcq' || selected === null) return;
    if (selected === task.answer) setMcqStatus('success');
    else setMcqStatus('error');
  };
  const checkCode = () => {
    if (!task || task.kind !== 'code') return;
    if (validate(code, task.required)) setCodeStatus('success');
    else setCodeStatus('error');
  };

  const done = complete || (task.kind === 'mcq' ? mcqStatus === 'success' : codeStatus === 'success');
  return (
    <div className={`activity ${complete ? 'activity-done' : ''}`}>
      <div className="activity-head">
        <div>
          <span className="activity-kicker">5 TASK CHECKPOINT • TASK {taskIndex + 1} / {tasks.length}</span>
          <h3>{task.kind === 'mcq' ? task.question : task.question}</h3>
        </div>
        <span className="gate-pill">{complete ? <><Check size={13}/> COMPLETE</> : <><Lock size={13}/> GATE</>}</span>
      </div>
      <div className="task-progress"><div style={{ width: `${((taskIndex + (done ? 1 : 0)) / tasks.length) * 100}%` }} /></div>

      {task.kind === 'mcq' ? (
        <div className="mcq-wrap">
          <div className="mcq-options">
            {task.options.map((option, i) => <button key={option} className={`mcq-option ${selected === i ? 'chosen' : ''} ${mcqStatus === 'success' && i === task.answer ? 'correct' : ''}`} onClick={() => { if (mcqStatus !== 'success') { setSelected(i); setMcqStatus('idle'); } }}>{String.fromCharCode(65 + i)}. {option}</button>)}
          </div>
          {mcqStatus === 'error' && <div className="activity-feedback error">Not quite. Re-read the concept explanation and choose again.</div>}
          {mcqStatus === 'success' && <div className="activity-feedback success"><Check size={15}/> Correct. {task.explanation}</div>}
          <div className="activity-actions">
            <button className="check-btn" onClick={checkMcq} disabled={selected === null || mcqStatus === 'success'}><Check size={15}/> Check answer</button>
            {mcqStatus === 'success' && <button className="next-task-btn" onClick={finish}>{taskIndex === tasks.length - 1 ? 'Finish checkpoint' : 'Continue'} <ArrowRight size={15}/></button>}
          </div>
        </div>
      ) : (
        <>
          <div className="editor-meta"><span>main.py</span><span>Python</span></div>
          <textarea spellCheck={false} value={code} onChange={(e) => { setCode(e.target.value); setCodeStatus('idle'); setRan(false); }} aria-label={`Coding activity for ${topic.title}`} />
          <div className="activity-actions">
            <button className="check-btn" onClick={checkCode}><Check size={15}/> Check code</button>
            <button className="run-btn" onClick={() => setRan(true)}><Gauge size={15}/> Simulate run</button>
            <button className="hint-btn" onClick={() => setShowHint((v) => !v)}>{showHint ? 'Hide hint' : 'Show hint'}</button>
          </div>
          {ran && <div className="run-preview"><span>&gt;&gt;&gt;</span><span>{task.preview ?? 'Checkpoint run simulated.'}</span></div>}
          {showHint && <div className="hint"><span>Hint</span>{task.hint}</div>}
          {codeStatus === 'error' && <div className="activity-feedback error">Not yet. Add the required Python concepts and try again.</div>}
          {codeStatus === 'success' && <div className="activity-feedback success"><Check size={15}/> Coding task passed.</div>}
          {codeStatus === 'success' && <div className="activity-actions"><button className="next-task-btn" onClick={finish}>{taskIndex === tasks.length - 1 ? 'Finish checkpoint' : 'Continue'} <ArrowRight size={15}/></button></div>}
        </>
      )}
      <div className="task-strip"><span>03 MCQ + 02 CODING • 05 TOTAL</span><span>Every task must be correct</span></div>
    </div>
  );
}

function TopicSection({ topic, index, level, unlocked, completed, justUnlocked, onComplete, onNext }: { topic: Topic; index: number; level: Level; unlocked: boolean; completed: boolean; justUnlocked: boolean; onComplete: () => void; onNext: () => void }) {
  return (
    <motion.section id={`topic-${topic.id}`} className={`topic-screen ${unlocked ? '' : 'locked-screen'}`} animate={justUnlocked ? { opacity: [0.8, 1, 1], scale: [0.985, 1.015, 1] } : { opacity: 1, scale: 1 }} transition={{ duration: justUnlocked ? 0.8 : 0.35, ease: 'easeOut' }}>
      <AnimatePresence>{!unlocked && <motion.div className="topic-lock" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08, backdropFilter: 'blur(0px)' }} transition={{ duration: 0.55 }}><Lock size={30}/><strong>TOPIC LOCKED</strong><span>Complete the previous coding checkpoint to enter this topic.</span></motion.div>}</AnimatePresence>
      {justUnlocked && <motion.div className="unlock-banner" initial={{ opacity: 0, y: -18, scale: 0.92 }} animate={{ opacity: [0,1,1,0], y: [-18,0,0,-8], scale: [0.92,1,1,0.98] }} transition={{ duration: 1.5, times: [0,.18,.72,1] }}><Sparkles size={16}/> TOPIC UNLOCKED <Check size={15}/></motion.div>}
      <div className="topic-shell">
        <div className="topic-header"><span>{topic.unit}</span><span>{topic.number} / 15</span></div>
        <motion.div className="topic-layout" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }}>
          <div className="topic-copy">
            <div className="topic-label">{topic.subtitle}</div>
            <h2>{topic.title}</h2>
            <p className="level-focus">{topic.levelExplanation}</p>
            <div className="course-text"><div className="course-text-head"><span>COURSE MATERIAL</span><span>{topic.sourceLabel.replace('PDF • ', '')}</span></div><div className="exact-text">{topic.sourceText}</div></div>
            <InteractiveMap topic={topic}/>
            <div className="coverage"><span>SYLLABUS COVERAGE</span><div>{topic.coverage.map((item) => <span key={item}>{item}</span>)}</div></div>
          </div>
          <div className="topic-right">
            <VisualStage topic={topic} level={level}/>
            <div className="code-card"><div className="code-head"><span><Code2 size={14}/> EXAMPLE</span><span>PYTHON</span></div><pre><code>{topic.code}</code></pre></div>
            <ActivityGate topic={topic} level={level} complete={completed} onComplete={onComplete}/>
            <div className="topic-bottom"><button className="back-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowLeft size={15}/> course home</button><button className="next-btn" disabled={!completed} onClick={onNext}>{completed ? 'Next topic' : 'Complete activity first'} <ArrowRight size={15}/></button></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProgressRail({ topics, active, completed, onJump }: { topics: Topic[]; active: number; completed: boolean[]; onJump: (index: number) => void }) {
  return <aside className="progress-rail"><div className="rail-label">COURSE MAP</div><div className="rail-count">{String(active + 1).padStart(2, '0')} / {topics.length}</div><div className="rail-items">{topics.map((t, i) => <button key={t.id} disabled={i > 0 && !completed[i - 1] && i !== active} className={i === active ? 'active' : ''} onClick={() => onJump(i)} title={t.title}><i>{completed[i] ? <Check size={10}/> : String(i + 1).padStart(2, '0')}</i><span>{t.title}</span></button>)}</div></aside>;
}

function Completion({ level, onRestart, onSwitch }: { level: Level; onRestart: () => void; onSwitch: () => void }) {
  return <section className="completion-screen"><div className="completion-card"><div className="completion-overline">PATH COMPLETE • 15 / 15</div><h2>You finished<br/><span>{levelInfo[level].title}</span></h2><p>You worked through the six-unit course map, explored the interactive objects, and cleared every coding gate in this learning path.</p><div className="complete-actions"><button onClick={onRestart} className="primary"><ArrowLeft size={16}/> Review from start</button><button onClick={onSwitch} className="secondary"><RotateCcw size={15}/> Choose another level</button></div></div></section>;
}

function App() {
  const [level, setLevel] = useState<Level | null>(null);
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(Array(15).fill(false));
  const [unlockingIndex, setUnlockingIndex] = useState<number | null>(null);
  const [theme, setTheme] = useState<ThemeName>(() => (localStorage.getItem('python-journey-theme') as ThemeName) || 'paper');
  const [scale, setScale] = useState(() => Number(localStorage.getItem('python-journey-scale') || '1'));
  const topics = useMemo(() => level ? topicsByLevel[level] : [], [level]);

  useEffect(() => { applyTheme(theme, scale); localStorage.setItem('python-journey-theme', theme); localStorage.setItem('python-journey-scale', String(scale)); }, [theme, scale]);

  useEffect(() => {
    if (!level) return;
    const key = `python-journey-progress-v4-${level}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try { const parsed = JSON.parse(stored); if (Array.isArray(parsed) && parsed.length === 15) setCompleted(parsed); } catch { setCompleted(Array(15).fill(false)); }
    } else setCompleted(Array(15).fill(false));
  }, [level]);

  useEffect(() => {
    if (!level) return;
    const sections = topics.map((t) => document.getElementById(`topic-${t.id}`));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) { const idx = sections.findIndex((s) => s === visible.target); if (idx >= 0) { if (idx > 0 && !completed[idx - 1]) { const back = sections[idx - 1]; if (back) back.scrollIntoView({behavior:'smooth', block:'start'}); setActive(idx - 1); } else { setActive(idx); } } }
    }, { threshold: [0.25, 0.45, 0.7], rootMargin: '-18% 0px -55% 0px' });
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [level, topics, completed]);

  const choose = (next: Level) => { setLevel(next); setActive(0); setCompleted(Array(15).fill(false)); requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' })); };
  const completeTopic = (i: number) => {
    setCompleted((prev) => { const next = [...prev]; next[i] = true; if (level) localStorage.setItem(`python-journey-progress-v4-${level}`, JSON.stringify(next)); return next; });
    const nextIndex = i + 1;
    if (nextIndex < topics.length) {
      setUnlockingIndex(nextIndex);
      window.setTimeout(() => {
        setUnlockingIndex(null);
        requestAnimationFrame(() => scrollToId(`topic-${topics[nextIndex].id}`));
      }, 850);
    }
  };
  const jump = (index: number) => { if (index > 0 && !completed[index - 1]) return; scrollToId(`topic-${topics[index].id}`); };
  const reset = () => { setLevel(null); setActive(0); setCompleted(Array(15).fill(false)); setUnlockingIndex(null); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return <div className="app">
    <AnimatePresence mode="wait">
      {!level ? <LevelPicker key="picker" onPick={choose} theme={theme} scale={scale} onTheme={setTheme} onScale={setScale}/> : <motion.div key="course" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <ThemeDock theme={theme} scale={scale} onTheme={setTheme} onScale={setScale}/><header className="course-bar"><button onClick={reset} className="course-brand">PYTHON // THE JOURNEY</button><div className="course-mode"><span>{levelInfo[level].badge}</span>{levelInfo[level].title}</div><div className="bar-actions"><button onClick={reset} className="switch-btn"><RotateCcw size={14}/> Switch level</button></div></header>
        <ProgressRail topics={topics} active={active} completed={completed} onJump={jump}/>
        <div className="scroll-line"><motion.div animate={{ scaleX: (active + 1) / topics.length }} /></div>
        <main>{topics.map((topic, i) => <TopicSection key={topic.id} topic={topic} index={i} level={level} unlocked={i === 0 || completed[i - 1]} completed={completed[i]} justUnlocked={unlockingIndex === i} onComplete={() => completeTopic(i)} onNext={() => i < topics.length - 1 && jump(i + 1)}/>)}<Completion level={level} onRestart={() => jump(0)} onSwitch={reset}/></main>
        <div className="mobile-progress">{String(active + 1).padStart(2, '0')} / {topics.length} • {completed.filter(Boolean).length} complete</div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}

export default App;
