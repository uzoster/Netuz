import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './server/ProductServise';


export default function Study_unteruster_() {
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
            <div className="interUsrfed surface-border border-round m-2  py-5 px-3">
                <div className='top_info_kuster'>
                    <p>{product.description}</p>
                </div>
                <div className="one_osretr">
                    <div className="infru">
                        <img src={`${product.image}`} alt={product.name} className="w-6 shadow-2" />
                        <h2 className="">{product.name}</h2>
                        <h3>{product.job}</h3>
                    </div>
                </div>
            </div>  
        );
    };
  return (
    <div className='interesdr_all_biz_haqimizda'>
        <div className="top_infoolder">
            <h2>O‘quvchilarning fikrlari</h2>
        </div>
        <div className="button_info_art_biz_haqimizda">
        <div className="inforedrt">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
        </div>
    </div>
  )
}
