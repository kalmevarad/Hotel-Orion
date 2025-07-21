export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
  {/* YouTube Background */}
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    src="https://www.youtube.com/embed/cdKx1Zv3YKs?autoplay=1&mute=1&controls=0&loop=1&playlist=cdKx1Zv3YKs&modestbranding=1&showinfo=0"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay; fullscreen"
  ></iframe>

  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      R G Orion Pure Veg Hotel
    </h1>
    <p className="text-lg md:text-xl mb-6">
      Luxury Stay | 100% Veg Dining | Function Hall
    </p>
    <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
      Book Now
    </button>
  </div>
</section>

  );
}