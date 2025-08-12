const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold">NYC Living</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A modern lifestyle blog exploring Style, Food, Travel, and Wellness across New York City.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
            <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div className="lg:text-right md:col-span-2 lg:col-span-1">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NYC Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
