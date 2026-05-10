import { EventsSection } from "@/components/landing/EventsSection";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { RegionsSection } from "@/components/landing/RegionsSection";
// import { SideRail } from "@/components/landing/SideRail";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-background">
      <Header />
      {/* <SideRail /> */}
      <main className="flex-1">
        <Hero />
        <RegionsSection />
        <EventsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
