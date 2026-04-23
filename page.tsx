import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { LogoStrip } from "@/components/logo-strip";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Examples } from "@/components/examples";
import { WhoItsFor } from "@/components/who-its-for";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LogoStrip />
      <Problem />
      <HowItWorks />
      <Examples />
      <WhoItsFor />
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
