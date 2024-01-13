import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import '../../style/index.css'
// import './style/yangiik.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header_yangiik_barder from './Header_yangiik_barder';
import Futer_Button_info_Boshsahifa from '../Boshsaxifa/Futer_Button_info_Boshsahfa'
import KurslargaYozilish_all from './KurslargaYozilish_all';
import All_kurs_Navs from './All_kurs_Navs';
import Timeline_All_ from './Timeline_All_';
import Usimgs from './Usimgs';

export default function Yangilik_All_task_() {
  
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
        <Header_yangiik_barder/>
        {/* <All_kurs_Navs/> */}
        {/* <KurslargaYozilish_all/> */}
        <Usimgs/>
        <Timeline_All_/>
        <Futer_Button_info_Boshsahifa/>
    </div>
  )
}
