// --- массив товаров в каталоге ---
let catalogArr = [
  {
    title: 'Sex Pistols',
    subtitle: `Never Mind The Bollock, Here's The Sex Pistols`,
    descr: '1977, Punk Rock',
    price: 22,
    img: 'img/album-cover-sex-pistols.jpg',
  },
  {
    title: 'Motörhead',
    subtitle: 'Ace Of Spades',
    descr: '1980, Heavy Metal',
    price: 24,
    img: 'img/album-cover-motorhead.jpg',
  },
  {
    title: 'The Clash',
    subtitle: 'London Calling',
    descr: '1979, Punk Rock',
    price: 22,
    img: 'img/album-cover-clash.jpg',
  },
  {
    title: 'The Specials',
    subtitle: 'The Specials',
    descr: '1979, Two-Tone Ska',
    price: 24,
    img: 'img/album-cover-specials.jpg',
  },
  {
    title: 'AC/DC',
    subtitle: 'Highway To Hell',
    descr: '1979, Hard Rock',
    price: 28,
    img: 'img/album-cover-acdc.jpg',
  },
  {
    title: 'Dropkick Murphys',
    subtitle: 'Blackout',
    descr: '2003, Irish Punk Rock',
    price: 18,
    img: 'img/album-cover-dkm.jpg',
  },
  {
    title: 'Stiff Little Fingers',
    subtitle: 'Inflammable Material',
    descr: '1979, Punk Rock',
    price: 22,
    img: 'img/album-cover-slf.jpg',
  },
  {
    title: 'Ramones',
    subtitle: ' Rocket To Russia',
    descr: '1977, Punk Rock',
    price: 26,
    img: 'img/album-cover-ramones.jpg',
  },
];

// --- массив товаров в корзине ---
let shoppingCartArr = [];

// проверка наличия товаров в корзине
function showEmptyCart() {
  let noItem = document.createElement('li');
  noItem.classList.add('shopping-cart__no-item');
  noItem.textContent = 'Cart is empty';
  cartList.append(noItem);
  return noItem;
};

// получаем заголовок
function getTitle(text, titleLevel, className) {
  let title = document.createElement(titleLevel);
  title.classList.add(className);
  title.textContent = text;
  return title;
};

// получаем описание
function getDescr(text, className) {
  let descr = document.createElement('p');
  descr.classList.add(className);
  descr.textContent = text;
  return descr;
};

// добавляем элемент "важности" в описание
function getSpan(text, className) {
  let span = document.createElement('span');
  span.classList.add(className);
  span.textContent = text;
  return span;
};

// получаем кнопку
function getButton(text, className) {
  let button = document.createElement('button');
  button.classList.add(className);
  button.textContent = text;
  return button;
};

// получаем div
function getBox(className) {
  let div = document.createElement('div');
  div.classList.add(className);
  return div;
};

// получаем список
function getList(className) {
  let list = document.createElement('ul');
  list.classList.add(className);
  return list;
};

// --- РАЗДЕЛ КАТАЛОГА ---

// получаем элемент списка товаров в каталоге
function getCatalogItem(index, catalog) {
  let item = document.createElement('li');
  item.classList.add('catalog__item');
  let itemBox = getBox('catalog__item-wrap'); // внутренний бокс для карточки
  let itemTextWrap = getBox('catalog__item-text'); // обёртка для текста карточки

  // картинка карточки
  let itemImg = document.createElement('img');
  itemImg.classList.add('catalog__img');
  itemImg.src = catalog.img;

  let itemTittle = getTitle(catalog.title, 'h3', 'catalog__band-name'); // заголовок карточки
  let itemSubtitle = getDescr(catalog.subtitle, 'catalog__subtitle'); // подзаголовок карточки
  let itemDescr = getDescr(catalog.descr, 'catalog__descr'); // описание карточки
  let itemPrice = getSpan(`${catalog.price} euro`, 'catalog__price'); // цена карточки
  
  // кнопка добавления в корзину
  let itemBtn = getButton('+ Add To Cart', 'catalog__btn');
  itemBtn.onclick = function () {
    shoppingCartArr.push(catalog);
    renderShoppingCartList(shoppingCartArr); // перерисовка списка товаров в корзине
  };

  itemTextWrap.append(itemTittle, itemSubtitle, itemDescr, itemPrice);
  itemBox.append(itemTextWrap, itemBtn);
  item.append(itemImg, itemBox);
  return item;
};

