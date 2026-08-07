import { describe, it, expect } from "vitest";
import { validateBlogFrontmatter, validateProjectFrontmatter } from "../content-schema";

describe("validateBlogFrontmatter", () => {
  const validBlog = {
    slug: "test-post",
    category: "DATA",
    title: "Test Title",
    excerpt: "Test excerpt",
    date: "2025-06-12",
  };

  it("accepts valid blog frontmatter", () => {
    const result = validateBlogFrontmatter(validBlog);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("rejects missing slug", () => {
    const { slug: _, ...data } = validBlog;
    const result = validateBlogFrontmatter(data);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("slug"))).toBe(true);
  });

  it("rejects missing title", () => {
    const { title: _, ...data } = validBlog;
    const result = validateBlogFrontmatter(data);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("title"))).toBe(true);
  });

  it("rejects missing date", () => {
    const { date: _, ...data } = validBlog;
    const result = validateBlogFrontmatter(data);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("date"))).toBe(true);
  });

  it("rejects invalid date format", () => {
    const result = validateBlogFrontmatter({ ...validBlog, date: "12 Haz 2025" });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("ISO"))).toBe(true);
  });

  it("rejects invalid slug format", () => {
    const result = validateBlogFrontmatter({ ...validBlog, slug: "Invalid Slug!" });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("slug"))).toBe(true);
  });

  it("rejects null input", () => {
    const result = validateBlogFrontmatter(null);
    expect(result.valid).toBe(false);
  });

  it("rejects non-object input", () => {
    const result = validateBlogFrontmatter("string");
    expect(result.valid).toBe(false);
  });
});

describe("validateProjectFrontmatter", () => {
  const validProject = {
    slug: "test-project",
    number: "01",
    title: "Test Project",
    summary: "Short summary",
    description: "Longer description",
    tags: "Python, SQL",
    year: "2026",
    outcome: "Completed",
  };

  it("accepts valid project frontmatter", () => {
    const result = validateProjectFrontmatter(validProject);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("rejects missing number", () => {
    const { number: _, ...data } = validProject;
    const result = validateProjectFrontmatter(data);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("number"))).toBe(true);
  });

  it("rejects missing tags", () => {
    const { tags: _, ...data } = validProject;
    const result = validateProjectFrontmatter(data);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("tags"))).toBe(true);
  });

  it("collects multiple errors", () => {
    const result = validateProjectFrontmatter({});
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(1);
  });
});
