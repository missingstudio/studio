import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { Route } from "next";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

const components: MDXComponents = {
  h1: (props) => <h1 className="font-medium pt-12 mb-0" {...props} />,
  h2: (props) => (
    <h2 className="text-gray-800 font-medium mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-gray-800 font-medium mt-8 mb-3" {...props} />
  ),
  h4: (props) => <h4 className="font-medium" {...props} />,
  p: (props) => <p className="text-neutral-600" {...props} />,
  ol: (props) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props) => <ul className="text-neutral-600 list-disc pl-5" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  em: (props) => <em className="font-medium" {...props} />,
  strong: (props) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 underline underline-offset-2";

    if (href?.startsWith("/")) {
      return (
        <Link href={href as Route} className={className} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
