import type { Metadata } from "next";
import ArchImage from "@/components/ui/ArchImage";
import ContactForm from "@/components/forms/ContactForm";
import { Reveal, RevealMask } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { interiors } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SpaceFrame Architects in Indore. Tell us about your site, project and timeline.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SpaceFrame Architects | Indore Architecture Firm",
    description: "Have a project, site or idea in mind? Tell us where you're starting.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-edit grid-edit mb-20 md:mb-28">
        <div className="col-span-4 md:col-span-5 lg:col-span-7">
          <RevealMask>
            <h1 className="font-serif text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
              Let&rsquo;s talk
              <br />
              about space.
            </h1>
          </RevealMask>
          <Reveal delay={0.15} className="mt-8 max-w-md">
            <p className="text-charcoal/65 text-base md:text-lg leading-relaxed">
              Have a project, site or idea in mind? Tell us where you&rsquo;re starting.
            </p>
          </Reveal>
        </div>
        <Reveal
          delay={0.1}
          className="col-span-4 md:col-span-3 lg:col-span-5 mt-8 md:mt-0 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-sand"
        >
          <ArchImage image={interiors[6]} priority />
        </Reveal>
      </div>

      <div className="container-edit grid-edit">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-6">SpaceFrame Architects</p>
          <p className="font-serif text-2xl leading-snug mb-8">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.country}
          </p>

          <div className="space-y-4 text-base">
            <a href={`mailto:${site.email}`} className="block hover:opacity-60 transition-opacity">
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="block hover:opacity-60 transition-opacity"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div className="rule my-10" />

          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">Studio hours</p>
          <p className="text-charcoal/70 leading-relaxed">
            Monday &ndash; Saturday
            <br />
            10:00 &ndash; 19:00 IST
          </p>
        </div>

        <div className="col-span-4 md:col-span-5 lg:col-span-8 mt-16 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
