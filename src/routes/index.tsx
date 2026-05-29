import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyUs } from "@/components/WhyUs";
import { MunsiyariDossier } from "@/components/MunsiyariDossier";
import { ReelsRail } from "@/components/ReelsRail";
import { QuoteMoments } from "@/components/QuoteMoments";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bag N’ Bros — Offbeat Himalayan Expeditions" },
      {
        name: "description",
        content:
          "A travel studio for offbeat Himalayan expeditions. Small batches, real homestays, hidden valleys. Next departure: Munsiyari.",
      },
      { property: "og:title", content: "Bag N’ Bros — Born to Roam" },
      {
        property: "og:description",
        content:
          "Curated, custom and private Himalayan trips. Next departure: Munsiyari.",
      },
      { property: "og:image", content: IMG.heroPeak },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.heroPeak },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyUs />
      <MunsiyariDossier />
      <ReelsRail />
      <QuoteMoments />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
