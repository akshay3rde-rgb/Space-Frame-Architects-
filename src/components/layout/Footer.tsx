import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="container-edit pt-20 md:pt-28 pb-10">
        <div className="grid-edit items-end">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <p className="font-serif text-[12vw] md:text-[6.5vw] leading-[0.92] tracking-tight">
              Let&rsquo;s make
              <br />
              something that lasts.
            </p>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-4 mt-10 lg:mt-0 flex lg:justify-end">
            <Link
              href="/contact"
              className="text-eyebrow text-xs border border-offwhite/40 rounded-full px-6 py-3 hover:bg-offwhite hover:text-charcoal transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="rule-light my-12 md:my-16" />

        <div className="grid-edit text-sm">
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <p className="font-serif text-xl mb-1">SpaceFrame Architects</p>
            <p className="text-offwhite/60 text-sm">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.country}
            </p>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-2 mt-8 md:mt-0">
            <p className="text-eyebrow text-[0.65rem] text-offwhite/50 mb-4">Navigate</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-offwhite/70 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-3 mt-8 md:mt-0">
            <p className="text-eyebrow text-[0.65rem] text-offwhite/50 mb-4">Cities</p>
            <ul className="space-y-2">
              {site.cities.map((c) => (
                <li key={c}>
                  <Link
                    href={`/cities/${c.toLowerCase()}`}
                    className="hover:text-offwhite/70 transition-colors"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-3 mt-8 lg:mt-0">
            <p className="text-eyebrow text-[0.65rem] text-offwhite/50 mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-offwhite/70 transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-offwhite/70 transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} className="hover:text-offwhite/70 transition-colors">
                    {s.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-light my-10" />

        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-offwhite/40">
          <p>
            &copy; {new Date().getFullYear()} SpaceFrame Architects. 25+ years of architecture in Madhya
            Pradesh.
          </p>
          <p>Indore &middot; Ujjain &middot; Bhopal &middot; Guna &middot; Shivpuri</p>
        </div>
      </div>
    </footer>
  );
}
