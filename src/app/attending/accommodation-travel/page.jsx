import Link from 'next/link';
import {
  ArrowUpRight,
  Hotel,
  MapPin,
  Bus,
  Info,
} from 'lucide-react';
import AttendingPageHeader from '@/components/AttendingPageHeader';

export const metadata = {
  title: 'Accommodation & Travel',
};

export default function AccommodationTravelPage() {
  return (
    <>
      <AttendingPageHeader
        title="Accommodation & Travel"
        description="Travel planning and accommodation information for participants visiting Harbin Engineering University."
      />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Plan your journey
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Visiting Harbin
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Harbin is the capital of Heilongjiang Province in northeastern
              China. Participants should confirm the event venue, hotel
              arrangements, and transportation details before finalizing
              their travel plans.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Accommodation */}
            <article className="rounded-2xl border border-slate-200 p-7 sm:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-800">
                <Hotel size={24} />
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Accommodation
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The following hotel was mentioned in the previously supplied
                event information. Please confirm whether it is the official
                hotel for the current event before making a reservation.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <h4 className="font-semibold text-slate-900">
                  Sofitel Hotel Wanda Harbin
                </h4>

                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-800"
                  />
                  No. 68 Ganshui Road, Xiangfang District, Harbin
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Room availability, special event rates, booking links, and
                check-in instructions must be confirmed by the organizers or
                the hotel.
              </p>
            </article>

            {/* Transportation */}
            <article className="rounded-2xl border border-slate-200 p-7 sm:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-800">
                <Bus size={24} />
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Transportation
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Please check the confirmed event venue and travel
                arrangements before choosing your airport, railway station,
                or local transport.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <h4 className="font-semibold text-slate-900">
                  Shuttle service
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Point-to-point shuttle service was mentioned in the
                  previously supplied event information. The service dates,
                  pickup locations, timetable, and eligibility need to be
                  confirmed for the current event.
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Do not rely on an unconfirmed shuttle schedule when booking
                flights or trains.
              </p>
            </article>
          </div>

          <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <Info size={20} className="mt-0.5 shrink-0 text-amber-700" />

            <div>
              <h3 className="font-semibold text-amber-950">
                Confirm before booking
              </h3>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                Event dates, hotel partnerships, shuttle services, and
                check-in arrangements have not been confirmed here. Please
                wait for official organizer information before making
                non-refundable travel or accommodation bookings.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl bg-[#071a32] p-7 text-white sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="text-xl font-semibold">
                Preparing for international travel?
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Review entry requirements and visa information before your
                journey.
              </p>
            </div>

            <Link
              href="/attending/visa-information"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
            >
              Visa Information
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}