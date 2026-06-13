import Head from "next/head";
import Button from "./components/Button";
import TextHeader from "./components/TextHeader";
import FeaturesCard from "./components/FeaturesCard";
import { StatCard } from "./components/StatCard";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { FigmaFrame } from "./components/FigmaFrame";

import OrganizeSection from "./components/OrganizeSection";
import NewsletterSection from "./components/NewsletterSection";
import ImpactSection from "./components/ImpactSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="relative py-4">
      <Head>
        <title>Moxtil Figmaland</title>
        <meta
          name="description"
          content="Moxtil Figmaland is the app showing the features and info about figma"
        />
        <meta
          name="keywords"
          content="app, website, figma , moxtil , moxtil figmaland , figmaland , netlify , moxtil netlify"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Background orbs */}
      {/* <div className="orbs">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="orb"></div>
          ))}
      </div> */}
      <div
  className="
  absolute
  inset-0
  bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_60%)]
  "
/>
      {/* <SceneMacbook /> */}


      {/* Hero Section */}
      <section id="hero">
      <HeroSection  />
      </section>

      {/* Features Section */}
      <section className="relative" id="features">
        <FeaturesCard />
      </section>

<section className="relative" id="video">
      <FigmaFrame />
  </section>
      {/* <VideoPlayer videoId="Cx2dkpBxst8" /> */}

      {/* Organize Section */}
      <section id="organize">
      <OrganizeSection />
      </section>

      {/* Newsletter Section */}
      <section id="newsletter">
      <NewsletterSection />
        </section>

      {/* Partners Section */}
      <section id="partners">
      <TextHeader
        title="Partners"
        subtitle="Most calendars are designed for teams. Slate is designed for freelancers"
      />
      <Partners />
      </section>

      {/* Stats Section */}
      <section id="stats" className="mt-16 mb-8">
        <StatCard />
      </section>
<section id="pricing">
      <Pricing />
</section>

      {/* Impact Section */}
      <section id="impact">
      <ImpactSection />
</section>
      {/* FAQ Section */}
      <section id="faq">
      <FAQSection />
</section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-4">
        <TextHeader
          title="What Our Users Say"
          subtitle="Trusted by creatives and freelancers worldwide"
        />
        <TestimonialsSection />
      </section>


<CTASection />
      {/* Contact Section */}
      <section id="contact">
      <Contact />
      </section>
    </main>
  );
}
