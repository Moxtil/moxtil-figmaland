import Head from "next/head";
import Button from "./components/Button";
import TextHeader from "./components/TextHeader";
import FeaturesCard from "./components/FeaturesCard";
import { StatCard } from "./components/StatCard";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import TypeAnimationComp from "./components/TypeAnimationComp";
import { FigmaFrame } from "./components/FigmaFrame";
// import { VideoPlayer } from "./components/YoutubeFrame";

import OrganizeSection from "./components/OrganizeSection";
import NewsletterSection from "./components/NewsletterSection";
import ImpactSection from "./components/ImpactSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
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
      <div className="orbs">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="orb"></div>
          ))}
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="relative">
        <TextHeader
          title="Features"
          subtitle="Most calendars are designed for teams. Slate is designed for freelancers"
        />
        <FeaturesCard />
      </section>

      <FigmaFrame />
      {/* <VideoPlayer videoId="Cx2dkpBxst8" /> */}

      {/* Organize Section */}
      <OrganizeSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Partners Section */}
      <TextHeader
        title="Partners"
        subtitle="Most calendars are designed for teams. Slate is designed for freelancers"
      />
      <Partners />

      {/* Stats Section */}
      <section className="mt-16 mb-8">
        <StatCard />
      </section>

      <Pricing />

      {/* Impact Section */}
      <ImpactSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-4">
        <TextHeader
          title="What Our Users Say"
          subtitle="Trusted by creatives and freelancers worldwide"
        />
        <TestimonialsSection />
      </section>

      {/* Final CTA */}
      <section className="py-14 text-center">
        <TextHeader
          title="Ready to level up your workflow?"
          subtitle="Start free and discover the power of smart productivity."
        />
        <Button title="Get Started Now" />
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
