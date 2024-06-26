import React, { useRef, useEffect } from "react";
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
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };

    const slider1Button = document.getElementById("slider1-button");
    const slider2Button = document.getElementById("slider2-button");
    const slider3Button = document.getElementById("slider3-button");

    if (slider1Button) slider1Button.addEventListener("click", handleScroll);
    if (slider2Button) slider2Button.addEventListener("click", handleScroll);
    if (slider3Button) slider3Button.addEventListener("click", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      if (slider1Button)
        slider1Button.removeEventListener("click", handleScroll);
      if (slider2Button)
        slider2Button.removeEventListener("click", handleScroll);
      if (slider3Button)
        slider3Button.removeEventListener("click", handleScroll);
    };
  }, []);

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
          <div className="fondo4 parallax image relative flex flex-col md:flex-row items-center justify-center  md:h-[100%] my-auto gap-8   ">
            <div className="absolute inset-0 bg-black bg-opacity-50 " />
            <div className="w-[80%] md:w-[65%] lg:w-[1000px] xl:w-[1400px] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 rounded-xl p-5 z-10 animate-bounce-fade-in">
              <h3 className="md:text-8xl  text-7xl text-white text-center font-semibold">
                Tu auto, más que seguro
              </h3>
              <h1 className="text-2xl text-white text-center ">
                Viaja con la tranquilidad de tener la mejor cobertura.
              </h1>

              <a
                id="slider1-button"
                href="#contact"
                className="w-48  px-[2rem] bg-white text-lg p-3 text-primary mx-auto font-semibold hover:bg-primary hover:text-white rounded-md hover:animate-pop text-center"
              >
                COTIZÁ AHORA
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fondo1 parallax image relative flex flex-col md:flex-row items-center justify-center  md:h-[100%] my-auto gap-8   ">
            <div className="absolute inset-0 bg-black bg-opacity-50 " />
            <div className="w-[80%] md:w-[65%] lg:w-[1000px] xl:w-[1400px] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 rounded-xl p-5 z-10 animate-bounce-fade-in">
              <h3 className="md:text-7xl  text-5xl text-white text-center font-semibold">
                Protege la tranquilidad de tu hogar
              </h3>
              <h1 className="text-2xl text-white text-center ">
                Combina las coberturas que necesitas para cuidar lo que más te
                importa.
              </h1>

              <a
                id="slider2-button"
                href="#contact"
                className="w-48  px-[2rem] bg-white text-lg p-3 text-primary mx-auto font-semibold hover:bg-primary hover:text-white rounded-md hover:animate-pop text-center"
              >
                COTIZÁ AHORA
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="fondo3 parallax image relative flex flex-col md:flex-row items-center justify-center  md:h-[100%] my-auto gap-8   ">
            <div className="absolute inset-0 bg-black bg-opacity-50 " />
            <div className="w-[80%] md:w-[65%] lg:w-[1000px] xl:w-[1400px] flex flex-col gap-10 justify-center mx-auto  sm:mx-0 rounded-xl p-5 z-10 animate-bounce-fade-in">
              <h3 className="md:text-8xl  text-7xl text-white text-center font-semibold">
                Cuidamos tu esfuerzo
              </h3>
              <h1 className="text-2xl text-white text-center ">
                Soluciones a medida para que no tengas que preocuparte
              </h1>
              <a
                id="slider3-button"
                href="#contact"
                className="w-48  px-[2rem] bg-white text-lg p-3 text-primary mx-auto font-semibold hover:bg-primary hover:text-white rounded-md hover:animate-pop text-center"
              >
                COTIZÁ AHORA
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
