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
  if( document.reserve.first.value.length <= 2 && document.reserve.first.value != "") {
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
  if( document.reserve.last.value.length <= 2 && document.reserve.last.value != "") {
    missLastNbr.textContent = "Il faut plus de 2 caractères!"
    missLastNbr.style.color = "red"
    document.reserve.last.focus() ;
    isValid = false;
 }
  if( document.reserve.email.value == "" ) {
     missEmail.textContent = "E-mail manquant!"
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

document.getElementById("checkbox1").addEventListener("click", checkbox1Function);

function checkbox1Function() {
  missCheck.textContent = ""
}
//Fonction pour qu'uniquement des chiffres soient entrés entre 0 et 99
function validnum(a) {
  return ((a >= 0) && (a <= 99));
}

function validateEmail(sEmail) {
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if(!sEmail.match(reEmail) && document.reserve.email.value != "") {
    badEmail.textContent = "E-mail non conforme"
    badEmail.style.color = "red"
    document.reserve.email.focus() ;
    return false;
  }

  return true;

}

function checkForm(form)
  {
    if(!form.checkReq.checked) {
      missCheck.textContent = "Conditions d'utilisation non cochées!"
      missCheck.style.color = "red"
      form.checkReq.focus();
      return false;
    }
    return true;
  }