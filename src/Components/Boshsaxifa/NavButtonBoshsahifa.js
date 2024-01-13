import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButtonBoshsahifa() {
  return (
    <div className='Nav_button_Info_Boshsahifa'>
                    <div className="pslss">
                    <img src="img/Boshsahifa/Blur2.png" alt="" />
            </div>

        <div className="All_Box_Info">
            <div className="center_info_ol">
                <div className="left_All_info" data-aos="zoom-in-down">
                    <img data-aos="zoom-in-down"  src="img/Boshsahifa/user_img.png" alt="img/Boshsahifa/Blur2.png" />
                </div>
                <div className="right_All_info" data-aos="zoom-in-down" >
                        <h2 data-aos="zoom-in-down" >O'zingizga mos yo'nalish tanlang</h2>
                        <p data-aos="zoom-in-down" >Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.</p>
                        <Link data-aos="zoom-in-down"  to="/About">Kurslar</Link>
                 </div>
            </div>
        </div>

            
    </div>
  )
}
