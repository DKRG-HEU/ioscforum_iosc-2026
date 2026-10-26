
// 'use client';

// import { useMemo, useState } from 'react';
// import Link from 'next/link';
// import {
//   Search,
//   Mail,
//   Users,
//   ArrowUpRight,
//   ChevronDown,
//   UserRound,
// } from 'lucide-react';
// import TiltCard from '@/components/animated/TiltCard';
// import TypingText from "@/components/animated/TypingText"
// import InfiniteCardGallery from "@/components/animated/InfiniteCardGallery"
// // Sample content supplied from UbiComp / ISWC 2026.
// // Replace this data with the confirmed IOSC Forum committee before publishing.
// const committees = [
//   {
//     role: 'Honorary Chairs',
//     members: [
//       { name: 'Michael Beigl', affiliation: 'IP Paris, France' },
//       { name: 'Daqing Zhang', affiliation: 'Peking University, China' },
//       { name: 'Giulio Jacucci', affiliation: 'Northeastern University, USA' },
//       { name: 'Gregory Abowd', affiliation: 'Northeastern University, USA' },
//       { name: 'Stephan Sigg', affiliation: 'Shanghai Jiao Tong University, China' },
//       { name: 'Haibing Guan', affiliation: 'Shanghai Jiao Tong University, China' },
//     ],
//   },
//   {
//     role: 'General Chairs',
//     contact: 'generalchairs-2026@ubicomp.org',
//     members: [
//       { name: 'Zhiwen Yu', affiliation: 'Harbin Engineering University, China' },
//       { name: 'Fan Wu', affiliation: 'Shanghai Jiao Tong University, China' },
//       { name: 'Chenren Xu', affiliation: 'Peking University, China' },
//     ],
//   },
//   {
//     role: 'Technical Program Chairs',
//     contact: 'programchairs-2026@ubicomp.org',
//     members: [
//       { name: 'James Scott', affiliation: 'Independent, United Kingdom' },
//       { name: 'Bin Guo', affiliation: 'Northwestern Polytechnical University, China' },
//       { name: 'Eun Kyoung Choe', affiliation: 'University of Maryland, USA' },
//       { name: 'Jie Xiong', affiliation: 'Nanyang Technological University, Singapore' },
//     ],
//   },
//   {
//     role: 'Vice General Chairs',
//     contact: 'vicegeneral-2026@ubicomp.org',
//     members: [
//       { name: 'Lei Xie', affiliation: 'Nanjing University, China' },
//       { name: 'Shengzhong Liu', affiliation: 'Shanghai Jiao Tong University, China' },
//     ],
//   },
//   {
//     role: 'Workshop Chairs',
//     contact: 'workshop-2026@ubicomp.org',
//     members: [
//       { name: 'Sicong Liu', affiliation: 'Northwestern Polytechnical University, China' },
//       { name: 'Dingqi Yang', affiliation: 'University of Macau, China' },
//       { name: 'Mark Colley', affiliation: 'University College London, United Kingdom' },
//     ],
//   },
//   {
//     role: 'Tutorial Chairs',
//     contact: 'tutorial-2026@ubicomp.org',
//     members: [
//       { name: 'Dong Ma', affiliation: 'University of Cambridge, United Kingdom' },
//       { name: 'Brenna Li', affiliation: 'Stanford University, USA' },
//       { name: 'Dan Adler', affiliation: 'University of Michigan, USA' },
//     ],
//   },
//   {
//     role: 'Poster Chairs',
//     contact: 'poster-2026@ubicomp.org',
//     members: [
//       { name: 'Haipeng Dai', affiliation: 'Nanjing University, China' },
//       { name: 'Shantanu Pal', affiliation: 'Deakin University, Australia' },
//       { name: 'Xuhai Xu', affiliation: 'Columbia University, USA' },
//     ],
//   },
//   {
//     role: 'Demo Chairs',
//     contact: 'demo-2026@ubicomp.org',
//     members: [
//       { name: 'Jamie Ward', affiliation: 'University of London, United Kingdom' },
//       { name: 'Jiliang Wang', affiliation: 'Tsinghua University, China' },
//       { name: 'Youngtae Noh', affiliation: 'Hanyang University, South Korea' },
//     ],
//   },
//   {
//     role: 'Doctoral Colloquium Chairs',
//     contact: 'doctorial-2026@ubicomp.org',
//     members: [
//       { name: 'Xing Xie', affiliation: 'Microsoft Research Asia, China' },
//       { name: 'Silvia Santini', affiliation: 'Università della Svizzera italiana, Switzerland' },
//       { name: 'Yingjie Xia', affiliation: 'Hangzhou Dianzi University, China' },
//       { name: 'Sarah Clinch', affiliation: 'University of Manchester, United Kingdom' },
//     ],
//   },
//   {
//     role: 'Student Competition and Challenges Chairs',
//     contact: 'scc-2026@ubicomp.org',
//     members: [
//       { name: 'Xuan Liu', affiliation: 'Hunan University, China' },
//       { name: 'Nan Gao', affiliation: 'Nankai University, China' },
//       { name: 'Jingxian Wang', affiliation: 'National University of Singapore, Singapore' },
//     ],
//   },
//   {
//     role: 'Sponsorship Chairs',
//     contact: 'sponsorship-2026@ubicomp.org',
//     members: [
//       { name: 'Junzhao Du', affiliation: 'Xidian University, China' },
//       { name: 'Guangsheng Feng', affiliation: 'Harbin Engineering University, China' },
//       { name: 'Xingwei Yao', affiliation: 'Zhejiang University of Technology, China' },
//       { name: 'Hao Pan', affiliation: 'Shanghai Jiao Tong University, China' },
//     ],
//   },
//   {
//     role: 'Web Chairs',
//     contact: 'web-2026@ubicomp.org',
//     members: [
//       { name: 'Jingyi Ning', affiliation: 'Nanjing University, China' },
//       { name: 'Hui Wang', affiliation: 'Harbin Engineering University, China' },
//       { name: 'Le Nguyen', affiliation: 'University of Oulu, Finland' },
//     ],
//   },
//   {
//     role: 'Publication Chairs',
//     contact: 'publication-2026@ubicomp.org',
//     members: [
//       { name: 'Leye Wang', affiliation: 'Peking University, China' },
//       { name: 'Longfei Shangguan', affiliation: 'University of Pittsburgh, USA' },
//       { name: 'Seungchul Lee', affiliation: 'Korea Advanced Institute of Science and Technology, South Korea' },
//     ],
//   },
//   {
//     role: 'Registration Chairs',
//     contact: 'registration-2026@ubicomp.org',
//     members: [
//       { name: 'Liang Wang', affiliation: 'Northwestern Polytechnical University, China' },
//       { name: 'Qirui Liu', affiliation: 'Peking University, China' },
//       { name: 'Florian Wolling', affiliation: 'Technische Universität Wien, Austria' },
//     ],
//   },
//   {
//     role: 'Treasurer',
//     contact: 'treasurer-2026@ubicomp.org',
//     members: [
//       { name: 'Zhenzhe Zheng', affiliation: 'Shanghai Jiao Tong University, China' },
//     ],
//   },
//   {
//     role: 'Student Volunteer Chairs',
//     contact: 'sv-2026@ubicomp.org',
//     members: [
//       { name: 'Fusang Zhang', affiliation: 'Beihang University, China' },
//       { name: 'Alex Mariakakis', affiliation: 'University of Toronto, Canada' },
//       { name: 'Yin Chen', affiliation: 'Reitaku University, Japan' },
//     ],
//   },
//   {
//     role: 'Publicity Chairs',
//     contact: 'publicity-2026@ubicomp.org',
//     members: [
//       { name: 'Kaichen Zhou', affiliation: 'Harvard University, USA' },
//       { name: 'Qianyi Huang', affiliation: 'Sun Yat-sen University, China' },
//       { name: 'Lei Wang', affiliation: 'Soochow University, China' },
//     ],
//   },
//   {
//     role: 'Local Arrangement Chairs',
//     contact: 'local-2026@ubicomp.org',
//     members: [
//       { name: 'Xiaofeng Gao', affiliation: 'Shanghai Jiao Tong University, China' },
//       { name: 'Zhu Wang', affiliation: 'Northwestern Polytechnical University, China' },
//       { name: 'Dongyao Chen', affiliation: 'Shanghai Jiao Tong University, China' },
//     ],
//   },
//   {
//     role: 'Award Chairs',
//     contact: 'award-2026@ubicomp.org',
//     members: [
//       { name: 'Sumi Helal', affiliation: 'University of Bologna, Italy' },
//       { name: 'Gang Pan', affiliation: 'Zhejiang University, China' },
//       { name: 'Qin Lv', affiliation: 'University of Colorado Boulder, USA' },
//     ],
//   },
//   {
//     role: 'Design Exhibition Chairs',
//     contact: 'design-2026@ubicomp.org',
//     members: [
//       { name: 'Qi Wang', affiliation: 'Tongji University, China' },
//       { name: 'Robert Pettys-Baker', affiliation: 'Kent University, United Kingdom' },
//       { name: 'Irmandy Wicaksono', affiliation: 'National University of Singapore, Singapore' },
//     ],
//   },
//   {
//     role: 'Video Chairs',
//     contact: 'video-2026@ubicomp.org',
//     members: [
//       { name: 'Yuezhong Wu', affiliation: 'Fuzhou University, China' },
//       { name: 'Xinyi Li', affiliation: 'Northwest University, China' },
//     ],
//   },
//   {
//     role: 'Gadget Show Chairs',
//     contact: 'gadget-2026@ubicomp.org',
//     members: [
//       { name: 'Chenshu Wu', affiliation: 'The University of Hong Kong' },
//       { name: 'Qijia Shao', affiliation: 'The Hong Kong University of Science and Technology' },
//     ],
//   },
//   {
//     role: 'Communication Chairs',
//     contact: 'communication-2026@ubicomp.org',
//     members: [
//       { name: 'Tao Gu', affiliation: 'Macquarie University, Australia' },
//       { name: 'Beihong Jin', affiliation: 'Institute of Software, Chinese Academy of Sciences' },
//       { name: 'Uichin Lee', affiliation: 'Korea Advanced Institute of Science and Technology, South Korea' },
//       { name: 'Yun Huang', affiliation: 'University of Illinois Urbana-Champaign, USA' },
//     ],
//   },
//   {
//     role: 'Travel Grant Chairs',
//     contact: 'travel-2026@ubicomp.org',
//     members: [
//       { name: 'Zhiyong Yu', affiliation: 'Fuzhou University, China' },
//       { name: 'Tong Wang', affiliation: 'Harbin Engineering University, China' },
//       { name: 'Gerry Huang', affiliation: 'Keio University, Japan' },
//     ],
//   },
//   {
//     role: 'Industry Chairs',
//     contact: 'industry-2026@ubicomp.org',
//     members: [
//       { name: 'Haoyi Xiong', affiliation: 'Microsoft Corporation' },
//       { name: 'Hao Wang', affiliation: 'Kaihong Digital Corporation' },
//     ],
//   },
//   {
//     role: 'Education Forum Chairs',
//     contact: 'education-2026@ubicomp.org',
//     members: [
//       { name: 'Linghe Kong', affiliation: 'Shanghai Jiao Tong University, China' },
//       { name: 'Sha Zhao', affiliation: 'Zhejiang University, China' },
//       { name: 'Sherry Tongshuang Wu', affiliation: 'Carnegie Mellon University, USA' },
//     ],
//   },
//   {
//     role: 'Teenager Show Chairs',
//     contact: 'teenager-2026@ubicomp.org',
//     members: [
//       { name: 'Yanmin Zhu', affiliation: 'Shanghai Jiao Tong University, China' },
//       { name: 'Sizhen Bian', affiliation: 'German Research Center for Artificial Intelligence, Germany' },
//       { name: 'Lin Gu', affiliation: 'Tohoku University, Japan' },
//       { name: 'Jiasheng Li', affiliation: 'University of Maryland, College Park, USA' },
//     ],
//   },
// ];

