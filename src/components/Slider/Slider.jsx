import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/travels")
      .then((res) => res.json())
      .then((data) => setTravels(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination]}
        className="mySwiper"
      >
        {travels.map((travel) => (
          <SwiperSlide key={travel.id}>
            <div className="grid grid-cols-6 items-center mt-20">
              <div className="col-span-2 ml-10">
                <h2 className="font-bold text-5xl text-blue-300">
                  {travel.name}
                </h2>
                <p className="my-3">{travel.description}</p>
                <button className="btn btn-success">Booking <FaArrowRight className="ml-2"/> </button>
              </div>
              <div className=" w-full bg-base-100  col-span-4 relative ">
                <img
                  className="w-3/12 h-96 mx-auto border-2 border-orange-300 rounded-md"
                  src={travel.image}
                  alt="Shoes"
                />
                <p className="absolute top-0 right-96 font-bold text-xl text-white">
                  {travel.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
