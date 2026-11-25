// // app/schedule/page.jsx

// import {
//   ArrowUpRight,
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Hotel,
//   Utensils,
//   Info,
// } from "lucide-react";

// import {
//   forumDetails,
//   eventDays,
//   mealArrangements,
//   accommodation,
//   informationCards,
//   summaryItems,
//   campusBackgrounds,
// } from "@/app/data/forumSchedule";

// export const metadata = {
//   title: "Forum Schedule | IOSC Forum 2026",
//   description:
//     "Official schedule and event information for IOSC Forum 2026 at Harbin Engineering University.",
// };

// function BackgroundSection({
//   image,
//   children,
//   className = "",
//   overlay = "bg-slate-950/75",
// }) {
//   return (
//     <section
//       className={`relative overflow-hidden bg-cover bg-center ${className}`}
//       style={{ backgroundImage: `url('${image}')` }}
//     >
//       <div className={`absolute inset-0 ${overlay}`} />
//       <div className="relative z-10">{children}</div>
//     </section>
//   );
// }

// function GlassCard({ children, className = "" }) {
//   return (
//     <div
//       className={`rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// function IconBox({ icon: Icon, className = "" }) {
//   return (
//     <div
//       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 ${className}`}
//     >
//       <Icon size={22} />
//     </div>
//   );
// }

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="mb-12 max-w-3xl">
//       <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
//         {eyebrow}
//       </p>

//       <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="mt-5 leading-7 text-slate-300">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function ForumSchedulePage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-[#061526] text-white">

//       {/* HERO */}
//       <BackgroundSection
//         image={campusBackgrounds.hero}
//         className="flex min-h-[520px] items-center"
//         overlay="bg-gradient-to-r from-[#041323]/95 via-[#041323]/80 to-[#041323]/55"
//       >
//         <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
//           <div className="max-w-4xl">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md">
//               <CalendarDays size={16} />
//               {forumDetails.eventDates}
//             </div>

//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
//               {forumDetails.institution}
//             </p>

//             <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//               {forumDetails.title}
//               <span className="mt-2 block text-cyan-300">
//                 {forumDetails.subtitle}
//               </span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
//               Find the official dates, programme hours, venue,
//               accommodation and meal arrangements for IOSC Forum 2026.
//             </p>

//             <a
//               href="#schedule"
//               className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
//             >
//               Explore Event Information
//               <ArrowUpRight size={18} />
//             </a>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* SUMMARY */}
//       <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-6 lg:px-10">
//         <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#0b2035]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-3 md:p-7">
//           {summaryItems.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.label}
//                 className={`flex items-center gap-4 ${
//                   index !== 0
//                     ? "md:border-l md:border-white/10 md:pl-7"
//                     : ""
//                 }`}
//               >
//                 <IconBox icon={Icon} />

//                 <div>
//                   <p className="text-sm text-slate-400">
//                     {item.label}
//                   </p>
//                   <p className="mt-1 font-semibold text-white">
//                     {item.value}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* EVENT SCHEDULE */}
//       <BackgroundSection
//         image={campusBackgrounds.schedule}
//         className="py-28"
//         overlay="bg-[#061526]/90"
//       >
//         <div
//           id="schedule"
//           className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10"
//         >
//           <SectionHeading
//             eyebrow="Save the Dates"
//             title="Forum Schedule"
//             description="IOSC Forum 2026 will take place over two days at Harbin Engineering University."
//           />

//           <div className="grid gap-6 md:grid-cols-2">
//             {eventDays.map((day) => (
//               <GlassCard
//                 key={day.fullDate}
//                 className="group transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
//               >
//                 <div className="flex flex-col gap-6 sm:flex-row">
//                   <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
//                     <span className="text-4xl font-bold text-cyan-300">
//                       {day.date}
//                     </span>
//                     <span className="mt-1 text-sm font-semibold tracking-[0.2em] text-slate-300">
//                       {day.month}
//                     </span>
//                   </div>

//                   <div className="flex-1">
//                     <p className="text-sm text-cyan-300">
//                       {day.fullDate}
//                     </p>

//                     <h3 className="mt-2 text-2xl font-bold text-white">
//                       {day.title}
//                     </h3>

//                     <p className="mt-3 leading-7 text-slate-300">
//                       {day.description}
//                     </p>

