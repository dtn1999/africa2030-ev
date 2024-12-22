import Autoplay from "embla-carousel-react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  slides: {
    image: string;
  }[];
}

export function SectionCarousel({ slides }: CarouselProps) {
  const [emblaRef, api] = useEmblaCarousel({}, [Autoplay()]);

  //   const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute z-50 left-0 -bottom-[10px]">
        <div className="p-3 flex space-x-2 bg-red-700">
          {Array.from({ length: slides.length }).map((_, index) => (
            <div
              key={index}
              className={cn("w-[5px] h-[5px] rounded-full bg-white", {
                "w-[32px]": count === index,
              })}
            />
          ))}
        </div>
      </div>
      <Carousel plugins={[Autoplay({})]} setApi={api} className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="relative w-full h-full border-0 rounded-none overflow-hidden">
                <img src={slide.image} className="w-full h-full" />
                <div className="absolute inset-0 bg-black/40" />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