// const topics = [
//     {
//       title: 'Internet of Things',
//       description: 'Connected systems and intelligent environments.',
//       image: '/images/iot.jpg',
//     },
//     {
//       title: 'Ubiquitous Computing',
//       description: 'Computing experiences integrated into everyday life.',
//       image: '/images/ubicomp.jpg',
//     },
//     {
//       title: 'Smart Environments',
//       description: 'Intelligent spaces, sensing, and human interaction.',
//       image: '/images/smart-environments.jpg',
//     },
//   ];

// export default function OrganizingCommitteePage() {
//   const [query, setQuery] = useState('');
//   const [selectedRole, setSelectedRole] = useState('All committees');

//   const roles = useMemo(
//     () => ['All committees', ...committees.map((committee) => committee.role)],
//     []
//   );

//   const filteredCommittees = useMemo(() => {
//     const term = query.trim().toLowerCase();

//     return committees
//       .filter(
//         (committee) =>
//           selectedRole === 'All committees' ||
//           committee.role === selectedRole
//       )
//       .map((committee) => ({
//         ...committee,
//         members: committee.members.filter((member) => {
//           const matchesSearch =
//             !term ||
//             member.name.toLowerCase().includes(term) ||
//             member.affiliation.toLowerCase().includes(term) ||
//             committee.role.toLowerCase().includes(term);

