/** Documentation placeholders are deliberately separate from copyable examples. */
export function SyntaxBlock({ code }: { code: string }) {
  return <pre className="syntax-block"><code>{code}</code></pre>;
}
