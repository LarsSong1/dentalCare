'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import "swiper/css";
import DoctorCard from './ui/doctorCard'


type SliderProps = {
  id: number,
  name: string,
  description: string,
  speciality: string,
  image: string,
  city: string
}


const Slider = ({ data }: { data: SliderProps[] }) => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false
      // }}
      direction='horizontal'
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
          
        }
      }}
      
    >
      {
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <div >
              <DoctorCard 
              city={item.city} 
              image={item.image}
              name={item.name}
              speciality={item.speciality}
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider