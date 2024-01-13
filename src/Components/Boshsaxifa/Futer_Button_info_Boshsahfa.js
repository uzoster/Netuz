import React from 'react'
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';


export default function Futer_Button_info_Boshsahfa() {
  return (
    <div className='Futer_info_Button_Boshsahifa'> 
        <div className="Top_Info_Center">
            <div className="left_Futer_boshsahifa">
                <ul className='left_UL_O' >
                  <h2 data-aos="zoom-in-down">Kurslarimiz</h2>
                  <li data-aos="zoom-in-down"><Link to="/About">Smm</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Ingliz tili</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Front-End </Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Back-End </Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Kompyuter savodxonligi</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Scratch o'yin dasturlash</Link></li>
                </ul>
                <ul className='left_UL_L'>
                  <h2 data-aos="zoom-in-down">Bo'limlar</h2>
                  <li data-aos="zoom-in-down"><Link to="/">Biz haqimizda</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Kurslar</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/yangilik">Yangiliklar</Link></li>
                  <li data-aos="zoom-in-down"><Link to="/About">Kursga yozilish</Link></li>
                </ul>
                <div className="imgs_All_Study">
                    <h2 data-aos="zoom-in-down">Rasimlar</h2>
                    <div className="buttonImgs_Study">
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/userInfrus.jpg" alt="Image" width="100" preview />
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/user_imgsss.png" alt="Image" width="100" preview />
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/info_pr.jpg" alt="Image" width="100" preview />
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/uder.jpg" alt="Image" width="100" preview />
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/userter.jpg" alt="Image" width="100" preview />
                    <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/steerder.jpg" alt="Image" width="100" preview />
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="right_info_All_Fenesh_Top_Futer">
                  <h2 data-aos="zoom-in-down">Biz haqimizda qisqacha</h2>
                  <p data-aos="zoom-in-down">NetPro - dasturlashga ilk qadam <br /> shu yerdan boshlanadi!</p>
                  <a data-aos="zoom-in-down" className='mapInfoter' href="https://maps.app.goo.gl/7AWuwdp3QuZ5YFhV7">Toshkent, Chilonzor, Bunyodkor Shoh Ko'chasi</a>
                  <a data-aos="zoom-in-down" className='bt_info_S' href="tel:+998 33 001 20 00">+(998)33-001-20-00</a>
                  <a data-aos="zoom-in-down" className='bt_info_a' href="">Kursga yozilish</a>
                    <div className="setAll_sq">
                      <div className="boxA">
                          <a href="https://www.youtube.com/channel/UCSJ44HpYikXfPBkeeQeywXA"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <div className="boxA">
                          <a href="https://www.instagram.com/netpro.uz/"><i class="fa-brands fa-telegram"></i></a>
                        </div>
                        <div className="boxA">
                          <a href="https://www.instagram.com/netpro.uz/"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="button_Info_all_Fenesh">
          <span>© CodingPelan 2023 by <b>NetPro.uz</b> </span>
        </div>
    </div>
  )
}
