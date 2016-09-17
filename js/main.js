/* MAIN JS */

// var mq = window.matchMedia( "screen and (max-width : 480px)" );
    
if (screen.width >= 767) {
  document.getElementById("ahorros").className = "";
  document.getElementById("cesantias").className = "";
  document.getElementById("vivienda").className = "";
  document.getElementById("educacion").className = "";
  document.getElementById("ayuda").className = "";
} 
else {
  document.getElementById("ahorros").className = "container";
  document.getElementById("cesantias").className = "container";
  document.getElementById("vivienda").className = "container";
  document.getElementById("educacion").className = "container";
  document.getElementById("ayuda").className = "container";
}