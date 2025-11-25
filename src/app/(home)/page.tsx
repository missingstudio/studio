import { Bio } from "~/features/home/bio";

import { cacheLife } from "next/cache";

export default async function Home() {
  "use cache";
  cacheLife("max");

  return (
    <main className="flex flex-col min-h-screen bg-white text-neutral-800 justify-center items-center">
      <div className="mx-auto flex max-w-3xl flex-col gap-32 px-6 py-20">
        <Bio />
      </div>
    </main>
  );
}
