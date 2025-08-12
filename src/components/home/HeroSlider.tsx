import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroStyle from "@/assets/hero-style.jpg";
import heroFood from "@/assets/hero-food.jpg";
import heroTravel from "@/assets/hero-travel.jpg";
import heroWellness from "@/assets/hero-wellness-new.jpg";

const slides = [
  { key: 'Style', img: heroStyle, alt: 'NYC street style in SoHo with pastel storefronts', caption: 'Effortless looks and city-ready fits inspired by New York’s streets.' },
  { key: 'Food', img: heroFood, alt: 'Cozy Brooklyn cafe pastries and coffee on marble table', caption: 'Cafés, bakeries, and neighborhood gems worth savoring.' },
  { key: 'Travel', img: heroTravel, alt: 'Golden hour skyline view from a New York rooftop', caption: 'Weekend wanderings and skyline moments across the five boroughs.' },
  { key: 'Wellness', img: heroWellness, alt: 'Serene yoga in Central Park with soft morning light', caption: 'Simple routines for balance, movement, and a calmer city life.' }
];

const HeroSlider = () => {
  return (
    <section aria-label="Featured categories" className="relative">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((s, idx) => (
                <CarouselItem key={s.key}>
                  <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-card shadow-sm">
                    <img
                      src={s.img}
                      alt={`${s.key} — ${s.alt}`}
                      className="h-full w-full object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0">
                      <div className="mx-4 mb-4 rounded-md bg-background/80 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{s.key}</span>
                        <p className="mt-2 text-sm text-foreground/80">{s.caption}</p>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8" aria-label="Previous" />
            <CarouselNext className="-right-4 md:-right-8" aria-label="Next" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