//           return matchesSearch;
//         }),
//       }))
//       .filter((committee) => committee.members.length > 0);
//   }, [query, selectedRole]);

//   const totalMembers = committees.reduce(
//     (total, committee) => total + committee.members.length,
//     0
//   );

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[#071a32] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
//         <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl">
//           <nav
//             aria-label="Breadcrumb"
//             className="mb-8 flex items-center gap-2 text-sm text-white/50"
//           >
//             <Link href="/" className="transition hover:text-cyan-200">
//               Home
//             </Link>
//             <span>/</span>
//             <span className="text-cyan-200">Organizing Committee</span>
//           </nav>

//           <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
//             IOSC Forum · Harbin Engineering University
//           </p>

//           <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
//             Organizing Committee
//           </h1>

//           <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
//             Meet the researchers and academic leaders contributing to the
//             organization and delivery of the forum.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
//             <div>
//               <p className="text-3xl font-semibold text-white">
//                 {committees.length}
//               </p>
//               <p className="mt-1 text-sm text-white/50">Committee groups</p>
//             </div>

//             <div>
//               <p className="text-3xl font-semibold text-white">
//                 {totalMembers}
//               </p>
//               <p className="mt-1 text-sm text-white/50">Listed entries</p>
//             </div>

//             <div>
//               <p className="text-3xl font-semibold text-white">Global</p>
//               <p className="mt-1 text-sm text-white/50">
//                 Academic collaboration
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and filters */}
//       <section className="border-b border-slate-200 bg-slate-50 px-5 py-8 sm:px-8 lg:px-12">
//         <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row">
//           <div className="relative flex-1">
//             <Search
//               size={19}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//             <input
//               type="search"
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//               placeholder="Search by name, university, or committee..."
//               aria-label="Search committee members"
//               className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
//             />
//           </div>

//           <div className="relative md:w-80">
//             <select
//               value={selectedRole}
//               onChange={(event) => setSelectedRole(event.target.value)}
//               aria-label="Filter by committee role"
//               className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm text-slate-700 outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-600/10"
//             >
//               {roles.map((role) => (
//                 <option key={role} value={role}>
//                   {role}
//                 </option>
//               ))}
//             </select>
//             <ChevronDown
//               size={17}
//               className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Committee sections */}
//       <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
//             <div>
//               <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
//                 Our people
//               </p>
//               <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
//                 Committee members
//               </h2>
//             </div>

//             <p className="text-sm text-slate-500">
//               {filteredCommittees.reduce(
//                 (count, committee) => count + committee.members.length,
//                 0
//               )}{' '}
//               matching entries
//             </p>
//           </div>

//           {filteredCommittees.length === 0 ? (
//             <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
//               <Search className="mx-auto text-slate-400" size={30} />
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 No committee members found
//               </h3>
//               <p className="mt-2 text-sm text-slate-500">
//                 Try another name, institution, or committee role.
//               </p>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setQuery('');
//                   setSelectedRole('All committees');
//                 }}
//                 className="mt-5 rounded-full bg-[#071a32] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-800"
//               >
//                 Clear filters
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-14">
//               {filteredCommittees.map((committee, index) => (
//                 <section key={committee.role} id={`committee-${index}`}>
//                   <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
//                     <div>
//                       <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-cyan-700">
//                         COMMITTEE {String(index + 1).padStart(2, '0')}
//                       </p>
//                       <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
//                         {committee.role}
//                       </h3>
//                     </div>

//                     {committee.contact && (
//                       <a
//                         href={`mailto:${committee.contact}`}
//                         className="inline-flex items-center gap-2 self-start text-sm font-medium text-cyan-800 transition hover:text-cyan-600 sm:self-auto"
//                       >
//                         <Mail size={16} />
//                         Contact committee
//                         <ArrowUpRight size={15} />
//                       </a>
//                     )}
//                   </div>

//                   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                     {committee.members.map((member) => (
//                       <article
//                         key={`${committee.role}-${member.name}`}
//                         className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-900/5"
//                       >
//                         <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-800 transition group-hover:bg-[#071a32] group-hover:text-cyan-200">
//                           <UserRound size={21} strokeWidth={1.7} />
//                         </div>

//                         <div className="min-w-0">
//                           <h4 className="font-semibold leading-6 text-slate-900">
//                             {member.name}
//                           </h4>
//                           <p className="mt-1 text-sm leading-6 text-slate-500">
//                             {member.affiliation}
//                           </p>
//                         </div>
//                       </article>
//                     ))}
//                   </div>
//                 </section>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>


