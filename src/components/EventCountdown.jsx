'use client';

import { useEffect, useState } from 'react';

export default function EventCountdown() {
  const getTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date('2026-11-28T00:00:00+08:00');
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="mt-1 text-sm font-medium text-cyan-300">
        November 28–29, 2026
      </p>

      {timeLeft ? (
        <div className="mt-3 flex gap-2">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-center"
            >
              <div
                key={item.value}
                className="animate-count text-xl font-bold tabular-nums text-white"
              >
                {String(item.value).padStart(2, '0')}
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm font-semibold text-cyan-300">
          The event has started!
        </p>
      )}
    </div>
  );
}