import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_blog");
const showcaseDirectory = join(process.cwd(), "_showcase");
const testimonialsDirectory = join(process.cwd(), "_testimonials");

export function getSlugs(directory) {
  return fs.readdirSync(directory);
}

export function getPostBySlug(slug, fields = [], directory) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(`${directory}`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getSlugs(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, postsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllShowcase(fields = []) {
  const slugs = getSlugs(showcaseDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, showcaseDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTestimonials(fields = []) {
  const slugs = getSlugs(testimonialsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, testimonialsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
