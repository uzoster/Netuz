import React from 'react'
import { Link } from 'react-router-dom'

export default function BoshsaxifaHeader() {

  return (
    <>  
        <div className="AllHeader_boshSahifa">
            <div className="psl">
              <img src="img/Boshsahifa/Blur.png" alt="" />
            </div>
            
            <div className="z_index_one_uses_boshsahifa">
                  <div className="topInfo_Home">
                      <div className="leftLogo" data-aos="zoom-in-down"> 
                          <a href=""><img src="img/Boshsahifa/logo.png" alt="" /></a>
                          {/* <h2>Logo</h2> */}
                      </div>
                      <div className="rightInfo_home">
                        <ul>
                          <li><a href="" data-aos="zoom-in-down">Boshsahifa</a></li>
                          <li><a href="/About">Kurslar</a></li>
                          <li><Link to="/Biz_Haqimizda">Biz haqimizda</Link></li>
                          <li><Link to="/yangilik">Yangiliklar</Link></li>
                        </ul>
                        <a className='buttonInfo' href="">Kursga yozilish</a>
                      </div>
                      
                    </div>
                  <div className="mediaTop_home">
                    <div className="logo_Medium">
                        <img src="img/Boshsahifa/logo.png" alt="" />
                    </div>
                  <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="nav-toggle"/>
        <label for="nav-toggle" class="navigation__button">
          <span className="navigation__icon" aria-label="toggle navigation menu"></span>
        </label>
        <div className="navigation__background"></div>
  
        <nav className="navigation__nav" role="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" class="navigation__link">- Boshsahifa</a>
            </li>
            <li className="navigation__item">
              <Link to="/About" class="navigation__link">- Kurslarimiz</Link>
            </li>
            <li className="navigation__item">
              <Link to="/yangilik" class="navigation__link">- Yangiliklar</Link>
            </li>
            <li className="navigation__item">
              <Link to="/Biz_Haqimizda" class="navigation__link">- Biz haqimizda</Link>
            </li>
      </ul>
    </nav>
  </div>
                    </div>
                  <div className="buttonInfoAll_Boshsahifa">
                    <div className="left_Home">
                        <h1 data-aos="zoom-in-down">DASTURLASHNI QULAY MUHITDA O‘RGANING</h1>
                        <p data-aos="zoom-in-down">O‘zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni o‘rganing.</p>
                        <div className="joinUs">
                          <a data-aos="zoom-in-down" href="/About">Kurslar</a>
                          <a data-aos="zoom-in-down"  className="leftInfo">
                              <img data-aos="zoom-in-down" src="img/Boshsahifa/icon_1.png" alt="" />
                              <h3 href="https://t.me/netpro_uz" data-aos="zoom-in-down">Kuzatish</h3>
                          </a>
                        </div>
                    </div>
                    <div className="Right_Home" data-aos="zoom-in-down">
                      {/* <img src="img/Boshsahifa/img_os.png" alt="" /> */}
                      <img src="img/Boshsahifa/nfo_induu.webp" alt="" />
                    </div>
                    </div>
            </div>
        </div>
    </>   
  )
}
