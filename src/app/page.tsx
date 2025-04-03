"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ProjectCarousel = () => {
  const images = [
    "/centenario.webp",
    "/escola-sesc.webp",
    "/exibe.webp",
    "tramas.webp",
    "/sandra-maia.webp",
    "/porto-dragao.webp",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 z-0 pt-20 flex-1">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        className="w-full m-10"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Projeto ${index + 1}`} className="w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[540px] xl:h-[540px] object-cover shadow-lg" />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-bullet-active bg-yellow-300"></div>
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
