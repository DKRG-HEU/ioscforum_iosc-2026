import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Speakers", href: "#speakers" },
  { label: "Programme", href: "#programme" },
];

export default function Footer() {
  return (
    <footer className="bg-[#041120] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <a href="#home" className="flex w-fit items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/50 text-sm font-black text-cyan-200">HEU</span>
            <span>
              <span className="block text-sm font-bold tracking-[0.18em]">IOSC FORUM</span>
              <span className="mt-1 block text-xs text-white/50">Harbin Engineering University</span>
            </span>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-white/60 transition hover:text-cyan-200">{link.label}</a>
            ))}
            <a href="#register" className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-cyan-200">Contact <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IOSC Forum. All rights reserved.</p>
          <p>Hosted by Harbin Engineering University · Confirm official branding before publication.</p>
        </div>
      </div>
    </footer>
  );
}
