"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

const NEWSLETTER_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_URL || "";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    if (NEWSLETTER_URL) {
      try {
        await fetch(NEWSLETTER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch {
        setStatus("error");
        return;
      }
    }

    setStatus("ok");
    setEmail("");
  }

  return (
    <div className="rounded-[24px] border border-white/[.06] p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <Mail size={20} className="text-violet-400" />
        <h3 className="text-lg font-bold">Bülten</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Yeni yazılardan haberdar olmak için e-posta adresini bırakabilirsin.
      </p>

      {status === "ok" ? (
        <p className="mt-4 text-sm font-semibold text-violet-300">
          Kaydın alındı, teşekkürler.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eposta@ornek.com"
            required
            className="min-w-0 flex-1 rounded-full border border-white/[.08] bg-zinc-900/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-500/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-bold transition hover:bg-violet-500 hover:shadow-glow-btn disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Gönder"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">Bir hata oluştu, tekrar dene.</p>
      )}
    </div>
  );
}
