import React, { use } from "react";
import { Testimonials } from "@/components/testimonials";
import { Locale } from "next-intl";
import Pricing from "@/components/pricing";
import { Hero } from "@/components/hero";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  return (
    <main className="min-h-screen">
      <Hero />
      <Pricing />
      <Testimonials params={params} />
    </main>
  );
}
