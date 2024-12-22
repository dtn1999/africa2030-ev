import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920",
    title: "Explore Nature",
    description: "Discover the beauty of untouched landscapes",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920",
    title: "Mountain Adventures",
    description: "Experience the thrill of mountain exploration",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1920",
    title: "Forest Wonders",
    description: "Get lost in the magical forest atmosphere",
  },
];

interface CarouselProps {
  slides: {
    image: string;
  }[];
}

export function HeroCarousel({ slides }: CarouselProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides?.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="relative w-full h-screen border-0 rounded-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
                  <h2
                    className={cn(
                      "text-4xl md:text-6xl font-bold mb-4",
                      "animate-in slide-in-from-bottom duration-1000"
                    )}
                  >
                    Explore Nature
                  </h2>
                  <p
                    className={cn(
                      "text-xl md:text-2xl max-w-2xl text-center",
                      "animate-in slide-in-from-bottom duration-1000 delay-150"
                    )}
                  >
                    Get lost in the magical forest atmosphere
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>
    </div>
  );
}
