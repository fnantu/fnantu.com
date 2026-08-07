import { describe, it, expect } from "vitest";
import { getProjects, getPosts } from "../content";

describe("getProjects", () => {
  it("returns an array", () => {
    const projects = getProjects();
    expect(Array.isArray(projects)).toBe(true);
  });

  it("each project has required fields", () => {
    const projects = getProjects();
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(Array.isArray(project.tags)).toBe(true);
    }
  });

  it("projects are sorted by number", () => {
    const projects = getProjects();
    if (projects.length > 1) {
      for (let i = 1; i < projects.length; i++) {
        expect(projects[i].number >= projects[i - 1].number).toBe(true);
      }
    }
  });
});

describe("getPosts", () => {
  it("returns an array", () => {
    const posts = getPosts();
    expect(Array.isArray(posts)).toBe(true);
  });

  it("each post has required fields", () => {
    const posts = getPosts();
    for (const post of posts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.minutes).toMatch(/\d+ dk/);
    }
  });

  it("posts are sorted by date descending", () => {
    const posts = getPosts();
    if (posts.length > 1) {
      for (let i = 1; i < posts.length; i++) {
        const dateA = new Date(posts[i - 1].date).getTime();
        const dateB = new Date(posts[i].date).getTime();
        expect(dateA).toBeGreaterThanOrEqual(dateB);
      }
    }
  });
});
