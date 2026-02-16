import { useState } from "react";
import { Send, Plane, CheckCircle } from "lucide-react";
import { Reveal } from "../hooks/useScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-midnight-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <Plane className="absolute top-[20%] right-[10%] w-6 h-6 text-white/5 animate-float rotate-45" />
        <Plane className="absolute bottom-[30%] left-[8%] w-8 h-8 text-white/5 animate-float-slow -rotate-12" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-6">
            <Send className="w-3.5 h-3.5" />
            Stay Updated
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Never miss a
            <br />
            <span className="gradient-text-light">great deal</span>
          </h2>

          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
            Get weekly flight deals and price drops delivered straight to your
            inbox. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                You're in! Watch your inbox for deals.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/25 focus:bg-white/10 transition-all font-body"
              />
              <button
                type="submit"
                className="btn-accent whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-white/20 text-sm mt-5">
            No spam. No selling your data. Just deals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
