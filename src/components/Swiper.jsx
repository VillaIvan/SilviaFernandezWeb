import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import SpaceCity from "./assets/group.jpeg";
import ART from "./assets/ART.jpg";
import Casa from "./assets/casa.jpg";
import Auto from "./assets/seguroauto.jpg";
import Seguro from "./assets/comercioseguro.webp";

export const ServiceData = [
  {
    title: "ART",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: ART.src,
    class: "",
  },
  {
    title: "AUTOMOTOR",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Auto.src,
    class: "",
  },
  {
    title: "COMERCIOS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Seguro.src,
    class: "bg-right",
  },
  {
    title: "HOGAR",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: Casa.src,
    class: "",
  },
  {
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity.src,
    class: "",
  },
  {
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity.src,
    class: "",
  },
];

const ActiveSlider = () => {
  return (
    <div
      id="servicios"
      className=" my-20 landing-section"
      data-header-color="#0F7261"
    >
      <Swiper
        breakpoints={{
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 2,
          },
          "@1.75": {
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="max-w-[100%] lg:max-w-[90%]  "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col mx-auto group relative shadow-lg text-white rounded-xl px-6 py-8 h-[550px] w-[350px] md:h-[400px] md:w-[400px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative flex flex-col h-full justify-center items-center gap-3">
                <div className="absolute flex flex-col justify-center items-center inset-0 opacity-100 group-hover:opacity-0 group-hover:invisible transition-opacity duration-300 ease-in-out">
                  <h1 className="text-5xl font-semibold text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                  <p className="lg:text-[18px] text-center">{item.content}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
