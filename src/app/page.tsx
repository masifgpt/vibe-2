import Link from "next/link";

const picsData = [
  {
    src: "/pic1.jpg",
    alt: "Pic 1",
    title: "Muhammad Asif",
    subtitle: "Student at PAIB Academy",
    guide: "Mentor: Asif Langhra Sb",
    quote:
      "Learning with dedication and strong mentorship at PAIB Academy.",
  },
  {
    src: "/pic2.jpg",
    alt: "Pic 2",
    title: "Muhammad Asif",
    subtitle: "Student at PAIB Academy",
    guide: "Mentor: Asif Langhra Sb",
    quote:
      "Improving skills daily with guidance and practical experience.",
  },
  {
    src: "/pic3.jpg",
    alt: "Pic 3",
    title: "4K Wallpaper",
    subtitle: "Tech Setup",
    guide: "",
    quote: "A clean tech setup boosts focus, creativity, and productivity.",
  },
  {
    src: "/pic4.jpg",
    alt: "Pic 4",
    title: "4K Wallpaper",
    subtitle: "Elegant Designs",
    guide: "",
    quote: "Minimal and elegant designs create a premium digital experience.",
  },
  {
    src: "/pic5.jpg",
    alt: "Pic 5",
    title: "4K Wallpaper",
    subtitle: "Vibrant Colors",
    guide: "",
    quote: "High-quality visuals bring energy and life to your workspace.",
  },
];

const Page = () => {
  return (
    <main className="pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <section className="max-w-6xl mx-auto px-6 space-y-20">

        {picsData.map((pic, index) => (
          <figure
            key={index}
            className={`md:flex items-center gap-12 rounded-2xl p-10
            bg-white/70 dark:bg-slate-800/60 backdrop-blur
            border border-slate-200 dark:border-slate-700
            shadow-sm hover:shadow-xl transition
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Image */}
            <img
              src={pic.src}
              alt={pic.alt}
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover mx-auto md:mx-0
              ring-4 ring-slate-200 dark:ring-slate-600"
            />

            {/* Content */}
            <div className="text-center md:text-left space-y-4 max-w-xl">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic">
                “{pic.quote}”
              </p>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {pic.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {pic.subtitle}
                </p>

                {pic.guide && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 italic">
                    {pic.guide}
                  </p>
                )}
              </div>
            </div>
          </figure>
        ))}

        {/* Bottom Links */}
        <div className="flex justify-center gap-8 pt-12 border-t border-slate-300 dark:border-slate-700">
          <Link
            href="/about"
            className="px-8 py-3 rounded-md bg-slate-900 text-white font-semibold
            hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
          >
            About
          </Link>

          <Link
            href="/contact-us"
            className="px-8 py-3 rounded-md border border-slate-900 text-slate-900 font-semibold
            hover:bg-slate-900 hover:text-white
            dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition"
          >
            Contact
          </Link>
        </div>

      </section>
    </main>
  );
};

export default Page;
