import { execSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const isCI = Boolean(process.env.CI || process.env.CF_PAGES);

async function main() {
  const publicDocsDir = join(process.cwd(), "public", "documents");
  const outDocsDir = join(process.cwd(), "out", "documents");

  if (!existsSync(publicDocsDir)) {
    mkdirSync(publicDocsDir, { recursive: true });
  }

  const publicPdfPath = join(publicDocsDir, "furkan-nantu-cv.pdf");

  if (!isCI && existsSync(publicPdfPath)) {
    // Local: regenerate PDF with weasyprint via a lightweight server
    let server: ReturnType<typeof spawn> | null = null;
    try {
      server = spawn("npx", ["http-server", "out", "-p", "3456", "-s"], {
        stdio: "ignore",
        detached: true,
      });

      await new Promise((r) => setTimeout(r, 2000));

      execSync(`weasyprint http://localhost:3456/cv "${publicPdfPath}"`, {
        stdio: "ignore",
      });
      console.log("✓ public/documents/furkan-nantu-cv.pdf regenerated");
    } catch {
      console.warn("⚠ weasyprint not available — keeping existing PDF");
    } finally {
      if (server?.pid) {
        try { process.kill(-server.pid); } catch { /* already exited */ }
      }
    }
  } else if (!isCI) {
    console.warn("⚠ No existing PDF found — skipping generation");
  }

  // Always copy to out/documents/ (works in both CI and local)
  if (existsSync(publicPdfPath)) {
    if (!existsSync(outDocsDir)) {
      mkdirSync(outDocsDir, { recursive: true });
    }
    copyFileSync(publicPdfPath, join(outDocsDir, "furkan-nantu-cv.pdf"));
    console.log("✓ out/documents/furkan-nantu-cv.pdf synced");
  } else {
    console.warn("⚠ furkan-nantu-cv.pdf not found — skipping sync");
  }
}

main();
