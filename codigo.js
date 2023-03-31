var color = "";
function capturaDimensiones() {
    var captura = document.getElementById("captura");
    captura.style.display = "none"
    var div = document.getElementById("inputs");
    
    var alto = document.createElement("input");
    alto.id = "alto";
    alto.placeholder = "Alto";
    div.appendChild(alto);

    var ancho = document.createElement("input");
    ancho.id = "ancho";
    ancho.placeholder = "Ancho";
    div.appendChild(ancho);

    var pagar = document.createElement("button");
    pagar.innerHTML = "Pagar";
    pagar.id = "pagar";
    pagar.addEventListener("click", calculaAreaBarda);
    div.appendChild(pagar);

    color = document.getElementById("tipo").value;
    document.getElementById("tipo").style.display = "none";
}

function calculaAreaBarda() {
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);

    var area = ancho * alto;
    muestraTotalLadrillo(area);
}

function muestraTotalLadrillo(area) {
    var bloques = area * 12.5;
    var precio = color == "rojo" ? 15 : 20;
    var total = bloques * precio;

    var div = document.getElementById("inputs");

    var parrafo1 = document.createElement("p");
    var parrafo1Text = document.createTextNode("Se ocuparán " + bloques + " bloque(s), pues son " + area + " metros cuadrados");
    parrafo1.appendChild(parrafo1Text);
    div.appendChild(parrafo1);

    var parrafo2 = document.createElement("p");
    var parrafo2Text = document.createTextNode("Debes pagar $" + total + " pesos");
    parrafo2.appendChild(parrafo2Text);
    div.appendChild(parrafo2);
}