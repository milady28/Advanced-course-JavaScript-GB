class GoodsItem {
    constructor(id, title, price, img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="products__item" id="${this.id}">
                <h3>${this.title}</h3>
                <div class="products__img-wrap">
                <img class="products__img" src="${this.img}">
                </div>
                <p>${this.price} руб.</p>
                <button class="products__buy-btn buy-btn">Купить</button>
            </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: 'images/notebook.webp' },
            { id: 2, title: 'Mouse', price: 20, img: 'images/mouse.jpeg' },
            { id: 3, title: 'Keyboard', price: 200, img: 'images/keyboard.jpeg' },
            { id: 4, title: 'Gamepad', price: 50, img: 'images/gamepad.webp' },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.goods.forEach(good => {
            totalPrice += good.price;
        });

        return totalPrice;
    }
}

class CartList {
    constructor() {
        this.ids = [];
    }

    render() {

    }
}

class CartItem {
    constructor(id, title, price, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.count = count;
    }

    render() {

    }

    addToCart() {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getTotalPrice();