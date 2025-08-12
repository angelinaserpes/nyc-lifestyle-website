import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/blog/PostCard";
import { posts, type Category } from "@/data/posts";

const allCategories: ("All" | Category)[] = ["All", "Style", "Food", "Travel", "Wellness"];

const Blog = () => {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NYC Living Blog",
    description: "Stories and guides across Style, Food, Travel, and Wellness in NYC",
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <SEO
        title="Blog — NYC Living"
        description="Explore posts on Style, Food, Travel, and Wellness across New York City."
        jsonLd={pageLd}
      />

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Browse every article or filter by category to find exactly what youre in the mood for.</p>

      <Tabs defaultValue="All" className="mt-8">
        <TabsList className="flex flex-wrap gap-1">
          {allCategories.map(c => (
            <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
          ))}
        </TabsList>
        {allCategories.map(c => {
          const list = c === 'All' ? posts : posts.filter(p => p.category === c);
          return (
            <TabsContent key={c} value={c}>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map(p => (<PostCard key={p.id} post={p} />))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Blog;
