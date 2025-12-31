import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="pt-24 pb-20 bg-white dark:bg-slate-900">
      <section className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
            Let’s connect and discuss how I can help you with AI-powered solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* WhatsApp */}
          <a
            href="https://wa.me/923707615224"
            target="_blank"
            className="flex items-center gap-5 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <span className="text-3xl">📱</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                WhatsApp
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Chat with me instantly
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:masifgpt@gmail.com"
            className="flex items-center gap-5 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <span className="text-3xl">📧</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                masifgpt@gmail.com
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/m.asif.423683"
            target="_blank"
            className="flex items-center gap-5 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <span className="text-3xl">📘</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Facebook
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Connect on Facebook
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-asif-30163737a/"
            target="_blank"
            className="flex items-center gap-5 bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <span className="text-3xl">💼</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                LinkedIn
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                View my professional profile
              </p>
            </div>
          </a>

        </div>

        {/* Bottom Line */}
        <p className="text-center mt-16 text-slate-600 dark:text-slate-400">
          Available for freelance work, collaborations, and AI-based projects.
        </p>

      </section>
    </main>
  );
};

export default ContactPage;
