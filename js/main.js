const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                // console.log(data);
                this.render()
            });
        this.allProducts = [];
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="products__item" data-id="${this.id}">
                <h3>${this.title}</h3>
                <div class="products__img-wrap">
                <img class="products__img" src="${this.img}">
                </div>
                <p>${this.price} руб.</p>
                <button class="products__buy-btn buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
// console.log(list.allProducts);


// basket class
class BasketList {
    constructor(container = '.basket__table') {
        this.container = container;
        this.goods = [];
        this._getBasketProducts()
            .then(data => {
                this.goods = data.contents;
                this.totalSum = data.amount;
                this.totalCount = data.countGoods;
                console.log(data);
                this.render()
            });
    }
    _getBasketProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        const totalSumBlock = document.querySelector(".basket__total-sum");
        const totalCountBlock = document.querySelector(".basket__total-сount");

        for (let product of this.goods) {
            const productObj = new BasketItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

        totalSumBlock.insertAdjacentHTML('beforeend', this.totalSum);
        totalCountBlock.insertAdjacentHTML('beforeend', this.totalCount);
    }
}

class BasketItem {
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.totalPrice = product.price * product.quantity;
    }
    render() {
        return `<tr class="basket__item" data-id="${this.id}">
                <td>${this.title}</td>
                <td>${this.price}</td>
                <td>${this.quantity}</td>
                <td>${this.totalPrice}</td>
            </tr>`
    }
}

const basketElem = document.querySelector(".basket");
const basketBtn = document.querySelector(".btn-cart");
let basketList = new BasketList();

basketBtn.addEventListener("click", () => {
    basketElem.classList.toggle("show");
});

window.addEventListener("click", evt => { 
    const target = evt.target;
    if (!target.closest(".basket") && !target.closest(".btn-cart")) { 
        basketElem.classList.remove("show");
    }
})