"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (typeof window !== "undefined" && "plausible" in window) {
      (window as unknown as { plausible: (event: string, options: { props: Record<string, string | number> }) => void }).plausible("Web Vitals", {
        props: {
          name: metric.name,
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          rating: metric.rating,
        },
      });
    }
  });

  return null;
}
