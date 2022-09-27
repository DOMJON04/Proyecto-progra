
if(window.close() == 0) { 
    alert("hola")
  } else {
  
    alert("adios");
  }

  var historial = window.history.length;
 
  alert(historial);

  var gestionar = window.location;
  alert(gestionar);

  function funcion() {
    parent.document.body.style.backgroundColor = "#0043b6";
  }
  window.open("", "", "width=200, height=100");
  function ventana() {
    if (window.top != window.self)  {
      document.getElementById("ven").innerHTML = "Esta ventana no es la ventana superior!";
    } else {
      document.getElementById("ven").innerHTML = "Esta ventana es la ventana superior!";
    }
  }