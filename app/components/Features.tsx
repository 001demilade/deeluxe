// components/Features.tsx
const features = [
  { icon: "📦", title: "30 Days Free Return" },
  { icon: "💳", title: "5 Ways Payment" },
  { icon: "🎧", title: "Excellent Support" },
  { icon: "✅", title: "Satisfaction Guarantee" },
  { icon: "🚚", title: "Super Fast Delivery" },
];

export default function Features() {
  return (
    <section className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <span className="text-3xl" role="img" aria-label={f.title}>{f.icon}</span>
              <p className="text-[#D1A2B5] text-[10px] font-bold uppercase tracking-widest leading-tight">
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}