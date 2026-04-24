import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  CircleDollarSign,
  Instagram,
  Mail,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import handbagImage from "@/assets/handbag.jpg";
import laptopBagImage from "@/assets/laptop-bag.jpg";
import schoolBagImage from "@/assets/school-bag.jpg";
import travelBagImage from "@/assets/travel-bag.jpg";
import { ProductCard } from "@/components/bags/ProductCard";
import { SectionHeader } from "@/components/bags/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredProducts = [
  {
    image: laptopBagImage,
    name: "Nikhil Urban Laptop Bag",
    category: "Laptop bags",
    description: "Structured protection, easy organization, and a polished everyday profile for work or study.",
    price: "₹1,599",
    originalPrice: "₹1,999",
    alt: "White and purple affordable laptop bag for professionals and students",
  },
  {
    image: schoolBagImage,
    name: "Daily Smart School Pack",
    category: "School bags",
    description: "Comfortable carry, durable compartments, and a fresh look that works from class to commute.",
    price: "₹1,199",
    originalPrice: "₹1,499",
    alt: "Blue, white, and purple school bag with modern design",
  },
  {
    image: handbagImage,
    name: "Classic Ladies Hand Bag",
    category: "Ladies hand bags",
    description: "Elegant shape with everyday practicality, designed to look refined without the luxury markup.",
    price: "₹1,899",
    originalPrice: "₹2,399",
    alt: "Modern ladies handbag in white and blue tones",
  },
  {
    image: travelBagImage,
    name: "Weekend Travel Duffel",
    category: "Travel bags",
    description: "Roomy, lightweight, and ready for quick trips with reliable stitching and clean styling.",
    price: "₹2,199",
    originalPrice: "₹2,749",
    alt: "Affordable travel duffel bag in white, blue, and purple",
  },
];

const categoryHighlights = [
  {
    title: "Laptop bags",
    text: "Low-bulk protection built for office, college, and daily travel.",
    icon: BriefcaseBusiness,
  },
  {
    title: "School bags",
    text: "Comfort-focused designs with practical storage and everyday durability.",
    icon: PackageCheck,
  },
  {
    title: "Ladies hand bags",
    text: "Elegant silhouettes that keep styling modern and pricing sensible.",
    icon: Sparkles,
  },
  {
    title: "Travel bags",
    text: "Carry more with dependable materials and a clean premium finish.",
    icon: Truck,
  },
];

const trustStats = [
  { label: "Average rating", value: "4.8/5", icon: Star },
  { label: "Savings promise", value: "20% off", icon: BadgePercent },
  { label: "Quality checked", value: "100%", icon: ShieldCheck },
  { label: "Value pricing", value: "Best cost", icon: CircleDollarSign },
];

const contactOptions = [
  {
    title: "Email",
    text: "Available for product enquiries and order support.",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    text: "Quick responses for stock checks, pricing, and purchase help.",
    icon: MessageCircle,
  },
  {
    title: "Instagram",
    text: "See new arrivals and styling updates as collections expand.",
    icon: Instagram,
  },
];

