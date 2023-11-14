function converter() {
  var distancia = document.getElementById("valor").value;
  var anosLuzParaKm = 9460730777119.56;
  var distanciaEmKm = distancia * anosLuzParaKm;

  document.getElementById("resultado").innerHTML =
    distancia +
    " anos-luz são equivalente a " +
    distanciaEmKm.toFixed(2) +
    "km";
}
