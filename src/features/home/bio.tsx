export function Bio() {
  return (
    <section id="bio" className="px-6 sm:px-10" aria-labelledby="bio-heading">
      <div className="max-w-2xl space-y-4 text-left leading-relaxed text-neutral-700">
        <h1 id="bio-heading" className="sr-only">
          Company bio
        </h1>

        <p className="drop-cap">
          <span className="font-semibold">We are Missing studio -</span>{" "}
          building highly capable agents to run entire businesses autonomously
        </p>
      </div>
    </section>
  );
}
