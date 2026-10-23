export function RichText({ text }: { text: string }) {
  const parts = text.split("`");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <code
        className="rounded bg-surface-container px-1 py-0.5 font-mono text-[0.8125rem] text-primary"
        key={index}
      >
        {part}
      </code>
    ) : (
      part
    ),
  );
}
