// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   ArrowUpRight,
// } from "lucide-react";

// const links = [
//   { label: "Home", href: "/" },
//   { label: "Speakers", href: "/speakers" },
//   { label: "Schedule", href: "/forum-schedule" },
//   { label: "Organizers", href: "/organizing-committee" },
// ];


// const BASE_PATH =
//   process.env.NODE_ENV === "production"
//     ? "/ioscforum_iosc-2026"
//     : "";
// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const closeMenus = () => {
//     setOpen(false);
//   };

//   const desktopLinkClass =
//     "group relative py-2 text-sm font-medium text-slate-200/85 transition-colors duration-300 hover:text-cyan-300";

//   const mobileLinkClass =
//     "border-b border-cyan-100/10 py-4 text-sm font-medium text-slate-200 transition-all duration-300 hover:pl-2 hover:text-cyan-300";

//   return (
//     <header className="absolute inset-x-0 top-0 z-50 border-b border-cyan-300/20 bg-[#061B32]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">

//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
//         aria-label="Main navigation"
//       >

//         {/* IOSC Forum Logo */}
//         <Link
//           href="/"
//           onClick={closeMenus}
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

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-8 md:flex">

//           {links.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className={desktopLinkClass}
//             >
//               {link.label}

//               <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
//             </Link>
//           ))}

//           {/* Join Forum Button */}
//           <Link
//             href="/#register"
//             className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-3 text-sm font-semibold text-[#04182B] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:from-cyan-300 hover:to-sky-300 hover:shadow-cyan-400/20"
//           >
//             Join the Forum

//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="relative z-10 rounded-xl border border-cyan-300/30 bg-white/5 p-2.5 text-cyan-100 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-300 md:hidden"
//           aria-label={
//             open ? "Close navigation menu" : "Open navigation menu"
//           }
//           aria-expanded={open}
//           onClick={() => setOpen((value) => !value)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile Navigation */}
//       <div
//         className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
//           open
//             ? "grid-rows-[1fr] opacity-100"
//             : "grid-rows-[0fr] opacity-0"
//         }`}
//         aria-hidden={!open}
//       >
//         <div className="overflow-hidden">
//           <div className="border-t border-cyan-300/15 bg-[#061B32] px-5 py-5 sm:px-8">
//             <div className="mx-auto flex max-w-7xl flex-col">

//               {links.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   tabIndex={open ? 0 : -1}
//                   onClick={closeMenus}
//                   className={mobileLinkClass}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               <Link
//                 href="/#register"
//                 tabIndex={open ? 0 : -1}
//                 onClick={closeMenus}
//                 className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-3.5 text-sm font-semibold text-[#04182B] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:from-cyan-300 hover:to-sky-300"
//               >
//                 Join the Forum
//                 <ArrowUpRight size={17} />
//               </Link>

//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Schedule", href: "/forum-schedule" },
  { label: "Organizers", href: "/organizing-committee" },
];

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
  };

  const desktopLinkClass =
    "group relative py-2 text-sm font-medium text-slate-200/85 transition-colors duration-300 hover:text-cyan-300";

  const mobileLinkClass =
    "border-b border-cyan-100/10 py-4 text-sm font-medium text-slate-200 transition-all duration-300 hover:pl-2 hover:text-cyan-300";

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-cyan-300/20 bg-[#061B32]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >

        {/* Official Forum Branding */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="The 2nd International Forum on Intelligent Ocean Sensing and Computing - Home"
          className="relative z-10 flex items-center"
        >
          <Image
            src={`${BASE_PATH}/images/iosc-logo-1.png`}
            alt="IOSC Forum Logo"
            width={420}
            height={180}
            priority
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={desktopLinkClass}
            >
              {link.label}

              <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Join Forum */}
          <Link
            href="/#register"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-3 text-sm font-semibold text-[#04182B] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:from-cyan-300 hover:to-sky-300 hover:shadow-cyan-400/20"
          >
            Join the Forum

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-10 rounded-xl border border-cyan-300/30 bg-white/5 p-2.5 text-cyan-100 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-300 md:hidden"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="border-t border-cyan-300/15 bg-[#061B32] px-5 py-5 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col">

              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#register"
                onClick={closeMenus}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-3.5 text-sm font-semibold text-[#04182B] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:from-cyan-300 hover:to-sky-300"
              >
                Join the Forum
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