//                     <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-200">
//                       <Clock3 size={17} />
//                       {day.time}
//                     </div>
//                   </div>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* VENUE */}
//       <BackgroundSection
//         image={campusBackgrounds.talks}
//         className="py-28"
//         overlay="bg-gradient-to-r from-[#061526]/95 via-[#061526]/85 to-[#061526]/90"
//       >
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
//           <div>
//             <SectionHeading
//               eyebrow="Where to Join Us"
//               title="Official Forum Venue"
//               description="The IOSC Forum 2026 will be held at Qihang Teacher Salon on the campus of Harbin Engineering University."
//             />

//             <div className="flex items-start gap-4">
//               <IconBox icon={MapPin} />

//               <div>
//                 <h3 className="text-xl font-semibold text-white">
//                   Qihang Teacher Salon
//                 </h3>
//                 <p className="mt-2 leading-7 text-slate-300">
//                   Harbin Engineering University
//                   <br />
//                   Harbin, China
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative overflow-hidden rounded-3xl border border-white/15">
//             <img
//               src={campusBackgrounds.talks}
//               alt="Harbin Engineering University campus"
//               className="h-[350px] w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#061526]/80 via-transparent to-transparent" />

//             <div className="absolute bottom-6 left-6">
//               <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
//                 Event Location
//               </p>
//               <h3 className="mt-2 text-2xl font-bold text-white">
//                 Harbin Engineering University
//               </h3>
//             </div>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* MEALS */}
//       <section className="bg-[#081a2c] py-28">
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <SectionHeading
//             eyebrow="Dining Information"
//             title="Meal Arrangements"
//             description="The following meal arrangements are planned for IOSC Forum 2026 participants."
//           />

//           <div className="grid gap-6 md:grid-cols-3">
//             {mealArrangements.map((meal, index) => (
//               <GlassCard
//                 key={`${meal.date}-${meal.time}`}
//                 className="flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
//               >
//                 <div className="flex items-center justify-between">
//                   <IconBox icon={Utensils} />
//                   <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
//                     {meal.time}
//                   </span>
//                 </div>

//                 <p className="mt-6 text-sm font-medium text-cyan-300">
//                   {meal.date}
//                 </p>

//                 <h3 className="mt-2 text-xl font-bold text-white">
//                   {meal.restaurant}
//                 </h3>

//                 <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-300">
//                   <MapPin
//                     size={16}
//                     className="mt-1 shrink-0 text-cyan-300"
//                   />
//                   {meal.venue}
//                 </p>

//                 <div className="mt-auto border-t border-white/10 pt-5">
//                   <p className="text-sm leading-6 text-slate-400">
//                     {meal.note}
//                   </p>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ACCOMMODATION */}
//       <BackgroundSection
//         image={campusBackgrounds.travel}
//         className="py-28"
//         overlay="bg-[#061526]/90"
//       >
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <SectionHeading
//             eyebrow="Stay in Harbin"
//             title="Hotel Accommodation"
//             description="Accommodation information for participants attending IOSC Forum 2026."
//           />

//           <div className="grid gap-8 md:grid-cols-2">
//             <GlassCard className="flex flex-col justify-center">
//               <IconBox icon={Hotel} />

//               <h3 className="mt-6 text-2xl font-bold text-white">
//                 {accommodation.hotel}
//               </h3>

//               <p className="mt-3 flex items-center gap-2 text-slate-300">
//                 <MapPin size={17} className="text-cyan-300" />
//                 {accommodation.address}
//               </p>

//               <p className="mt-5 leading-7 text-slate-300">
//                 {accommodation.instructions}
//               </p>
//             </GlassCard>

//             <GlassCard className="flex flex-col justify-center">
//               <IconBox icon={Info} />

//               <h3 className="mt-6 text-2xl font-bold text-white">
//                 Event Information
//               </h3>

//               <p className="mt-3 leading-7 text-slate-300">
//                 Please refer to the official forum information and
//                 communications from the organizing committee for any
//                 additional arrangements.
//               </p>

//               <div className="mt-6 border-t border-white/10 pt-5">
//                 <p className="text-sm text-slate-400">
//                   Forum dates
//                 </p>
//                 <p className="mt-1 font-semibold text-cyan-300">
//                   {forumDetails.eventDates}
//                 </p>
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* INFORMATION CARDS */}
//       <section className="bg-[#081a2c] py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <SectionHeading
//             eyebrow="At a Glance"
//             title="Event Information"
//             description="A quick overview of the main arrangements for IOSC Forum 2026."
//           />

