export const ProductService = {
    getProductsData() {
        return [

            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Grafik dizayn',
                description: 'Product Description',
                image: 'https://mir-s3-cdn-cf.behance.net/projects/404/52cad6109287767.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Web dizayn',
                description: 'Product Description',
                image: 'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Ai',
                description: 'Product Description',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhp8QMIXC7GXLpNMhvTY7HzWCcCld6geWSylle6h59ImeTVTZ7T4s-gMkYt7FNK7dmk4&usqp=CAU',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: '3D modelling',
                description: 'Product Description',
                image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/661d677e-816c-44b3-8109-130798afb7df/d2uklqd-5c28e82c-3f5c-4807-b429-efe4fbd3525c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2MWQ2NzdlLTgxNmMtNDRiMy04MTA5LTEzMDc5OGFmYjdkZlwvZDJ1a2xxZC01YzI4ZTgyYy0zZjVjLTQ4MDctYjQyOS1lZmU0ZmJkMzUyNWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VZcfpKyukPt-2nYhOhHVq2NKQOdnbsp3r485W1_hSuk',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Arab tili',
                description: 'Product Description',
                image: 'https://www.shutterstock.com/image-vector/saudi-arab-teacher-stands-front-600nw-2106555131.jpg',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Rus tili',
                description: 'Product Description',
                image: 'https://t3.ftcdn.net/jpg/03/84/79/34/360_F_384793445_eW9WMHxpCc0XQVOTIyqD2EsViq8pTbLx.webp',
                star: 'https://static.vecteezy.com/system/resources/thumbnails/018/842/764/small/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png',
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

