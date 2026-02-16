import { Plane, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function EmptyState() {
  const tips = [
    {
      icon: <Sparkles className="w-4 h-4" />,
      title: "Try popular routes",
      desc: "JFK → LAX, LHR → DXB, LOS → LHR",
    },
    {
      icon: <Plane className="w-4 h-4" />,
      title: "Use real IATA codes",
      desc: "Autocomplete helps avoid invalid searches",
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "Rate limits exist",
      desc: "Typing fast can trigger 429; pause a bit",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-midnight-50 flex items-center justify-center mb-5">
        <Plane className="w-8 h-8 text-midnight-700" />
      </div>

      <h2 className="text-2xl font-display font-bold text-midnight-900 mb-2">
        Search flights in seconds
      </h2>
      <p className="text-gray-400 mb-10 max-w-md mx-auto">
        Choose an origin, destination, and dates, then hit Search to see
        real-time prices from hundreds of airlines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {tips.map((t) => (
          <div
            key={t.title}
            className="group border border-gray-100 hover:border-midnight-100 rounded-xl p-5 hover:shadow-lg hover:shadow-midnight-900/5 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-midnight-700 mb-2">
              {t.icon}
              <span className="font-semibold text-sm">{t.title}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
            <ArrowRight className="w-4 h-4 text-gray-200 group-hover:text-midnight-400 mt-3 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
