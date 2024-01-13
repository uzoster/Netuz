import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css' 
import { motion, useScroll, useSpring } from "framer-motion";
import '../../style/index.css'
import Header_info_biz_haqimizda from './Header_info_biz_haqimizda';
import Futer_Button_info_Boshsahfa from '../Boshsaxifa/Futer_Button_info_Boshsahfa';
import Navbar_info_ALL_task from './Navbar_info_ALL_task';
import Study_unteruster_ from './Study_unteruster_';
import KulterInfo_study_kurslar from '../kurslarimiz/KulterInfo_study_kurslar';

export default function Biz_Haqimizda_All_() {

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
            <Header_info_biz_haqimizda/>
            <Navbar_info_ALL_task/>
            <KulterInfo_study_kurslar/>
            <Study_unteruster_/>
            <Futer_Button_info_Boshsahfa/>
    </div>
  )
}
