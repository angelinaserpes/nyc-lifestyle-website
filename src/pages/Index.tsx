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
    </div>
  );
};

export default Index;
