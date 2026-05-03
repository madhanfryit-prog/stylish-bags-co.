import {
  Award,
  Camera,
  Crown,
  Heart,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Quote,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#brands", label: "Brands" },
  { href: "#government", label: "Government" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const achievements = [
  {
    icon: Crown,
    title: "Runner-Up Miss Goa 2021",
    description: "Recognised on the state's most celebrated pageant stage.",
  },
  {
    icon: Star,
    title: "Miss Indian Titanic Beauty",
    description: "A national title celebrating poise, grace and personality.",
  },
  {
    icon: Sparkles,
    title: "India Fashion Week Ramp Walk",
    description: "Walked for premier designers at India's marquee fashion event.",
  },
];

const brands = [
  "Marks & Spencer",
  "Max Fashion",
  "Lakmé",
  "Nykaa",
  "Forest Essentials",
  "Tanishq",
];

const governmentCampaigns = [
  "Mopa 6-Lane Link Road",
  "NH17B Port Connectivity",
  "Robotic Chavath 2025",
  "Goa Forest & Biodiversity Festival 2026",
  "Goa Waste Management Corporation",
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const testimonials = [
  {
    quote:
      "Shruti brings effortless elegance and authenticity to every campaign. Her audience trusts her — and that's gold.",
    author: "Brand Director",
    company: "Premium Lifestyle Label",
  },
  {
    quote:
      "From storyboarding to delivery, working with Shruti felt like collaborating with an in-house creative.",
    author: "Marketing Lead",
    company: "National Fashion Brand",
  },
  {
    quote:
      "Her command of regional sentiment made our public-interest campaign genuinely resonate across Goa.",
    author: "Communications Officer",
    company: "Government of Goa Initiative",
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent ✨", description: "Thank you! Shruti's team will be in touch shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Shruti<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" variant="hero" className="hidden md:inline-flex">
            <a href="#contact">Work With Me</a>
          </Button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative">
          <div className="container grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-28">
            <div className="space-y-7">
              <div className="eyebrow">
                <MapPin className="mr-2 h-3.5 w-3.5" /> Goa, India
              </div>
              <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-7xl">
                Shruti <span className="italic text-primary">Simepurushkar</span>
              </h1>
              <p className="text-base font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Fashion · Lifestyle · Government Campaign Influencer
              </p>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Empowering brands and communities through content — crafted with intention, styled with grace.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild size="lg" variant="hero">
                  <a href="#contact">
                    Work With Me <Heart className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#brands">View Collaborations</a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-elegant">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold">1.22L+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram Followers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-3">
                <img
                  src={heroPortrait}
                  alt="Portrait of Shruti Simepurushkar, Goa fashion and lifestyle influencer"
                  width={1024}
                  height={1280}
                  className="h-[520px] w-full rounded-[2rem] object-cover md:h-[620px]"
                />
              </div>
              <div className="glass-panel absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl px-5 py-3 md:flex">
                <Award className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Govt. of Goa</div>
                  <div className="text-xs text-muted-foreground">Empanelled Influencer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-shell">
          <div className="grid gap-10 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-2">
              <div className="eyebrow mb-5">About</div>
              <h2 className="font-display text-4xl md:text-5xl">A journey of passion & purpose.</h2>
            </div>
            <div className="space-y-6 md:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                An IT engineer turned fashion and digital media influencer, Shruti's journey is a blend of passion and
                purpose. From being <span className="font-medium text-foreground">Runner-Up Miss Goa 2021</span> to
                winning <span className="font-medium text-foreground">Miss Indian Titanic Beauty</span>, she has built a
                strong presence in fashion and content creation.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Walked at India Fashion Week",
                  "Modelled for Marks & Spencer, Max & leading brands",
                  "Government of Goa empanelled influencer",
                  "Featured creator across fashion & lifestyle",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-card/60 p-4 backdrop-blur">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="section-shell">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow mx-auto">Titles & Honours</div>
            <h2 className="font-display text-4xl md:text-5xl">Achievements that speak for themselves.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {achievements.map(({ icon: Icon, title, description }) => (
              <article key={title} className="peach-card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="section-shell">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow mx-auto">Collaborations</div>
            <h2 className="font-display text-4xl md:text-5xl">Trusted by leading brands.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <div
                key={b}
                className="flex h-24 items-center justify-center rounded-2xl border border-border/70 bg-card/60 px-4 text-center font-display text-lg text-foreground/80 shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-elegant"
              >
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Government */}
        <section id="government" className="relative">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-gradient-to-br from-[hsl(var(--primary-soft))] via-background to-[hsl(var(--accent))] p-8 shadow-elegant md:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="space-y-5">
                  <div className="eyebrow">
                    <Landmark className="mr-2 h-3.5 w-3.5" /> Government Collaborations
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl">
                    Empanelled by the <span className="italic text-primary">Government of Goa</span>.
                  </h2>
                  <p className="max-w-md text-muted-foreground">
                    Partnering on flagship public-interest campaigns that connect with citizens across the state.
                  </p>
                </div>
                <ul className="space-y-3">
                  {governmentCampaigns.map((c, i) => (
                    <li
                      key={c}
                      className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section-shell">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="peach-card">
              <div className="eyebrow mb-4">Experience</div>
              <h3 className="font-display text-2xl">Judge — All Goa Dandiya Competition</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Honoured to evaluate cultural performances at one of Goa's largest community events.
              </p>
            </div>
            <div className="peach-card">
              <div className="eyebrow mb-4">Experience</div>
              <h3 className="font-display text-2xl">Judge — Fashion Shows & Cultural Events</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Regularly invited to judge fashion competitions and cultural showcases across the region.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-shell">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow mx-auto">
              <Camera className="mr-2 h-3.5 w-3.5" /> Instagram
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Follow my journey.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galleryImages.map((src, i) => (
              <a
                key={i}
                href="#"
                className="group relative block overflow-hidden rounded-2xl border border-border/70 shadow-soft"
              >
                <img
                  src={src}
                  alt={`Lifestyle moment ${i + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-shell">
          <div className="section-heading mx-auto text-center">
            <div className="eyebrow mx-auto">Kind Words</div>
            <h2 className="font-display text-4xl md:text-5xl">What partners say.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="peach-card flex flex-col">
                <Quote className="h-7 w-7 text-primary/50" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <div className="font-display text-lg">{t.author}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell">
          <div className="grid gap-12 rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-[hsl(var(--hero-from))] via-background to-[hsl(var(--hero-to))] p-8 shadow-elegant md:grid-cols-2 md:p-14">
            <div className="space-y-5">
              <div className="eyebrow">Contact</div>
              <h2 className="font-display text-4xl md:text-5xl">Let's collaborate.</h2>
              <p className="text-muted-foreground">
                For brand campaigns, ramp walks, judging invitations or government partnerships — drop a note and we'll
                respond within 48 hours.
              </p>
              <div className="space-y-3 pt-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" /> hello@shruti.in
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Goa, India
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <Instagram className="h-4 w-4 text-primary" /> @shruti.simepurushkar
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="glass-panel space-y-4 p-6 md:p-8">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@brand.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your campaign..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/60 backdrop-blur">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shruti Simepurushkar. Crafted with care in Goa.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
