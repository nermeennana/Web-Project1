
function press(){
 var id1 =document.getElementById("S_ID").value;
 var name1 =document.getElementById("S_Name").value;
 var unv =document.getElementById("S_Uni").value;
 var lev =document.getElementById("level_Select").value;
 var dep =document.getElementById("dept_Select").value;
 var id2 =document.getElementById("c_ID").value;
 var name2 =document.getElementById("c_Name").value;


 if(id1<0)
 alert("the ID must be positive!!");

 else if(isNaN(id1))
 alert("the ID must be numbers");

 else if(id1==" ")
 alert("the ID box must be filled!!");

else if(name1==" ")
 alert("the name box must be filled!!");

 else if(!isNaN(name1))
 alert("the name must be letters");
 
 else if(unv==" ")
 alert("the university box must be filled!!");

 else if(!isNaN(unv))
 alert("the university name must be letters");

 else if(lev=="")
 alert("you must choose a level!!");

 else if(dep=="")
 alert("you must choose a department!!");

 else if(id2<0)
 alert("the course ID must be positive!!");

 else if(isNaN(id2))
 alert("the course ID must be numbers");

 else if(id2==" ")
 alert("the course ID box must be filled!!");

 else if(name2==" ")
 alert("the course name box must be filled!!");

 else if(!isNaN(name2))
 alert("the course name must be letters");

 else
alert("course added successfully");
};