export function RichText({ text }: { text: string }) {
  const parts = text.split("`");
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <code className="font-mono text-[0.92em] text-primary" key={index}>
        {part.replaceAll("-", "\u2011")}
      </code>
    ) : (
      part
    ),
  );
}
