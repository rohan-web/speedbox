const zones = [
  {
    name: "Westminster",
    eta: "Within 1 hour",
    image: "/areas/westminster.jpg",
  },
  {
    name: "Camden Town",
    eta: "1–2 hours",
    image: "/areas/camden.jpg",
  },
  {
    name: "Kensington & Chelsea",
    eta: "2–3 hours",
    image: "/areas/kensington.jpg",
  },
];

export default function DeliveryZones() {
  return (
    <section className="py-16 px-6 bg-zinc-950 text-white" id="zones">
      <div className="max-w-6xl mx-auto text-center">
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-1/3 mx-auto rounded-full mb-8" />

        {/* Slogan / Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-cyan-400">
          From Local Streets to All of London
        </h2>
        <p className="text-gray-400 mb-10">
          Here are some of our most popular delivery destinations across the city
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition"
            >
              <img
                src={zone.image}
                alt={zone.name}
                className="w-full h-40 object-cover opacity-90"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{zone.name}</h3>
                <p className="text-sm text-gray-400">{zone.eta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 italic mt-6">
          We deliver across all of London Zones — fast, same-day.
        </p>
      </div>
    </section>
  );
}
