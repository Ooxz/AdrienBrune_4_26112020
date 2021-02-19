function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function validate() {
      let isValid = true;
  if( document.reserve.first.value == "" ) {
     missFirst.textContent = "Prénom manquant!"
     missFirst.style.color = "red"
     document.reserve.first.focus() ;
     isValid = false;
  }
  if( document.reserve.last.value == "" ) {
     missLast.textContent = "Nom manquant!"
     missLast.style.color = "red"
     document.reserve.last.focus() ;
     isValid = false;
  }
  if( document.reserve.email.value == "" ) {
     missEmail.textContent = "Email manquant!"
     missEmail.style.color = "red"
     document.reserve.email.focus() ;
     isValid = false;
     }
     if( document.reserve.birthdate.value == "" ) {
      missBirth.textContent = "Date de naissance manquante!"
      missBirth.style.color = "red"
      document.reserve.birthdate.focus() ;
      isValid = false;
     }
     if( document.reserve.quantity.value == "" ) {
      missQuantity.textContent = "Nombre de participation manquant!"
      missQuantity.style.color = "red"
      document.reserve.quantity.focus() ;
      isValid = false;
     }
     if( document.reserve.location.value == "" ) {
        missLocation.textContent = "Veuillez choisir une ville!"
        missLocation.style.color = "red"
        document.reserve.location.focus() ;
        isValid = false;
     }
     if( document.reserve.checkboxreq.value == "" ) {
        missCheck.textContent = "Veuillez accepter les conditions!"
        missCheck.style.color = "red"
        document.reserve.checkboxreq.focus() ;
        isValid = false;
     }
     if( document.reserve.email.value != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" ) {
      missEmail.textContent = "Email non conforme"
      missEmail.style.color = "red"
      document.reserve.email.focus() ;
      isValid = false; //NEW NE MARCHE PAS
      }
  return isValid;
}

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()){
   modalbg.style.display = "none",
  alert("Formulaire envoyé!");
  }
});

document.getElementById('closeButton').addEventListener('click', (event) => {
event.preventDefault();
modalbg.style.display = 'none';
});

function ValidateEmail(inputText) //NEW NE MARCHE PAS
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.reserve.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.reserve.email.focus();
return false;
}
}
