import { useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code, language = 'python' }: { code:string; language?:string }) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.split('\n'), [code]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="code-card">
      <div className="editor-bar"><span /><span /><span /><b>example.{language}</b><button onClick={copy}>{copied ? <Check size={13}/> : <Copy size={13}/>} {copied ? 'COPIED' : 'COPY'}</button></div>
      <div className="code-body">
        {lines.map((line, i) => <div className="code-line" key={`${i}-${line}`}><span>{String(i+1).padStart(2,'0')}</span><code>{line || ' '}</code></div>)}
      </div>
    </div>
  );
}
