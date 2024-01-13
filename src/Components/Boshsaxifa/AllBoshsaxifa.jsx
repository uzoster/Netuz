import React, { useEffect } from 'react'
import '../../style/index.css'
import BoshsaxifaHeader from './BoshsaxifaHeader'
import { motion, useScroll, useSpring } from "framer-motion";
import Boshsaxifa_Nav from './Boshsaxifa_Nav';
import NavButtonBoshsahifa from './NavButtonBoshsahifa';
import Kurslar_info_Boshsahifa from './Kurslar_info_Boshsahifa';
import ArtINfo_Boshsahifa from './ArtINfo_Boshsahifa';
import Work_All_Study_Boshsahifa from './Media_Tools/Work_All_Study_Boshsahifa';
import Online_Ts_all_send_boshsahifa from './Online_Ts_all_send_boshsahifa';
import Artikla_Boshsahifa from './Artikla_Boshsahifa';
import Futer_OLl_US from './Futer_OLl_US';
import Futer_Top_Info_Boshsahifa from './Futer_Top_Info_Boshsahifa';
import Futer_Button_info_Boshsahfa from './Futer_Button_info_Boshsahfa';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar_info_ALL_task from '../Biz_Haqimizda/Navbar_info_ALL_task';
import Study_unteruster_ from '../Biz_Haqimizda/Study_unteruster_';

export default function AllBoshsaxifa() {
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
    <div >
        <motion.div className="progress-bar" style={{ scaleX }} />
        <BoshsaxifaHeader/>
        <Boshsaxifa_Nav/>
        <NavButtonBoshsahifa/>
        <Kurslar_info_Boshsahifa/>
        <ArtINfo_Boshsahifa/>
        <Work_All_Study_Boshsahifa/>
        <Online_Ts_all_send_boshsahifa/>
        <Artikla_Boshsahifa/>
        {/* <Futer_OLl_US/> */}
        <Navbar_info_ALL_task/>
        {/* <Futer_Top_Info_Boshsahifa/> */}
        <Study_unteruster_/>
        <Futer_Button_info_Boshsahfa/>
        
    </div>
  )
}
