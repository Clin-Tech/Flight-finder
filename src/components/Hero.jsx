import { Plane, ArrowDown, Shield, Zap, Globe } from "lucide-react";

export default function Hero() {
  const scrollToSearch = (e) => {
    e.preventDefault();
    document.querySelector("#search")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    document
      .querySelector("#how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-midnight-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-midnight-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating planes */}
        <Plane
          className="absolute top-[15%] right-[15%] w-8 h-8 text-white/10 animate-float rotate-45"
          style={{ animationDelay: "0s" }}
        />
        <Plane
          className="absolute top-[60%] left-[10%] w-6 h-6 text-white/8 animate-float-slow -rotate-12"
          style={{ animationDelay: "1s" }}
        />
        <Plane
          className="absolute bottom-[25%] right-[25%] w-10 h-10 text-white/5 animate-float-delayed rotate-90"
          style={{ animationDelay: "2s" }}
        />
        <Plane
          className="absolute top-[35%] left-[60%] w-5 h-5 text-accent/15 animate-float rotate-[135deg]"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Decorative dots */}
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-accent/30 rounded-full animate-bounce-gentle" />
        <div
          className="absolute top-[70%] right-[20%] w-1.5 h-1.5 bg-midnight-400/40 rounded-full animate-bounce-gentle"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute bottom-[40%] left-[20%] w-1 h-1 bg-white/20 rounded-full animate-bounce-gentle"
          style={{ animationDelay: "1.4s" }}
        />

        {/* Curved path line */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 600 C 200 200, 600 800, 900 300 S 1300 700, 1540 200"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="12 8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/70 font-medium">
              Live prices from 200+ airlines
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up">
            Find your next
            <br />
            <span className="gradient-text-light">adventure</span> at the
            <br />
            best price.
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Compare real-time prices across hundreds of airlines instantly. Smart
            filters, price analytics, and zero booking fees.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#search" onClick={scrollToSearch} className="btn-accent group">
              <span className="flex items-center gap-2">
                Search Flights
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#how-it-works"
              onClick={scrollToHowItWorks}
              className="btn-outline"
            >
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {[
              { icon: Shield, label: "Secure booking" },
              { icon: Zap, label: "Real-time prices" },
              { icon: Globe, label: "50+ countries" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/40"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
