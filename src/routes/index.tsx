import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  ShieldCheck,
  Trees,
  Zap,
  Droplets,
  Sparkles,
  Car,
  Moon,
  CalendarRange,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus,
  BatteryCharging,
  Briefcase,
  Instagram,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import hero from "@/assets/rota/backgroundnew.jpg";
import parcel from "@/assets/parcel.jpg";
import nature from "@/assets/nature.jpg";
import sunset from "@/assets/sunset.jpg";
import rota1 from "@/assets/rota/IMG_4222.JPG";
import rota2 from "@/assets/rota/IMG_4228_SnapseedCopy.jpg";
import rota3 from "@/assets/rota/IMG_4231.JPG";
import rota4 from "@/assets/rota/IMG_4246.JPG";
import rota5 from "@/assets/rota/IMG_4249.JPG";
import rota8 from "@/assets/rota/landing-small.png";
import rota9 from "@/assets/rota/IMG_4278.JPG";
import rota10 from "@/assets/rota/IMG_4294_SnapseedCopy.jpg";
import rota11 from "@/assets/rota/IMG_4296.JPG";
import rota12 from "@/assets/rota/IMG_5990.png";
import rota13 from "@/assets/rota/IMG_5991.png";
import rota14 from "@/assets/rota/IMG_5992.png";
import rota23 from "@/assets/rota/IMG_6002.png";
import append1 from "@/assets/rota/append1.png";
import append2 from "@/assets/rota/append2.png";
import append3 from "@/assets/rota/append3.jpg";
import append4 from "@/assets/rota/append4.JPG";
import append5 from "@/assets/rota/append5.JPG";
import append6 from "@/assets/rota/append6.JPG";
import append7 from "@/assets/rota/append7.jpeg";
import append8 from "@/assets/rota/append8.png";
import rota1Thumb from "@/assets/rota/thumbs/IMG_4222-thumb.webp";
import rota2Thumb from "@/assets/rota/thumbs/IMG_4228_SnapseedCopy-thumb.webp";
import rota3Thumb from "@/assets/rota/thumbs/IMG_4231-thumb.webp";
import rota4Thumb from "@/assets/rota/thumbs/IMG_4246-thumb.webp";
import rota5Thumb from "@/assets/rota/thumbs/IMG_4249-thumb.webp";
import rota8Thumb from "@/assets/rota/thumbs/landing-small-thumb.webp";
import rota9Thumb from "@/assets/rota/thumbs/IMG_4278-thumb.webp";
import rota10Thumb from "@/assets/rota/thumbs/IMG_4294_SnapseedCopy-thumb.webp";
import rota11Thumb from "@/assets/rota/thumbs/IMG_4296-thumb.webp";
import rota12Thumb from "@/assets/rota/thumbs/IMG_5990-thumb.webp";
import rota13Thumb from "@/assets/rota/thumbs/IMG_5991-thumb.webp";
import rota14Thumb from "@/assets/rota/thumbs/IMG_5992-thumb.webp";
import rota23Thumb from "@/assets/rota/thumbs/IMG_6002-thumb.webp";
import append1Thumb from "@/assets/rota/thumbs/append1-thumb.webp";
import append2Thumb from "@/assets/rota/thumbs/append2-thumb.webp";
import append3Thumb from "@/assets/rota/thumbs/append3-thumb.webp";
import append4Thumb from "@/assets/rota/thumbs/append4-thumb.webp";
import append5Thumb from "@/assets/rota/thumbs/append5-thumb.webp";
import append6Thumb from "@/assets/rota/thumbs/append6-thumb.webp";
import append7Thumb from "@/assets/rota/thumbs/append7-thumb.webp";
import append8Thumb from "@/assets/rota/thumbs/append8-thumb.webp";
import { useReveal } from "@/hooks/use-reveal";

const WHATSAPP = "https://wa.me/905075631296";
const PHONE_1 = "+90 507 563 12 96";
const PHONE_2 = "+90 532 794 02 00";
const ADDRESS = "İnceğiz Mh., Hanice Cd No:145/A, Çatalca / İstanbul";
const MAP_EMBED =
  "https://www.google.com/maps?q=İnceğiz%20Mh.%20Hanice%20Cd%20145%20Çatalca%20İstanbul&output=embed";

type GalleryImage = {
  src: string;
  thumb: string;
  alt: string;
  h?: string;
};

