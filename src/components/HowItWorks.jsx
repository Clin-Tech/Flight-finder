import { Search, BarChart3, CreditCard, ArrowRight } from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search",
    description:
      "Enter your departure city, destination, travel dates, and number of passengers. Our smart autocomplete helps you find airports fast.",
    accent: "from-midnight-600 to-midnight-500",
    bg: "bg-midnight-50",
    iconColor: "text-midnight-600",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Compare",
    description:
      "View real-time prices from 200+ airlines. Use smart filters for stops, airlines, and price ranges. Analyze trends with our price distribution chart.",
    accent: "from-accent to-accent-hover",
    bg: "bg-accent-50",
    iconColor: "text-accent",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Book",
    description:
      "Select the perfect flight with confidence. Detailed flight info at your fingertips — departure times, duration, stops, and cabin class.",
    accent: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50/50 mesh-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-midnight-900/5 text-midnight-700 text-sm font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-midnight-900 mb-4">
              Three steps to your
              <br />
              <span className="gradient-text">perfect flight</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From search to selection in under a minute. No hidden fees, no
              account required.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className="relative group">
                {/* Connector arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-midnight-900/5 transition-all duration-300 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                    <span className="text-5xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-midnight-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`h-1 w-0 group-hover:w-16 rounded-full bg-gradient-to-r ${step.accent} mt-6 transition-all duration-500`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
