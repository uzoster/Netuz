
import React from "react";
import AllBoshsaxifa from "./Components/Boshsaxifa/AllBoshsaxifa";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'aos/dist/aos.css'
import { Routes, Route } from "react-router-dom";
import All_Study_kurslar from "./Components/kurslarimiz/All_Study_kurslar";
// import Biz_Haqimizda_All_ from "./Components/Biz_Haqimizda/Biz_Haqimizda_All_";
// import Yangilik_All_task_ from "./Components/Yangilik/Yangilik_All_task_";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Load from "./Components/Load/Load";

const LazyBiz_Haqimizda_All_= React.lazy(() => import("./Components/Biz_Haqimizda/Biz_Haqimizda_All_"))
const LazyYangilik_All_task_= React.lazy(() => import("./Components/Yangilik/Yangilik_All_task_"))
const LazyAll_Study_kurslar= React.lazy(() => import("./Components/kurslarimiz/All_Study_kurslar"))
const LazyAllBoshsaxifa = React.lazy(() => import("./Components/Boshsaxifa/AllBoshsaxifa"))

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<LazyAllBoshsaxifa/>}/>

            <Route path="/About" element={
              <React.Suspense 
              fallback={<Load/>}>
                  <LazyAll_Study_kurslar/>
              </React.Suspense>}/>

            <Route path="/Biz_Haqimizda" element={
              <React.Suspense 
              fallback={<Load/>}>
                  <LazyBiz_Haqimizda_All_/>
              </React.Suspense>}/>

              <Route path="/yangilik" element={
              <React.Suspense 
              fallback={<Load/>}>
                  <LazyYangilik_All_task_/>
              </React.Suspense>}/>
        </Routes>

        
    </div>
  );
}

export default App;
