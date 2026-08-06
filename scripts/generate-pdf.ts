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

  if (isCI) {
    console.log("⚙ CI detected — skipping PDF regeneration, copying existing file");
  } else {
    try {
      const server = spawn("npx", ["serve", "out", "-p", "3456"], {
        stdio: "ignore",
        detached: true,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        execSync(`weasyprint http://localhost:3456/cv "${publicPdfPath}"`, {
          stdio: "ignore",
        });
        console.log("✓ public/documents/furkan-nantu-cv.pdf generated");
      } catch {
        console.warn("weasyprint not available, using existing PDF fallback");
      } finally {
        if (server.pid) {
          try {
            process.kill(-server.pid);
          } catch {
            // process already exited
          }
        }
      }
    } catch (err) {
      console.warn("Failed to spawn server for PDF generation:", err);
    }
  }

  // Ensure PDF is copied to out/documents/ for static export deployments (Cloudflare / Vercel)
  if (existsSync(publicPdfPath)) {
    if (!existsSync(outDocsDir)) {
      mkdirSync(outDocsDir, { recursive: true });
    }
    const outPdfPath = join(outDocsDir, "furkan-nantu-cv.pdf");
    copyFileSync(publicPdfPath, outPdfPath);
    console.log("✓ out/documents/furkan-nantu-cv.pdf synchronized");
  } else {
    console.warn("⚠ public/documents/furkan-nantu-cv.pdf not found — skipping sync");
  }
}

main();
