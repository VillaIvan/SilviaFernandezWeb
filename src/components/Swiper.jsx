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
import Moto from "./assets/moto.jpg";
import Trato from "./assets/trato.jpg";

export const ServiceData = [
  {
    title: "ART",
    content:
      "El objetivo principal del sistema de riesgos del trabajo es la prevención de riesgos laborales, así como la reparación por accidentes de trabajo, enfermedades profesionales y accidentes in itinere.",
    backgroundImage: ART.src,
    class: "",
  },
  {
    title: "AUTOMOTOR",
    content:
      "Te protegemos a vos y tu vehículo en la compañía con más automóviles asegurados en el país.",
    backgroundImage: Auto.src,
    class: "",
  },
  {
    title: "COMERCIOS",
    content:
      "Respaldamos tu principal fuente de ingresos adaptándonos al tamaño de tu negocio, sector y tipo de actividad. Póliza integral con diversas alternativas",
    backgroundImage: Seguro.src,
    class: "bg-right",
  },
  {
    title: "HOGAR",
    content:
      "La mejor forma de resguardar tu casa y bienes con coberturas en función de la propiedad que tengas. Protegemos tu patrimonio más importante con un seguro a tu medida con la posibilidad de incluir coberturas",
    backgroundImage: Casa.src,
    class: "",
  },
  {
    title: "MOTOVEHÍCULOS",
    content:
      "Si te gusta disfrutar de la libertad y los paisajes, te respaldamos frente a un accidente con un producto específico para este tipo de vehículos.",
    backgroundImage: Moto.src,
    class: "",
  },
  {
    title: "RESPONSABILIDAD CIVIL",
    content:
      "Te amparamos frente a reclamos de terceros que se deriven de la realización de tu actividad profesional. Destinado a empresas constructoras, estudios de arquitectura, inversores y particulares, para ampararlos por daños causados a terceros en trabajos de construcción, refacción o demolición. Aseguramos tu patrimonio o el de tu empresa frente a reclamos de terceros que deriven de la realización de tu actividad comercial, industrial o deportiva.",
    backgroundImage: Trato.src,
    class: "",
  },
];

const ActiveSlider = () => {
  return (
    <div className=" my-20 ">
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
        modules={[FreeMode, Pagination]}
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
                  <h1 className="text-4xl font-semibold text-center">
                    {item.title}
                  </h1>
                </div>
                <div className="absolute flex flex-col justify-center items-center inset-0 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                  <p className="text-[20px] md:text-[18px] text-center p-4">
                    {item.content}
                  </p>
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
