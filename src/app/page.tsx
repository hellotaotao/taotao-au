const projectCards = [
  {
    name: "Mentii",
    href: "https://menti.taotao.au",
    status: "Live on Vercel",
    description:
      "A lightweight audience interaction tool for live sessions, voting, and host-controlled experiences.",
  },
  {
    name: "BetterSchool",
    href: "https://betterschool.au",
    status: "Live on Vercel",
    description:
      "A school discovery product focused on helping families compare options with map-led exploration.",
  },
  {
    name: "WhispLine",
    href: "https://github.com/hellotaotao/WhispLine",
    status: "Active build",
    description:
      "Voice-first productivity tooling aimed at making accurate dictation and input feel effortless.",
  },
  {
    name: "Voicely",
    href: "https://github.com/hellotaotao/Voicely",
    status: "Active build",
    description:
      "A macOS-native voice product exploring faster capture, cleaner workflows, and practical AI assistance.",
  },
];

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hellotaotao",
  },
  {
    name: "Email",
    href: "mailto:hellotaotao@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-10 sm:px-10 lg:px-12">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">
            taotao.au
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Tao Wang
              </h1>
              <p className="max-w-3xl text-xl leading-9 text-zinc-300 sm:text-2xl">
                I build practical AI products, tools, and experiments.
              </p>
              <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                Based in Adelaide, I work on useful software that is simple,
                fast to try, and grounded in real-world problems. This site is
                the main hub for my current products, ideas, and ongoing work.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                Right now
              </p>
              <p className="mt-4 text-2xl font-medium text-white">
                Shipping small, useful products with AI where it actually helps.
              </p>
            </div>
          </div>
        </header>

        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-white">Current projects</h2>
            <p className="max-w-3xl text-lg leading-8 text-zinc-400">
              A selection of the products and experiments I am actively pushing
              forward right now.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projectCards.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-white/4 p-6 transition hover:border-white/20 hover:bg-white/6"
              >
                <div className="flex items-start justify-between gap-4">
                  <a
                    className="text-2xl font-semibold text-white underline-offset-4 hover:underline"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
                    {project.status}
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-zinc-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white">About</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              I like building software that feels immediately useful: products
              with a clear purpose, simple interfaces, and enough technical
              depth to keep getting better over time.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              My work often sits at the intersection of AI, productivity,
              education, and practical web products.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white">Now</h2>
            <ul className="mt-5 space-y-4 text-lg leading-8 text-zinc-400">
              <li>• Turning taotao.au into the main home for current work.</li>
              <li>• Improving live products like Mentii and BetterSchool.</li>
              <li>• Exploring voice-first tools such as WhispLine and Voicely.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            The easiest way to find me is through GitHub or email. If we are
            discussing products, prototypes, or practical AI ideas, feel free to
            reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/6"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
