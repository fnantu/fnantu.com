import { Download } from "lucide-react";
import { PageShell } from "@/components/layout";
import { CvTemplate } from "@/components/cv-template";
import { PrintButton } from "@/components/print-button";
import "./cv-template.css";

export const metadata = {
  title: "CV",
  description: "Furkan Nantu — özgeçmiş.",
};

export default function CV() {
  return (
    <PageShell>
      <div className="mx-auto w-full max-w-[220mm] px-3 py-10 sm:px-6 lg:py-14 print:max-w-none print:px-0 print:py-0">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div>
            <p className="eyebrow">Özgeçmiş</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Furkan Nantu
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <a
              href="/documents/furkan-nantu-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-glow-btn"
            >
              <Download size={16} /> PDF indir
            </a>
          </div>
        </div>

        <div className="overflow-x-auto pb-2 print:overflow-visible print:pb-0">
          <CvTemplate />
        </div>
      </div>
    </PageShell>
  );
}
