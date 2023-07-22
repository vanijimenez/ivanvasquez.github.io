
function loguear()
{

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;
   if( user =="Ivan Vasquez" && pass == "1234") 
   {
       window.location = "formulario.html";
    
}

    else
   {
       alert("datos incorrectos");
       }
    
}