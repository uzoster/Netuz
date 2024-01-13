import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import emailjs from '@emailjs/browser';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function Futer_Top_Info_Boshsahifa() {
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
            {/* <input loading={loading} onClick={submit} type="submit" value="Send" /> */}
        </div>
    );



    // email js form the code!

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



      //const router = useRouter();
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
  
      const [loading, setLoading] = useState(false);
  
      const submit = () => {
          setLoading(true);
  
          setTimeout(() => {
              setLoading(false);
              toast.current.show({ severity: 'success', summary: 'Malumot', detail: 'Jonatildi' });
          }, 2000);
      };


  return (
    <div className='top_inf_Boshsahifa' >
        <div className="center_InfoBoshsahifa" data-aos="zoom-in-down">
            <div className="lefy_Info_Boshsahifa" data-aos="zoom-in-down">
                <img data-aos="zoom-in-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/survey-5305421-4432082.png" alt="icon" />
                <h2 data-aos="zoom-in-down">Mutlaqo bepul sinov <br /> darsiga yoziling!</h2>
            </div>
            <div data-aos="zoom-in-down"  className="right_info_Boshsahifa">
                <a href="#" data-aos="zoom-in-down" onClick={() => setVisible(true)} >
                    <img data-aos="zoom-in-down" src="img/Boshsahifa/tg_icon.png" alt="telegram_icon" />
                    Shu yerga bosin
                    </a>
                                {/* Madal open code */}
        <Dialog header="Header"  visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input loading={loading} onClick={submit} type="submit" value="Send" />
    <Toast ref={toast}></Toast>
            {/* <SplitButton type="submit" label="Saqlash" icon="pi pi-plus" loading={loading} model={items}   /> */}
            {/* <SplitButton loading={loading} onClick={submit} type="submit" label="Send" model={items}   /> */}
    
    </form>
            </Dialog>
            </div>
        </div>
    </div>
  )
}
