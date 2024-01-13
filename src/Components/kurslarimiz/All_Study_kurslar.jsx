import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css' 
import { motion, useScroll, useSpring } from "framer-motion";
import '../../style/index.css'
import Header_kurslar from './Header_kurslar';
import Kurslar_ALL_info_Kusrlar from './Kurslar_ALL_info_Kusrlar';
import Futer_Button_info_Boshsahifa from '../Boshsaxifa/Futer_Button_info_Boshsahfa'
import KulterInfo_study_kurslar from './KulterInfo_study_kurslar';
import Savollar_study_All_kurslar from './Savollar_study_All_kurslar';
import All_kurs_Navs from '../Yangilik/All_kurs_Navs';
// import Confetti from "react-confetti";


export default function All_Study_kurslar() {

    useEffect(() => {
        Aos.init();
      }, [])  

      const { scrollYProgress } = useScroll();
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

  return (
    <div>
        <motion.div className="progress-bar" style={{ scaleX }} />
        {/* <Confetti className='info_proster'/> */}
        <Header_kurslar/>
        <Kurslar_ALL_info_Kusrlar/>
        <All_kurs_Navs/>
        <KulterInfo_study_kurslar/>
        <Savollar_study_All_kurslar/>
        <Futer_Button_info_Boshsahifa/>
    </div>
  )
}
