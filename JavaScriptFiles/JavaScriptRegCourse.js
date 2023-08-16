var choice1;
var choice2;
var choice3;
function value1()
{
    choice1= document.getElementById("course_Select1").value;

    
    

}

function value2()
{
    choice2= document.getElementById("course_Select2").value;
   
    

}

function value3()
{
     choice3= document.getElementById("course_Select3").value;
    

}

function check ()
{
    if (choice1==choice2)
    {  alert("Error occured , please select different courses");
        
    }

    else if (choice1==choice3)
    {
        alert("Error occured , please select different courses");
        
    }

   else if (choice2==choice3)
    {
      alert("Error occured , please select different courses");
        
    }
}