import { site } from "@/data/site";
import { SITE_URL } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "IN",
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    image: `${SITE_URL}/opengraph-image`,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "IN",
    },
    areaServed: site.cities.map((c) => ({ "@type": "City", name: c })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  date: string;
  author: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    author: { "@type": "Person", name: a.author },
    publisher: { "@type": "Organization", name: site.name },
    image: [a.image],
    mainEntityOfPage: `${SITE_URL}${a.path}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
