export function RichText({ text }: { text: string }) {
  const parts = text.split("`");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <code className="font-mono text-[0.92em] break-words text-primary" key={index}>
        {part}
      </code>
    ) : (
      part
    ),
  );
}
