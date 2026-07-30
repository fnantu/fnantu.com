import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fnantu.com"),
  title: { default: "Furkan Nantu", template: "%s | Furkan Nantu" },
  description: "Endüstri Mühendisi — veri, yazılım ve sistemler üzerine.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Furkan Nantu",
    description: "Endüstri Mühendisi — veri, yazılım ve sistemler.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Furkan Nantu RSS" href="/rss.xml" />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
