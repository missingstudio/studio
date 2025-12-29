import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

const components: MDXComponents = {
  h1: (props) => <h1 className="mb-0 pt-12 font-medium" {...props} />,
  h2: (props) => (
    <h2 className="mt-8 mb-3 font-medium text-gray-800" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 font-medium text-gray-800" {...props} />
  ),
  h4: (props) => <h4 className="font-medium" {...props} />,
  p: (props) => <p className="text-neutral-600" {...props} />,
  ol: (props) => (
    <ol className="list-decimal space-y-2 pl-5 text-gray-800" {...props} />
  ),
  ul: (props) => <ul className="list-disc pl-5 text-neutral-600" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  em: (props) => <em className="font-medium" {...props} />,
  strong: (props) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 underline underline-offset-2";

    if (href?.startsWith("/")) {
      return (
        <Link className={className} href={href as Route} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith("#")) {
      return (
        <a className={className} href={href} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="ml-[0.075em] border-gray-300 border-l-3 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
