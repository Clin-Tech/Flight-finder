import { useScrollReveal, useCounter } from "../hooks/useScrollReveal";

const stats = [
  { value: 500, suffix: "K+", label: "Flights Searched", description: "Every single month" },
  { value: 200, suffix: "+", label: "Airlines", description: "Worldwide coverage" },
  { value: 50, suffix: "+", label: "Countries", description: "Global destinations" },
  { value: 98, suffix: "%", label: "Happy Travelers", description: "5-star satisfaction" },
];

function StatCard({ value, suffix, label, description, isVisible, delay }) {
  const count = useCounter(value, 2000, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-midnight-900 mb-1">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-base font-semibold text-midnight-900 mb-0.5">{label}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>

      {/* Subtle divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  );
}
