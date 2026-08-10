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

export default function Home() {
  return (
    <>
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
