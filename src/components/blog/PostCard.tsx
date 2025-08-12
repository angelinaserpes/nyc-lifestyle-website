import { Card, CardContent } from "@/components/ui/card";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'Style' | 'Food' | 'Travel' | 'Wellness';
  date: string;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group">
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={post.image} alt={`${post.title} — ${post.category} in NYC`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">{post.category}</span>
        </div>
        <CardContent className="pt-4">
          <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
          <p className="mt-3 text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </article>
  );
};

export default PostCard;
