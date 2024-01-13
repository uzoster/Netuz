import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from "./Data/All_study_data";


export default function All_kurs_Navs() {

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

    const productTemplate = (product) => {
        return (
            <div className="cardeerBars ">
                <div className="mt_usters mb-3">
                    <img src={`${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h2 className="mb-1">{product.name}</h2>
                    <div className="info_allO">
                        <div className="left_us">
                            <img src={product.star} alt="star" />
                            <img src={product.star} alt="star" />
                            <img src={product.star} alt="star" />
                            <img src={product.star} alt="star" />
                            <img src={product.star} alt="star" />
                        </div>
                        <div className="right_infye">
                            <a href="tel:+998909541531">OFFLINE</a>
                        </div>
                    </div>
                    <div className="buttonalfers">
                        <div className="box_Us">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/clock-5349604-4467933.png?f=webp" alt="time" />
                            <p>2 soat</p>
                        </div>
                        <div className="box_sr">
                            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/favorite-folder-9798799-7946482.png" alt="loop" />
                            <p>8 oy</p>
                        </div>
                        <div className="all_pr">
                            <p>800,000 so'm/oy</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


  return (
    <div className='All_nevs_study'>
        <div className="top_info_part_nes">
            <h2>Bizda yangi kurslarga start berdik</h2>
            <p>Biznig yangi kurslarimizga qabul boshlandi tezroq ulgirib qoling joylar chegaralangan!</p>
        </div>
        <div className="button_info_art_olser">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    </div>
  )
}
