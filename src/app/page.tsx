import Link from "next/link";

const picsData = [
  {
    src: "/pic1.jpg",
    alt: "Pic 1",
    title: "M Asif",
    subtitle: "Student at PAIB Academy",
    guide: "Teacher & Guide: Asif Langhra Sb",
    quote:
      "Learning with dedication and guidance from Asif Langhra Sb at PAIB Academy.",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/40 border-yellow-200 dark:border-yellow-700",
    textColor: "text-yellow-900 dark:text-yellow-300",
    subtitleColor: "text-yellow-700 dark:text-yellow-400",
  },
  {
    src: "/pic2.jpg",
    alt: "Pic 2",
    title: "M Asif",
    subtitle: "Student at PAIB Academy",
    guide: "Teacher & Guide: Asif Langhra Sb",
    quote:
      "Growing skills every day with support from our guide Asif Langhra Sb.",
    bgColor: "bg-green-50 dark:bg-green-900/40 border-green-200 dark:border-green-700",
    textColor: "text-green-900 dark:text-green-300",
    subtitleColor: "text-green-700 dark:text-green-400",
  },
  {
    src: "/pic3.jpg",
    alt: "Pic 3",
    title: "4K Wallpaper",
    subtitle: "Tech Setup",
    guide: "",
    quote: "A well-organized tech setup boosts creativity and efficiency.",
    bgColor: "bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700",
    textColor: "text-blue-900 dark:text-blue-300",
    subtitleColor: "text-blue-700 dark:text-blue-400",
  },
  {
    src: "/pic4.jpg",
    alt: "Pic 4",
    title: "4K Wallpaper",
    subtitle: "Elegant Designs",
    guide: "",
    quote:
      "Experience elegance and clarity with our exclusive wallpaper collection.",
    bgColor: "bg-purple-50 dark:bg-purple-900/40 border-purple-200 dark:border-purple-700",
    textColor: "text-purple-900 dark:text-purple-300",
    subtitleColor: "text-purple-700 dark:text-purple-400",
  },
  {
    src: "/pic5.jpg",
    alt: "Pic 5",
    title: "4K Wallpaper",
    subtitle: "Vibrant Colors",
    guide: "",
    quote:
      "Bring life to your screen with vibrant, high-quality wallpapers.",
    bgColor: "bg-pink-50 dark:bg-pink-900/40 border-pink-200 dark:border-pink-700",
    textColor: "text-pink-900 dark:text-pink-300",
    subtitleColor: "text-pink-700 dark:text-pink-400",
  },
];

const Page = () => {
  return (
    <div className="space-y-16 p-8 max-w-5xl mx-auto">
      {picsData.map((pic, index) => (
        <figure
          key={index}
          className={`md:flex items-center rounded-2xl p-8 shadow-lg border
            ${pic.bgColor}
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
          `}
        >
          <img
            className="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto"
            src={pic.src}
            alt={pic.alt}
          />
          <div
            className={`pt-6 md:p-8 text-center md:text-left space-y-4 max-w-xl ${pic.textColor}`}
          >
            <blockquote>
              <p className="text-lg font-semibold italic">“{pic.quote}”</p>
            </blockquote>
            <figcaption className="font-semibold">
              <div className="text-sky-600 dark:text-sky-400">{pic.title}</div>
              <div className={`${pic.subtitleColor} mt-1`}>{pic.subtitle}</div>
              {pic.guide && (
                <div className="mt-1 text-gray-600 dark:text-gray-400 font-medium italic">
                  {pic.guide}
                </div>
              )}
            </figcaption>
          </div>
        </figure>
      ))}

      {/* About and Contact Links at bottom with yellow style */}
      <div className="mt-12 flex justify-center gap-6 border-t pt-6">
        <Link
          href="/about"
          className="text-yellow-600 border border-yellow-600 rounded px-5 py-2 font-semibold hover:bg-yellow-600 hover:text-white transition"
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className="text-yellow-600 border border-yellow-600 rounded px-5 py-2 font-semibold hover:bg-yellow-600 hover:text-white transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Page;
