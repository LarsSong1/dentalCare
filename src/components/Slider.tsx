'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import "swiper/css";


type SliderProps = {
  id: number,
  name: string,
  description: string,
  image: string
}


const Slider = ({ data }: { data: SliderProps[] }) => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      direction='horizontal'
      slidesPerView={3}
      spaceBetween={20}
    >
      {
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='w-[300px]'>
              <Image width={100} height={100} src={item.image} alt={`${item.name}-image`} />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider