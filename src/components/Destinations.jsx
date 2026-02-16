import { MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

const destinations = [
  {
    city: "Paris",
    country: "France",
    code: "CDG",
    price: 342,
    gradient: "from-rose-400 via-pink-500 to-purple-600",
    pattern: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
  {
    city: "Tokyo",
    country: "Japan",
    code: "NRT",
    price: 687,
    gradient: "from-red-400 via-orange-500 to-amber-500",
    pattern: "radial-gradient(circle at 70% 80%, rgba(255,255,255,0.12) 0%, transparent 50%)",
  },
  {
    city: "Dubai",
    country: "UAE",
    code: "DXB",
    price: 451,
    gradient: "from-amber-400 via-yellow-500 to-orange-600",
    pattern: "radial-gradient(circle at 20% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
  },
  {
    city: "New York",
    country: "United States",
    code: "JFK",
    price: 289,
    gradient: "from-slate-600 via-blue-700 to-indigo-800",
    pattern: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0%, transparent 50%)",
  },
  {
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    price: 378,
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
  },
  {
    city: "Sydney",
    country: "Australia",
    code: "SYD",
    price: 892,
    gradient: "from-cyan-400 via-blue-500 to-violet-600",
    pattern: "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-midnight-900/5 text-midnight-700 text-sm font-medium mb-4">
              Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-midnight-900 mb-4">
              Popular destinations
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Explore trending routes and discover incredible fares to the
              world's most loved cities.
            </p>
          </div>
        </Reveal>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <Reveal key={dest.city} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-52">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} transition-transform duration-500 group-hover:scale-105`}
                />

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: dest.pattern }}
                />

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.08]" style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {dest.city}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dest.country}</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-white/50 text-xs uppercase tracking-wider font-medium">
                        From
                      </span>
                      <div className="text-white text-2xl font-display font-bold">
                        ${dest.price}
                      </div>
                    </div>
                    <span className="text-white/40 text-sm font-mono">
                      {dest.code}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