const GALLERY_PRELOAD_RADIUS = 3;

const GALLERY_IMAGES: GalleryImage[] = [
  { src: rota1, thumb: rota1Thumb, alt: "Rota İnceğiz alan görünümü", h: "row-span-2" },
  { src: rota2, thumb: rota2Thumb, alt: "Karavan park alanı" },
  { src: rota3, thumb: rota3Thumb, alt: "Doğa ve orman" },
  { src: rota4, thumb: rota4Thumb, alt: "Parsel ve çevre", h: "row-span-2" },
  { src: rota5, thumb: rota5Thumb, alt: "Alan detayı" },
  { src: rota8, thumb: rota8Thumb, alt: "Doğa manzarası" },
  { src: rota9, thumb: rota9Thumb, alt: "Alan düzeni" },
  { src: rota10, thumb: rota10Thumb, alt: "Karavan parkı detayı", h: "row-span-2" },
  { src: rota11, thumb: rota11Thumb, alt: "Rota İnceğiz atmosferi" },
  { src: rota12, thumb: rota12Thumb, alt: "Alan görünümü" },
  { src: rota13, thumb: rota13Thumb, alt: "Karavan park detayı", h: "row-span-2" },
  { src: rota14, thumb: rota14Thumb, alt: "Doğa manzarası" },
  { src: rota23, thumb: rota23Thumb, alt: "Karavan park görünümü" },
  { src: append1, thumb: append1Thumb, alt: "Karavan parseli ve bahçe", h: "row-span-2" },
  { src: append2, thumb: append2Thumb, alt: "Karavan ve oturma alanı" },
  { src: append3, thumb: append3Thumb, alt: "Doğa ile iç içe yaşam" },
  { src: append4, thumb: append4Thumb, alt: "Çatalca karavan parkı", h: "col-span-2" },
  { src: append5, thumb: append5Thumb, alt: "Ağaçlar arasında karavan" },
  { src: append6, thumb: append6Thumb, alt: "Parsel düzeni ve çitler", h: "row-span-2" },
  { src: append7, thumb: append7Thumb, alt: "Doğal çim ve karavan alanı" },
  { src: append8, thumb: append8Thumb, alt: "Geniş karavan bahçesi" },
];

const preloadedFullImages = new Set<string>();

