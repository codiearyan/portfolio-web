import Link from "next/link";
import { DATA } from "@/data/resume";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/data-deletion", label: "Data deletion" },
];

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
      <span>
        © {new Date().getFullYear()} {DATA.name}
      </span>
      {LEGAL_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </footer>
  );
}
