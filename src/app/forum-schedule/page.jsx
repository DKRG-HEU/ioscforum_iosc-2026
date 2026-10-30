// import {
//   ArrowUpRight,
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Hotel,
//   Utensils,
//   Bus,
//   ClipboardList,
//   Users,
//   Info,
// } from "lucide-react";

// import {
//   forumDetails,
//   eventDays,
//   mealArrangements,
//   accommodation,
//   transportation,
//   informationCards,
//   summaryItems,
//   campusBackgrounds,
// } from "@/app/data/forumSchedule";

// export const metadata = {
//   title: "Forum Schedule",
//   description:
//     "Forum schedule, accommodation, meals, and transportation information for IOSC Forum 2026.",
// };

// export default function ForumSchedulePage() {
//   return (
//     <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
//       {/* Hero */}
//       <BackgroundSection image={campusBackgrounds.hero}>
//         <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-14 lg:pb-32">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl">
//             <span className="h-2 w-2 rounded-full bg-cyan-300" />
//             {forumDetails.institution}
//           </span>

//           <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
//             International Forum & Summit
//           </p>

//           <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
//             {forumDetails.title}
//             <span className="mt-2 block text-cyan-300">
//               {forumDetails.subtitle}
//             </span>
//           </h1>

//           <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
//             Essential information for your visit, including the forum
//             timetable, dining arrangements, hotel accommodation, and
//             transportation in Harbin.
//           </p>

//           <div className="mt-9 flex flex-wrap gap-4">
//             <a
//               href="#schedule"
//               className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-white"
//             >
//               View schedule <ArrowUpRight size={18} />
//             </a>

//             <a
//               href="#travel"
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
//             >
//               Travel information <MapPin size={18} />
//             </a>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* Summary */}
//       <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 sm:px-10 lg:px-14">
//         <div className="grid gap-4 md:grid-cols-3">
//           {summaryItems.map((item) => (
//             <GlassCard key={item.label} className="flex gap-4 p-5 sm:p-6">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/15 text-cyan-200">
//                 <item.icon size={22} />
//               </div>

//               <div>
//                 <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
//                   {item.label}
//                 </p>
//                 <p className="mt-2 text-sm font-semibold leading-6 text-white">
//                   {item.value}
//                 </p>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </section>

//       {/* Schedule with campus background 2 */}
//       <BackgroundSection
//         id="schedule"
//         image={campusBackgrounds.schedule}
//         className="mt-10"
//       >
//         <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
//           <SectionHeading
//             eyebrow="Plan your visit"
//             title="Forum Schedule"
//             description="An overview of the three-day event and its main activities."
//           />

//           <div className="mt-12 grid gap-5 md:grid-cols-3">
//             {eventDays.map((day, index) => (
//               <GlassCard
//                 key={day.date}
//                 className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/15"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-cyan-300 text-slate-950">
//                     <span className="text-2xl font-bold">{day.date}</span>
//                     <span className="text-[10px] tracking-[0.2em]">
//                       {day.month}
//                     </span>
//                   </div>

//                   <span className="text-xs font-semibold tracking-widest text-cyan-200">
//                     DAY 0{index + 1}
//                   </span>
//                 </div>

//                 <h3 className="mt-7 text-xl font-semibold text-white">
//                   {day.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-slate-200">
//                   {day.description}
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-sm text-slate-300">
//                   <CalendarDays size={16} className="text-cyan-300" />
//                   {day.fullDate}
//                 </div>
//               </GlassCard>
//             ))}
//           </div>

//           <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200/30 bg-amber-950/30 p-5 text-sm leading-7 text-amber-100 backdrop-blur-xl">
//             <Info size={20} className="mt-1 shrink-0" />
//             <p>
//               Please confirm the detailed session timetable and individual
//               activity locations with the organizing committee.
//             </p>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* Distinguished talks with campus background 3 */}
//       <BackgroundSection image={campusBackgrounds.talks}>
//         <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
//           <SectionHeading
//             eyebrow="Knowledge & collaboration"
//             title="Distinguished Talks"
//             description="Explore the invited speakers, research presentations, and programme information."
//           />

//           <div className="mt-10 grid gap-5 md:grid-cols-2">
//             <GlassCard className="p-7 sm:p-9">
//               <IconBox>
//                 <Users size={23} />
//               </IconBox>

//               <h3 className="mt-5 text-xl font-semibold text-white">
//                 Invited Speakers
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-slate-200">
//                 Discover distinguished speakers, their institutional
//                 affiliations, presentation topics, and session times.
//               </p>

//               <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-200">
//                 Speaker details to be announced
//               </p>
//             </GlassCard>

//             <GlassCard className="p-7 sm:p-9">
//               <IconBox>
//                 <ClipboardList size={23} />
//               </IconBox>

//               <h3 className="mt-5 text-xl font-semibold text-white">
//                 Talk Programme
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-slate-200">
//                 Consult the confirmed programme for presentation titles,
//                 speakers, start times, durations, and venues.
//               </p>

//               <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-200">
//                 Detailed timetable to be confirmed
//               </p>
//             </GlassCard>
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* Meals */}
//       <BackgroundSection image={campusBackgrounds.schedule}>
//         <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
//           <SectionHeading
//             eyebrow="Dining arrangements"
//             title="Meals & Restaurants"
//             description="Review the scheduled dinners and restaurant details supplied by the organizers."
//           />

//           <div className="mt-10 grid gap-5 lg:grid-cols-3">
//             {mealArrangements.map((meal) => (
//               <GlassCard key={meal.date} className="p-6 sm:p-7">
//                 <IconBox>
//                   <Utensils size={23} />
//                 </IconBox>

