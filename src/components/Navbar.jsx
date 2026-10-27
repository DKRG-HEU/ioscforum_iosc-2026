// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import {
//   Menu,
//   X,
//   ArrowUpRight,
//   ChevronDown,
//   Waves,
// } from "lucide-react";
// const links = [
//   // { label: 'About', href: '/#about', section: true },
//   // { label: 'Themes', href: '/#themes', section: true },
//   { label: 'Home', href: '/' },
//   { label: 'Speakers', href: '/speakers' },
//   { label: 'Schedule', href: '/forum-schedule' },
//   { label: 'Organizers', href: '/organizing-committee' },
//   // { label: 'Programme', href: '/#programme', section: true },
// ];

// // const attendingLinks = [
// //   { label: 'Overview', href: '/attending' },
// //   { label: 'Visa Information', href: '/attending/visa-information' },
// //   { label: 'Registration', href: '/attending/registration' },
// //   { label: 'Accommodation & Travel', href: '/attending/accommodation-travel' },
// // ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [attendingOpen, setAttendingOpen] = useState(false);
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   const closeMenus = () => {
//     setOpen(false);
//     setAttendingOpen(false);
//   };

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();

//     setCursor({
//       x: event.clientX - rect.left,
//       y: event.clientY - rect.top,
//     });
//   };

//   const desktopLinkClass =
//     'group relative py-2 text-sm text-white/75 transition-colors duration-300 hover:text-white';

//   const mobileLinkClass =
//     'border-b border-white/10 py-3 text-sm text-white/80 transition hover:pl-2 hover:text-cyan-200';

//   return (
//     <header
//     onMouseMove={handleMouseMove}
//     onMouseEnter={() => setHovering(true)}
//     onMouseLeave={() => setHovering(false)}
//     className="absolute inset-x-0 top-0 z-50
//     border-b border-white/10 bg-[#031426]/25
//     text-white backdrop-blur-md"
//    >
//       {/* Decorative cursor */}
//       <span
//         aria-hidden="true"
//         className="pointer-events-none absolute z-50 hidden h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,0.7)] transition-opacity duration-200 md:block"
//         style={{
//           left: cursor.x,
//           top: cursor.y,
//           opacity: hovering ? 1 : 0,
//           transform: 'translate(-50%, -50%)',
//         }}
//       />

//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
//         aria-label="Main navigation"
//       >
//         {/* University branding */}
//         <Link
//         href="/"
//         onClick={closeMenus}
//         aria-label="IOSC Forum home"
//         className="group relative z-10 flex items-center gap-3"
//       >
//         <span className="grid h-11 w-11 place-items-center
//           rounded-full border border-cyan-300/60
//           bg-cyan-400/10 text-cyan-300 transition
//           group-hover:bg-cyan-300 group-hover:text-slate-950">
//           <Waves size={25} />
//         </span>

//         <span className="leading-tight">
//           <span className="block text-xl font-semibold tracking-tight">
//             IOSC Forum
//           </span>
//           <span className="mt-1 block text-[9px] uppercase
//             tracking-[0.16em] text-white/60">
//             Intelligent Ocean Sensing & Computing
//           </span>
//         </span>
//       </Link>

//         {/* Desktop navigation */}
//         <div className="hidden items-center gap-7 md:flex">
//           {links.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className={desktopLinkClass}
//             >
//               {link.label}
//               <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-yellow-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
//             </Link>
//           ))}

//           {/* Attending dropdown */}
//           {/* <div
//             className="relative"
//             onMouseEnter={() => setAttendingOpen(true)}
//             onMouseLeave={() => setAttendingOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setAttendingOpen((value) => !value)}
//               onKeyDown={(event) => {
//                 if (event.key === 'Escape') setAttendingOpen(false);
//               }}
//               aria-expanded={attendingOpen}
//               aria-haspopup="true"
//               className={`${desktopLinkClass} inline-flex items-center gap-1.5`}
//             >
//               Attending
//               <ChevronDown
//                 size={15}
//                 className={`transition-transform duration-200 ${
//                   attendingOpen ? 'rotate-180' : ''
//                 }`}
//               />
//               <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-yellow-300 transition-transform duration-300 group-hover:scale-x-100" />
//             </button>

//             <div
//               className={`absolute right-0 top-full w-64 pt-4 transition-all duration-200 ${
//                 attendingOpen
//                   ? 'visible translate-y-0 opacity-100'
//                   : 'invisible -translate-y-2 opacity-0'
//               }`}
//             >
//               <div className="overflow-hidden rounded-xl border border-white/10 bg-[#071a32] p-2 shadow-2xl shadow-black/30">
//                 {attendingLinks.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={closeMenus}
//                     tabIndex={attendingOpen ? 0 : -1}
//                     className="block rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-cyan-200"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div> */}

//           <Link
//             href="/#register"
//             className="group inline-flex items-center gap-2
//   rounded-full border border-cyan-300/60
//   bg-white/5 px-5 py-3 text-sm font-medium
//   text-white backdrop-blur-md transition
//   hover:bg-cyan-300 hover:text-slate-950">
//             Join the forum
//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           className="relative z-10 rounded-lg border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-200 md:hidden"
//           aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
//           aria-expanded={open}
//           onClick={() => setOpen((value) => !value)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile navigation */}
//       <div
//         className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
//           open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//         }`}
//         aria-hidden={!open}
//       >
//         <div className="overflow-hidden">
//           <div className="border-t border-white/10 bg-[#071a32] px-5 py-5 sm:px-8">
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
//                 className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
//               >
//                 Join the forum
//                 <ArrowUpRight size={16} />
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
import {
  Menu,
  X,
  ArrowUpRight,
  Waves,
} from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Schedule", href: "/forum-schedule" },
  { label: "Organizers", href: "/organizing-committee" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
  };

  const desktopLinkClass =
    "group relative py-2 text-sm text-white/75 transition-colors duration-300 hover:text-white";

  const mobileLinkClass =
    "border-b border-white/10 py-3 text-sm text-white/80 transition hover:pl-2 hover:text-cyan-200";

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031426]/25 text-white backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* University branding */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="IOSC Forum home"
          className="group relative z-10 flex items-center gap-3"
        >
          <span
            className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/60 bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950"
          >
            <Waves size={25} />
          </span>

          <span className="leading-tight">
            <span className="block text-xl font-semibold tracking-tight">
              IOSC Forum
            </span>

            <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-white/60">
              Intelligent Ocean Sensing & Computing
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={desktopLinkClass}
            >
              {link.label}

              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-yellow-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Join the forum */}
          <Link
            href="/#register"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-cyan-300 hover:text-slate-950"
          >
            Join the forum

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative z-10 rounded-lg border border-white/20 p-2 transition hover:border-cyan-300 hover:text-cyan-200 md:hidden"
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 bg-[#071a32] px-5 py-5 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#register"
                tabIndex={open ? 0 : -1}
                onClick={closeMenus}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
              >
                Join the forum
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
