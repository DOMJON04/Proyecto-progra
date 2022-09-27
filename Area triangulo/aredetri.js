function suma(){
    
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = (base * altura) / 2;

    document.getElementById('area').value = area;
}