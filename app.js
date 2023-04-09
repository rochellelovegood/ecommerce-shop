const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// let popup=getElementById("carticon");
// function openPopup(){
//   popup.classList.add("open-popup")
// }

// function closePopup(){
//   popup.classList.remove("open-popup")
// }

const cart = document.querySelector('#cart');
const cartIcon = document.querySelector('#carticon');

function openPopup() {
  cart.style.display = 'block';
  document.body.classList.add('popup');
}

function closePopup() {
  cart.style.display = 'none';
  document.body.classList.remove('popup');
}

cartIcon.addEventListener('click', openPopup);


// nav
// Get the filter buttons
var filterMen = document.querySelector('.filter-men');
var filterWomen = document.querySelector('.filter-women');

// Get all the shoes
var shoes = document.querySelectorAll('.shoe');

// Add click event listeners to the filter buttons
filterMen.addEventListener('click', function() {
  // Hide all the shoes
  shoes.forEach(function(shoe) {
    shoe.style.display = 'none';
  });

  // Show only men's shoes
  var menShoes = document.querySelectorAll('.shoe.men');
  menShoes.forEach(function(shoe) {
    shoe.style.display = 'block';
  });
});

filterWomen.addEventListener('click', function() {
  // Hide all the shoes
  shoes.forEach(function(shoe) {
    shoe.style.display = 'none';
  });

  // Show only women's shoes
  var womenShoes = document.querySelectorAll('.shoe.women');
  womenShoes.forEach(function(shoe) {
    shoe.style.display = 'block';
  });
});


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



///////for buying



// Get the HTML elements
const countEl = document.querySelector('.count');
const titleEl = document.querySelector('h1');
const addToCartBtn = document.querySelector('.buy-button');
const cartItemsList = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');
const quantityControls = document.querySelectorAll('.btn-container');
const priceElement = document.querySelector('.price p');
const discountElement = document.querySelector('.discount-percent');

// Initialize cart items array and total price
let cartItems = [];
let totalPrice = 0;

// Define functions to increase and decrease the quantity
function increase() {
  countEl.textContent = ++countEl.textContent || 1;
}

function decrease() {
  countEl.textContent = countEl.textContent > 0 ? --countEl.textContent : 0;
}

// Add event listeners to the quantity controls
quantityControls.forEach(function(control) {
  control.addEventListener('click', function() {
    if (this.contains(event.target)) {
      if (event.target.matches('button:first-child')) {
        increase();
      } else if (event.target.matches('button:last-child')) {
        decrease();
      }
    }
  });
});

// Add a click event listener to the Add to Cart button
addToCartBtn.addEventListener('click', function() {
  // Get the product name, price, and quantity
  const productName = titleEl.textContent;
  const productPrice = parseFloat(priceElement.textContent.replace('$', ''));
  const productQuantity = parseInt(countEl.textContent);

  // Add the product to the cart items array and update the total price
  cartItems.push({ name: productName, price: productPrice, quantity: productQuantity });
  totalPrice += productPrice * productQuantity;

  // Clear the cart items list and repopulate it with the updated cart items
  cartItemsList.innerHTML = '';
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${cartItems[i].name} x ${cartItems[i].quantity} - $${(cartItems[i].price * cartItems[i].quantity).toFixed(2)}`;
    cartItemsList.appendChild(cartItem);
  }

  // Update the total price element
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
});

// Display the discount percentage
const originalPrice = parseFloat(priceElement.textContent.replace('$', ''));
const discountPercentage = Math.floor((originalPrice - totalPrice) / originalPrice * 100);
discountElement.textContent = `${discountPercentage}%`;



