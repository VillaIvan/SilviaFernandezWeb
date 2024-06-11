import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="h-[85vh] w-[100%]  md:h-[85vh]  animate-fade-in-down  mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="fondo1 parallax image relative flex flex-col md:flex-row items-center justify-center  md:h-[100%] my-auto gap-8   ">
            <div className="absolute inset-0 bg-black bg-opacity-50 " />
            <div className="w-[80%] md:w-[65%] lg:w-[700px] xl:w-[700px] flex flex-col gap-10 justify-center mx-auto  sm:mx-0  rounded-xl p-5  z-10">
              {/* <h3 className="text-xl text-secondary text-center md:text-start">
                More Luxury and trending
              </h3> */}
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white text-center ">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className=" w-[100px] md:w-[30%] px-[2rem] bg-primary text-lg p-3 text-white mx-auto font-semibold hover:bg-white hover:text-primary rounded-md ">
                COTIZÁ AHORA
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fondo2 parallax image relative flex flex-col md:flex-row items-center justify-center md:justify-end md:pr-24 md:h-[100%] my-auto gap-8   ">
            <div className="w-[80%] md:w-[55%] xl:w-[35%] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 bg-white bg-opacity-60 rounded-xl p-5 shadow-md">
              <h3 className="text-xl text-oscure text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-oscure text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-primary text-lg p-2 text-white mx-auto lg:mx-0 font-semibold hover:bg-white hover:text-primary rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fondo3 parallax image relative flex flex-col md:flex-row items-center justify-center md:justify-start md:pl-24 md:h-[100%] my-auto gap-8   ">
            <div className="w-[80%] md:w-[55%] xl:w-[35%] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 bg-white bg-opacity-60 rounded-xl p-5 shadow-md z-10">
              <h3 className="text-xl text-oscure text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-oscure text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-primary text-lg p-2 text-white mx-auto lg:mx-0 font-semibold hover:bg-white hover:text-primary rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fondo4 parallax image relative flex flex-col md:flex-row items-center justify-center md:justify-start md:pl-24 md:h-[100%] my-auto gap-8  ">
            <div className="w-[80%] md:w-[55%] xl:w-[35%] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 bg-white bg-opacity-60 rounded-xl p-5 shadow-md">
              <h3 className="text-xl text-oscure text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-oscure text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-primary text-lg p-2 text-white mx-auto  font-semibold hover:bg-white hover:text-primary rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
