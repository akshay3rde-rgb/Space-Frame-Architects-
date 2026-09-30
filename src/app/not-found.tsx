import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70svh] flex flex-col items-center justify-center text-center container-edit pt-32">
      <p className="text-eyebrow text-xs text-charcoal/50 mb-6">404</p>
      <h1 className="font-serif text-[14vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
        This space
        <br />
        doesn&rsquo;t exist yet.
      </h1>
      <Link
        href="/"
        className="mt-10 text-eyebrow text-xs border-b border-charcoal/40 pb-1 hover:border-charcoal"
      >
        Back to home
      </Link>
    </div>
  );
}
