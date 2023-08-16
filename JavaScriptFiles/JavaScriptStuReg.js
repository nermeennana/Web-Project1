var IDError = document.getElementById('ID-error');
var nameError = document.getElementById('name-error');
var birthdateError = document.getElementById('birthdate-error');
var genderError = document.getElementById('gender-error');
var uniError = document.getElementById('university-error');
var levelError = document.getElementById('level-error');
var departmentError = document.getElementById('department-error');
var statusError = document.getElementById('status-error');
var course1Error = document.getElementById('course1-error');
var course2Error = document.getElementById('course2-error');
var course3Error = document.getElementById('course3-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('S_Name').value;
   if (name == "") {
   nameError.innerHTML ='Name cannot be blank';
    return false;
  }
  re = /[a-z]/;
  if (!re.test(name)) {
     alert("Error: Name cannot be numbers");
    document.getElementById("ID").focus();
    return false;
  }  if (name.length < 20) {
    text = "Enter your full name";
    nameError.innerHTML = text;
    return false;
  }
    nameError.innerHTML = '✓';
    return true;
 

}

function validateID() {
  var ID = document.getElementById('S_ID').value;
  if (ID.value == "") {
    IDError.innerHTML = 'Please enter your ID number';
    return false;
  }
  re = /[1-9]/;
  if (!re.test(ID)) {
    alert("Error: ID cannot be text");
    document.getElementById("ID").focus();
    return false;
  } else if (ID.length < 2000 || ID.length > 3000) {
    IDError.innerHTML = '✓';
    return true;
  } else
  {
    IDError.innerHTML = 'Please enter correct ID by range';
    return true;
  }

}

function validateuni() {
  var uni = document.getElementById('S_Uni').value;
   if (uni == "") {
    uniError.innerHTML = 'University cannot be blank';
    return false;
  }
  re = /[a-z]/;
  if (!re.test(uni)) {
    alert("Error: University cannot be numbers");
    document.getElementById("uni").focus();
    return false;
  } else if (uni.length < 4) {
    //text = "Enter valid ID";
    uniError.innerHTML = 'Enter valid university';
    return false;
  } else {
    uniError.innerHTML = '✓';
    return true;
  }
}

function validatecourse1() {
  var course1 = document.getElementById('course_properity1').value;
  if (course1== "") {
    course1Error.innerHTML = 'course 1 cannot be blank';
    return false;
  }
  re = /[a-z]/;
   if (!re.test(course1))
  {
    alert("Error: course 1 cannot be numbers");
    document.getElementById("course1").focus();
    return false;
  }
   else if (course1.length < 4) {
    //text = "Enter valid ID";
    course1Error.innerHTML = "Enter valid course";
    return false;
  } else {
    course1Error.innerHTML = '✓';
    return true;
  }
}



function validatecourse2() {
  var course2 = document.getElementById('course_properity2').value;
  if (course2== "") {
    course2Error.innerHTML = 'course 2 cannot be blank';
    return false;
  }
  re = /[a-z]/;
  if (!re.test(course2)) {
    alert("Error: course 2 cannot be numbers");
    document.getElementById("course2").focus();
    return false;
  }  else if (course2.length < 4) {
    //text = "Enter valid ID";
    course2Error.innerHTML = "Enter valid course";
    return false;
  } else {
    course2Error.innerHTML = '✓';
    return true;
  }
}

function validatecourse3() {
  var course3 = document.getElementById('course_properity3').value;
  if (course3== "") {
    course3Error.innerHTML = 'course 3 cannot be blank';
    return false;
  }
  re = /[a-z]/;
  if (!re.test(course3)) {
    alert("Error: course 3 cannot be numbers");
    document.getElementById("course3").focus();
    return false;
  } else if (course3.length < 4) {
    //text = "Enter valid ID";
    course3Error.innerHTML = "Enter valid course";
    return false;
  } else {
    course3Error.innerHTML = '✓';
    return true;
  }
}
function validateform()
{
if(!validateID() || !validateName() || !validateuni() || !validatecourse1() || !validatecourse2() || !validatecourse3())
{
submitError.style.display='block';
submitError.innerHTML='<br>Please fix error to submit';
setTimeout(function(){submitError.style.display='none';},4000);
return false;
}
}