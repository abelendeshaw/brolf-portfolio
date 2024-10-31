'use client';
import React, { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
}

interface Stat {
  value: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <h2 className="text-4xl font-bold text-blue-600 mb-2">{value}+</h2>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StatsDisplay: React.FC = () => {
  const stats: Stat[] = [
    { value: 400, label: 'Active Students' },
    { value: 20, label: 'Skilled Mentors' },
    { value: 50, label: 'Total Courses' },
    { value: 15, label: 'Awards Given' }
  ];

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500; // Animation duration in milliseconds
    const frameRate = 60; // Frames per second
    const totalFrames = (duration / 1000) * frameRate;

    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          const targetValue = stats[index].value;
          const increment = targetValue / totalFrames;
          return count + increment >= targetValue ? targetValue : count + increment;
        })
      );
    }, 1000 / frameRate);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="p-4 sm:p-6 md:p-8 bg-blue-50 mt-20">
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-20 w-full">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatItem value={Math.round(counters[index])} label={stat.label} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsDisplay;