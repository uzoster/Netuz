import React from 'react'
import { Link } from 'react-router-dom'
import { ScrollTop } from 'primereact/scrolltop';

export default function Header_kurslar() {
  return (
    <div className='header_info_Kursslar'>
        <div className="topInfo_Home">
                      <div  className="leftLogo" data-aos="zoom-in-down"> 
                          <a href=""><img src="img/Boshsahifa/logo.png" alt="" /></a>
                          {/* <h2>Logo</h2> */}
                      </div>
                      <div data-aos="zoom-in-down" className="rightInfo_home">
                        <ul>
                          <li><Link data-aos="zoom-in-down" to="/">Boshsahifa</Link></li>
                          <li><Link data-aos="zoom-in-down" to="/About">Kurslar</Link></li>
                          <li><Link data-aos="zoom-in-down" to="/Biz_Haqimizda">Biz haqimizda</Link></li>
                          <li><Link data-aos="zoom-in-down" to="/yangilik">Yangiliklar</Link></li>
                        </ul>
                        <a className='buttonInfo' href="">Batafsil</a>
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
              <Link className='navigation__link' to="/">- Boshsahifa</Link>
            </li>
            <li className="navigation__item">
            <Link to="/About" class="navigation__link">- Kurslarimiz</Link>
            </li>
            <li className="navigation__item">
              <Link to="/yangilik" class="navigation__link">- Yangiliklar</Link>
            </li>
            <li className="navigation__item">
              <Link className='navigation__link' to="/Biz_Haqimizda">- Biz haqimizda</Link>
            </li>
      </ul>
    </nav>
  </div>
                    </div>
          <div className="button_info_allPros">
                <div data-aos="zoom-in-down" className="rightInnfo_allPrt">
                  <h1 data-aos="zoom-in-down" >BIZNING <b>BARCHA</b>  TA’LIM YO’NALISHLARI </h1>
                </div>
                <div className="left_info_kurslar" data-aos="zoom-in-down">
                     <img data-aos="zoom-in-down" src="https://litslink.com/wp-content/uploads/2021/03/web-development.png" alt="" />
                </div>
          </div>
          <div className="button_Scr">
          <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
          <ScrollTop />
          </div>

    </div>
    
  )
}
