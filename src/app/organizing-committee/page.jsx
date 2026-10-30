// General  Chair: Zhiwen Yu
// Program Chair: Dapeng Man, Naixue Xiong, Wei Li
// Local Chair: Hongwu Lv, Junhui Jiang, Rongsheng Li
// Local OC: Hui Wang, Tingting Wu, Xiaolin Guo, Wenqi Zheng, Kaiyu Wang, Zhiqi Pang

// import TiltCard from "@/components/animated/TiltCard";
// import {
//   seniorOrganizers,
//   organizingCommittee,
// } from "@/app/data/organizer";

// const BASE_PATH =
//   process.env.NODE_ENV === "production"
//     ? "/ioscforum_iosc-2026"
//     : "";

// export const metadata = {
//   title: "Organizers | IOSC Forum 2026",
//   description:
//     "Meet the chairs and organizing committee of IOSC Forum 2026 at Harbin Engineering University.",
// };

// /* =========================
//    Section Heading
// ========================= */
// function SectionHeading({ title, description }) {
//   return (
//     <div className="mb-10 text-center">
//       <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
//           {description}
//         </p>
//       )}

//       <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
//     </div>
//   );
// }

// /* =========================
//    Organizer Card
// ========================= */
// function OrganizerCard({ person, number }) {
//   return (
//     <div className="mx-auto w-full max-w-sm">
//       <TiltCard
//         title={person.name}
//         description={person.affiliation}
//         image={person.image}
//         category={person.role}
//         number={number}
//         footerText="IOSC Forum 2026"
//         maxTilt={6}
//         perspective={1000}
//       />
//     </div>
//   );
// }

// /* =========================
//    Single Chair Section
// ========================= */
// function ChairSection({
//   title,
//   person,
//   number,
//   description,
// }) {
//   if (!person) return null;

//   return (
//     <section className="relative border-b border-white/10 bg-transparent px-6 py-14 md:py-16">
//       <div className="mx-auto max-w-7xl">
//         <SectionHeading
//           title={title}
//           description={description}
//         />

//         <OrganizerCard
//           person={person}
//           number={number}
//         />
//       </div>
//     </section>
//   );
// }

// /* =========================
//    Program Chairs
// ========================= */
// function ProgramChairsSection({ people }) {
//   if (!people.length) return null;

//   return (
//     <section className="relative border-b border-white/10 bg-transparent px-6 py-14 md:py-16">
//       <div className="mx-auto max-w-7xl">
//         <SectionHeading
//           title="Program Chairs"
//           description="Leading the technical program, paper review process, and research sessions."
//         />

//         <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
//           {people.map((person, index) => (
//             <OrganizerCard
//               key={person.id}
//               person={person}
//               number={String(index + 2).padStart(2, "0")}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================
//    Local Organizing Committee
// ========================= */
// function LocalOrganizingCommittee({ people }) {
//   return (
//     <section className="relative bg-transparent px-6 py-16 md:py-20">
//       <div className="mx-auto max-w-6xl">
//         <SectionHeading
//           title="Local Organizing Committee"
//           description="Meet the committee members supporting the planning and successful organization of IOSC Forum 2026."
//         />

//         <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {people.map((person, index) => (
//             <div key={person.id} className="h-full">
//               <TiltCard
//                 title={person.name}
//                 description={person.affiliation}
//                 image={person.image}
//                 category={person.role}
//                 number={String(index + 5).padStart(2, "0")}
//                 footerText="IOSC Forum 2026"
//                 maxTilt={6}
//                 perspective={1000}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================
//    Main Organizers Page
// ========================= */
// export default function OrganizersPage() {
//   const generalChair = seniorOrganizers.find(
//     (person) => person.id === "general-chair"
//   );

//   const programChairs = seniorOrganizers.filter(
//     (person) => person.role === "Program Chair"
//   );

//   const localChair = seniorOrganizers.find(
//     (person) => person.id === "local-chair"
//   );

//   return (
//     <main className="relative isolate min-h-screen">
//       {/* Campus Background Image */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url("${BASE_PATH}/images/campus.jpg")`,
//         }}
//       />

//       {/* Dark Glass Overlay */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none fixed inset-0 z-[-1] bg-slate-950/60 backdrop-blur-[4px]"
//       />

//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[#071a32]/75 px-6 py-20 text-white md:py-24">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-5xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
//             IOSC Forum 2026
//           </p>

//           <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//             Organizers
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
//             Meet the chairs and organizing committee responsible
//             for bringing the conference together.
//           </p>

//           <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-cyan-400" />
//         </div>
//       </section>

