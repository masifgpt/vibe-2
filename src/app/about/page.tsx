import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="pt-24 pb-20 bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6">

        {/* Top Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          {/* Image */}
          <img
            src="/pic1.jpg"
            alt="Muhammad Asif"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
          />

          {/* Intro */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
              Muhammad Asif
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              AI & Full-Stack Developer | AI Automation, Agentic AI & Chatbots |  
              Next.js, React, Tailwind CSS, Node.js
            </p>

            <p className="text-slate-500 dark:text-slate-400">
              Faisalabad, Punjab, Pakistan
            </p>

            <Link
              href="/contact"
              className="inline-block mt-4 px-8 py-3 rounded-md bg-yellow-500 text-white font-semibold
              hover:bg-yellow-600 transition"
            >
              👉 Hire Me
            </Link>
          </div>
        </div>

        {/* One Line */}
        <p className="text-center text-xl text-slate-700 dark:text-slate-200 mb-20 max-w-3xl mx-auto">
          I turn ideas into intelligent, scalable, and impactful digital solutions
          using modern web technologies and AI.
        </p>

        {/* About Me Section */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            About Me
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            I am an <span className="font-semibold">AI & Full-Stack Web Developer</span> who builds
            AI-powered web applications with a strong focus on AI Automation,
            Agentic AI, and Chatbot solutions. My work combines modern frontend
            development with backend logic and intelligent AI integration to
            deliver smart, scalable, and user-friendly digital products.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            I specialize in creating clean, responsive user interfaces and
            integrating intelligent AI features that add real value to web
            applications and business workflows.
          </p>
        </div>

        {/* What I Work On */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            What I Work On
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-slate-700 dark:text-slate-300">
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              🚀 AI Automation for task optimization and workflow efficiency
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              🤖 Intelligent Chatbots for websites and applications
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              🧠 Agentic AI systems that can reason, plan, and act
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg shadow-sm">
              🎨 Modern frontend interfaces with clean UI/UX
            </li>
            <li className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg shadow-sm md:col-span-2">
              ⚙️ Backend logic and API integrations
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
};

export default AboutPage;
