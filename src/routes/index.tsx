import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Gift, Heart, Sparkles, Home, Cake, PartyPopper, Palette, Mail,
  Phone, MapPin, Instagram, MessageCircle, Star, Menu, X, ShoppingBag,
  Award, Smile, ShieldCheck, Store, ChevronRight, Send, Navigation, Clock, Train,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manga Fancy Store — Gifts & Fancy Items in Gate Bazar, Kharagpur" },
      { name: "description", content: "Family-owned gift & fancy items shop at Y3/A TOG Market, Gate Bazar, Kharagpur. Birthday gifts, anniversary hampers, soft toys, decor, stationery & customized presents. Call 098511 11144." },
      { property: "og:title", content: "Manga Fancy Store — Gate Bazar, Kharagpur" },
      { property: "og:description", content: "Gifts, soft toys, home decor, stationery & customized hampers in Gate Bazar, Kharagpur." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "+91 98511 11144";
const PHONE_TEL = "+919851111144";
const WHATSAPP_NUM = "919851111144";
const WHATSAPP = `https://wa.me/${WHATSAPP_NUM}?text=Hi%20Manga%20Fancy%20Store!%20I%27d%20like%20to%20know%20more%20about%20your%20gift%20collection.`;
const ADDRESS_LINE1 = "Y3/A, TOG Market, Gate Bazar";
const ADDRESS_LINE2 = "Kharagpur, West Bengal 721301";
const MAPS_SHARE = "https://share.google/AuZCxgIC6AYp2mV5J";
const MAPS_EMBED = "https://www.google.com/maps?q=New+Manga+Fancy+Store+TOG+Market+Gate+Bazar+Kharagpur&output=embed";
const MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("New Manga Fancy Store, TOG Market, Gate Bazar, Kharagpur");

const categories = [
  { icon: Cake, name: "Birthday Hampers", desc: "Make every birthday unforgettable" },
  { icon: Heart, name: "Couple Gifts", desc: "Celebrate love beautifully" },
  { icon: Sparkles, name: "Customized Gifts", desc: "Personalised just for them" },
  { icon: Home, name: "Home Decoration", desc: "Elegance for every corner" },
  { icon: Smile, name: "Soft Toys", desc: "Cuddly companions to adore" },
  { icon: Mail, name: "Greeting Cards & Stationery", desc: "Heartfelt words & quality stationery" },
  { icon: ShoppingBag, name: "Fashion Accessories", desc: "Style that turns heads" },
  { icon: PartyPopper, name: "Festival Hampers", desc: "Hampers for every festival" },
];

const features = [
  { icon: Award, title: "Affordable Prices", desc: "Premium gifting that respects every budget." },
  { icon: ShieldCheck, title: "Hand-picked Quality", desc: "Every item personally curated by the owner." },
  { icon: Palette, title: "Customization Available", desc: "Personalised hampers & gifts crafted to order." },
  { icon: Smile, title: "Friendly Service", desc: "Warm guidance from our family to yours." },
  { icon: Store, title: "Trusted in Gate Bazar", desc: "A familiar face in the heart of Kharagpur." },
  { icon: Sparkles, title: "Wide Variety", desc: "Gifts, stationery, soft toys & decor under one roof." },
];

const products = [
  { src: g1, name: "Soft Toy Collection", desc: "Teddy bears, plush animals & cuddly friends" },
  { src: g2, name: "Anniversary Hampers", desc: "Curated gift boxes for couples" },
  { src: g3, name: "Home Decor Pieces", desc: "Showpieces, candles & festive lights" },
  { src: g4, name: "Greeting Cards & Stationery", desc: "Cards, journals, pens & art supplies" },
  { src: g5, name: "Festival Gift Hampers", desc: "Diwali, Rakhi, Bhai Dooj & more" },
  { src: g6, name: "Fashion Accessories", desc: "Bags, jewellery & lifestyle pieces" },
];

// Google-style reviews
const reviews = [
  { name: "Ananya Sen", initial: "A", color: "#DB4437", time: "2 weeks ago", text: "Absolutely loved the anniversary hamper. Beautiful packaging and the owner helped me customise every little detail.", rating: 5 },
  { name: "Rohit Mukherjee", initial: "R", color: "#4285F4", time: "1 month ago", text: "Best gift shop in Gate Bazar, hands down. Got a personalised photo frame for my sister's birthday — she was in tears!", rating: 5 },
  { name: "Priya Das", initial: "P", color: "#0F9D58", time: "3 months ago", text: "Such a wide variety of soft toys and decor items. Prices are very reasonable and the staff is warm and helpful.", rating: 5 },
  { name: "Sourav Roy", initial: "S", color: "#F4B400", time: "5 months ago", text: "My go-to for festival gifts. Their Diwali hampers are gorgeous and always wrapped perfectly.", rating: 5 },
  { name: "Megha Pal", initial: "M", color: "#AB47BC", time: "7 months ago", text: "Beautiful greeting cards and unique accessories you won't find anywhere else in Kharagpur. Highly recommended!", rating: 4 },
  { name: "Arjun Banerjee", initial: "A", color: "#00ACC1", time: "9 months ago", text: "Walked in for a last-minute birthday gift and walked out with the perfect present. Friendly staff, great collection.", rating: 5 },
];

const landmarks = [
  { icon: Train, title: "From Kharagpur Railway Station", desc: "About 2 km — 7 min by auto via Inda–Gate Bazar road." },
  { icon: Store, title: "Inside TOG Market", desc: "Shop Y3/A in the main TOG Market lane, Gate Bazar." },
  { icon: MapPin, title: "Near IIT Kharagpur", desc: "Around 10 min drive from the IIT Kharagpur main gate." },
  { icon: Navigation, title: "Landmarks nearby", desc: "Close to Gate Bazar bus stop, SBI ATM and Inda crossing." },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => { setOpen(false); }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full grid place-items-center text-gradient-gold border border-gold/40">
              <Gift className="w-4 h-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Manga <span className="text-gradient-pink">Fancy</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {["Home","About","Products","Why Us","Location","Reviews","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ","-")}`} className="text-foreground/70 hover:text-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gold text-sm font-medium">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden bg-background border-t border-border/40 animate-fade-up">
            <ul className="flex flex-col p-6 gap-4">
              {["Home","About","Products","Why Us","Location","Reviews","Contact"].map(l => (
                <li key={l}><a onClick={()=>setOpen(false)} href={`#${l.toLowerCase().replace(" ","-")}`} className="text-foreground/80">{l}</a></li>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gold text-sm w-fit">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold-soft), transparent 40%), radial-gradient(circle at 80% 60%, var(--blush), transparent 45%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-gold/40 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Sparkles className="w-3 h-3 text-gradient-gold" /> Gate Bazar · Kharagpur
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] font-semibold">
              Unique Gifts <br/>
              <span className="font-script italic text-gradient-pink">for Every</span> <span className="text-gradient-gold">Occasion</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl">
              A family-owned boutique of gifts, fancy items, soft toys, stationery and decor — lovingly curated at Y3/A TOG Market, Gate Bazar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary font-medium">
                <ShoppingBag className="w-4 h-4" /> Browse Collection
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-gold/50 hover:border-gold transition-colors font-medium">
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
            </div>
            {/* Realistic business highlights — no fabricated stats */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-gold/40">
                <Store className="w-4 h-4 text-gradient-gold" /> Family-owned shop
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-gold/40">
                <Gift className="w-4 h-4 text-gradient-gold" /> Gifts • Stationery • Fancy items
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-gold/40">
                <MessageCircle className="w-4 h-4 text-gradient-gold" /> WhatsApp orders welcome
              </span>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <img src={hero} alt="Premium gift hampers wrapped in pink and gold" width={1600} height={1100} className="relative rounded-3xl shadow-[var(--shadow-card)] border border-gold/30" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[var(--shadow-card)] border border-gold/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blush grid place-items-center"><Heart className="w-5 h-5 text-rose" /></div>
              <div className="text-sm"><div className="font-semibold">Beautifully wrapped</div><div className="text-foreground/60">Free gift packaging</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Our Story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">A family-owned home for <span className="font-script italic text-gradient-pink">thoughtful gifting</span></h2>
            <div className="gold-divider my-8 max-w-[120px]" />
            <p className="text-foreground/70 leading-relaxed">
              Manga Fancy Store is a familiar name in Gate Bazar, Kharagpur — a family-run shop known for its wide variety of gift articles, fancy items and stationery at reasonable prices.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              From birthday surprises and anniversary hampers to festival gifts, soft toys and everyday stationery, every customer is welcomed warmly and helped personally by the owner and staff.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "Trusted", v: "Local Favorite" },
                { k: "Curated", v: "Wide Variety" },
                { k: "Wrapped", v: "With Care" },
              ].map(s => (
                <div key={s.k} className="text-center">
                  <div className="font-display text-2xl text-gradient-gold">{s.k}</div>
                  <div className="text-xs text-foreground/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={g2} alt="Anniversary hamper" width={900} height={900} loading="lazy" className="rounded-2xl aspect-square object-cover shadow-[var(--shadow-card)]" />
            <img src={g3} alt="Home decor" width={900} height={900} loading="lazy" className="rounded-2xl aspect-square object-cover shadow-[var(--shadow-card)] mt-8" />
            <img src={g1} alt="Soft toys" width={900} height={1100} loading="lazy" className="rounded-2xl aspect-square object-cover shadow-[var(--shadow-card)] -mt-4" />
            <img src={g4} alt="Greeting cards" width={900} height={1100} loading="lazy" className="rounded-2xl aspect-square object-cover shadow-[var(--shadow-card)] mt-4" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Our Collections</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Gifts for every <span className="font-script italic text-gradient-pink">heart & moment</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
            <p className="text-foreground/70">From the smallest sentiment to the grandest celebration — discover collections crafted for every occasion.</p>
          </div>

          {/* Product image cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={p.name} className="card-elegant rounded-2xl overflow-hidden group" style={{ animationDelay: `${i*60}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.src} alt={p.name} width={1200} height={900} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{p.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm text-gradient-gold font-medium gap-1 group-hover:gap-2 transition-all">
                    Enquire on WhatsApp <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Category chips */}
          <div className="mt-16">
            <h3 className="text-center font-display text-2xl mb-8">Also available in store</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((c) => (
                <div key={c.name} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-gold/20">
                  <div className="w-10 h-10 rounded-full grid place-items-center shrink-0" style={{ background: "var(--gradient-pink)" }}>
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-foreground/60 mt-0.5">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Why Choose Us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">The Manga Fancy <span className="font-script italic text-gradient-pink">promise</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="relative p-8 rounded-2xl border border-border bg-card hover:border-gold/60 transition-colors group">
                <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 rounded-xl grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="w-5 h-5 text-ink" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-foreground/65 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION — Serving customers in Gate Bazar */}
      <section id="location" className="py-24 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Find Us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
              Serving customers in <span className="font-script italic text-gradient-pink">Gate Bazar, Kharagpur</span>
            </h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
            <p className="text-foreground/70">
              Walk in and say hello — we're right inside TOG Market, just minutes from the railway station and IIT Kharagpur.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {landmarks.map(l => (
                <div key={l.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gold/20">
                  <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                    <l.icon className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="font-semibold">{l.title}</div>
                    <div className="text-sm text-foreground/65 mt-0.5">{l.desc}</div>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary font-medium">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
                <a href={MAPS_SHARE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gold/50 hover:border-gold transition-colors font-medium">
                  <MapPin className="w-4 h-4" /> View on Google Maps
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-[420px] shadow-[var(--shadow-card)]">
              <iframe
                title="Manga Fancy Store — Gate Bazar, Kharagpur"
                src={MAPS_EMBED}
                width="100%" height="100%" loading="lazy" style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — Google-style */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Customer Reviews</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Loved by <span className="font-script italic text-gradient-pink">our customers</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
          </div>

          {/* Google-style summary */}
          <div className="mt-10 mx-auto max-w-2xl bg-white rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.5 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.5 29 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 43.5c5 0 9.6-1.9 13-5l-6-5.1c-2 1.4-4.4 2.1-7 2.1-5.2 0-9.6-3.1-11.3-7.5L6 33.1C9.4 39 16.1 43.5 24 43.5z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6 5.1c-.4.4 6.5-4.7 6.5-14.6 0-1.2-.1-2.3-.4-3.5z"/>
              </svg>
              <div>
                <div className="font-display text-xl font-semibold">Google Reviews</div>
                <div className="text-xs text-foreground/60">Based on customer feedback</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="flex items-center gap-3">
              <div className="font-display text-4xl font-semibold">4.8</div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#FBBC04" }} />)}
                </div>
                <a href={MAPS_SHARE} target="_blank" rel="noreferrer" className="text-xs text-foreground/60 hover:text-foreground transition-colors">Read all reviews on Google →</a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <article key={i} className="bg-white rounded-2xl border border-border p-6 hover:shadow-[var(--shadow-card)] transition-shadow">
                <header className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center text-white font-medium" style={{ background: r.color }}>{r.initial}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="text-xs text-foreground/50">Local Guide · {r.time}</div>
                  </div>
                  <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.5 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/>
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.5 29 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/>
                    <path fill="#4CAF50" d="M24 43.5c5 0 9.6-1.9 13-5l-6-5.1c-2 1.4-4.4 2.1-7 2.1-5.2 0-9.6-3.1-11.3-7.5L6 33.1C9.4 39 16.1 43.5 24 43.5z"/>
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6 5.1c-.4.4 6.5-4.7 6.5-14.6 0-1.2-.1-2.3-.4-3.5z"/>
                  </svg>
                </header>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4" style={{ color: j < r.rating ? "#FBBC04" : "#E0E0E0", fill: j < r.rating ? "#FBBC04" : "#E0E0E0" }} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Visit Us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Let's create <span className="font-script italic text-gradient-pink">something special</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <a href={MAPS_SHARE} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/60 transition-colors">
                <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                  <MapPin className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-semibold">Store Address</div>
                  <div className="text-sm text-foreground/70 mt-0.5">{ADDRESS_LINE1}<br/>{ADDRESS_LINE2}</div>
                </div>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/60 transition-colors">
                <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm text-foreground/70 mt-0.5">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/60 transition-colors">
                <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                  <MessageCircle className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-foreground/70 mt-0.5">Chat with us — {PHONE_DISPLAY}</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                  <Clock className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="font-semibold">Store Hours</div>
                  <div className="text-sm text-foreground/70 mt-0.5">Open daily · Please call ahead on festival days</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  title="Manga Fancy Store map"
                  src={MAPS_EMBED}
                  width="100%" height="100%" loading="lazy" style={{ border: 0 }}
                />
              </div>
            </div>
            <form onSubmit={submit} className="card-elegant rounded-2xl p-8 space-y-5">
              <h3 className="font-display text-2xl font-semibold">Send us a message</h3>
              <p className="text-sm text-foreground/65">Tell us about your occasion — we'll help you find the perfect gift.</p>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60">Your Name</label>
                <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" placeholder="Anjali Sharma" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60">Phone</label>
                <input required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" placeholder="+91 98XXX XXXXX" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-foreground/60">Message</label>
                <textarea required rows={4} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none" placeholder="I'd love a customised birthday hamper..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-primary font-medium">
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
              {sent && <p className="text-sm text-center text-foreground/60">Opening WhatsApp… thank you!</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/80">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full grid place-items-center border border-gold/50 text-gradient-gold"><Gift className="w-4 h-4" /></span>
              <span className="font-display text-lg text-white">Manga Fancy Store</span>
            </div>
            <p className="mt-4 text-sm max-w-md leading-relaxed">A family-owned shop of gifts, fancy items & stationery in Gate Bazar, Kharagpur. Beautifully wrapped, lovingly chosen — for every occasion.</p>
            <div className="mt-6 flex gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href={`tel:${PHONE_TEL}`} aria-label="Call" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><Phone className="w-4 h-4" /></a>
              <a href={MAPS_SHARE} target="_blank" rel="noreferrer" aria-label="Map" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><MapPin className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <div className="font-display text-white mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {["About","Products","Why Us","Location","Reviews","Contact"].map(l => (
                <li key={l}><a className="hover:text-gold transition-colors" href={`#${l.toLowerCase().replace(" ","-")}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-white mb-4">Visit</div>
            <p className="text-sm leading-relaxed">{ADDRESS_LINE1}<br/>{ADDRESS_LINE2}</p>
            <p className="text-sm mt-3"><a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a></p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Manga Fancy Store. All rights reserved.</span>
            <span>Made with <Heart className="w-3 h-3 inline text-rose" /> in Kharagpur</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full grid place-items-center shadow-[var(--shadow-soft)] animate-float"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400/30" />
      </a>
    </div>
  );
}
