
// "use client"

// import Image from "next/image"
// import { Tilt, TiltContent } from "@animate-ui/react/primitives/effects/tilt"

// export default function TiltCard({
//   title,
//   description,
//   image,
//   category = "Research Theme",
//   number = "01",
//   maxTilt = 10,
//   perspective = 800,
// }) {
//   return (
//     <Tilt
//       maxTilt={maxTilt}
//       perspective={perspective}
//       className="h-full w-full"
//     >
//       <TiltContent className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 pb-5 shadow-sm transition-shadow duration-300 hover:shadow-md">

//         {/* Research image */}
//         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
//           {image && (
//             <Image
//               src={image}
//               alt={title}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="rounded-xl object-cover transition-transform duration-500 hover:scale-105"
//               draggable={false}
//             />
//           )}
//         </div>

//         {/* Research details */}
//         <div className="px-3 text-center">
//           <p className="text-xs font-medium text-slate-500">
//             {category}
//           </p>

//           <h3 className="mt-2 text-lg font-semibold text-slate-900">
//             {title}
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-600">
//             {description}
//           </p>

//           <div className="mt-4 flex items-center justify-center gap-2">
//             <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
//               {number}
//             </span>
//             <span className="text-sm font-medium text-slate-800">
//               Explore theme
//             </span>
//             <span className="text-slate-500">→</span>
//           </div>
//         </div>
//       </TiltContent>
//     </Tilt>
//   )
// }



"use client";

import Image from "next/image";
import { Tilt, TiltContent } from "@animate-ui/react/primitives/effects/tilt";

export default function TiltCard({
  title,
  description,
  image,
  category = "Research Theme",
  number = "01",
  footerText = "Explore theme",
  maxTilt = 8,
  perspective = 1000,
}) {
  return (
    <Tilt
      maxTilt={maxTilt}
      perspective={perspective}
      className="h-full w-full"
    >
      <TiltContent className="flex h-full flex-col gap-3
    rounded-2xl
    border border-white/40
    bg-white/75 p-2 pb-5
    shadow-xl shadow-slate-950/10
    backdrop-blur-2xl
    transition-all duration-300
    hover:border-cyan-200/80
    hover:bg-white/85
    hover:shadow-2xl hover:shadow-cyan-950/15">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              draggable={false}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-400">
              No image available
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col px-4 pt-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
            {category}
          </p>

          <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-center gap-2 pt-5">
            <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
              {number}
            </span>

            <span className="text-sm font-medium text-slate-700">
              {footerText}
            </span>

            <span aria-hidden="true" className="text-cyan-700">
              →
            </span>
          </div>
        </div>
      </TiltContent>
    </Tilt>
  );
}

