import Link from 'next/link';
import { ArrowUpRight, ClipboardList, Info } from 'lucide-react';
import AttendingPageHeader from '@/components/AttendingPageHeader';

export const metadata = {
  title: 'Registration',
};

const details = [
  {
    label: 'Registration opening',
    value: 'To be announced',
  },
  {
    label: 'Registration deadline',
    value: 'To be announced',
  },
  {
    label: 'Participation fees',
    value: 'To be confirmed',
  },
  {
    label: 'Payment instructions',
    value: 'To be announced',
  },
];

export default function RegistrationPage() {
  return (
    <>
      <AttendingPageHeader
        title="Registration"
        description="Information for researchers, invited speakers, and participants planning to attend the IOSC Forum."
      />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-800">
                <ClipboardList size={24} />
              </span>

              <div>
                <p className="text-sm text-slate-500">Registration status</p>
                <h2 className="text-xl font-semibold text-slate-900">
                  Details pending confirmation
                </h2>
              </div>
            </div>

            <p className="mt-7 leading-8 text-slate-600">
              Official registration information will be published here once
              confirmed by the organizers. Please check this page for
              participation requirements, registration dates, fee details,
              payment procedures, and any instructions for invited guests.
            </p>

            <div className="mt-9 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-600">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <Info
                size={20}
                className="mt-0.5 shrink-0 text-amber-700"
              />
              <p className="text-sm leading-7 text-amber-900">
                Do not make payments using unofficial links or rely on
                unverified fee information. Registration links, fees, and
                deadlines should be added only after the organizers confirm
                them.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-[#071a32] p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Before registering
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Prepare for participation
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
              <li>Confirm the official forum dates.</li>
              <li>Review participation and registration requirements.</li>
              <li>Check whether visa-support documentation is available.</li>
              <li>Wait for verified payment and booking instructions.</li>
            </ul>

            <Link
              href="/attending/visa-information"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-yellow-300"
            >
              Visa Information
              <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}