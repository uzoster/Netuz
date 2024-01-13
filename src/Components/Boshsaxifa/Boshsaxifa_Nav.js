import React from 'react'
import { Link } from 'react-router-dom'

export default function Boshsaxifa_Nav() {
  return (
    <div className='AllNav_boshsahifa'>
                    <div className="psls">
              <img src="img/Boshsahifa/Blur1.png" alt="" />
            </div>

            <div className="buttonInfo_letf_usrt" data-aos="zoom-in-down">
                    <div className="topInfo_Boshsahifa" data-aos="zoom-in-down">
                        <h2 data-aos="zoom-in-down">Bizning afzalliklarimiz</h2>
                        <p data-aos="zoom-in-down">Biz hozirda o'zizmizning oldimizga qo'ygan maqsadlarimiz sari yo'l olmoqdamiz qani sizham bizga qo'shiling!</p>
                    </div>
                    <div className="buttonInfo_boshSahifa">
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                            <div data-aos="zoom-in-down" className="icon_one_usrt"></div>
                            <h2 data-aos="zoom-in-down">O‘z ishining ustalari</h2>
                            <p data-aos="zoom-in-down" >Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz</p>
                        </div>
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                            <div data-aos="zoom-in-down" className="icon_one_usrt1">
                                <img data-aos="zoom-in-down" src="img/Boshsahifa/21.png" alt="" />
                            </div>
                            <h2 data-aos="zoom-in-down">Shunchaki kurs emas</h2>
                            <p data-aos="zoom-in-down">Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>
                        </div>
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                             <div  data-aos="zoom-in-down" className="icon_one_usrt1">
                                <img  data-aos="zoom-in-down" src="img/Boshsahifa/IconOne.png" alt="" />
                            </div>
                            <h2 data-aos="zoom-in-down" >Interaktiv darslar</h2>
                            <p data-aos="zoom-in-down" >Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin</p>
                        </div>
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                            <div data-aos="zoom-in-down" className="icon_one_usrt1">
                                <img data-aos="zoom-in-down" src="img/Boshsahifa/5s1.png" alt="" />
                            </div>
                            <h2 data-aos="zoom-in-down" >Nazariya va amaliyot</h2>
                            <p data-aos="zoom-in-down" >Siz har bir kursda berilgan topshiriqlarni amalga oshirish orqali bilimlaringizni yanada mustahkamlab borasiz
</p>
                        </div>
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                            <div  data-aos="zoom-in-down" className="icon_one_usrt1">
                                <img  data-aos="zoom-in-down" src="img/Boshsahifa/21.png" alt="" />
                            </div>
                            <h2 data-aos="zoom-in-down" >Mentor kerakmi?</h2>
                            <p data-aos="zoom-in-down" >Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilsangiz, ular sizni qiynayotgan masalalar bo‘yicha yechim topishga yo‘l ko‘rsatadilar.</p>
                        </div>
                        <div className="cardInfo_one" data-aos="zoom-in-down">
                            <div data-aos="zoom-in-down"  className="icon_one_usrt5">
                                <img data-aos="zoom-in-down" src="img/Boshsahifa/31.png" alt="" />
                            </div>
                            <h2 data-aos="zoom-in-down">Sertifikat</h2>
                            <p data-aos="zoom-in-down" >Kursni muvaffaqiyatli yakunlaganingizdan so‘ng sizga sertifikat taqdim etiladi. Sertifikat sizni bilimingizni oson ko’rsatib beruvchi isbot</p>
                            <Link data-aos="zoom-in-down" to="/Biz_Haqimizda">Batafsil<i class="fa-solid fa-arrow-right"></i></Link>
                        </div>

                    </div>
            </div>

    </div>
  )
}