//           <div className="grid gap-6 md:grid-cols-3">
//             {informationCards.map((card) => {
//               const Icon = card.icon;

//               return (
//                 <GlassCard key={card.title}>
//                   <IconBox icon={Icon} />

//                   <h3 className="mt-6 text-xl font-bold text-white">
//                     {card.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-slate-300">
//                     {card.description}
//                   </p>

//                   {card.detail && (
//                     <p className="mt-4 border-t border-white/10 pt-4 text-sm font-medium text-cyan-300">
//                       {card.detail}
//                     </p>
//                   )}
//                 </GlassCard>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="border-t border-white/10 bg-[#041323] py-12">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:text-left lg:px-10">
//           <div>
//             <p className="text-lg font-bold text-white">
//               IOSC Forum 2026
//             </p>
//             <p className="mt-1 text-sm text-slate-400">
//               Harbin Engineering University · November 28–29, 2026
//             </p>
//           </div>

//           <a
//             href="/"
//             className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
//           >
//             Back to Home
//             <ArrowUpRight size={17} />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }



// app/schedule/page.jsx

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Hotel,
  Utensils,
  Info,
  Users,
  Coffee,
  Bus,
  Camera,
} from "lucide-react";

import {
  forumDetails,
  detailedSchedule,
  eventDays,
  mealArrangements,
  accommodation,
  informationCards,
  summaryItems,
  campusBackgrounds,
} from "@/app/data/forumSchedule";

export const metadata = {
  title: "Forum Schedule | IOSC Forum 2026",
  description:
    "Official schedule and event information for IOSC Forum 2026 at Harbin Engineering University.",
};

// --------------------------------------------------
// Background Section
// --------------------------------------------------

function BackgroundSection({
  image,
  children,
  className = "",
  overlay = "bg-slate-950/75",
}) {
  return (
    <section
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 
              px-6 pb-10
              pt-10 sm:pt-10
              lg:min-h-[calc(100vh-100px)]
              lg:px-12 lg:pb-32 lg:pt-40">{children}</div>
    </section>
  );
}

// --------------------------------------------------
// Glass Card
// --------------------------------------------------

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

// --------------------------------------------------
// Icon Box
// --------------------------------------------------

function IconBox({ icon: Icon, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 ${className}`}
    >
      <Icon size={22} />
    </div>
  );
}

// --------------------------------------------------
// Section Heading
// --------------------------------------------------

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-7 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

// --------------------------------------------------
// Detailed Schedule Styles
// --------------------------------------------------

const sessionStyles = {
  speaker: {
    label: "Invited Talk",
    color: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
    dot: "bg-cyan-300",
    icon: Users,
  },

  ceremony: {
    label: "Opening Ceremony",
    color: "border-purple-300/30 bg-purple-300/10 text-purple-200",
    dot: "bg-purple-300",
    icon: Users,
  },

  break: {
    label: "Coffee Break",
    color: "border-amber-300/30 bg-amber-300/10 text-amber-200",
    dot: "bg-amber-300",
    icon: Coffee,
  },

  lunch: {
    label: "Lunch",
    color: "border-green-300/30 bg-green-300/10 text-green-200",
    dot: "bg-green-300",
    icon: Utensils,
  },

  dinner: {
    label: "Dinner",
    color: "border-orange-300/30 bg-orange-300/10 text-orange-200",
    dot: "bg-orange-300",
    icon: Utensils,
  },

  travel: {
    label: "Transportation",
    color: "border-blue-300/30 bg-blue-300/10 text-blue-200",
    dot: "bg-blue-300",
    icon: Bus,
  },

  activity: {
    label: "Activity",
    color: "border-pink-300/30 bg-pink-300/10 text-pink-200",
    dot: "bg-pink-300",
    icon: Camera,
  },
};

// --------------------------------------------------
// Detailed Schedule Session
// --------------------------------------------------

function ScheduleSession({ session, index, isLast }) {
  const style =
    sessionStyles[session.type] || sessionStyles.activity;

  const Icon = style.icon;

  return (
    <div className="relative grid grid-cols-[85px_18px_minmax(0,1fr)] gap-3 sm:grid-cols-[125px_24px_minmax(0,1fr)] sm:gap-5">
      {/* Time */}
      <div className="pt-5 text-right">
        <span className="text-xs font-bold leading-6 text-cyan-200 sm:text-sm">
          {session.time}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative flex justify-center">
        {!isLast && (
          <div className="absolute bottom-0 top-0 w-px bg-white/10" />
        )}

        <div
          className={`relative z-10 mt-6 h-3 w-3 rounded-full ring-4 ring-[#071a32] ${style.dot}`}
        />
      </div>

      {/* Session Card */}
      <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] sm:p-5">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${style.color}`}
          >
            <Icon size={12} />
            {style.label}
          </span>

          {session.location && (
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin size={12} />
              {session.location}
            </span>
          )}
        </div>

        <h4 className="mt-3 text-base font-semibold text-white sm:text-lg">
          {session.title}
        </h4>

        {session.description && (
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {session.description}
          </p>
        )}
      </div>
    </div>
  );
}

