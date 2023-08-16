function validateForm() {
    var id = parseInt(document.getElementById("S_ID").value);
    var name = document.getElementById("S_Name").value;
    let date=Date.parse(document.forms["myForm"]["date"].value);
    var uni =document.getElementById("S_Uni").value;
    var course=document.getElementById("course_Select").value;
    var level=document.getElementById("level_Select").value;
    var state=document.getElementById("status_Select").value;
    var dept=document.getElementById("dept_Select").value; 

    if(isNaN(id))
    {alert("enter ID ");}
    if(name==" ")
    {alert("enter Name ");}
    if(isNaN(date))
    { alert("enter your date ");}
    if(isNaN(uni))
    {alert("enter university ");}
    if(!isNaN(id)&&!name==" "&&!isNaN(date)&&!uni==" "&&!level==" " &&!dept==" " &&!state==" "&&!course==" " )
    { alert("Done  ");}

}
function validateid()
{
    var id=parseInt(document.getElementById("S_ID").value);
    re=/[0-9]/;
    if(!re.test(id))
    {
        //alert("Id must be number");
        document.getElementById("checkid").style.display="inline";
    }
}
function validatename()
{
    var name=document.getElementById("S_Name").value;
    re=/[a-z]/;
    if(!re.test(name))
    {
        //alert("Id must be number");
        document.getElementById("checkname").style.display="inline";
    }
}
function validateuni()
{
    var uni=document.getElementById("S_Uni").value;
    uni=uni.toLowerCase();
    re=/[a-z]/;
    if(!re.test(uni))
    {
        //alert("Id must be number");
        document.getElementById("checkuni").style.display="inline";
    }
    else{
        if(uni!="Cairo"||uni!="Helwan")
        {
            document.getElementById("checkuni").innerHTML="*Please enter Cairo or Helwan ";
            document.getElementById("checkuni").style.display="inline";
        }
    }
}
function validateCourseByDepert()
{
    var dept=document.getElementById("dept_Select").value;
    if(dept=="CS")
    {
        document.getElementById("course1").style.display="inline";
    }
    else  if(dept=="IS")
    {
        document.getElementById("course2").style.display="inline";
    }
    else  if(dept=="IT")
    {
        document.getElementById("course3").style.display="inline";
    }
    else  if(dept=="AI")
    {
        document.getElementById("course4").style.display="inline";
    }
    else  if(dept=="DS")
    {
        document.getElementById("course5").style.display="inline";
    }
    
}