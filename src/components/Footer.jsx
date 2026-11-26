// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// const footerLinks = [
//   { label: "Home", href: "/" },
//   { label: "Speakers", href: "/speakers" },
//   { label: "Schedule", href: "/forum-schedule" },
//   { label: "Organizers", href: "/organizing-committee" },
// ];
// const BASE_PATH =
//   process.env.NODE_ENV === "production"
//     ? "/ioscforum_iosc-2026"
//     : "";
// export default function Footer() {
//   return (
//     <footer className="bg-[#041120] text-white">
//       <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
//         <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
//           {/* <a href="#home" className="flex w-fit items-center gap-3">
//             <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/50 text-sm font-black text-cyan-200">HEU</span>
//             <span>
//               <span className="block text-sm font-bold tracking-[0.18em]">IOSC FORUM</span>
//               <span className="mt-1 block text-xs text-white/50">Harbin Engineering University</span>
//             </span>
//           </a> */}
//           <Link
//           href="/"
//           aria-label="IOSC Forum home"
//           className="relative z-10 flex items-center"
//         >
//           <Image
//             src={`${BASE_PATH}/images/iosc-logo-1.png`}
//             alt="IOSC Forum Logo"
//             width={420}
//             height={180}
//             priority
//             className="h-20 w-auto object-contain"
//           />
//         </Link>
//           <div className="flex flex-wrap gap-x-6 gap-y-3">
//             {footerLinks.map((link) => (
//               <a key={link.label} href={link.href} className="text-sm text-white/60 transition hover:text-cyan-200">{link.label}</a>
//             ))}
//             <a href="#register" className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-cyan-200">Contact <ArrowUpRight size={14} /></a>
//           </div>
//         </div>
//         <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
//           <p>© {new Date().getFullYear()} IOSC Forum. All rights reserved.</p>
//           <p>Hosted by Harbin Engineering University · Confirm official branding before publication.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Schedule", href: "/forum-schedule" },
  { label: "Organizers", href: "/organizing-committee" },
];

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

export default function Footer() {
  return (
    <footer className="bg-[#041120] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">

        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">

          {/* Forum Branding */}
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="IOSC Forum home"
              className="relative z-10 flex w-fit items-center"
            >
              <Image
                src={`${BASE_PATH}/images/iosc-logo-1.png`}
                alt="IOSC Forum Logo"
                width={420}
                height={180}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <h2 className="mt-5 max-w-lg text-sm font-semibold leading-6 text-white/90 sm:text-base">
              The 2nd International Forum on Intelligent Ocean
              Sensing and Computing
            </h2>

            <p className="mt-2 text-sm text-white/50">
              第二届智能海洋感知与计算国际论坛
            </p>

            <p className="mt-3 max-w-md text-xs leading-6 text-white/40">
              Advancing intelligent ocean sensing, marine observation,
              underwater systems, and computing technologies.
            </p>
          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-cyan-200"
            >
              Contact
              <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} IOSC Forum. All rights reserved.
          </p>

          <p>
            Hosted by Harbin Engineering University
          </p>
        </div>
      </div>
    </footer>
  );
}

