import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper Style
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Artikla_Boshsahifa() {
  return (
    <div className='Article_nfo_All_part_Bohsahifa'>
        <div className="top_info_trd">

            <h2 data-aos="zoom-in-down">
            Dasturlashni Nega aynan NetProda <br /> o'rganish kerak?
            </h2>
        </div>
            <div className="button_info_partUSter">
                <div className="box_info_uyt" data-aos="zoom-in-down">
                    <img data-aos="zoom-in-down" src="https://static.vecteezy.com/system/resources/previews/024/683/438/non_2x/3d-icon-analysis-chart-data-graph-illustration-concept-icon-render-free-png.png" alt="con" />
                    <h2 data-aos="zoom-in-down" >Sifatli ta'lim</h2>
                    <p data-aos="zoom-in-down" >Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.</p>
                </div>
                <div className="box_info_uyt" data-aos="zoom-in-down">
                    <img data-aos="zoom-in-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/education-trophy-4035946-3342371.png?f=webp" alt="con" />
                    <h2  data-aos="zoom-in-down" >Doimiy musobaqalar</h2>
                    <p data-aos="zoom-in-down" >Dasturlash, ingliz tili va marketing sohalari bo‘yicha haftalik sovrinli musobaqalar.</p>
                </div>
                <div className="box_info_uyt" data-aos="zoom-in-down"> 
                    <img  data-aos="zoom-in-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/guarantee-10272500-8306363.png?f=webp" alt="con" />
                    <h2 data-aos="zoom-in-down" >Ish taklif qilish kafolati </h2>
                    <p data-aos="zoom-in-down" >“Netpro” kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi. * </p>
                </div>
                <div className="box_info_uyt" data-aos="zoom-in-down" >
                    <img  data-aos="zoom-in-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/certificate-6244371-5117408.png?f=webp" alt="con" />
                    <h2 data-aos="zoom-in-down" >Sertifikat </h2>
                    <p data-aos="zoom-in-down" >Kursni muvaffaqiyatli tamomlagan o‘quvchilar “NetPro”ning diplomi va sertifikatiga ega bo‘ladi. </p>
                </div>
            </div>
        </div>
  )
}
