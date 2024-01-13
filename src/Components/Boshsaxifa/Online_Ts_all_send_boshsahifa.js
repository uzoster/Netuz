import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Online_Ts_all_send_boshsahifa() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
    <div className='all_info_User_ky_Boshsahifa'>
        <div className="left_info_boshshifa" data-aos="zoom-in-down">
            <h2 data-aos="zoom-in-down" >Hoziroq <br /> Ro'yhatdan o'ting</h2>
            <h3 data-aos="zoom-in-down" >bepul darsga ega bo'ling!</h3>
            <p data-aos="zoom-in-down" >Hoziroq ro'yhatdan o'ting bepul sinov darsimizga ega bo'ling. Bunda siz dasturlash nima uning kelajakda tutgan o'rni va qanday turlari mavjud ekanligi haqida bilib olasiz. Shuning bilan bir qator bizning kuchli dasturchilarimiz tomonidan hamma qiziqtirgan savollarizga javob olasiz.</p>
        </div>
        <div className="right_info_boshsahifa">
            <form action="">
                <input data-aos="zoom-in-down"  type="text" placeholder='ismingizni yozing' />
                <input data-aos="zoom-in-down"  type="text"  placeholder='Familyangizni yozing'/>
                <input data-aos="zoom-in-down"  type="text" placeholder='998YY XXX-XX-XX' />
                <select data-aos="zoom-in-down"  name="" id="">
                    <option data-aos="zoom-in-down"  value="">Dasturlah kursini tanlang!</option>
                    <option data-aos="zoom-in-down"  value="">Web developer</option>
                    <option data-aos="zoom-in-down"  value="">Full-stask</option>
                    <option  data-aos="zoom-in-down" value="">Backeng</option>
                </select>
                <a href="" data-aos="zoom-in-down" >Jo'natish</a>
                {/* <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div> */}
            </form>
        </div>
    </div>
  )
}