//                 <p className="mt-5 text-sm font-medium text-cyan-200">
//                   {meal.date}
//                 </p>

//                 <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">
//                   <Clock3 size={16} className="text-cyan-300" />
//                   {meal.time}
//                 </div>

//                 <h3 className="mt-4 text-xl font-semibold text-white">
//                   {meal.restaurant}
//                 </h3>

//                 <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-200">
//                   <MapPin size={17} className="mt-1 shrink-0 text-cyan-300" />
//                   {meal.venue}
//                 </p>

//                 {meal.note && (
//                   <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-6 text-slate-300">
//                     {meal.note}
//                   </p>
//                 )}
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </BackgroundSection>

//       {/* Accommodation and transportation */}
//       <BackgroundSection id="travel" image={campusBackgrounds.travel}>
//         <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
//           <SectionHeading
//             eyebrow="Visitor information"
//             title="Plan Your Stay"
//             description="Important practical arrangements for visitors attending the forum in Harbin."
//           />

//           <div className="mt-12 grid gap-5 lg:grid-cols-3">
//             {informationCards.map((item) => (
//               <GlassCard key={item.title} className="p-6 sm:p-7">
//                 <IconBox>
//                   <item.icon size={23} />
//                 </IconBox>

//                 <h3 className="mt-6 text-xl font-semibold text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-slate-200">
//                   {item.description}
//                 </p>

//                 {item.detail && (
//                   <p className="mt-4 border-t border-white/15 pt-4 text-sm leading-6 text-cyan-100">
//                     {item.detail}
//                   </p>
//                 )}
//               </GlassCard>
//             ))}
//           </div>

//           <GlassCard className="mt-6 flex items-start gap-4 p-6">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
//               <Bus size={23} />
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-white">
//                 Shuttle Service
//               </h3>
//               <p className="mt-2 text-sm leading-7 text-slate-200">
//                 {transportation.description} Please check pickup times and
//                 locations with the organizing committee.
//               </p>
//             </div>
//           </GlassCard>
//         </div>
//       </BackgroundSection>

//       {/* Registration */}
//       <BackgroundSection image={campusBackgrounds.registration}>
//         <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
//           <GlassCard className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
//             <div className="max-w-3xl">
//               <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
//                 Before you arrive
//               </p>

//               <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
//                 Registration & Hotel Check-in
//               </h2>

//               <p className="mt-4 text-base leading-8 text-slate-200">
//                 Separate event check-in is not required according to the
//                 supplied information. Please proceed directly to{" "}
//                 <span className="font-semibold text-white">
//                   {accommodation.hotel}
//                 </span>{" "}
//                 to complete your hotel check-in.
//               </p>

//               <p className="mt-3 text-sm leading-7 text-slate-300">
//                 {accommodation.address}
//               </p>
//             </div>

//             <a
//               href="#schedule"
//               className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-white"
//             >
//               Review schedule <ArrowUpRight size={19} />
//             </a>
//           </GlassCard>
//         </div>
//       </BackgroundSection>
//     </main>
//   );
// }

// function BackgroundSection({
//   children,
//   image,
//   id,
//   className = "",
// }) {
//   return (
//     <section
//       id={id}
//       className={`relative isolate scroll-mt-20 overflow-hidden ${className}`}
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url("${image}")` }}
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/65 backdrop-blur-[3px]"
//       />

//       <div className="relative z-10">{children}</div>
//     </section>
//   );
// }

// function GlassCard({ children, className = "" }) {
//   return (
//     <article
//       className={`rounded-2xl border border-white/20 bg-white/[0.09] shadow-xl shadow-slate-950/10 backdrop-blur-2xl ${className}`}
//     >
//       {children}
//     </article>
//   );
// }

// function IconBox({ children }) {
//   return (
//     <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/15 text-cyan-200">
//       {children}
//     </div>
//   );
// }

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="max-w-3xl">
//       <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
//         {eyebrow}
//       </p>

//       <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
//         {title}
//       </h2>

//       <p className="mt-5 text-base leading-8 text-slate-200">
//         {description}
//       </p>
//     </div>
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
} from "lucide-react";

import {
  forumDetails,
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
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function IconBox({ icon: Icon, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 ${className}`}
    >
      <Icon size={22} />
    </div>
  );
}

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

export default function ForumSchedulePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061526] text-white">

      {/* HERO */}
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
              Find the official dates, programme hours, venue,
              accommodation and meal arrangements for IOSC Forum 2026.
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

      {/* SUMMARY */}
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

      {/* EVENT SCHEDULE */}
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
            description="IOSC Forum 2026 will take place over two days at Harbin Engineering University."
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

      {/* VENUE */}
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

      {/* MEALS */}
      <section className="bg-[#081a2c] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Dining Information"
            title="Meal Arrangements"
            description="The following meal arrangements are planned for IOSC Forum 2026 participants."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {mealArrangements.map((meal, index) => (
              <GlassCard
                key={`${meal.date}-${meal.time}`}
                className="flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="flex items-center justify-between">
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

      {/* ACCOMMODATION */}
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
            </GlassCard>
          </div>
        </div>
      </BackgroundSection>

      {/* INFORMATION CARDS */}
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

      {/* FOOTER CTA */}
      <section className="border-t border-white/10 bg-[#041323] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:text-left lg:px-10">
          <div>
            <p className="text-lg font-bold text-white">
              IOSC Forum 2026
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Harbin Engineering University · November 28–29, 2026
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
