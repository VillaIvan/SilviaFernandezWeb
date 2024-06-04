import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import ilus from "@/components/assets/bro.svg";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="h-[85vh] w-[90%]  md:h-[80vh]  animate-fade-in-down p-5 md:p-10 mx-auto">
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
          <div className="image relative flex flex-col md:flex-row items-center justify-center md:h-[100%] my-auto gap-8 p-5 rounded-xl ">
            <div className="w-[80%] md:w-1/2 flex flex-col gap-10 justify-center mx-auto sm:mx-0">
              <h3 className="text-xl text-white text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-white text-lg p-2 text-primary mx-auto lg:mx-0 font-semibold hover:bg-secondary hover:text-white rounded-md">
                Shop Now
              </button>
            </div>
            <div className="">
              <img
                src="https://i.ibb.co/nCPBhDH/bro.png"
                alt="imagen de ejemplo"
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative flex flex-col md:flex-row items-center justify-center md:h-[100%] my-auto gap-8 p-5 rounded-xl ">
            <div className="w-[80%] md:w-1/2 flex flex-col gap-10 justify-center mx-auto sm:mx-0">
              <h3 className="text-xl text-white text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-secondary text-lg p-2 text-white mx-auto md:mx-0">
                Shop Now
              </button>
            </div>
            <div className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[45%]">
              <img
                src="https://i.ibb.co/nCPBhDH/bro.png"
                alt="imagen de ejemplo"
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative flex flex-col md:flex-row items-center justify-center md:h-[100%] my-auto gap-8 p-5 rounded-xl ">
            <div className="w-[80%] md:w-1/2 flex flex-col gap-10 justify-center mx-auto sm:mx-0">
              <h3 className="text-xl text-white text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-secondary text-lg p-2 text-white mx-auto md:mx-0">
                Shop Now
              </button>
            </div>
            <div className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[45%]">
              <img
                src="https://i.ibb.co/nCPBhDH/bro.png"
                alt="imagen de ejemplo"
              ></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative flex flex-col md:flex-row items-center justify-center md:h-[100%] my-auto gap-8 p-5 rounded-xl ">
            <div className="w-[80%] md:w-1/2 flex flex-col gap-10 justify-center mx-auto sm:mx-0">
              <h3 className="text-xl text-white text-center md:text-start">
                More Luxury and trending
              </h3>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-start">
                The Commercial and Personal Insurance Specialists for over 35
                years.
              </h1>

              <button className="w-44 px-[2rem] bg-secondary text-lg p-2 text-white mx-auto md:mx-0">
                Shop Now
              </button>
            </div>
            <div className="w-[75%] sm:w-[70%] md:w-[50%] lg:w-[45%]">
              <img
                src="https://i.ibb.co/nCPBhDH/bro.png"
                alt="imagen de ejemplo"
              ></img>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
