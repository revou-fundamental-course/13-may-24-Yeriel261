let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

function dataReceived() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let reason = document.getElementById('reason').value
  if(name == '' || email == '' || reason == ''){
    alert("Please enter a valid data");
  }
  else {
    alert("Your data has been successfully received")
  }
}
function signUp() {
  let userEmail = document.getElementById('user-email').value
  if(userEmail == ''){
    alert("Please enter a valid data");
  }
  else {
    alert("Your data has been successfully received");
  }
}

/* Untuk styling choice segitiga-jajar genjang*/

function userChoiceSegitiga() {
  let elementSegitiga = document.getElementById("segitiga");

  let elementJajar = document.getElementById("jajar");

  let calculatorSegitiga = document.getElementById("calculatorSegitiga");

  let calculatorJajar = document.getElementById("calculatorJajar");

  elementSegitiga.style.background = "blue";
  elementSegitiga.style.color = "white";

  elementJajar.style.background = "white";
  elementJajar.style.color = "blue";

  calculatorSegitiga.style.display = "block";

  calculatorJajar.style.display = "none";
}

function userChoiceJajar() {
  let elementSegitiga = document.getElementById("segitiga");

  let elementJajar = document.getElementById("jajar");

  let calculatorSegitiga = document.getElementById("calculatorSegitiga");

  let calculatorJajar = document.getElementById("calculatorJajar");

  elementSegitiga.style.background = "white";
  elementSegitiga.style.color = "blue";

  elementJajar.style.background = "blue";
  elementJajar.style.color = "white";

  calculatorSegitiga.style.display = "none";

  calculatorJajar.style.display = "block";
}

/* Menghitung luas */

function hitungLuasSegitiga() {
  
  let alasValue = document.getElementById("alas-input").value;
  let tinggiValue = document.getElementById("tinggi-input").value;
  
  document.getElementById("rumus-luas-segitiga").innerHTML = "L = 1/2 x a x t";
  document.getElementById("input-data-segitiga").innerHTML = "L = 1/2 x " + alasValue + " x " + tinggiValue;
  document.getElementById("hasil-segitiga").innerHTML = "L = " + 1/2 * parseFloat(alasValue) * parseFloat(tinggiValue);

  if (alasValue == '' || tinggiValue == '') {
    alert("Input tidak boleh kosong")
    document.getElementById("rumus-luas-segitiga").innerHTML = ''
    document.getElementById("input-data-segitiga").innerHTML = ''
    document.getElementById("hasil-segitiga").innerHTML = ''
  }
}
function clearFormSegitiga() {
  document.getElementById("alas-input").value = ''
  document.getElementById("tinggi-input").value = ''  
  document.getElementById("rumus-luas-segitiga").innerHTML = ''
  document.getElementById("input-data-segitiga").innerHTML = ''
  document.getElementById("hasil-segitiga").innerHTML = ''
}

function hitungLuasJajar() {
  
  let alasJajarValue = document.getElementById("alas-jajar-input").value;
  let tinggiJajarValue = document.getElementById("tinggi-jajar-input").value;

  document.getElementById("rumus-luas-jajar").innerHTML = "L = a x t";
  document.getElementById("input-data-jajar").innerHTML = "L = " + alasJajarValue + " x " + tinggiJajarValue;
  document.getElementById("hasil-jajar").innerHTML = "L = " + parseFloat(alasJajarValue) * parseFloat(tinggiJajarValue);

  if (alasJajarValue == '' || tinggiJajarValue == '') {
    alert("Input tidak boleh kosong")
    document.getElementById("rumus-luas-jajar").innerHTML = ''
    document.getElementById("input-data-jajar").innerHTML = ''
    document.getElementById("hasil-jajar").innerHTML = ''
  }
}

function clearFormJajar() {
  document.getElementById("alas-jajar-input").value = ''
  document.getElementById("tinggi-jajar-input").value = ''  
  document.getElementById("rumus-luas-jajar").innerHTML = ''
  document.getElementById("input-data-jajar").innerHTML = ''
  document.getElementById("hasil-jajar").innerHTML = ''
}