var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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


// setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment, decrement input value
var valueCount

//taking price.value in variable (START PRICE)
var price = document.getElementById("price").innerText;

//price calculation function
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").innerText = total
}
// (END PRICE)


//PLUS BUTTON
document.querySelector(".plus-btn").addEventListener("click", function() {
  //getting values of input
  valueCount = document.getElementById("quantity").value;

  //input value increment by 1
  valueCount++;

  //setting increment input value
  document.getElementById("quantity").value = valueCount;

  if(valueCount > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }

  //calling price function
  priceTotal();
})

//MINUS BUTTON
document.querySelector(".minus-btn").addEventListener("click", function() {
  //getting values of input
  valueCount = document.getElementById("quantity").value;

  //input value decrement by 1
  valueCount--;

  //setting decrement input value
  document.getElementById("quantity").value = valueCount;

  if(valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }

  //calling price function
  priceTotal();
})


//SHOPPING CART
let add_to_cart_btn = document.getElementsByClassName("cart_btn");
let main_container = document.getElementsByTagName("section")[0]

for(let i = 0; i < add_to_cart_btn.length; i++) {
  add_to_cart_btn[i].addEventListener("click", addToCart)
}

function addToCart(event) {
  let btn = event.target
  let btn_parent = btn.parentElement
  let btn_grandparent = btn.parentElement.parentElement.parentElement
  let btn_greatgrandparent = btn.parentElement.parentElement.parentElement.parentElement

  let itemName = btn_grandparent.children[1].innerText;
  let itemPrice = btn_grandparent.children[4].innerText;
  let itemImage = btn_greatgrandparent.children[1].src;
  //let itemImage = document.getElementsByTagName("img");


  let itemContainer = document.createElement("section")
  itemContainer.innerHTML = `
      <h6 class="carth"><b>Cart</b></h6><hr>
      <div class="row ms-auto">
        <div class="col-1"><img src="${itemImage}" alt="" class="itemImage"></div>
        <div class="col-3 col2">
          <p class="itemName">${itemName}</p>
          <p class="itemPrice">${itemPrice} x ${valueCount}<span class="totalprice"> = $125</span></p>
        </div>
      </div>
      <button class="btn btn4" type="button">Checkout</button>`

      main_container.append(itemContainer)
  //console.log(itemImage);
}


 
