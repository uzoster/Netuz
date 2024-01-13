import React, { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function CaruelBosh_sahifa() {
  return (
    <div className='CaruselInfo_Boshsahifa'>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
                <div className="allBoxs">
                            <h2>Frontend</h2>
                            <p>Dasturlash Frontend kursida...</p>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="allBoxs">
                <h2>Smm</h2>
                            <p>Ijtimoiy tarmoqlar orqali turli....</p>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="allBoxs">
                <h2>Backend</h2>
                            <p> Backend python kursida...</p>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="allBoxs">
                <h2>Ingliz tili</h2>
                            <p>Qulay va onson usul yordam...</p>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="allBoxs">
                <h2>Kompyuter 0 dan</h2>
                            <p>Kampiyuter savodxonlik kursi...</p>
                        </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="allBoxs">
                <h2>Scratch</h2>
                            <p>Scratch o'yin dasturlash kursi...</p>
                        </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}
