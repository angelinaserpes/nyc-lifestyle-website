import HeroSlider from "@/components/home/HeroSlider";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/blog/PostCard";
import { posts, type Category } from "@/data/posts";
import { Link } from "react-router-dom";

const categories: Category[] = ["Style", "Food", "Travel", "Wellness"];

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NYC Living",
    url: typeof window !== 'undefined' ? window.location.origin : 'https://nyc-living.example',
    description: "A pastel, modern lifestyle blog about Style, Food, Travel, and Wellness in New York City.",
  };

  return (
    <div>
      <SEO
        title="NYC Living — Lifestyle Blog"
        description="Pastel, modern stories on Style, Food, Travel, and Wellness in NYC."
        jsonLd={jsonLd}
      />

      <header className="container mx-auto px-4 pt-10 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">NYC Living</h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          A clean and modern look at life in New York City—soft colors, gentle typography, and calm inspiration.
        </p>
      </header>

      <HeroSlider />

      <section aria-labelledby="about-title" className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 id="about-title" className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 text-muted-foreground">
              NYC Living is an approachable lifestyle journal exploring four simple pillars: Style, Food, Travel, and Wellness. Our aim is to make the city feel softer—through thoughtful guides, calm visuals, and stories that slow down the pace.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">
              New here? Browse the latest posts below, or head to the blog to filter by category. We keep things airy and practical—easy reads for your commute or a quiet morning.
            </p>
            <div className="mt-4">
              <Link to="/blog" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90">
                Explore the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="blog-title" className="container mx-auto px-4 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="blog-title" className="text-2xl md:text-3xl font-semibold">Latest Posts</h2>
            <p className="mt-1 text-sm text-muted-foreground">Organized by category for easy browsing.</p>
          </div>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground">View all</Link>
        </div>

        <Tabs defaultValue={categories[0]}>
          <TabsList className="mb-6">
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent key={c} value={c}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.filter(p => p.category === c).slice(0,3).map(p => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section aria-labelledby="spotlights-title" className="container mx-auto px-4 pb-16">
        <h2 id="spotlights-title" className="text-2xl md:text-3xl font-semibold">Category Spotlights</h2>
        <p className="mt-1 text-sm text-muted-foreground">What you'll find in each pillar.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-medium">Style</h3>
            <p className="mt-2 text-sm text-muted-foreground">Seasonal layers, capsule wardrobes, and neighborhood shopping maps.</p>
            <div className="mt-4"><Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground">Explore Style</Link></div>
          </article>
          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-medium">Food</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cozy cafés, bakeries, budget-friendly bites, and weekend brunch picks.</p>
            <div className="mt-4"><Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground">Explore Food</Link></div>
          </article>
          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-medium">Travel</h3>
            <p className="mt-2 text-sm text-muted-foreground">Day itineraries, scenic walks, and quick routes for golden hour views.</p>
            <div className="mt-4"><Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground">Explore Travel</Link></div>
          </article>
          <article className="rounded-lg border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-medium">Wellness</h3>
            <p className="mt-2 text-sm text-muted-foreground">Calm routines, park workouts, and restorative spaces around the city.</p>
            <div className="mt-4"><Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground">Explore Wellness</Link></div>
          </article>
        </div>
      </section>

      <section aria-labelledby="tips-title" className="container mx-auto px-4 pb-20">
        <h2 id="tips-title" className="text-2xl md:text-3xl font-semibold">NYC Tips & Resources</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-base font-medium">Navigating the City</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Sunrise and late afternoon are best for photos and quieter streets.</li>
              <li>Weekdays feel calmer for popular spots—weekends are vibrant but busy.</li>
              <li>Use the subway for speed; walking is often the most scenic option.</li>
              <li>Pack layers and shoes made for distance—comfort beats trends.</li>
            </ul>
          </article>
          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-base font-medium">How We Curate</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Independent picks—no pay-to-play features.</li>
              <li>We revisit places seasonally to keep recommendations fresh.</li>
              <li>Short, practical reads you can finish on a commute.</li>
              <li>We welcome reader tips—share your finds on the Contact page.</li>
            </ul>
          </article>
        </div>
      </section>

    </div>
  );
};

export default Index;
