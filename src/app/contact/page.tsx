import { Github, Linkedin, Mail } from "lucide-react";
import { PageShell } from "@/components/layout";

export const metadata = {
  title: "İletişim",
  description: "Furkan Nantu ile iletişim.",
};

export default function Contact() {
  return (
    <PageShell>
      <section className="section min-h-[600px] pt-20 sm:pt-28">
        <p className="eyebrow">İletişim</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Bana ulaşın.
        </h1>

        <div className="mt-12 space-y-6">
          <a
            href="mailto:furkannantu@hotmail.com"
            className="inline-flex items-center gap-3 text-xl font-bold text-violet-300 transition hover:text-violet-400"
          >
            <Mail size={20} />
            furkannantu@hotmail.com
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            className="card inline-flex items-center gap-2 px-4 py-3 text-sm transition hover:border-violet-500/30"
            href="https://www.linkedin.com/in/furkan-nantu-6b1827175/"
            target="_blank"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            className="card inline-flex items-center gap-2 px-4 py-3 text-sm transition hover:border-violet-500/30"
            href="https://github.com/fnantu"
            target="_blank"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </section>
    </PageShell>
  );
}