const Index = () => {
  return (
    <main className="page-shell">
      <section className="section-shell pb-8 pt-6 md:pb-12 md:pt-8">
        <div className="hero-panel px-6 py-6 md:px-8 lg:px-10 lg:py-8">
          <div className="glass-panel flex flex-col gap-6 rounded-[1.75rem] p-5 md:p-6">
            <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <div className="eyebrow">Affordable bags, professional finish</div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground md:text-3xl">Nikhil</p>
                  <p className="text-sm text-muted-foreground">Affordable but stylesh bag</p>
                </div>
              </div>

              <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                <a href="#products" className="transition-colors hover:text-foreground">
                  Products
                </a>
                <a href="#story" className="transition-colors hover:text-foreground">
                  Story
                </a>
                <a href="#reviews" className="transition-colors hover:text-foreground">
                  Reviews
                </a>
                <a href="#contact" className="transition-colors hover:text-foreground">
                  Contact
                </a>
              </nav>
            </header>

            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="space-y-8 py-2 md:py-6">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-soft">
                    <BadgePercent className="size-4" />
                    Always 20 percentage offer
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-balance font-display text-4xl font-bold tracking-normal text-foreground md:text-6xl lg:text-7xl">
                      Bag with quality, but still affordable
                    </h1>
                    <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                      We make the best affordable laptop bags and everyday carry styles with dependable quality, clean design,
                      and pricing that stays within reach.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="hero" size="lg">
                    <a href="#products">
                      Explore now
                      <ArrowRight />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#reviews">See reviews</a>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Card className="glass-panel rounded-2xl">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">Professional tone</p>
                      <p className="mt-1 font-display text-xl font-bold">Clean retail feel</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel rounded-2xl">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">USP</p>
                      <p className="mt-1 font-display text-xl font-bold">Affordable laptop bag</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel rounded-2xl">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">Trust element</p>
                      <p className="mt-1 font-display text-xl font-bold">Reviews-led buying</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-15 blur-3xl" aria-hidden="true" />
                <div className="relative rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-elegant backdrop-blur-sm">
                  <div className="absolute -left-5 top-10 hidden rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-soft md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Starting from</p>
                    <p className="font-display text-2xl font-bold text-foreground">₹1,199</p>
                  </div>
                  <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-soft md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Offer live</p>
                    <p className="font-display text-2xl font-bold text-primary">20% OFF</p>
                  </div>

                  <img
                    src={laptopBagImage}
                    alt="Featured affordable laptop bag from Nikhil in white and purple"
                    width={768}
                    height={768}
                    className="mx-auto aspect-[4/4.3] w-full rounded-[1.5rem] object-cover animate-float motion-reduce:animate-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8 md:pt-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categoryHighlights.map(({ title, text, icon: Icon }) => (
            <Card key={title} className="rounded-2xl bg-card/90">
              <CardContent className="space-y-4 p-6">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-soft">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-display text-2xl font-bold">{title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            badge="Featured collection"
            title="Good design, clear pricing, and everyday value"
            description="Full pricing is shown up front so customers can compare styles quickly and shop with confidence."
          />
          <div className="rounded-2xl border border-border/80 bg-secondary px-5 py-4 shadow-soft">
            <p className="text-sm font-medium text-muted-foreground">Special highlight</p>
            <p className="font-display text-2xl font-bold text-secondary-foreground">Always 20 percentage offer</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section id="story" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Card className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={travelBagImage}
              alt="Travel bag representing durable affordable quality at Nikhil"
              loading="lazy"
              width={768}
              height={768}
              className="aspect-[4/3.6] w-full object-cover"
            />
          </Card>

          <div className="space-y-8">
            <SectionHeader
              badge="Brand story"
              title="Built around better pricing for everyday buyers"
              description="We have seen many pple selling the laptop bags for very high cost, we buy from good manufacturer, and sell it for best cost."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="rounded-2xl bg-card/90">
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-muted-foreground">What problem we solve</p>
                  <p className="text-base leading-7 text-foreground">
                    We provide good quality bags for affordable price without making customers compromise on look or utility.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl bg-card/90">
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-muted-foreground">Why customers choose us</p>
                  <p className="text-base leading-7 text-foreground">
                    Affordable laptop bag pricing, dependable sourcing, and a cleaner product presentation than typical budget options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="section-shell">
        <SectionHeader
          badge="Reviews"
          title="Trust is built through visible value"
          description="Client testimonials were not provided, so the homepage highlights review-led confidence signals and the brand's pricing promise."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustStats.map(({ label, value, icon: Icon }) => (
            <Card key={label} className="rounded-2xl bg-card/95">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-soft">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pt-0">
        <div className="rounded-[2rem] border border-border/80 bg-gradient-hero p-6 shadow-elegant md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="space-y-5">
              <div className="eyebrow">Contact channels</div>
              <h2 className="text-balance font-display text-3xl font-bold md:text-5xl">Connect through the channels your customers already use</h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Email, WhatsApp, and Instagram are ready to anchor enquiries, direct product questions, and new collection discovery.
              </p>
              <Button asChild variant="hero" size="lg">
                <a href="#products">
                  Explore now
                  <ArrowRight />
                </a>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {contactOptions.map(({ title, text, icon: Icon }) => (
                <Card key={title} className="rounded-2xl bg-card/95">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-soft">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
