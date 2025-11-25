import type { ComponentType } from "react";

export type BaseContentMetadata = {
  title: string;
  summary: string;
  publishedAt: string;
  externalUrl?: string;
};

export type ContentEntry<T extends BaseContentMetadata = BaseContentMetadata> =
  {
    slug: string;
    href: string;
    metadata: T;
    Content: ComponentType;
  };
