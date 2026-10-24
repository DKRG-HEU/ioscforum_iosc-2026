import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AttendingPageHeader({ title, description }) {
  return (
    <section className="relative overflow-hidden bg-[#071a32] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/55"
        >
          <Link href="/" className="transition hover:text-cyan-200">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/attending"
            className="transition hover:text-cyan-200"
          >
            Attending
          </Link>
          {title !== 'Attending' && (
            <>
              <ChevronRight size={14} />
              <span className="text-cyan-200">{title}</span>
            </>
          )}
        </nav>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          IOSC Forum · Harbin Engineering University
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}