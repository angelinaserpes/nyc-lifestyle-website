import { Link, NavLink } from "react-router-dom";

const navLinkBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="NYC Living home">
          <span className="text-lg font-semibold tracking-tight">NYC Living</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <NavLink to="/" end className={({isActive})=>`${navLinkBase} ${isActive? 'bg-secondary text-foreground':'text-foreground/80'}`}>Home</NavLink>
          <NavLink to="/blog" className={({isActive})=>`${navLinkBase} ${isActive? 'bg-secondary text-foreground':'text-foreground/80'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=>`${navLinkBase} ${isActive? 'bg-secondary text-foreground':'text-foreground/80'}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
