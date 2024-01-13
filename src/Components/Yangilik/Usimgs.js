import React from 'react'
import { Image } from 'primereact/image';

export default function Usimgs() {
  return (
    <div className='info_art_all_part_info_part'>   
     <div className="top_art_all_part">
        <h2>Bizda dars jarayonlaridan suratlar</h2>
        <p>"Net pro " IT school dars jarayonlaridan suratlar</p>
    </div>
      <div className="button_info_art_part">
          <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/userInfrus.jpg" alt="Image" width="100%" height="100%" preview />
          <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/user_imgsss.png" alt="Image" width="100%" height="100%" preview />
          <Image className='imgus' d ata-aos="zoom-in-down" src="img/Boshsahifa/info_pr.jpg" alt="Image" width="100%" height="100%" preview />
          <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/uder.jpg" alt="Image" width="100%" height="100%" preview />
          <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/userter.jpg" alt="Image" width="100%" height="100%" preview />
          <Image className='imgus' data-aos="zoom-in-down" src="img/Boshsahifa/steerder.jpg" alt="Image" width="100%" height="100%" preview />
      </div>
    </div>
  ) 
}
