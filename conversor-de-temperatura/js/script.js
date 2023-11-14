function converter() {
    var valor = document.getElementById("valor").value;
    var temperatura = document.getElementById("temperatura").value;
    var valorNovo = 0;

    if (temperatura == "K") {
      valorNovo = parseFloat(valor) + 273.15;
    }
    if (temperatura == "F") {
      valorNovo = valor * (9 / 5) + 32;
    }
  
    document.getElementById("resultado").innerHTML =
      valor + " Cº equivalem a " + valorNovo.toFixed(2) + " " + temperatura;
  }
  