//       {/* new section desgin  */}
//       <section className="bg-white px-6 py-20 md:py-24">
//       <div className="mx-auto max-w-7xl">

//         <div className="mb-12 text-center">
//           <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
//             Research & Innovation
//           </p>

//           <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
//             Explore Research Themes
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
//             Discover emerging technologies and interdisciplinary
//             research shaping the future of ubiquitous computing.
//           </p>
//         </div>

//         <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {topics.map((topic) => (
//             <TiltCard key={topic.title} {...topic} />
//           ))}
//         </div>

//       </div>
//     </section>

//     <section className="bg-white px-6 py-24">
//       <div className="mx-auto max-w-7xl">
//         <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
//           IOSC Forum
//         </p>

//         <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
//           Discover the future of{" "}
//           <span className="text-cyan-700">
//             <TypingText
//               text={["IoT", "UbiComp", "Smart Environments"]}
//               className="inline"
//               loop
//             />
//           </span>
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//           Bringing researchers together to explore emerging technologies
//           and intelligent connected environments.
//         </p>
//       </div>
//     </section>



//       {/* Closing section */}
//       <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12">
//         <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl bg-[#071a32] p-8 text-white sm:flex-row sm:items-center sm:p-10">
//           <div className="flex items-start gap-4">
//             <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200">
//               <Users size={23} />
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold">
//                 Bringing the research community together
//               </h2>
//               <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">
//                 The committee structure helps coordinate the academic,
//                 technical, and organizational activities of the forum.
//               </p>
//             </div>
//           </div>

//           <Link
//             href="/"
//             className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300 sm:self-center"
//           >
//             Explore the forum
//             <ArrowUpRight size={16} />
//           </Link>
//         </div>
//       </section>

//     </>
//   );
// }



import TiltCard from "@/components/animated/TiltCard";
import {
  seniorOrganizers,
  organizingCommittee,
} from "@/app/data/organizer";

export const metadata = {
  title: "Organizers | IOSC Forum 2026",
  description: "Meet the organizers of IOSC Forum 2026.",
};

function OrganizerCard({ person, number }) {
  return (
    <div className="mx-auto w-full max-w-sm">
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

function SectionHeading({ title, description }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500" />
    </div>
  );
}

function ChairSection({ title, person, number, description }) {
  if (!person) return null;

  return (
    <section className="border-b border-slate-200 px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={title}
          description={description}
        />

        <OrganizerCard
          person={person}
          number={number}
        />
      </div>
    </section>
  );
}

export default function OrganizersPage() {
  const generalChair = seniorOrganizers.find(
    (person) => person.id === "general-chair"
  );

  const programChair = seniorOrganizers.find(
    (person) => person.id === "program-chair"
  );

  const localChair = seniorOrganizers.find(
    (person) => person.id === "local-chair"
  );

  return (
    <main className="relative isolate min-h-screen overflow-hidden">

    <div
    className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/campus.jpg')",
    }}
    />
     <div className="fixed inset-0 -z-10 bg-slate-950/50 backdrop-blur-[6px]" />
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#071a32] px-6 py-20 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            IOSC Forum 2026
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Organizers
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Meet the chairs and organizing committee responsible
            for bringing the conference together.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-cyan-400" />
        </div>
      </section>

      {/* 1. General Chair */}
      <ChairSection
        title="General Chair"
        person={generalChair}
        number="01"
        description="Providing overall leadership and direction for the conference."
      />

      {/* 2. Program Chair */}
      <ChairSection
        title="Program Chair"
        person={programChair}
        number="02"
        description="Overseeing the technical program and research sessions."
      />

      {/* 3. Local Chair */}
      <ChairSection
        title="Local Chair"
        person={localChair}
        number="03"
        description="Coordinating local arrangements and conference activities."
      />

      {/* 4. Local Organizing Committee */}
      {/* 4. Local Organizing Committee */}
<section className="bg-transparent px-6 py-16 md:py-20">
  <div className="mx-auto max-w-5xl">
    <SectionHeading
      title="Local Organizing Committee"
      description="Meet the committee members supporting the planning and successful organization of IOSC Forum 2026."
    />

    <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
      {organizingCommittee.map((person, index) => (
        <div key={person.id} className="h-full">
          <TiltCard
            title={person.name}
            description={person.affiliation}
            image={person.image}
            category={person.role}
            number={String(index + 4).padStart(2, "0")}
            footerText="IOSC Forum 2026"
            maxTilt={6}
            perspective={1000}
          />
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}


