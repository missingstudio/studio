import { loadContentEntries, loadContentEntry } from "~/content/loaders";
import type { BaseContentMetadata } from "~/content/types";

type BlogMetadata = BaseContentMetadata & {
  thumbnail?: { src: string; alt: string };
};

export async function getBlogPosts() {
  return loadContentEntries<BlogMetadata>("blogs");
}

export async function getBlogPost(slug: string) {
  return loadContentEntry<BlogMetadata>("blogs", slug);
}
