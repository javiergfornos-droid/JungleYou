export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Tagline */}
        <p className="text-fern-light text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Making Cities Cooler
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
          JOIN THE<br />JUNGLE
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
          Transforming grey cities into living, breathing ecosystems.
        </p>

        <a
          href="#join"
          className="inline-block mt-10 px-8 py-3 rounded-full bg-fern text-white font-semibold text-base hover:bg-fern-dark transition-colors"
        >
          Get Started
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
