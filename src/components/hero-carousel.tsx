"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Amatic_SC } from "next/font/google";
import { CustomButton } from "./button";
import Link from "next/link";
import { ChevronRightIcon, HeartIcon } from "lucide-react";

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const defaultSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920",
    title: "End poverty in all its forms, everywhere.",
    description:
      " Poverty denies children their fundamental rights to health, protection, education and much more. Without global action, child poverty is likely to entrench social inequality ...",
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
    title: string;
    description: string;
  }[];
}

export function HeroCarousel({ slides = defaultSlides }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugins = [
    AutoScroll({
      speed: 0,
    }),
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(slides.length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, slides]);

  return (
    <div className="relative w-full md:h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{}}
        plugins={plugins}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides?.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="relative w-full h-screen border-0 rounded-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
                  />
                </div>
                <div className="container mx-auto relative flex items-center h-full text-white p-[48px]">
                  <div className="md:max-w-[640px]">
                    <h3
                      className={`${amaticSC.className} text-[32px] mb-[20px]`}
                    >
                      Our Goals
                    </h3>
                    <h2
                      className={cn(
                        "text-[80px] md:text-[72px] font-bold mb-4 leading-none"
                      )}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className={cn(
                        "text-xl md:text-2xl max-w-2xl text-left font-extralight",
                        "animate-in slide-in-from-bottom duration-1000 delay-150"
                      )}
                    >
                      {slide.description}
                    </p>
                    <div className="py-8 flex space-x-[32px] items-center">
                      <Link
                        href="#"
                        className="flex items-center rounded-[28px] px-6 py-3 space-x-[10px] bg-[#2f9114]"
                      >
                        <span className="">LEARN MORE</span>
                        <ChevronRightIcon className="size-8" />
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center rounded-[28px] px-[32px] py-3 space-x-[8px] bg-white text-[#2f9114]"
                      >
                        <span className="">DONATE NOW</span>
                        <HeartIcon className="size-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
          <div className="bg-black/50 px-8 py-2 flex items-center justify-center"></div>
        </CarouselContent>
        <div className="absolute bg-black/50 bottom-4 right-4 px-8 py-2">
          <span className="text-white">{`${current + 1}/${count}`}</span>
        </div>
        <CarouselPrevious className="md:hidden left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="md:hidden right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>
    </div>
  );
}