let catalogList = getList('catalog'); // список каталога

// --- РАЗДЕЛ КОРЗИНЫ ---

// получаем элемент списка товаров в корзине
function getShoppingCartItem(index, cart) {
  let item = document.createElement('li');
  item.classList.add('shopping-cart__item');

  // картинка карточки
  let itemImg = document.createElement('img');
  itemImg.classList.add('shopping-cart__img');
  itemImg.src = cart.img;

  let itemTittle = getTitle(cart.title, 'h3', 'shopping-cart__band-name'); // заголовок карточки
  let itemSubtitle = getDescr(cart.subtitle, 'shopping-cart__subtitle'); // подзаголовок карточки
  let itemPrice = getSpan(`${cart.price} euro`, 'shopping-cart__price'); // цена карточки

  // кнопка удаления товара
  let removeBtn = getButton('Remove', 'shopping-cart__remove-btn');
  removeBtn.onclick = function () {
    shoppingCartArr.splice(index, 1);
    renderShoppingCartList(shoppingCartArr); // перерисовка списка товаров в корзине
  };

  let itemBox = getBox('shopping-cart__item-wrap');
  let itemTextBox = getBox('shopping-cart__item-text');

  itemTextBox.append(itemTittle, itemSubtitle, itemPrice);
  itemBox.append(itemImg, itemTextBox);
  item.append(itemBox, removeBtn);
  return item;
};

let shoppingCartBox = getBox('shopping-cart'); // блок корзины
shoppingCartBox.classList.add('hidden');

let cartList = getList('shopping-cart__list'); // список корзины
let orderBtn = getButton('', 'shopping-cart__btn'); // кнопка корзины для заказа
orderBtn.onclick = function() {
  alert('Not today =(');
};

// кнопка показа корзины
let showCartBtn = getButton('', 'cart-btn');
showCartBtn.classList.add('cart-btn--closed');
showCartBtn.onclick = function () {
  if (shoppingCartBox.classList.contains('hidden') === true) {
    showCartBtn.classList.remove('cart-btn--closed');
    showCartBtn.classList.add('cart-btn--opened');
    shoppingCartBox.classList.remove('hidden');
  } else {
    showCartBtn.classList.add('cart-btn--closed');
    showCartBtn.classList.remove('cart-btn--opened');
    shoppingCartBox.classList.add('hidden');
  };
};

// --- РАЗМЕЩАЕМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ ---

let container = getBox('container');
let pageTitle = getTitle('The Best Record Shop Ever', 'h1', 'page-title');
let headWrap = getBox('head-wrap');
let sectionTitle = getTitle('Catalog of your dream', 'h2', 'section-title');
let sectionWrap = getBox('section-wrap');
let catalogWrap = getBox('catalog-wrap');
let cartWrap = getBox('cart-wrap'); 

// отрисовка списка товаров в каталоге
function renderCatalogList(catalogArr) {
  catalogList.innerHTML = ''; // сначала отчищаем список
  
  for (let i = 0; i < catalogArr.length; i++) {
    let catalogItem = getCatalogItem(i, catalogArr[i]);
    catalogList.append(catalogItem);
  };
};

renderCatalogList(catalogArr); // oтрисовка списка при запуске страницы

// отрисовка списка товаров в корзине
function renderShoppingCartList(cartArr) {
  cartList.innerHTML = '';
  let totalPrice = 0; // итоговая стоимость

  // проверка наличия товаров в корзине
  if (cartArr.length === 0) {
    showEmptyCart();
  };

  for (let i = 0; i < cartArr.length; i++) {
    totalPrice += cartArr[i].price; // увеличиваем итоговую стоимость
    let cartItem = getShoppingCartItem(i, cartArr[i]);
    cartList.append(cartItem);
  };
  
  orderBtn.textContent = `Summary order ${totalPrice} euro`; // выводим текст кнопки заказа
};

renderShoppingCartList(shoppingCartArr); // oтрисовка списка при запуске страницы

shoppingCartBox.append(cartList, orderBtn);
cartWrap.append(shoppingCartBox);
catalogWrap.append(catalogList, cartWrap);
headWrap.append(sectionTitle, showCartBtn);
sectionWrap.append(headWrap, catalogWrap);
container.append(pageTitle, sectionWrap);
document.body.append(container);