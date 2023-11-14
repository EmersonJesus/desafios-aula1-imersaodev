function converter() {
    var valor = document.getElementById("valor").value;
    var temperatura = document.getElementById("temperatura").value;
  
    if (temperatura == "K") {
      var valorNovo = valor + 273.15;
    }
    if (temperatura == "F") {
      valorNovo = valor * (9 / 5) + 32;
    }
  
    document.getElementById("resultado").innerHTML =
      valor + " Cº equivalem a " + valorNovo.toFixed(2) + " " + temperatura;
  }
  