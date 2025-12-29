declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { BaseContentMetadata } from "./src/content/types";

  export const metadata: BaseContentMetadata;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