//       {/* General Chair */}
//       <ChairSection
//         title="General Chair"
//         person={generalChair}
//         number="01"
//         description="Providing overall leadership and direction for the conference."
//       />

//       {/* Two Program Chairs */}
//       <ProgramChairsSection people={programChairs} />

//       {/* Local Chair */}
//       <ChairSection
//         title="Local Chair"
//         person={localChair}
//         number="04"
//         description="Coordinating local arrangements and on-site conference activities."
//       />

//       {/* Local Organizing Committee */}
//       <LocalOrganizingCommittee
//         people={organizingCommittee}
//       />
//     </main>
//   );
// }


// app/organizers/page.jsx

import TiltCard from "@/components/animated/TiltCard";

import {
  seniorOrganizers,
  organizingCommittee,
} from "@/app/data/organizer";

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/ioscforum_iosc-2026"
    : "";

export const metadata = {
  title: "Organizers | IOSC Forum 2026",
  description:
    "Meet the chairs and organizing committee of IOSC Forum 2026 at Harbin Engineering University.",
};

/* =========================
   Section Heading
========================= */
function SectionHeading({ title, description }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
    </div>
  );
}

/* =========================
   Organizer Card
========================= */
function OrganizerCard({ person, number }) {
  return (
    <div className="mx-auto h-full w-full max-w-sm">
      <TiltCard
        title={person.name}
        description={person.affiliation}
        image={person.image}
        category={person.role}
        number={number}
        footerText="IOSC Forum 2026"
        maxTilt={6}
        perspective={1000}
      />
    </div>
  );
}

/* =========================
   General Chair
========================= */
function GeneralChairSection({ person }) {
  if (!person) return null;

  return (
    <section className="relative border-b border-white/10 px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="General Chair"
          description="Providing overall leadership and direction for IOSC Forum 2026."
        />

        <OrganizerCard person={person} number="01" />
      </div>
    </section>
  );
}

/* =========================
   Multiple People Section
========================= */
function PeopleSection({
  title,
  description,
  people,
  startNumber,
  columns = "sm:grid-cols-2",
}) {
  if (!people?.length) return null;

  return (
    <section className="relative border-b border-white/10 px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={title}
          description={description}
        />

        <div
          className={`mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 ${columns}`}
        >
          {people.map((person, index) => (
            <OrganizerCard
              key={person.id}
              person={person}
              number={String(startNumber + index).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Local Organizing Committee
========================= */
function LocalOrganizingCommittee({ people }) {
  if (!people?.length) return null;

  return (
    <section className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Local Organizing Committee"
          description="Meet the committee members supporting the planning and successful organization of IOSC Forum 2026."
        />

        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, index) => (
            <OrganizerCard
              key={person.id}
              person={person}
              number={String(index + 8).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Main Organizers Page
========================= */
export default function OrganizersPage() {
  const generalChair = seniorOrganizers.find(
    (person) => person.id === "general-chair"
  );

  const programChairs = seniorOrganizers.filter(
    (person) => person.role === "Program Chair"
  );

  const localChairs = seniorOrganizers.filter(
    (person) => person.role === "Local Chair"
  );

  return (
    <main className="relative isolate min-h-screen">

      {/* Campus Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${BASE_PATH}/images/campus.jpg")`,
        }}
      />

      {/* Dark Glass Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-slate-950/60 backdrop-blur-[4px]"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071a32]/75 px-6 py-20 text-white md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            IOSC Forum 2026
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Organizers
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Meet the chairs and organizing committee responsible
            for bringing IOSC Forum 2026 together.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-cyan-400" />
        </div>
      </section>

      {/* 01 — General Chair */}
      <GeneralChairSection person={generalChair} />

      {/* 02–04 — Program Chairs */}
      <PeopleSection
        title="Program Chairs"
        description="Leading the technical program and supporting the academic activities of the forum."
        people={programChairs}
        startNumber={2}
        columns="sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* 05–07 — Local Chairs */}
      <PeopleSection
        title="Local Chairs"
        description="Coordinating local arrangements and supporting the on-site organization of IOSC Forum 2026."
        people={localChairs}
        startNumber={5}
        columns="sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* 08–13 — Local Organizing Committee */}
      <LocalOrganizingCommittee
        people={organizingCommittee}
      />

      {/* Bottom Section */}
      <section className="border-t border-white/10 bg-[#071a32]/80 px-6 py-12 text-center backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          IOSC Forum 2026
        </p>

        <p className="mt-3 text-sm text-slate-300">
          November 28–29, 2026 · Harbin Engineering University
        </p>
      </section>
    </main>
  );
}


