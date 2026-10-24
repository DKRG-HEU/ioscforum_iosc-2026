import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import AttendingPageHeader from '@/components/AttendingPageHeader';

export const metadata = {
  title: 'Visa Information',
};

const steps = [
  {
    title: 'Check your entry requirements',
    description:
      'Visa requirements depend on your nationality, travel document, purpose of visit, and length of stay. Check the latest official guidance before travelling.',
  },
  {
    title: 'Prepare your documents',
    description:
      'Review the required application form, passport validity, photograph, itinerary, and supporting documents listed by the relevant Chinese visa authority.',
  },
  {
    title: 'Contact the organizers',
    description:
      'Ask the forum organizers whether an invitation letter or other supporting documentation can be provided to eligible participants.',
  },
  {
    title: 'Apply early',
    description:
      'Allow sufficient time for processing and follow the instructions of the Chinese embassy, consulate, or authorized visa application centre responsible for your location.',
  },
];

export default function VisaInformationPage() {
  return (
    <>
      <AttendingPageHeader
        title="Visa Information"
        description="Guidance for international participants preparing to travel to China for the forum."
      />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Before travelling to China
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              International participants should confirm the entry and visa
              requirements that apply to their individual circumstances.
              Requirements and visa-exemption policies can change, so use
              official government information rather than relying only on
              general travel advice.
            </p>

            <div className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-50 font-semibold text-cyan-800">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex gap-3">
                <Info className="mt-0.5 shrink-0 text-amber-700" size={20} />
                <div>
                  <h3 className="font-semibold text-amber-950">
                    Please note
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-amber-900">
                    The information on this page is general guidance, not
                    confirmation of eligibility for a particular visa. The
                    forum website does not guarantee visa approval or
                    invitation-letter availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-[#071a32] p-7 text-white">
            <h2 className="text-lg font-semibold">Official resources</h2>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Check current visa policies and application guidance through
              official Chinese government channels.
            </p>

            <a
              href="https://cs.mfa.gov.cn/wgrlh/lhqz/lhqzjjs/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-yellow-300"
            >
              Chinese visa information
              <ArrowUpRight size={16} />
            </a>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-start gap-2 text-sm leading-6 text-white/65">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-cyan-300"
              />
              <span>Verify requirements before booking travel.</span>
            </div>

            <Link
              href="/attending/accommodation-travel"
              className="mt-7 inline-block text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-cyan-200"
            >
              Accommodation & Travel
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}