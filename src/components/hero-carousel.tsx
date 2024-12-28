"use client";

import { Card } from "@/components/ui/card";

import { Autoplay } from "swiper/modules";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Amatic_SC } from "next/font/google";
import Link from "next/link";
import { ChevronRightIcon, HeartIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
}

export function HeroCarousel({ slides }: CarouselProps) {
  console.log(slides);
  const [current, setCurrent] = useState(0);

  return (
    <Swiper
      className="relative w-full lg:h-[90vh] h-[70vh] overflow-hidden"
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <Card className="relative w-full lg:h-[90vh] h-[70vh] border-0 rounded-none overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
              />
            </div>
            <div className="container mx-auto relative flex items-center justify-center h-full text-white p-[16px] flex-col">
              <h3
                className={`${amaticSC.className} text-[32px] mb-[20px] text-white`}
              >
                Our Goals
              </h3>
              <h2
                className={cn(
                  "text-center text-[40px] lg:text-[80px] md:text-[72px] font-bold mb-4 leading-none line-clamp-3 max-w-[800px]"
                )}
              >
                {slide.title}
              </h2>
              {/* <p
                      className={cn(
                        "text-xl md:text-2xl max-w-2xl text-left font-extralight line-clamp-4",
                        "animate-in slide-in-from-bottom duration-1000 delay-150"
                      )}
                    >
                      {slide.description["Default"]}
                    </p> */}
              <div className="py-8 flex space-x-[32px] items-center">
                <Link
                  href="#"
                  className="flex items-center rounded-[28px] px-6 py-3 space-x-[10px] bg-primary"
                >
                  <span className="">LEARN MORE</span>
                </Link>
              </div>
            </div>
          </Card>
        </SwiperSlide>
      ))}
      <div className="absolute bg-black/50 bottom-4 right-4 px-8 py-2 z-30">
        <span className="text-white">{`${current + 1}/${slides.length}`}</span>
      </div>
    </Swiper>
  );
}
