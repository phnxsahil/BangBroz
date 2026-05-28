import { createFileRoute } from "@tanstack/react-router";
import heroMountains from "@/assets/hero-mountains.jpg";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MunsiyariDossier } from "@/components/MunsiyariDossier";
import { ReelsRail } from "@/components/ReelsRail";
import { StackedChapters } from "@/components/StackedChapters";
import { QuoteMoments } from "@/components/QuoteMoments";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bag N' Bros — Offbeat Himalayan Expeditions" },
      {
        name: "description",
        content:
          "Born to Roam. Cinematic, offbeat Himalayan expeditions for people who want stories, not tourist packages. Next trip: Munsiyari.",
      },
      { property: "og:title", content: "Bag N' Bros — Born to Roam" },
      {
        property: "og:description",
        content:
          "Cinematic offbeat Himalayan expeditions. Next departure: Munsiyari.",
      },
      { property: "og:image", content: heroMountains },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroMountains },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative bg-background text-foreground grain-fixed">
      <Nav />
      <Hero />
      <MunsiyariDossier />
      <ReelsRail />
      <StackedChapters />
      <QuoteMoments />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
