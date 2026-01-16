import { Plane, Sparkles, ShieldCheck } from "lucide-react";

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
    <div className="bg-white rounded-lg shadow-md p-10 text-center">
      <div className="mx-auto w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
        <Plane className="w-7 h-7 text-indigo-600" />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Search flights in seconds
      </h2>
      <p className="text-gray-600 mb-8">
        Choose an origin, destination, and dates, then hit Search.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {tips.map((t) => (
          <div key={t.title} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-2 text-indigo-700 mb-2">
              {t.icon}
              <span className="font-medium">{t.title}</span>
            </div>
            <p className="text-sm text-gray-600">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
