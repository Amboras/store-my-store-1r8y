'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Magnet,
  Droplets,
  Infinity as InfinityIcon,
  Sparkles,
  Layers,
  CheckCircle2,
  Star,
} from 'lucide-react'
import { useProducts } from '@/hooks/use-products'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { formatPrice } from '@/lib/utils/format-price'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=80'
const LIFESTYLE_IMAGE =
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=80'
const STORY_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80'

export default function HomePage() {
  const { data: productsData } = useProducts({ limit: 6 })
  const products = productsData || []
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative bg-[hsl(38_40%_97%)] overflow-hidden">
        <div className="container-custom grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center py-16 lg:py-28">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 text-xs uppercase tracking-[0.18em] text-foreground/70">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              As seen on Shark Tank
            </div>

            <h1 className="font-heading font-bold text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-tight text-balance">
              Two spoons.
              <br />
              <span className="italic text-[hsl(22_55%_45%)]">Six sizes.</span>
              <br />
              Zero clutter.
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              The original flat-folding measuring spoons. Magnetic, leak-proof,
              and built to outlast your kitchen — backed by a lifetime hinge
              guarantee.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products/the-folding-spoon-set"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                prefetch
              >
                Shop the Set
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-foreground/80 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                How it works
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[hsl(22_55%_50%)] text-[hsl(22_55%_50%)]"
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9</span>
                <span>· 12,400+ reviews</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(22_55%_50%)]" />
                <span>Free US shipping over $50</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted animate-fade-in">
              <Image
                src={HERO_IMAGE}
                alt="Polygons folding measuring spoons"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating spec card */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-background border border-border p-5 max-w-[240px] shadow-[0_20px_60px_-20px_rgba(14,30,52,0.25)]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(22_55%_45%)] font-semibold mb-2">
                <InfinityIcon className="h-4 w-4" strokeWidth={2} />
                DuraBend Hinge
              </div>
              <p className="text-sm leading-snug text-foreground">
                Tested to <strong>100,000+</strong> folds. Backed by a lifetime
                guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── TRUST BAR (press / social proof) ───────────── */}
      <section className="border-y border-border bg-background">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            <span>As Seen In</span>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-foreground">
              The New York Times
            </span>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-foreground italic">
              Bon Appétit
            </span>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-foreground">
              WIRED
            </span>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-foreground">
              Food &amp; Wine
            </span>
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-foreground">
              Oprah&apos;s Favorites
            </span>
          </div>
        </div>
      </section>

      {/* ────────────────────── HOW IT WORKS ────────────────────── */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-[hsl(22_55%_45%)] font-semibold mb-3">
              Engineered differently
            </p>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
              Goodbye drawer spaghetti.
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Traditional spoon rings tangle, rattle, and hide the size you
              need. Polygons fold flat — every size, always at your fingertips.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Layers,
                title: 'Fold flat',
                body:
                  'Two spoons collapse into six exact measurements, from ¼ tsp to 1.5 tbsp.',
              },
              {
                icon: Magnet,
                title: 'Magnetic',
                body:
                  'Snaps together for storage. Sticks to your fridge, range hood, or utensil rail.',
              },
              {
                icon: Droplets,
                title: 'Leak-proof',
                body:
                  'Sealed hinge handles wet and dry ingredients with equal precision.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative border border-border bg-[hsl(38_40%_98%)] p-8 hover:border-foreground transition-colors"
              >
                <Icon
                  className="h-8 w-8 text-[hsl(22_55%_45%)] mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* 6 sizes strip */}
          <div className="mt-14 border-t border-b border-border py-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                6 Exact Sizes
              </span>
              {['¼ tsp', '½ tsp', '1 tsp', '½ tbsp', '1 tbsp', '1.5 tbsp'].map(
                (size) => (
                  <span
                    key={size}
                    className="font-heading font-bold text-lg sm:text-xl tabular-nums"
                  >
                    {size}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── SHOP THE SETS ────────────────────── */}
      <section className="py-20 lg:py-28 bg-[hsl(38_30%_94%)]">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[hsl(22_55%_45%)] font-semibold mb-2">
                Shop
              </p>
              <h2 className="font-heading font-bold text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight">
                Choose your set.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider link-underline pb-1"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {products.slice(0, 2).map((product: (typeof products)[number]) => {
              const firstVariant = (product.variants?.[0] as unknown) as
                | {
                    calculated_price?: {
                      calculated_amount?: number
                      currency_code?: string
                    }
                  }
                | undefined
              const price = firstVariant?.calculated_price?.calculated_amount
              const currency =
                firstVariant?.calculated_price?.currency_code || 'usd'
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  className="group block"
                  prefetch
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                    {product.thumbnail && (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                      {product.variants && product.variants.length > 1
                        ? `${product.variants.length} colors`
                        : 'New'}
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading font-semibold text-lg group-hover:text-[hsl(22_55%_45%)] transition-colors">
                      {product.title}
                    </h3>
                    {price != null && (
                      <span className="font-heading font-semibold text-lg tabular-nums whitespace-nowrap">
                        {formatPrice(price, currency)}
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────── EDITORIAL / STORY ─────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted order-2 lg:order-1">
            <Image
              src={STORY_IMAGE}
              alt="Polygons in use — a chef folding the magnetic spoon set"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 lg:max-w-md order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[hsl(22_55%_45%)] font-semibold">
              Our Story
            </p>
            <h2 className="font-heading font-bold text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
              Built for cooks who measure twice.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Polygons was born in a Brooklyn test-kitchen after one too many
              tangled spoon rings. Four years and eleven prototypes later, we
              created the first measuring spoon worth keeping on the counter —
              not hidden in a drawer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every set is precision-molded, hand-inspected, and shipped
              carbon-neutral from our family workshop.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider link-underline pb-1"
              prefetch
            >
              Read the full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── REVIEW QUOTE ─────────────────── */}
      <section className="py-16 lg:py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src={LIFESTYLE_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[hsl(22_60%_60%)] text-[hsl(22_60%_60%)]"
                />
              ))}
            </div>
            <blockquote className="font-heading font-semibold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-tight italic">
              &ldquo;These are the single smartest thing in my kitchen drawer.
              I bought three more sets as gifts — everyone asks where I got
              them.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-background/70">
              — Sarah K., verified buyer
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── GUARANTEES STRIP ────────────────── */}
      <section className="py-12 border-b border-border bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free US Shipping', sub: 'On orders $50+' },
              { icon: RotateCcw, title: '60-Day Returns', sub: 'No questions asked' },
              {
                icon: InfinityIcon,
                title: 'Lifetime Hinge',
                sub: '100k+ folds guaranteed',
              },
              { icon: ShieldCheck, title: 'Secure Checkout', sub: '256-bit SSL' },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <Icon
                  className="h-7 w-7 flex-shrink-0 text-[hsl(22_55%_45%)]"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── NEWSLETTER ─────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container-custom max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[hsl(22_55%_45%)] font-semibold mb-3">
            Join the Polygons list
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.5rem,3vw,2.25rem)] leading-tight">
            Get 10% off your first order.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Plus early access to new colors, collabs, and limited drops.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-2"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border border-border bg-background px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-foreground text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
