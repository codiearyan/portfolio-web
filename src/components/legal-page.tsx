import Markdown from "react-markdown";

export const LEGAL_LAST_UPDATED = "25 September 2026";

export default function LegalPage({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <main className="flex flex-col gap-8">
      <header className="space-y-2">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="font-mono text-xs text-muted-foreground">
          Last updated: {LEGAL_LAST_UPDATED}
        </p>
      </header>
      <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-headings:font-display prose-headings:tracking-tight">
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
}