// --------------------------------------------------
// Detailed Schedule Day
// --------------------------------------------------

function ScheduleDay({ day, index }) {
  return (
    <div
      id={`programme-day-${index + 1}`}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#0b2035]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      {/* Day Header */}
      <div className="border-b border-white/10 bg-gradient-to-r from-cyan-400/10 to-transparent p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
            <span className="text-4xl font-bold text-cyan-300">
              {day.dateNumber}
            </span>

            <span className="mt-1 text-xs font-semibold tracking-[0.2em] text-slate-300">
              {day.month}
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              {day.day} · {day.date}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {day.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              {day.description}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-5 sm:p-8">
        {day.sessions.map((session, sessionIndex) => (
          <ScheduleSession
            key={`${day.date}-${session.time}-${sessionIndex}`}
            session={session}
            index={sessionIndex}
            isLast={sessionIndex === day.sessions.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// --------------------------------------------------
// Main Page
// --------------------------------------------------

export default function ForumSchedulePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061526] text-white">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <BackgroundSection
        image={campusBackgrounds.hero}
        className="flex min-h-[520px] items-center"
        overlay="bg-gradient-to-r from-[#041323]/95 via-[#041323]/80 to-[#041323]/55"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md">
              <CalendarDays size={16} />
              {forumDetails.eventDates}
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {forumDetails.institution}
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {forumDetails.title}

              <span className="mt-2 block text-cyan-300">
                {forumDetails.subtitle}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Find the official dates, detailed programme, invited
              talks, venue, accommodation, transportation and meal
              arrangements for IOSC Forum 2026.
            </p>

            <a
              href="#schedule"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Event Information
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </BackgroundSection>

      {/* ==========================================
          SUMMARY SECTION
      ========================================== */}

      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#0b2035]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-3 md:p-7">
          {summaryItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 ${
                  index !== 0
                    ? "md:border-l md:border-white/10 md:pl-7"
                    : ""
                }`}
              >
                <IconBox icon={Icon} />

                <div>
                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          EVENT SCHEDULE OVERVIEW
      ========================================== */}

      <BackgroundSection
        image={campusBackgrounds.schedule}
        className="py-28"
        overlay="bg-[#061526]/90"
      >
        <div
          id="schedule"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10"
        >
          <SectionHeading
            eyebrow="Save the Dates"
            title="Forum Schedule"
            description="IOSC Forum 2026 will take place from November 27 to 29, including guest arrival, two days of forum sessions, and networking activities."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {eventDays.map((day) => (
              <GlassCard
                key={day.fullDate}
                className="group transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10">
                    <span className="text-4xl font-bold text-cyan-300">
                      {day.date}
                    </span>

                    <span className="mt-1 text-sm font-semibold tracking-[0.2em] text-slate-300">
                      {day.month}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-cyan-300">
                      {day.fullDate}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {day.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {day.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-200">
                      <Clock3 size={17} />
                      {day.time}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </BackgroundSection>

      {/* ==========================================
          DETAILED THREE-DAY PROGRAMME
      ========================================== */}

      <BackgroundSection
        image={campusBackgrounds.talks}
        className="py-28"
        overlay="bg-[#061526]/95"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Official Conference Programme"
            title="Detailed Event Schedule"
            description="Explore the complete IOSC Forum 2026 programme, including arrival arrangements, opening ceremony, invited talks, coffee breaks, transportation and meals."
          />

          {/* Programme Navigation */}
          <div className="mb-10 flex flex-wrap gap-3">
            {detailedSchedule.map((day, index) => (
              <a
                key={day.date}
                href={`#programme-day-${index + 1}`}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/20"
              >
                <CalendarDays size={15} />
                {day.day}, {day.dateNumber} {day.month}
              </a>
            ))}
          </div>

          {/* All Three Days */}
          <div className="space-y-10">
            {detailedSchedule.map((day, index) => (
              <ScheduleDay
                key={day.date}
                day={day}
                index={index}
              />
            ))}
          </div>
        </div>
      </BackgroundSection>

      {/* ==========================================
          VENUE SECTION
      ========================================== */}

      <BackgroundSection
        image={campusBackgrounds.talks}
        className="py-28"
        overlay="bg-gradient-to-r from-[#061526]/95 via-[#061526]/85 to-[#061526]/90"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Where to Join Us"
              title="Official Forum Venue"
              description="The IOSC Forum 2026 will be held at Qihang Teacher Salon on the campus of Harbin Engineering University."
            />

            <div className="flex items-start gap-4">
              <IconBox icon={MapPin} />

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Qihang Teacher Salon
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Harbin Engineering University
                  <br />
                  Harbin, China
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15">
            <img
              src={campusBackgrounds.talks}
              alt="Harbin Engineering University campus"
              className="h-[350px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061526]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">
                Event Location
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Harbin Engineering University
              </h3>
            </div>
          </div>
        </div>
      </BackgroundSection>

      {/* ==========================================
          MEAL ARRANGEMENTS
      ========================================== */}

      <section className="bg-[#081a2c] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Dining Information"
            title="Meal Arrangements"
            description="The following meal arrangements are planned for IOSC Forum 2026 participants."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mealArrangements.map((meal) => (
              <GlassCard
                key={`${meal.date}-${meal.time}`}
                className="flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <IconBox icon={Utensils} />

                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {meal.time}
                  </span>
                </div>

                <p className="mt-6 text-sm font-medium text-cyan-300">
                  {meal.date}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {meal.restaurant}
                </h3>

                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-300">
                  <MapPin
                    size={16}
                    className="mt-1 shrink-0 text-cyan-300"
                  />

                  {meal.venue}
                </p>

                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-sm leading-6 text-slate-400">
                    {meal.note}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ACCOMMODATION SECTION
      ========================================== */}

      <BackgroundSection
        image={campusBackgrounds.travel}
        className="py-28"
        overlay="bg-[#061526]/90"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Stay in Harbin"
            title="Hotel Accommodation"
            description="Accommodation information for participants attending IOSC Forum 2026."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <GlassCard className="flex flex-col justify-center">
              <IconBox icon={Hotel} />

              <h3 className="mt-6 text-2xl font-bold text-white">
                {accommodation.hotel}
              </h3>

              <p className="mt-3 flex items-center gap-2 text-slate-300">
                <MapPin size={17} className="text-cyan-300" />
                {accommodation.address}
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                {accommodation.instructions}
              </p>
            </GlassCard>

            <GlassCard className="flex flex-col justify-center">
              <IconBox icon={Info} />

              <h3 className="mt-6 text-2xl font-bold text-white">
                Event Information
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Please refer to the official forum information and
                communications from the organizing committee for any
                additional arrangements.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm text-slate-400">
                  Forum dates
                </p>

                <p className="mt-1 font-semibold text-cyan-300">
                  {forumDetails.eventDates}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-400">
                  Main forum dates
                </p>

                <p className="mt-1 font-semibold text-cyan-300">
                  {forumDetails.mainForumDate}
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </BackgroundSection>

      {/* ==========================================
          INFORMATION CARDS
      ========================================== */}

      <section className="bg-[#081a2c] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="At a Glance"
            title="Event Information"
            description="A quick overview of the main arrangements for IOSC Forum 2026."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {informationCards.map((card) => {
              const Icon = card.icon;

              return (
                <GlassCard key={card.title}>
                  <IconBox icon={Icon} />

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {card.description}
                  </p>

                  {card.detail && (
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm font-medium text-cyan-300">
                      {card.detail}
                    </p>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <section className="border-t border-white/10 bg-[#041323] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:text-left lg:px-10">
          <div>
            <p className="text-lg font-bold text-white">
              IOSC Forum 2026
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Harbin Engineering University · November 27–29, 2026
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Back to Home
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
