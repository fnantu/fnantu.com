import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { Avatar } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[.05] bg-zinc-950/80 backdrop-blur-md print:hidden">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/">
          <Avatar size="sm" priority />
        </Link>
        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <Link href="/about" className="transition hover:text-violet-300">
            Hakkımda
          </Link>
          <Link href="/projects" className="transition hover:text-violet-300">
            Projeler
          </Link>
          <Link href="/blog" className="transition hover:text-violet-300">
            Yazılar
          </Link>
          <Link href="/cv" className="transition hover:text-violet-300">
            CV
          </Link>
        </div>
        <Link
          href="/contact"
          className="hidden items-center gap-1.5 rounded-full border border-white/[.1] px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/[.2] hover:text-white md:flex"
        >
          İletişim <ArrowUpRight size={14} />
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}
