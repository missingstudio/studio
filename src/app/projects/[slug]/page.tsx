import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";

import { BackButton } from "~/components/back-button";
import { getProject, getProjects } from "~/content/projects";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  "use cache";
  cacheLife("max");

  const projectList = await getProjects();
  return projectList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  return {
    title: project.metadata.title,
    description: project.metadata.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  "use cache";
  cacheLife("max");

  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const Content = project.Content;

  return (
    <article className="prose mx-auto max-w-2xl px-6 py-16 animate-in fade-in duration-500">
      <BackButton className="mb-6" fallbackHref="/#projects" />
      <header className="space-y-2 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Project
        </p>
        <h1 className="text-3xl font-semibold text-neutral-900">
          {project.metadata.title}
        </h1>
        <p className="text-neutral-500">{project.metadata.summary}</p>
        <time
          dateTime={project.metadata.publishedAt}
          className="block text-sm text-neutral-400"
        >
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(project.metadata.publishedAt))}
        </time>
        {project.metadata.externalUrl && (
          <a
            href={project.metadata.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-medium text-neutral-700 underline decoration-dotted underline-offset-4 hover:text-neutral-900"
          >
            View live
          </a>
        )}
      </header>
      <Content />
    </article>
  );
}
