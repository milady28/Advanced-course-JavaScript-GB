const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'images/notebook.webp'},
    { id: 2, title: 'Mouse', price: 20, img: 'images/mouse.jpeg' },
    { id: 3, title: 'Keyboard', price: 200, img: 'images/keyboard.jpeg' },
    { id: 4, title: 'Gamepad', price: 50, img: 'images/gamepad.webp' },
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="products__item">
                <h3>${product.title}</h3>
                <div class="products__img-wrap">
                <img class="products__img" src="${product.img}">
                </div>
                <p>${product.price} руб.</p>
                <button class="products__buy-btn buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);