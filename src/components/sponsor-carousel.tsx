import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface Collaborator {
  website: string;
  name: string;
  logo: string;
}

interface SponsorsProps {
  sponsors: Collaborator[];
}

export function SponsorCarousel({ sponsors }: SponsorsProps) {
  console.log(sponsors);
  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {sponsors?.map((sponsor, index) => (
        <SwiperSlide key={index}>
          <a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 transition-shadow duration-300"
          >
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="mb-4 h-32 w-32 object-contain grayscale filter hover:filter-none"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
