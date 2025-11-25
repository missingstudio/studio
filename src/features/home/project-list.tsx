"use client";

import type { Route } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

type Project = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  externalUrl?: string;
};

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <motion.ul
      className="space-y-2 pt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {projects.map((project) => (
        <motion.li
          key={project.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href={project.href as Route}
            className="group block rounded-xl px-4 py-4 -mx-4 transition hover:bg-neutral-50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1 flex-1">
                <h3 className="font-medium text-neutral-800 group-hover:text-neutral-900">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500">{project.summary}</p>
              </div>
              {project.externalUrl && (
                <ArrowUpRight
                  size={16}
                  className="text-neutral-400 group-hover:text-neutral-600 flex-shrink-0"
                />
              )}
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
