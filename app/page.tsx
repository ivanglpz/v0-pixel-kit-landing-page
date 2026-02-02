import { Header } from "@/components/pixel-kit/header";
import { Hero } from "@/components/pixel-kit/hero";
import { Features } from "@/components/pixel-kit/features";
import { Customization } from "@/components/pixel-kit/customization";
import { CTA } from "@/components/pixel-kit/cta";
import { Footer } from "@/components/pixel-kit/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Customization />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
