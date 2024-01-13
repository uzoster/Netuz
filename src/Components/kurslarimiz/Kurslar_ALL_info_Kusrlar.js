import React, { useState, useEffect, useRef } from 'react';
// import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';
// import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
// import { Dialog } from 'primereact/dialog';
import emailjs from '@emailjs/browser';
// import Confetti from "react-confetti";
// import { RadioButton } from "primereact/radiobutton";

// import { Dropdown } from 'primereact/dropdown';
// import {ProductService} from ''

export default function Kurslar_ALL_info_Kusrlar() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dhdtuec', 'template_n94kqnq', form.current, '6ciGpsRJThHYEzUho')
        .then((result) => {
            console.log(result.text);
            console.log("massage sent")
        }, (error) => {
            console.log(error.text);
        });
    };


     const toast = useRef(null);
      const items = [
          {
              label: "O'chirish",
              icon: 'pi pi-times',
              command: () => {
                  toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
              }
          },
      ];
  
      // steps fenesh



      
      const [loading, setLoading] = useState(false);
  
      const submit = () => {
          setLoading(true);
  
          setTimeout(() => {
              setLoading(false);
              toast.current.show({ severity: 'success', summary: 'Malumot', detail: 'Jonatildi' });
          }, 2000);
      };




    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const productTemplate = (product) => {
        return (
            <div className="info_curslar_Study">
                <div className="mb-3 button_info_all_logo">
                    <img src={product.image} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div className='Info_button_All_prot'>
                    <h4 className=" info_uytsr mb-1">{product.name}</h4>
                    <h6 className="info_uytsrd mt- mt-0 mb-3">{product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className=" flex flex-wrap gap-2 justify-content-center">
                        {/* <a href="">Kursga yozilish</a> */}
                        <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Kursga yoziish</a>
                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}
                    </div>
                </div>
            </div>
        );
    };
 const [ingredient, setIngredient] = useState('');
  return (
    <div className='kurlas_info_All_part'>  
        <div className="top_info_All_part" data-aos="zoom-in-down"  >
            <h2 data-aos="zoom-in-down" >O'zingizga mos yo'nalish tanlang</h2>
            <p data-aos="zoom-in-down" >Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.</p>
        </div>
        <div className="kurslar_All_Study_info_postre">
            <div className="cards">
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
                {/* modal */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Kursga Yozilish</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form ref={form} onSubmit={sendEmail}>
      <label>Ism:</label> <br />
      <input type="text" name="user_name" placeholder='Your name'/> <br /> <br />
      <label>Familiya:</label> <br />
      <input type="text" name="user_lastName" placeholder='last name'/> <br /> <br />
      <label>Telefon nomer:</label> <br />
      <input type="email" name="user_phon_number" placeholder='Phone number'/> <br /> <br />
      <label>Ta'lim tili:</label> <br />
    <div className="infouts">
    <label > uzbek
            <input type="radio" name='answer' value="uzbek" />
      </label>
      <label> rus
            <input type="radio" name='answer' value="rus" />
      </label>
    </div>
    <br />
    <select name="stady_All_us" id=""> <br /> 
        <option value="hechnima">kurslar!</option>
        <option value="Smm">Smm</option>
        <option value="Ingliz tili">Ingliz tili</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Back-End">Kompyuter savodxonligi </option>
        <option value="Scratch o'yin dasturlash">Scratch o'yin dasturlash </option>
    </select>
 <br />
     <br /> <br /> <br />
      <input className='infu_outrs' loading={loading} data-bs-dismiss="modal" onClick={submit} id='infotretser' type="submit" value="Send" />
      {/* <div className='infu_outrs' loading={loading} data-bs-dismiss="modal" onClick={submit} id='infotretser' type="submit" value="Send"></div> */}
   
            {/* <SplitButton type="submit" label="Saqlash" icon="pi pi-plus" loading={loading} model={items}   /> */}
            {/* <SplitButton loading={loading} onClick={submit} type="submit" label="Send" model={items}   /> */}
    
    </form>
        {/* <form action="">
        <label >Ism<b>*</b></label> <br />
        <input type="text" placeholder='Your name'/> <br /> <br />
        <label >Familiya <b>*</b></label> <br />
        <input type="text" placeholder='Last name' /> <br /> <br />
        <label >Familiya <b>*</b></label> <br />
        <input type="text" placeholder='Last name' /> <br /> <br />
        <a id='infotretser'  href="#" data-bs-dismiss="modal">Yuborish</a>
        </form> */}
      </div>
    </div>
  </div>
</div>
<Toast ref={toast}></Toast>
{/* <Confetti className='info_proster'/> */}
            </div>
        </div>
        
    </div>
  )
}
