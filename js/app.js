'use strict';

//Bringing access to the images through traversing the DOM
var imgElement1 = document.getElementById('slot1');
var imgElement2 = document.getElementById('slot2');
var imgElement3 = document.getElementById('slot3');

Product.allProducts = [];

function Product(filepath, productName){
  this.imgSource = filepath;
  this.productName = productName;
  this.amountClicked = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

function randomize(){
  var rando = Math.floor(Math.random() * Product.allProducts.length);
  return rando;
}

function shuffle(){
  var randomNumber1 = randomize();
  var randomNumber2 = randomize();

  while(randomNumber1 === randomNumber2){
    randomNumber2 = randomize();
    console.log('Prevented a duplicate between 1 and 2');
  }

  var randomNumber3 = randomize();

  while(randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3){
    randomNumber3 = randomize();
    console.log('Prevented a duplicate between 1 and 3 OR 2 and 3');
  }

  imgElement1.src = Product.allProducts[randomNumber1].imgSource;
  imgElement1.alt = Product.allProducts[randomNumber1].productName;
  Product.allProducts[randomNumber1].views++;

  imgElement2.src = Product.allProducts[randomNumber2].imgSource;
  imgElement2.alt = Product.allProducts[randomNumber2].productName;
  Product.allProducts[randomNumber2].views++;

  imgElement3.src = Product.allProducts[randomNumber3].imgSource;
  imgElement3.alt = Product.allProducts[randomNumber3].productName;
  Product.allProducts[randomNumber3].views++;
}

function handleClick(){
  //if image 1 is clicked this.obj.clicks++

  //if image 2 is clicked this.obj.clicks++

  //if image 3 is clicked this.obj.clicks++

  shuffle();
}

imgElement1.addEventListener('click', handleClick);
imgElement2.addEventListener('click', handleClick);
imgElement3.addEventListener('click', handleClick);

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg', 'banana');
new Product('img/bathroom.jpg', 'bathroom');
new Product('img/boots.jpg', 'boots');
new Product('img/breakfast.jpg', 'breakfast');
new Product('img/bubblegum.jpg', 'bubblegum');
new Product('img/chair.jpg', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu');
new Product('img/dog-duck.jpg', 'dog-duck');
new Product('img/dragon.jpg', 'dragon');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep');
new Product('img/scissors.jpg', 'scissors');
new Product('img/shark.jpg', 'shark');
new Product('img/sweep.png', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn');
new Product('img/usb.gif', 'usb');
new Product('img/water-can.jpg', 'water-can');
new Product('img/wine-glass.jpg', 'wine-glass');

shuffle();
