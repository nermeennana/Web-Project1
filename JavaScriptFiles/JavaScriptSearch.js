var search_button = document.getElementById(search_button);

function checkinputs () {
    var search_button = document.getElementById(search_button);

   if ( search_button == "  "){

    var search_button = document.getElementById(search_button).value;
       alert ("please Enter Your Name")
       document.getElementById(search_button).focus();
       return false;
   }
   ne = /[0-100]/;
   if (ne.test(search_button)){
    var search_button = document.getElementById(search_button).value;
       aletrt ("please Enter correct Name or correct Department")
       document.getElementById(search_button).focus();
       return false;
   }
    