import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Dropdown } from 'primereact/dropdown';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function KurslargaYozilish_all() {

    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dhdtuec', 'template_w0860d6', form.current, '6ciGpsRJThHYEzUho')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    // dropdowon

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Grafik dizayn', code: 'NY' },
        { name: 'Ai', code: 'NY' },
        { name: '3d modelling', code: 'RM' },
        { name: 'Web dizayn', code: 'LDN' },
        { name: 'Arab tili', code: 'IST' },
        { name: 'Rus tili', code: 'PRS' }
    ];



    // dropdowon

    return (
    <div className='kurslar_haqida_info_art_part'>  
        <div className="top_info_part_kurs">
            <h2 data-aos="zoom-in-down">Yaqin orada ochiladigan kurslarimizga yoziling</h2>
            <p data-aos="zoom-in-down">Har bir kurs boshlanishdan oldin tanishtiruv dars bo‘lib o‘tadi. Unda siz kurs bo‘yicha barcha ma‘lumotlarga ega bo‘lasiz, o‘qituvchi bilan tanishib olasiz va kursga yozilishingiz mumkin.</p>
        </div>
        <div className="button_info_kurslar">
            <form ref={form} onSubmit={sendEmail}>
                <input data-aos="zoom-in-down" className='input1' placeholder='ismingiz'  type="text" name="user_name" />
                <input  data-aos="zoom-in-down" className='input2' placeholder='Familiyangiz' type="text" name="user_name" /> 
            <select data-aos="zoom-in-down" className='input1' name="" id="">
                <option value="yozilmagan">Yangi ochiladigan kursga yozilish</option>
                <option value="Grafik dizayn">Grafik dizayn</option>
                <option value="Ai">Ai</option>
                <option value="3d modelling">3d modelling</option>
                <option value="Rus tili">Rus tili</option>
                <option value="Web dizayn">Web dizayn</option>
                <option value="Arab tili">Arab tili</option>
            </select>
                <input data-aos="zoom-in-down" className='input2' type="email" name="user_email" placeholder='+998 YY XXX XX XX'/>
                <textarea data-aos="zoom-in-down" className='onser' name="message" placeholder='taklif va istak' />
                <input data-aos="zoom-in-down" type="submit" value=" Jo'natish" className='buret'/>
            </form>
        </div>
    </div>
  )
}
