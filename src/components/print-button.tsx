"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-white/[.1] px-5 py-3 text-sm font-bold text-zinc-100 transition hover:bg-white/[.04] hover:border-white/[.2]"
    >
      <Printer size={16} />
      Yazdır
    </button>
  );
}
