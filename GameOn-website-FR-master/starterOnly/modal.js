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
      isValidLocation = checkRadio();
      isValidSurname = checkString(document.getElementById('first'), "Prénom", (document.getElementById('missFirst')));
      isValidName = checkString(document.getElementById('last'), "Nom", (document.getElementById('missLast')));
      isValidEmail = checkString(document.getElementById('email'), "e-mail", (document.getElementById('missEmail')));
      isValidBirthdate = checkString(document.getElementById('birthdate'), "Date de naissance", (document.getElementById('missBirth')));
      isValidQuantity = checkString(document.getElementById('quantity'), "Nombre de participation", (document.getElementById('missQuantity')));
      isValidFirstLength = checkLength(document.getElementById('first'), (document.getElementById('missFirstNbr')));
      isValidLastLength = checkLength(document.getElementById('last'), (document.getElementById('missLastNbr')));
      isValidForm = checkForm(document.getElementById('formId'));
      isValid = isValidSurname && isValidName && isValidEmail && isValidBirthdate && isValidQuantity && isValidFirstLength && isValidForm && isValidLastLength && isValidLocation && isValidForm;
      return isValid;
}
      
  /*if( document.reserve.first.value == "") {
     missFirst.textContent = "Prénom manquant!"
     missFirst.style.color = "red"
     document.reserve.first.focus() ;
     isValid = false;
  }*/
  /*if( document.reserve.first.value.length <= 2 && document.reserve.first.value != "") {
    missFirstNbr.textContent = "Il faut plus de 2 caractères!"
    missFirstNbr.style.color = "red"
    document.reserve.first.focus() ;
    isValid = false;
 }*/
 /* if( document.reserve.last.value == "" ) {
     missLast.textContent = "Nom manquant!"
     missLast.style.color = "red"
     document.reserve.last.focus() ;
     isValid = false;
  }*/
  /*if( document.reserve.last.value.length <= 2 && document.reserve.last.value != "") {
    missLastNbr.textContent = "Il faut plus de 2 caractères!"
    missLastNbr.style.color = "red"
    document.reserve.last.focus() ;
    isValid = false;
 }*/
 /* if( document.reserve.email.value == "" ) {
     missEmail.textContent = "E-mail manquant!"
     missEmail.style.color = "red"
     document.reserve.email.focus() ;
     isValid = false;
     }*/
     /*if( document.reserve.birthdate.value == "" ) {
      missBirth.textContent = "Date de naissance manquante!"
      missBirth.style.color = "red"
      document.reserve.birthdate.focus() ;
      isValid = false;
     }*/
     /*if( document.reserve.quantity.value == "") {
      missQuantity.textContent = "Nombre de participation manquant!"
      missQuantity.style.color = "red"
      document.reserve.quantity.focus() ;
      isValid = false;
     }*/
     /*if( document.reserve.location.value == "" ) {
        missLocation.textContent = "Veuillez choisir une ville!"
        missLocation.style.color = "red"
        document.reserve.location.focus() ;
        isValid = false;
     }
  return isValid;
}*/

//modalbg disapear on submit and modal appear
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()){
   modalbg.style.display = "none",
   modal.style.display = "block";
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

/*document.getElementById("locationsId").addEventListener("click", locationFunction);*/
Array.from(document.getElementsByName("location")).forEach(element => {
  element.addEventListener("click", locationFunction)
})

function locationFunction() {
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

//make sure email is valid
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
//make sure conditions are checked
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

  //clicking outside of the modalbg will close it
  window.onclick = function(event) {
    if (event.target == modalbg) {
      modalbg.style.display = "none";
    }
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that close the modal
var btn = document.getElementById("thanksBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMod")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//Close function button "fermer"
document.getElementById('thanksBtn').addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  });

//To close the modal when clicking outside of the modal
  document.addEventListener(
    "click",
    function(event) {
      // If user clicks outside the modal window, then close modal by calling closeModal()
      if (
        !event.target.closest("modal")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    document.querySelector(".modal").style.display = "none"
  }

  function checkString(entryElt, entryName, errorElt) {
    let isValid = true;
    //checkEmpty
    console.log(entryElt);
    if (entryElt.value == "") {
      errorElt.textContent = `${entryName} manquant!`
      errorElt.style.color = "red"
      entryElt.focus();
      isValid = false;
    }
    return isValid
  }

  function checkLength(entryElt, errorElt) {
    let isValid = true;
    //check Less Than 2
   if (entryElt.value.length <= 2 && entryElt.value != "") {
      errorElt.textContent = "Il faut plus de 2 caractères!"
      errorElt.style.color = "red"
      entryElt.focus();
      isValid = false;
  }
  return isValid
  }


function checkRadio(){
  const radios = document.getElementsByName('location');

  for (let i = 0, length = radios.length; i < length; i++) {
    
    if (radios[i].checked) {
      // do whatever you want with the checked radio
  
      // only one radio can be logically checked, don't check the rest
      return true;
    } 
    }
    missLocation.textContent = "Choix de la ville"
    missLocation.style.color = "red"
    return false;
}

 /* var radios = document.getElementsByName('location');
function checkLocation() {
  let isLocation = true
  for (var i = 0, length = radios.length; i < length; i++) {
    
    if (radios[i].checked) {
      // do whatever you want with the checked radio
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
     else if (!radios[i].checked){
      missLocation.textContent = "Choix d'une ville"
      missLocation.style.color = "red"
      document.reserve.location.focus() ;
      isLocation = false;
    }
  }
  return isLocation;
}*/
