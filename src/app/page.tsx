import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/home/Hero";
import {
  AboutIntro,
  ClientsAndStack,
  FloatingOrbs,
  Newsletter,
  ProcessStrip,
  ServicesPreview,
  StatsBar,
  TechMarquee,
  WhoWeHelp,
  WhyUs,
  WorkPreview,
} from "@/components/home/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: absoluteUrl("/logo.svg"),
    description: site.description,
    email: site.email,
    foundingDate: site.founded,
    sameAs: Object.values(site.socials),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name, url: SITE_URL },
  };

  return (
    <>
      <JsonLd data={[organization, website]} />
      <FloatingOrbs />
      <Hero />
      <TechMarquee />
      <ServicesPreview />
      <WhyUs />
      <StatsBar />
      <WorkPreview />
      <ProcessStrip />
      <AboutIntro />
      <WhoWeHelp />
      <ClientsAndStack />
      <CtaBanner />
      <Newsletter />
    </>
  );
}
