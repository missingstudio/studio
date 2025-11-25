import { cacheLife } from "next/cache";
import { getProjects } from "~/content/projects";
import { ProjectList } from "~/features/home/project-list";

export async function Projects() {
  "use cache";
  cacheLife("max");

  const projects = await getProjects();

  const projectData = projects.map((p) => ({
    slug: p.slug,
    href: p.href,
    title: p.metadata.title,
    summary: p.metadata.summary,
    externalUrl: p.metadata.externalUrl,
  }));

  return (
    <section id="projects" className="px-6 sm:px-10 pb-16">
      <div className="max-w-2xl mx-auto text-neutral-700">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Projects
        </h2>
        <ProjectList projects={projectData} />
      </div>
    </section>
  );
}
