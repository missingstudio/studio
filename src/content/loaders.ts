"use server";

import { cacheLife, cacheTag } from "next/cache";
import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import type { BaseContentMetadata, ContentEntry } from "~/content/types";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

type ContentKind = "blogs" | "projects";

type ContentModule<T extends BaseContentMetadata> = {
  default: ComponentType;
  metadata: T;
};

async function readSlugs(kind: ContentKind) {
  const dir = path.join(CONTENT_ROOT, kind);
  const files = await readdir(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

async function loadModule<T extends BaseContentMetadata>(
  kind: ContentKind,
  slug: string,
): Promise<ContentEntry<T>> {
  const module = (await import(
    `~/content/${kind}/${slug}.mdx`
  )) as ContentModule<T>;

  return {
    slug,
    href: `/${kind}/${slug}`,
    metadata: module.metadata,
    Content: module.default,
  };
}

function sortByDate<T extends BaseContentMetadata>(entries: ContentEntry<T>[]) {
  return entries.toSorted((a, b) => {
    const aTime = new Date(a.metadata.publishedAt).getTime();
    const bTime = new Date(b.metadata.publishedAt).getTime();
    return bTime - aTime;
  });
}

export async function loadContentEntries<T extends BaseContentMetadata>(
  kind: ContentKind,
) {
  cacheLife("max");
  cacheTag(`${kind}:list`);

  const slugs = await readSlugs(kind);
  const entries = await Promise.all(
    slugs.map((slug) => loadModule<T>(kind, slug)),
  );
  return sortByDate(entries);
}

export async function loadContentEntry<T extends BaseContentMetadata>(
  kind: ContentKind,
  slug: string,
) {
  cacheLife("max");
  cacheTag(`${kind}:${slug}`);

  try {
    return await loadModule<T>(kind, slug);
  } catch {
    return null;
  }
}
