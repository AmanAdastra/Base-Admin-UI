import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";


const AuthCaorusalComponent = () => {
    
  return (
    <div className=" w-[45%] h-full rounded-[2.5rem] mx-2 hidden md:block">
      <Swiper
        className="h-full mySwiper"
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
          }}
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        height={"100%"}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1692401891857-fdc1baa601f4"
            className="h-full rounded-3xl w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1656992469482-ff805f493875"
            className="h-full rounded-3xl w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff"
            className="h-full rounded-3xl w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1595243643203-06ba168495ea"
            className="h-full rounded-3xl w-[100%]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AuthCaorusalComponent;
