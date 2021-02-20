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
  if( document.reserve.first.value == "") {
     missFirst.textContent = "Prénom manquant!"
     missFirst.style.color = "red"
     document.reserve.first.focus() ;
     isValid = false;
  }
  if( document.reserve.first.value.length <= 2) {
    missFirstNbr.textContent = "Il faut plus de 2 caractères!"
    missFirstNbr.style.color = "red"
    document.reserve.first.focus() ;
    isValid = false;
 }
  if( document.reserve.last.value == "" ) {
     missLast.textContent = "Nom manquant!"
     missLast.style.color = "red"
     document.reserve.last.focus() ;
     isValid = false;
  }
  if( document.reserve.last.value.length <= 2) {
    missLastNbr.textContent = "Il faut plus de 2 caractères!"
    missLastNbr.style.color = "red"
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
     if( document.reserve.quantity.value == "") {
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
     if( document.reserve.checkBoxReq.value == "" ) {
        missCheck.textContent = "Veuillez accepter les conditions!"
        missCheck.style.color = "red"
        document.reserve.checkBoxReq.focus() ;
        isValid = false;
     }
     /*if( document.reserve.email.value != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" ) {
      missEmail.textContent = "Email non conforme"
      missEmail.style.color = "red"
      document.reserve.email.focus() ;
      isValid = false; //NEW NE MARCHE PAS
      }*/
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

//fonctionnalitées de la croix pour fermer le formulaire
document.getElementById('closeButton').addEventListener('click', (event) => {
event.preventDefault();
modalbg.style.display = 'none';
});

//ENSEMBLE DE FONCTION POUR ENLEVER ERROR SI ON TAPE AU CLAVIER OU CHECKBOX + CAP AUTO NOM PRENOM
document.getElementById("first").addEventListener("keyup", FirstName);

function FirstName() {
  var x = document.getElementById("first");
  x.value = x.value.toUpperCase(); //all letter in cap
  missFirst.textContent = "" //remove error comment
  missFirstNbr.textContent = ""
}

document.getElementById("last").addEventListener("keyup", LastName);

function LastName() {
  var x = document.getElementById("last");
  x.value = x.value.toUpperCase();
  missLast.textContent = ""
  missLastNbr.textContent = ""
}

document.getElementById("email").addEventListener("keyup", emailFunction);

function emailFunction() {
  missEmail.textContent = ""
  badEmail.textContent = ""
}

document.getElementById("birthdate").addEventListener("keyup", birthFunction);

function birthFunction() {
  missBirth.textContent = ""
}

document.getElementById("quantity").addEventListener("keyup", quantityFunction);

function quantityFunction() {
  missQuantity.textContent = ""
}

document.getElementById("location1").addEventListener("click", location1Function);

function location1Function() {
  missLocation.textContent = ""
}

document.getElementById("location2").addEventListener("click", location2Function);

function location2Function() {
  missLocation.textContent = ""
}

document.getElementById("location3").addEventListener("click", location3Function);

function location3Function() {
  missLocation.textContent = ""
}

document.getElementById("location4").addEventListener("click", location4Function);

function location4Function() {
  missLocation.textContent = ""
}

document.getElementById("location5").addEventListener("click", location5Function);

function location5Function() {
  missLocation.textContent = ""
}

document.getElementById("location6").addEventListener("click", location6Function);

function location6Function() {
  missLocation.textContent = ""
}

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

function validateEmail(sEmail) {
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if(!sEmail.match(reEmail)) {
    badEmail.textContent = "Email non conforme"
    badEmail.style.color = "red"
    document.reserve.email.focus() ;
    return false;
  }

  return true;

}
/*function CheckLength() {
  if (document.getElementById("first").value.length <= 2) {
    missFirst.textContent = "Plus de 2 caractères"
    missFirst.style.color = "red"
    document.reserve.first.focus() ;
      return false;
  }
}*/

//NEW NE MARCHE PAS
/*function numberValidation() {
  var n = document.reserve.quantity.value;
  if (isNaN(n)) {
    document.getElementById("numberText").innerHTML =
    "Merci d'entrer un nombre";
    return false;
  } else {
    document.getElementById("numberText").innerHTML = "La valeur est: " +n;
    return true;
  }
}*/

/*function ValidateEmail(inputText) //NEW NE MARCHE PAS
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
}*/
