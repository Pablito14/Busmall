'use strict';

//Bringing access to the images through traversing the DOM
var imgElement1 = document.getElementById('slot1');
var imgElement2 = document.getElementById('slot2');
var imgElement3 = document.getElementById('slot3');

Product.allProducts = [];

function Product(filepath, productName){
  this.imgSource = filepath;
  this.productName = productName;
  Product.allProducts.push(this);
}

function randomProducts(){
  var randomNumber1 = Math.floor(Math.random() * Product.allProducts.length);
  imgElement1.src = Product.allProducts[randomNumber1].imgSource;
  imgElement1.alt = Product.allProducts[randomNumber1].productName;

  var randomNumber2 = Math.floor(Math.random() * Product.allProducts.length);
  imgElement2.src = Product.allProducts[randomNumber2].imgSource;
  imgElement2.alt = Product.allProducts[randomNumber2].productName;

  var randomNumber3 = Math.floor(Math.random() * Product.allProducts.length);
  imgElement3.src = Product.allProducts[randomNumber3].imgSource;
  imgElement3.alt = Product.allProducts[randomNumber3].productName;
}

imgElement1.addEventListener('click', randomProducts);
imgElement2.addEventListener('click', randomProducts);
imgElement3.addEventListener('click', randomProducts);

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg', 'banana');
new Product('img/bathroom.jpg', 'bathroom');
new Product('img/boots.jpg', 'boots');
new Product('img/breakfast.jpg', 'breakfast');

randomProducts();
