import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const AuthCaorusalComponent = () => {
  return (
    <div className=" w-[45%] h-full rounded-[2.5rem] mx-2 hidden md:block">
      <Swiper
        className="h-full mySwiper"
        autoplay={{
          delay: 2000,
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
          <Image
            src="/photo-1.jpeg"
            className="h-full rounded-3xl w-[100%]"
            fill={true}
            alt="photo1"
            quality={80}	
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/photo-2.jpeg"
            className="h-full rounded-3xl w-[100%]"
            fill={true}
            alt="photo2"
            quality={80}	
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/photo-3.jpeg"
            fill={true}
            className="h-full rounded-3xl w-[100%]"
            alt="photo3"
            quality={80}	
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default AuthCaorusalComponent;
