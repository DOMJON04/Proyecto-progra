function promedio(){
    var IP = parseFloat(document.getElementById ('IP').value);
    var IIP = parseFloat(document.getElementById ('IIP').value);
    var IIIP = parseFloat(document.getElementById ('IIIP').value);
    var IVP = parseFloat(document.getElementById ('IVP').value);
    var prom = (IP + IIP + IIIP + IVP) / 4;

document.getElementById('resultado').value = prom;
    ``  
    if (prom >= 75)
    document.getElementById('status').value = "Aprobado"
    else 
    document.getElementById('status').value = "Reprobado"


}