function getWrappedGalleryIndex(index: number) {
  return (index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
}

function preloadGalleryWindow(index: number) {
  if (typeof Image === "undefined") return;

  for (let offset = -GALLERY_PRELOAD_RADIUS; offset <= GALLERY_PRELOAD_RADIUS; offset += 1) {
    const image = GALLERY_IMAGES[getWrappedGalleryIndex(index + offset)];
    if (preloadedFullImages.has(image.src)) continue;

    preloadedFullImages.add(image.src);
    const preload = new Image();
    preload.decoding = "async";
    preload.src = image.src;
  }
}

export const Route = createFileRoute("/")({
  component: Home,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Hakkımızda", "#hakkimizda"],
    ["Olanaklar", "#olanaklar"],

    ["Galeri", "#galeri"],
    ["Konum", "#konum"],
    ["SSS", "#sss"],
    ["İletişim", "#iletisim"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/85 backdrop-blur-md border-b border-border/60"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className={`grid place-items-center w-9 h-9 rounded-full border transition-colors ${scrolled
              ? "border-foreground/30 text-foreground"
              : "border-cream/60 text-cream"
              }`}
          >
            <Trees className="w-4 h-4" />
          </span>
          <span
            className={`font-display text-lg tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-cream"
              }`}
          >
            Rota İnceğiz <span className="italic opacity-80">Karavan Park</span>
          </span>
        </a>
        <nav
          className={`hidden lg:flex items-center gap-8 text-sm transition-colors ${scrolled ? "text-foreground/75" : "text-cream/85"
            }`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-all hover:scale-[1.02] shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Rota İnceğiz Karavan Park drone manzarası"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_85%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-44 pb-32 min-h-screen flex flex-col justify-between">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 text-cream/80 text-xs tracking-[0.3em] uppercase mb-8">
            <span className="h-px w-10 bg-cream/60" />
            Çatalca · İstanbul
          </div>
          <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
            Doğanın içinde,
            <br />
            <span className="italic text-cream/95">düzenli karavan yaşamı.</span>
          </h1>
          <p className="mt-8 text-cream/85 text-lg md:text-xl max-w-xl leading-relaxed font-light">
            İstanbul'a yakın, doğanın ve ormanın içinde; karavanınız için
            güvenli, huzurlu ve aile dostu sabit yaşam alanı. Yıllık kiralama
            imkânıyla, sevdiklerinizle keyifle vakit geçirebileceğiniz sıcak bir
            karavan yaşamı sunuyoruz.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-foreground px-7 py-4 text-sm font-medium hover:bg-cream/90 transition-all hover:scale-[1.02] shadow-lg shadow-black/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile İletişim
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-10 max-w-3xl text-cream/85 border-t border-cream/20 pt-8">
          {[
            ["Aile Dostu", "SAKİN VE GÜVENLİ ORTAM"],
            ["24/7", "Güvenli Alan"],
            ["İstanbul'a", "45 dk Mesafe"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-3xl text-cream">{k}</div>
              <div className="text-xs uppercase tracking-widest mt-2 opacity-80">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimizda" className="relative py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Hakkımızda
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Şehirden uzaklaşmadan,
            <span className="italic text-moss"> özgürlüğe yer açın.</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Rota İnceğiz Karavan Park, Çatalca'nın sakin ormanlarında, karavan
              sahiplerine sabit ve yıllık parsel kiralama imkânı sunar. Her
              misafirimizin kendine ait, planlanmış bir yaşam alanı vardır.
            </p>
            <p>
              Geçici bir kamp alanı değil; düzenli, güvenli ve doğa ile bütünleşmiş
              uzun soluklu bir yaşam konseptiyiz. Aileler, çiftler ve uzun süreli
              karavan sahipleri için tasarlandık.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
            {[
              ["Sabit Parsel", "Size özel alan"],
              ["Yıllık Sistem", "Uzun dönem konfor"],
              ["Doğal Çevre", "Orman ve sessizlik"],
              ["İstanbul'a Yakın", "Kolay ulaşım"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="border-l-2 border-accent/70 pl-4 py-1"
              >
                <div className="font-display text-lg">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[5/6]">
              <img
                src={rota1Thumb}
                alt="Ormanın içinde özel karavan parseli"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                loading="lazy"
                width={1600}
                height={1200}
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -left-10 w-56 h-72 rounded-3xl overflow-hidden border-8 border-background shadow-2xl">
              <img
                src={rota8Thumb}
                alt="Orman manzarası"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1600}
                height={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Sparkles, t: "Temiz Ortak Alanlar", d: "Tuvalet ve duş dahil hijyenik, düzenli ortak kullanım alanları." },
  { icon: BatteryCharging, t: "Elektrikli Araç Şarjı", d: "Aracınız için kullanışlı şarj imkânı." },
  { icon: Briefcase, t: "Ofis Olanağı", d: "Uzaktan çalışmaya uygun sakin ofis alanı." },
  { icon: ShieldCheck, t: "7/24 Güvenlik", d: "Kontrollü giriş ve gece denetimi." },
  { icon: MapPin, t: "Sabit Özel Parsel", d: "Size ayrılmış, planlı yaşam alanı." },
  { icon: Zap, t: "Elektrik Altyapısı", d: "Her parselde kararlı bağlantı." },
  { icon: Droplets, t: "Su Erişimi", d: "Temiz su hattı tüm parsellerde." },
  { icon: Trees, t: "Doğa ile İç İçe", d: "Çatalca ormanlarının kalbinde." },
  { icon: CalendarRange, t: "Uzun Dönem Kullanım", d: "Yıllık kiralama modeli." },
  { icon: Users, t: "Aile Dostu", d: "Güvenli ve sıcak bir topluluk." },
];

function Features() {
  return (
    <section id="olanaklar" className="py-28 md:py-40 bg-secondary/40 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Olanaklar
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Düşündüğünüz her detay,
            <span className="italic text-moss"> yerli yerinde.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Premium karavan yaşamı için ihtiyacınız olan tüm altyapı ve hizmetler
            hazır: tuvalet ve duş dahil temiz ortak alanlar, elektrikli araç
            şarjı ve uzaktan çalışmaya uygun ofis olanağı.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.t}
              className="reveal group bg-card border border-border rounded-2xl p-7 hover:border-forest/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-forest/10 text-forest grid place-items-center mb-5 group-hover:bg-forest group-hover:text-cream transition-colors">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-xl mb-1.5">{f.t}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {f.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function GalleryLightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const startX = useRef<number | null>(null);
  const activeImage = GALLERY_IMAGES[index];

  const goToRelative = (offset: number) => {
    onChange(getWrappedGalleryIndex(index + offset));
  };

  useEffect(() => {
    preloadGalleryWindow(index);
  }, [index]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange(getWrappedGalleryIndex(index - 1));
      if (event.key === "ArrowRight") onChange(getWrappedGalleryIndex(index + 1));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, onChange, onClose]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (startX.current === null) return;

    const deltaX = event.clientX - startX.current;
    startX.current = null;

    if (Math.abs(deltaX) < 56) return;
    goToRelative(deltaX > 0 ? -1 : 1);
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-4 py-6 backdrop-blur-sm md:px-10"
      role="dialog"
      aria-modal="true"
      aria-label="Galeri"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Galeriyi kapat"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-foreground md:right-8 md:top-8"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Onceki gorsel"
        onClick={(event) => {
          event.stopPropagation();
          goToRelative(-1);
        }}
        className="absolute left-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-foreground md:inline-flex"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <div
        className="relative h-full w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="flex h-full w-full touch-pan-y select-none items-center justify-center"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
        >
          <img
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            draggable={false}
            decoding="async"
            className="max-h-full max-w-full object-contain shadow-2xl"
          />
        </div>
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-xs font-medium tabular-nums text-white/90 backdrop-blur">
          {index + 1} / {GALLERY_IMAGES.length}
        </div>
      </div>

      <button
        type="button"
        aria-label="Sonraki gorsel"
        onClick={(event) => {
          event.stopPropagation();
          goToRelative(1);
        }}
        className="absolute right-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-foreground md:inline-flex"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  );
}

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    preloadGalleryWindow(index);
    setLightboxIndex(index);
  };

  return (
    <section id="galeri" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Galeri
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Atmosferi
              <span className="italic text-moss"> hissedin.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Alandan fotoğraflar: parseller, doğa ve karavan yaşamından kareler.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {GALLERY_IMAGES.map((im, i) => (
            <button
              key={i}
              type="button"
              aria-label={im.alt}
              onClick={() => openLightbox(i)}
              className={`reveal relative block h-full w-full overflow-hidden rounded-2xl text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background ${im.h ?? ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={im.thumb}
                alt={im.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </section>
  );
}

function Location() {
  return (
    <section id="konum" className="py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="reveal flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Konum
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            İstanbul'a yakın,
            <span className="italic text-moss"> kalabalıktan uzakta.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
            Çatalca İnceğiz'de, ormanın içinde. Şehirden sadece kısa bir
            sürüşle ulaşabileceğiniz mesafede.
          </p>
          <div className="mt-10 space-y-4 text-base">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <div className="font-medium">Adres</div>
                <div className="text-muted-foreground">{ADDRESS}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <div className="font-medium">Kolay Ulaşım</div>
                <div className="text-muted-foreground">
                  TEM bağlantısı üzerinden İstanbul merkezine yaklaşık 45 dakika.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Moon className="w-5 h-5 text-accent mt-1 shrink-0" />
              <div>
                <div className="font-medium">Sessizlik ve Doğa</div>
                <div className="text-muted-foreground">
                  Yıldızlı geceler, kuş sesleri ve temiz hava.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal rounded-3xl overflow-hidden border border-border shadow-xl min-h-[440px]">
          <iframe
            title="Rota İnceğiz Karavan Park konumu"
            src={MAP_EMBED}
            className="w-full h-full min-h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Karavanımı burada güvenle bırakabilir miyim?",
    a: "Evet. Rota İnceğiz, karavan sahiplerinin araçlarını düzenli ve kontrollü bir alanda konumlandırabilmesi için tasarlanmıştır. Alan kullanımı, güvenlik ve giriş-çıkış düzeniyle sakin ve güvenli bir ortam hedeflenir.",
  },
  {
    q: "Burası kısa süreli kamp alanı mı, yoksa düzenli karavan parkı mı?",
    a: "Rota İnceğiz, günübirlik veya kısa süreli kamp kalabalığından farklı olarak daha düzenli ve uzun dönemli karavan kullanımı için kurgulanmış bir alandır.",
  },
  {
    q: "Parsel bana ait olacak mı?",
    a: "Evet. Size tanımlanan parsel, kullanım süreniz boyunca size ait olur. Karavanınızı ve açık alan düzeninizi bu parsel içinde konumlandırabilirsiniz.",
  },
  {
    q: "Elektrik, su ve atık su altyapısı var mı?",
    a: "Evet. Karavan kullanımına uygun elektrik, temiz su ve atık su altyapısı bulunmaktadır.",
  },
  {
    q: "Karavanımı uzun süre alanda bırakabilir miyim?",
    a: "Evet. Rota İnceğiz uzun dönem karavan kullanımı için planlanmıştır. Karavanınızı alanda konumlandırabilir ve düzenli olarak kullanabilirsiniz.",
  },
  {
    q: "Alan güvenli ve düzenli mi?",
    a: "Evet. Rota İnceğiz'de alanın sakin, düzenli ve kontrollü bir yapıda kalması önemsenir. Ortak alan kullanımı, misafir düzeni ve giriş-çıkış konuları belirli kurallar çerçevesinde yönetilir.",
  },
  {
    q: "Tuvalet, duş ve temizlik standardı nasıl?",
    a: "Ortak kullanım alanlarının düzenli ve temiz tutulması alan deneyiminin önemli bir parçasıdır. WC, duş ve hijyen alanlarının düzenli kullanımı ve temizliği önemsenir.",
  },
  {
    q: "Giriş-çıkış saatleri nasıl?",
    a: "Giriş-çıkış düzeni, alanın güvenliği ve sakinliği için belirli kurallara bağlıdır. Kullanıcıların alan düzenine uygun şekilde giriş-çıkış yapması beklenir.",
  },
  {
    q: "Evcil hayvan kabul ediliyor mu?",
    a: "Evet. Evcil hayvanlar ortak alan huzurunu koruyan kurallar çerçevesinde kabul edilir. Tasma, temizlik ve ortak alan kullanımı konusunda dikkatli olunması beklenir.",
  },
  {
    q: "Çocuklu aileler için uygun mu?",
    a: "Evet. Rota İnceğiz, sakin ve düzenli kullanım yapısıyla aileler için uygun bir alan sunmayı hedefler. Çocuklu kullanımda alan kurallarına ve ortak alan güvenliğine dikkat edilmesi önemlidir.",
  },
  {
    q: "Komşuluk ve ortam nasıl?",
    a: "Rota İnceğiz'de sakin, düzenli ve saygılı bir karavan ortamı hedeflenir. Ortak yaşam kültürünü korumak için alan kullanımı belirli kurallarla yönetilir.",
  },
  {
    q: "Mangal, ateş ve dış alan kullanımı serbest mi?",
    a: "Evet. Kullanıcılar kendilerine ait bahçe/parsel alanında mangal ve açık alan kullanımı yapabilir. Güvenlik, yangın riski ve çevre düzeni konusunda dikkatli olunması gerekir.",
  },
  {
    q: "Yol ve ulaşım karavan için rahat mı?",
    a: "Rota İnceğiz, Çatalca İnceğiz'de konumlanır. Karavanla ulaşım için uygun bir konuma sahiptir.",
  },
  {
    q: "Konum bana uygun mu?",
    a: "Adresimiz: İnceğiz Mh., Hanice Cd No:145/A, Çatalca/İstanbul. İstanbul'dan çok uzaklaşmadan doğayla iç içe bir karavan alanı arayan kullanıcılar için uygun bir konumdadır.",
  },
  {
    q: "Wi-Fi veya telefon çekimi var mı?",
    a: "Evet, alanda Wi-Fi bulunmaktadır. Telefon çekimi operatöre göre değişiklik gösterebilir.",
  },
  {
    q: "Alanı önceden görebilir miyim?",
    a: "Evet. Karar vermeden önce alanı görmeniz önerilir. Telefon veya WhatsApp üzerinden iletişime geçerek ziyaret planlayabilirsiniz.",
  },
  {
    q: "Alanda kimler kalıyor?",
    a: "Rota İnceğiz, karavanını düzenli şekilde kullanmak isteyen, sakin ve saygılı ortak alan kültürüne uyum sağlayan karavan sahiplerine hitap eder.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="sss" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Sıkça Sorulanlar
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Bilmek istediğiniz
            <span className="italic text-moss"> her şey.</span>
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl group-hover:text-forest transition-colors">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-border grid place-items-center text-forest group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="iletisim"
      className="relative py-28 md:py-40 overflow-hidden bg-forest text-cream"
    >
      <img
        src={sunset}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/95 to-forest" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            İletişim
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance text-cream">
            Parselinizi
            <span className="italic"> bugün ayırın.</span>
          </h2>
          <p className="mt-6 text-cream/80 text-lg max-w-md leading-relaxed">
            Size uygun parseli birlikte seçelim. Sorularınız için bize ulaşın
            veya ziyaret randevusu alın.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`tel:${PHONE_1.replace(/\s/g, "")}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full border border-cream/25 grid place-items-center group-hover:bg-cream group-hover:text-forest transition-colors">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-cream/60">Telefon</div>
                <div className="font-display text-2xl">{PHONE_1}</div>
              </div>
            </a>
            <a
              href={`tel:${PHONE_2.replace(/\s/g, "")}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full border border-cream/25 grid place-items-center group-hover:bg-cream group-hover:text-forest transition-colors">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-cream/60">Telefon</div>
                <div className="font-display text-2xl">{PHONE_2}</div>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-accent text-accent-foreground grid place-items-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-cream/60">WhatsApp</div>
                <div className="font-display text-2xl">Anında Yanıt Al</div>
              </div>
            </a>
            <div className="flex items-start gap-4 pt-2">
              <span className="w-12 h-12 rounded-full border border-cream/25 grid place-items-center">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-cream/60">Adres</div>
                <div className="text-cream/90 max-w-xs">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const phone = String(data.get("phone") || "").trim();
            const phoneRegex = /^[+]?[\s\d]{10,}$/;
            if (!phoneRegex.test(phone)) {
              alert("Lütfen geçerli bir telefon numarası girin. Örn: +90 507 563 12 96");
              return;
            }
            const msg = `Merhaba, Rota İnceğiz Karavan Park parsel bilgisi almak istiyorum.%0A%0AAd: ${data.get("name")}%0ATelefon: ${phone}%0AMesaj: ${data.get("message")}`;
            window.open(`${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="reveal bg-cream/5 backdrop-blur-sm border border-cream/15 rounded-3xl p-8 md:p-10 space-y-5"
        >
          <h3 className="font-display text-2xl text-cream">Hızlı İletişim Formu</h3>
          <div className="space-y-4">
            <input
              required
              name="name"
              placeholder="Ad Soyad"
              className="w-full bg-transparent border-b border-cream/25 focus:border-accent outline-none py-3 text-cream placeholder:text-cream/45 transition-colors"
            />
            <div>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+90 111 222 33 44"
                pattern="^[+]?[\s\d]{10,}$"
                title="Lütfen geçerli bir telefon numarası girin"
                className="w-full bg-transparent border-b border-cream/25 focus:border-accent outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
              />
              <p className="text-cream/30 text-xs mt-1.5">
                Örnek: +90 507 563 12 96
              </p>
            </div>
            <input
              name="email"
              type="email"
              placeholder="E-posta (opsiyonel)"
              className="w-full bg-transparent border-b border-cream/25 focus:border-accent outline-none py-3 text-cream placeholder:text-cream/45 transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Mesajınız"
              className="w-full bg-transparent border-b border-cream/25 focus:border-accent outline-none py-3 text-cream placeholder:text-cream/45 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-cream text-forest px-7 py-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
          >
            WhatsApp ile Gönder
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-full border border-foreground/25">
              <Trees className="w-4 h-4" />
            </span>
            <span className="font-display text-lg">
              Rota İnceğiz <span className="italic opacity-80">Karavan Park</span>
            </span>
          </div>
          <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
            Çatalca İnceğiz'de, doğanın içinde yıllık kiralık sabit karavan
            parselleri. Premium ve güvenli karavan yaşamı.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            İletişim
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href={`tel:${PHONE_1.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">{PHONE_1}</a></li>
            <li><a href={`tel:${PHONE_2.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">{PHONE_2}</a></li>
            <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
            <li><a href="https://www.instagram.com/rotaincegiz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors"><Instagram className="w-4 h-4" /> Instagram</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Konum
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{ADDRESS}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Rota İnceğiz Karavan Park. Tüm hakları saklıdır.</div>
          <div>Çatalca · İstanbul · Türkiye</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-xl shadow-black/20 hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&display=swap"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <About />
          <Features />

          <Gallery />
          <Location />
          <FAQSection />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
