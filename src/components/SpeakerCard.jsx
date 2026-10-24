
'use client';

import { ArrowUpRight } from 'lucide-react';

export default function SpeakerCard({
  name,
  category,
  company,
  role,
  day,
  time,
  talkTitle,
  introduction,
  image,
  href = '#',
}) {
  return (
    <a
      href={href}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900"
    >
      {/* Speaker image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark image gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Category and session details */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 transition-opacity duration-300 group-hover:opacity-0">
        <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </span>

        <span className="text-right text-xs leading-5 text-white">
          {company}
          <br />
          {day} · {time}
        </span>
      </div>

      {/* Speaker name at the bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {name}
        </h3>
        <p className="mt-1 text-sm text-white/75">
          {role} · {company}
        </p>
      </div>

      {/* Black overlay on hover */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black/90 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
            {category}
          </span>

          <ArrowUpRight
            size={22}
            className="text-yellow-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-xs text-white/55">
            {day} · {time}
          </p>

          <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {talkTitle}
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/70">
            {introduction}
          </p>

          <div className="mt-6 border-t border-white/15 pt-4">
            <p className="font-semibold text-white">{name}</p>
            <p className="mt-1 text-sm text-white/55">
              {role} · {company}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
