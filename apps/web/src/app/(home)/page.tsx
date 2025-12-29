import { cacheLife } from "next/cache";
import { Bio } from "~/features/home/bio";

export default async function Home() {
  "use cache";
  cacheLife("max");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-col gap-32 px-6 py-20">
        <Bio />
      </div>
    </main>
  );
}
