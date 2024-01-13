import React, { useRef, useState } from 'react';
// import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper Style
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import requaired modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function WorkInfo_Boshsahifa() {
  return (
    <div className='AllOne_Work_Boshsahifa'>
      
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
      >
        <SwiperSlide className='info_Bros_ols'>
        <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/logo-epam-active.207e0130.svg" alt="" />
            </div>
        <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-itechart-active.4581f6ca.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-humo-avtive.27cb7be3.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-agro-active.930244da.svg" alt="" />
            </div>
        </SwiperSlide>
            <SwiperSlide className='info_Bros_ols'>
            <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/logo-davr-active.4df919e5.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/logo-texnomart-active.e7d56eb5.svg
" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-uzcard-active.8d40b858.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-my-taxi-acitve.0c69eef5.svg
" alt="" />

            </div>
            </SwiperSlide>
            <SwiperSlide className='info_Bros_ols'>
            <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/logo-mfaktor-active.dcd05beb.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/logo-jafton-active.5706e84f.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="		https://online.najottalim.uz/_next/static/media/yoshlar-ishlari-active.25fa6cd8.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/logo-cambridge-active.81b431ae.svg" alt="" />
            </div>
            </SwiperSlide>
            {/* hello sa dulla is u sumsing indu  iusl unst ins uuys trous tyr ula syr yull asbd ufl  ax dulla xamidula transulld uydsudert ull */}
            <SwiperSlide className='info_Bros_ols'>
            <div className="boxAl_BoshSahifaa">
                <img src="https://najottalim.uz/_next/static/media/kunuz-active.10a5ae8e.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="	https://najottalim.uz/_next/static/media/pcg-active.19505e54.svg" alt="" />
            </div>
            <div className="boxAl_BoshSahifaa">
                <img src="https://online.najottalim.uz/_next/static/media/logo-fido.2ef7c3a2.svg" alt="" />
            </div>
            </SwiperSlide>
      </Swiper>

    </div>
  )
}
