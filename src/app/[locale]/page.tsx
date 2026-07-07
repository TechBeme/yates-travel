import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Partners } from "@/components/site/partners";
import { Services } from "@/components/site/services";
import { Destinations } from "@/components/site/destinations";
import { Steps } from "@/components/site/steps";
import { About } from "@/components/site/about";
import { Reviews } from "@/components/site/reviews";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram, site.facebook],
  slogan: "Crafting Unforgettable Adventures",
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Destinations />
        <Steps />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
