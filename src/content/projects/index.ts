import { loadContentEntries, loadContentEntry } from "~/content/loaders";
import type { BaseContentMetadata } from "~/content/types";

export type ProjectMetadata = BaseContentMetadata & {
  preview?: { src: string; alt: string; caption?: string };
  badges?: string[];
};

export async function getProjects() {
  return loadContentEntries<ProjectMetadata>("projects");
}

export async function getProject(slug: string) {
  return loadContentEntry<ProjectMetadata>("projects", slug);
}
