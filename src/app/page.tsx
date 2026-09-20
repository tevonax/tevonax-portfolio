import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function Home() {
  const siteUrl = getSiteUrl();

  // Organization structured data for search engines.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: site.description,
    sameAs: [site.github, site.linkedin, site.x].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never terminate the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Approach />
      <Faq />
      <Contact />
    </>
  );
}
