import { HomeHeroRow } from "@/components/home/HomeHeroRow";
import UpcomingEventsStandalone from "@/components/home/UpcomingEventsStandalone";
import ComingSoonPopup from "@/components/ui/ComingSoonPopup";

export default function HomePage() {
  return (
    <main>
      <ComingSoonPopup />
      <HomeHeroRow />
      <UpcomingEventsStandalone />
    </main>
  );
}