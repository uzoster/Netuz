import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import CaruelBosh_sahifa from './Media_Tools/CaruelBosh_sahifa';
export default function Kurslar_info_Boshsahifa() {
  return (
    <div className='kurslar_Info_All_BoshSahifa'>
                            <div className="psls">
                 <img src="img/Boshsahifa/Blur588.png" alt="" />
            </div>

            <div className="allInfoBUttonOns">
                <div className="topInfoUSd" data-aos="zoom-in-down" >
                    <h2 data-aos="zoom-in-down" >Yo‘nalishlar bo‘yicha kurslar</h2>
                    <p data-aos="zoom-in-down" >Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi bo‘ling!</p>
                </div>
                <div className="butonInfo_usd" data-aos="zoom-in-down">
                    <CaruelBosh_sahifa/>    
                        <div className="allBox">
                            <h2>Frontend</h2>
                            <p>Dasturlash Frontend kursida...</p>
                        </div>
                        <div className="allBox">
                            <h2>Smm</h2>
                            <p>Ijtimoiy tarmoqlar orqali turli....</p>
                        </div>
                        <div className="allBox">
                            <h2>Backend</h2>
                            <p> Backend python kursida...</p>
                        </div>
                        <div className="allBox">
                            <h2>Ingliz tili</h2>
                            <p>Qulay va onson usul yordam...</p>
                        </div>
                        <div className="allBox">
                            <h2>Kompyuter 0 dan</h2>
                            <p>Kampiyuter savodxonlik kursi...</p>
                        </div>
                        <div className="allBox">
                            <h2>Scratch</h2>
                            <p>Scratch o'yin dasturlash kursi...</p>
                        </div>
                </div>
            </div>

    </div>  
  )
}
