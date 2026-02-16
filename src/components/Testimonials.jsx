import { Star } from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Sarah Chen",
    initials: "SC",
    location: "San Francisco, CA",
    rating: 5,
    quote:
      "I saved over $400 on my Tokyo round-trip by comparing prices here. The filter system is incredibly intuitive — I found exactly what I needed in under a minute.",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    location: "London, UK",
    rating: 5,
    quote:
      "Finally, a flight search tool that doesn't bombard me with ads or hidden fees. Clean interface, real prices, and lightning-fast results. This is how it should be done.",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Amara Okafor",
    initials: "AO",
    location: "Lagos, Nigeria",
    rating: 5,
    quote:
      "The price distribution chart is a game-changer. I could instantly see if I was getting a good deal. Booked my LOS to LHR flight and it was the cheapest I'd found anywhere.",
    color: "from-emerald-500 to-teal-600",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-midnight-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-midnight-900/5 text-midnight-700 text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-midnight-900 mb-4">
              Loved by travelers
              <br />
              <span className="gradient-text">worldwide</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Join thousands of travelers who found their perfect flights with
              FlightFinder.
            </p>
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <div className="bg-gray-50/80 hover:bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-midnight-900/5 transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mt-5 mb-6 flex-1 text-[0.95rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-sm font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-midnight-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
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
