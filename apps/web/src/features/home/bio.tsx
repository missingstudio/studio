export function Bio() {
  return (
    <section aria-labelledby="bio-heading" className="px-6 sm:px-10" id="bio">
      <div className="max-w-2xl space-y-4 text-left text-neutral-700 leading-relaxed">
        <h1 className="sr-only" id="bio-heading">
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
