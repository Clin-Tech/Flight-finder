import {
  Zap,
  SlidersHorizontal,
  TrendingUp,
  Globe,
  Shield,
  Clock,
} from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

const features = [
  {
    icon: Zap,
    title: "Real-Time Prices",
    description:
      "Live pricing data pulled directly from airline systems. No cached or stale fares — what you see is what you pay.",
    tag: "Core",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description:
      "Narrow results by price range, number of stops, specific airlines, and more. Find exactly what you need in seconds.",
    tag: "Core",
  },
  {
    icon: TrendingUp,
    title: "Price Analytics",
    description:
      "Visual price distribution charts help you understand the market and spot the best deals at a glance.",
    tag: "Insight",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Search flights across 200+ airlines and 50+ countries. From budget carriers to premium airlines, all in one place.",
    tag: "Scale",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "No account required. No tracking. No hidden fees. Just honest flight search the way it should be.",
    tag: "Trust",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description:
      "Powered by the Amadeus GDS. Get comprehensive flight options in under 3 seconds, every single time.",
    tag: "Speed",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-midnight-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-midnight-900/5 text-midnight-700 text-sm font-medium mb-4">
              Why SkyFare
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-midnight-900 mb-4">
              Everything you need,
              <br />
              <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Built for travelers who value transparency, speed, and simplicity.
            </p>
          </div>
        </Reveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <div className="group relative bg-gray-50/50 hover:bg-white rounded-2xl p-7 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-midnight-900/5 transition-all duration-300 h-full">
                {/* Tag */}
                <span className="inline-block text-xs font-semibold text-midnight-500 bg-midnight-50 px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                  {feature.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-midnight-900 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-midnight-900/20 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-midnight-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
