'use strict';

//Bringing access to the images through traversing the DOM
var imgElement1 = document.getElementById('slot1');
var imgElement2 = document.getElementById('slot2');
var imgElement3 = document.getElementById('slot3');
var ctx = document.getElementById('myChart');

var maxClicksAllowed = 25;


function Product(filepath, altText, views=0, votes=0){
  this.imgSource = filepath;
  this.altText = altText;
  this.votes = votes;
  this.views = views;
  Product.allProducts.push(this);
}
Product.allProducts = [];

function initializeDatabase(){
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
}

function setupEventListeners(){
  imgElement1.addEventListener('click', handleClick);
  imgElement2.addEventListener('click', handleClick);
  imgElement3.addEventListener('click', handleClick);
}

function removeEventListeners(){
  imgElement1.removeEventListener('click', handleClick);
  imgElement2.removeEventListener('click', handleClick);
  imgElement3.removeEventListener('click', handleClick);
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

  while(randomNumber1 === randomNumber3){
    randomNumber3 = randomize();
    console.log('Prevented a duplicate between 1 & 3');
  }

  while(randomNumber2 === randomNumber3){
    randomNumber3 = randomize();
    console.log('Prevented a duplicate between 2 & 3');
  }

  imgElement1.src = Product.allProducts[randomNumber1].imgSource;
  imgElement1.alt = Product.allProducts[randomNumber1].altText;
  Product.allProducts[randomNumber1].views++;

  imgElement2.src = Product.allProducts[randomNumber2].imgSource;
  imgElement2.alt = Product.allProducts[randomNumber2].altText;
  Product.allProducts[randomNumber2].views++;

  imgElement3.src = Product.allProducts[randomNumber3].imgSource;
  imgElement3.alt = Product.allProducts[randomNumber3].altText;
  Product.allProducts[randomNumber3].views++;
}

function handleClick(){
  var chosenProductName = event.target.alt;
  for(var i = 0; i < Product.allProducts.length; i++){
    if(Product.allProducts[i].altText === chosenProductName){
      Product.allProducts[i].votes++;
      maxClicksAllowed--;
      break;
    }
  }
  if(maxClicksAllowed === 0){
    removeEventListeners();
  }
  shuffle();
}

//chart.js library start
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog-Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water Can', 'Wine Glass'],
    datasets: [{
      label: [Product.allProducts[0].votes, Product.allProducts[1].votes, Product.allProducts[2].votes, Product.allProducts[3].votes, Product.allProducts[4].votes ,Product.allProducts[5].votes, Product.allProducts[6].votes, Product.allProducts[7].votes, Product.allProducts[8].votes, Product.allProducts[9].votes ,Product.allProducts[10].votes, Product.allProducts[11].votes, Product.allProducts[12].votes, Product.allProducts[13].votes, Product.allProducts[14].votes ,Product.allProducts[15].votes, Product.allProducts[16].votes, Product.allProducts[17].votes, Product.allProducts[18].votes, Product.allProducts[19].votes],
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)' ,
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    title:{
      display: true,
      text: 'Results of survey'
    },
    scales: {
      gridLines:[{
        tickMArkLength: 50
      }],
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 1,
        },
        weight: -20
      }]
    }
  }
});
//chart.js library end

setupEventListeners();
initializeDatabase();
shuffle();
