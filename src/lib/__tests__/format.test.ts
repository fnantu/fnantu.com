import { describe, it, expect } from "vitest";
import { formatDateTR } from "../format";

describe("formatDateTR", () => {
  it("formats a valid ISO date to Turkish", () => {
    expect(formatDateTR("2025-06-12")).toBe("12 Haz 2025");
  });

  it("formats January correctly", () => {
    expect(formatDateTR("2026-01-05")).toBe("5 Oca 2026");
  });

  it("formats December correctly", () => {
    expect(formatDateTR("2025-12-31")).toBe("31 Ara 2025");
  });

  it("formats all months correctly", () => {
    const expected = [
      "Oca", "Şub", "Mar", "Nis", "May", "Haz",
      "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara",
    ];
    for (let i = 0; i < 12; i++) {
      const month = String(i + 1).padStart(2, "0");
      const result = formatDateTR(`2025-${month}-15`);
      expect(result).toContain(expected[i]);
    }
  });

  it("returns the original string for invalid date", () => {
    expect(formatDateTR("not-a-date")).toBe("not-a-date");
  });

  it("returns the original string for empty string", () => {
    expect(formatDateTR("")).toBe("");
  });
});
