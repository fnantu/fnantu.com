import { execSync, spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

async function main() {
  const docsDir = join(process.cwd(), "public", "documents");
  if (!existsSync(docsDir)) {
    mkdirSync(docsDir, { recursive: true });
  }

  const pdfPath = join(docsDir, "furkan-nantu-cv.pdf");

  const server = spawn("npx", ["serve", "out", "-p", "3456"], {
    stdio: "ignore",
    detached: true,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    execSync(`weasyprint http://localhost:3456/cv "${pdfPath}"`, {
      stdio: "ignore",
    });
    console.log("✓ public/documents/furkan-nantu-cv.pdf generated");
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  } finally {
    if (server.pid) {
      try {
        process.kill(-server.pid);
      } catch {
        // process already exited
      }
    }
  }
}

main();
