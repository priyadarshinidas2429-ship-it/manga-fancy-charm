import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Gift, Heart, Sparkles, Home, Cake, PartyPopper, Palette, Mail,
  Phone, MapPin, Instagram, MessageCircle, Star, Menu, X, ShoppingBag,
  Award, Smile, ShieldCheck, Store, ChevronRight, Send,
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
      { title: "Manga Fancy Store — Unique Gifts for Every Occasion | Kharagpur" },
      { name: "description", content: "Family-owned gift & fancy items store in Gate Bazar, Kharagpur. Shop birthday gifts, anniversary hampers, soft toys, home decor, greeting cards and customized presents." },
      { property: "og:title", content: "Manga Fancy Store — Unique Gifts for Every Occasion" },
      { property: "og:description", content: "Premium gifts, soft toys, home decor & customized hampers in Kharagpur." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/919876543210?text=Hi%20Manga%20Fancy%20Store!%20I%27d%20like%20to%20know%20more%20about%20your%20gift%20collection.";
const INSTAGRAM = "https://instagram.com";

const categories = [
  { icon: Cake, name: "Birthday Gifts", desc: "Make every birthday unforgettable" },
  { icon: Heart, name: "Anniversary Gifts", desc: "Celebrate love beautifully" },
  { icon: Sparkles, name: "Customized Gifts", desc: "Personalised just for them" },
  { icon: Home, name: "Home Decor", desc: "Elegance for every corner" },
  { icon: Smile, name: "Soft Toys", desc: "Cuddly companions to adore" },
  { icon: Mail, name: "Greeting Cards", desc: "Heartfelt words, beautifully framed" },
  { icon: ShoppingBag, name: "Fashion Accessories", desc: "Style that turns heads" },
  { icon: PartyPopper, name: "Festival Gifts", desc: "Hampers for every festival" },
];

const features = [
  { icon: Award, title: "Affordable Prices", desc: "Premium gifting that respects every budget." },
  { icon: ShieldCheck, title: "Quality Products", desc: "Hand-picked items, built to delight." },
  { icon: Palette, title: "Customized Options", desc: "Personalised hampers crafted with care." },
  { icon: Smile, title: "Friendly Service", desc: "Warm guidance from our family to yours." },
  { icon: Store, title: "Local Trusted Store", desc: "A Kharagpur favourite for years." },
  { icon: Sparkles, title: "Curated Collections", desc: "Always fresh, always on-trend." },
];

const gallery = [
  { src: g1, label: "Soft Toy Collection" },
  { src: g2, label: "Anniversary Hampers" },
  { src: g3, label: "Home Decor" },
  { src: g4, label: "Greeting Cards" },
  { src: g5, label: "Festival Gifts" },
  { src: g6, label: "Fashion Accessories" },
];

const reviews = [
  { name: "Ananya Sen", text: "Absolutely loved the anniversary hamper I ordered. The packaging was stunning and the staff helped me customize every detail.", rating: 5 },
  { name: "Rohit Mukherjee", text: "Best gift shop in Kharagpur, hands down. Got a personalised photo frame for my sister's birthday — she was in tears!", rating: 5 },
  { name: "Priya Das", text: "Such a wide variety of soft toys and decor items. Prices are very reasonable and the owner is so warm and helpful.", rating: 5 },
  { name: "Sourav Roy", text: "My go-to for festival gifts. Their Diwali hampers are gorgeous and always arrive perfectly wrapped.", rating: 5 },
  { name: "Megha Pal", text: "Beautiful greeting cards and unique accessories you won't find anywhere else in Gate Bazar. Highly recommended!", rating: 5 },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => { setOpen(false); }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name} (${form.phone}). ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
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
            {["Home","About","Products","Why Us","Gallery","Reviews","Contact"].map(l => (
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
              {["Home","About","Products","Why Us","Gallery","Reviews","Contact"].map(l => (
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
              <Sparkles className="w-3 h-3 text-gradient-gold" /> Kharagpur · Gate Bazar
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] font-semibold">
              Unique Gifts <br/>
              <span className="font-script italic text-gradient-pink">for Every</span> <span className="text-gradient-gold">Occasion</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl">
              A family-owned boutique of premium gifts, fancy items, soft toys and decor — beautifully curated and lovingly wrapped for the moments that matter most.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary font-medium">
                <ShoppingBag className="w-4 h-4" /> Shop Collection
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-gold/50 hover:border-gold transition-colors font-medium">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-foreground/60">
              <div><div className="font-display text-2xl text-foreground">10K+</div>Happy Customers</div>
              <div className="w-px h-10 bg-border" />
              <div><div className="font-display text-2xl text-foreground">500+</div>Gift Varieties</div>
              <div className="w-px h-10 bg-border" />
              <div><div className="font-display text-2xl text-foreground">15+</div>Years in Kharagpur</div>
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
              For over a decade, Manga Fancy Store has been Kharagpur's beloved corner for finding the perfect gift. Nestled in the heart of Gate Bazar, our family-run boutique brings together a thoughtfully curated collection of fancy items, soft toys, home decor and customised hampers.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Every product on our shelves is chosen with care — and every customer is welcomed like family. Whether it's a birthday surprise, an anniversary keepsake or a festival hamper, we help you make every occasion unforgettable.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "Trusted", v: "Local Favorite" },
                { k: "Curated", v: "Premium Picks" },
                { k: "Wrapped", v: "With Love" },
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
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <div key={c.name} className="card-elegant rounded-2xl p-7 group" style={{ animationDelay: `${i*60}ms` }}>
                <div className="w-14 h-14 rounded-full grid place-items-center mb-5" style={{ background: "var(--gradient-pink)" }}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-foreground/65">{c.desc}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm text-gradient-gold font-medium gap-1 group-hover:gap-2 transition-all">
                  Enquire <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
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

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Gallery</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">A peek inside our <span className="font-script italic text-gradient-pink">boutique</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((g, i) => (
              <div key={i} className={`relative group overflow-hidden rounded-2xl ${i === 0 || i === 5 ? "md:row-span-2" : ""}`}>
                <img src={g.src} alt={g.label} width={900} height={1100} loading="lazy" className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 || i === 5 ? "aspect-[3/4]" : "aspect-square"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity font-display text-lg">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gradient-gold font-medium">Kind Words</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Loved by <span className="font-script italic text-gradient-pink">our customers</span></h2>
            <div className="gold-divider my-6 max-w-[120px] mx-auto" />
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className={`card-elegant rounded-2xl p-7 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div className="flex gap-0.5 text-gradient-gold">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" style={{ color: "var(--gold)" }} />)}
                </div>
                <p className="mt-4 font-script italic text-lg text-foreground/80 leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full grid place-items-center text-white font-medium" style={{ background: "var(--gradient-pink)" }}>{r.name[0]}</div>
                  <div className="font-medium">{r.name}</div>
                </div>
              </div>
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
              {[
                { icon: MapPin, title: "Store Address", v: "Gate Bazar, Kharagpur, West Bengal 721301" },
                { icon: Phone, title: "Phone", v: "+91 98765 43210" },
                { icon: MessageCircle, title: "WhatsApp", v: "Chat with us anytime", href: WHATSAPP },
                { icon: Instagram, title: "Instagram", v: "@mangafancystore", href: INSTAGRAM },
              ].map(c => (
                <a key={c.title} href={c.href || "#"} target={c.href ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/60 transition-colors">
                  <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-gold)" }}>
                    <c.icon className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-foreground/65 mt-0.5">{c.v}</div>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  title="Manga Fancy Store map"
                  src="https://www.google.com/maps?q=Gate+Bazar+Kharagpur&output=embed"
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
                <input required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" placeholder="+91 98765 43210" />
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
            <p className="mt-4 text-sm max-w-md leading-relaxed">A family-owned boutique of premium gifts and fancy items in Gate Bazar, Kharagpur. Beautifully wrapped, lovingly chosen — for every occasion.</p>
            <div className="mt-6 flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href="tel:+919876543210" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-gold hover:text-gold transition-colors"><Phone className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <div className="font-display text-white mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {["About","Products","Why Us","Gallery","Reviews","Contact"].map(l => (
                <li key={l}><a className="hover:text-gold transition-colors" href={`#${l.toLowerCase().replace(" ","-")}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-white mb-4">Visit</div>
            <p className="text-sm leading-relaxed">Gate Bazar<br/>Kharagpur, West Bengal<br/>721301</p>
            <p className="text-sm mt-3">+91 98765 43210</p>
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
