import Link from "next/link";
import type { Route } from "next";

const pageLinks: { href: Route; label: string }[] = [
  { href: "/CSR", label: "CSR: Client-Side Rendering" },
  { href: "/posts/1" as Route, label: "SSG: Static Site Generation" },
  { href: "/SSR", label: "SSR: Server-Side Rendering" },
  { href: "/ISR", label: "ISR: Incremental Static Regeneration" },
];

export default function Home() {
  return (
    <main className="flex flex-col p-4 space-y-6">
      <h1 className="text-2xl font-bold">Next.js 16 Rendering Patterns</h1>
      <p>This page is already SSG by default!</p>

      {pageLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="underline font-semibold text-blue-400 hover:text-blue-500 transition-colors duration-200"
        >
          {label}
        </Link>
      ))}
    </main>
  );
}
