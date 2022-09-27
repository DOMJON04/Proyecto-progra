function paises(){
    var paises = parseFloat(document.getElementById('pais').value);
    switch (paises) 
    {
        case 1:
            document.getElementById('resultado').value = 'Programacion';
            break;
        case 2:
            document.getElementById('resultado').value = 'Diseno web';
             break;
        case 3:
            document.getElementById('resultado').value = 'Redes Informaticas';
                break;
        case 4:
            document.getElementById('resultado').value = 'Taller';
                    break;
         case 5:
            document.getElementById('resultado').value = 'Laboratorio de Informatica';
                       break;
            case 6:
            document.getElementById('resultado').value = 'Matematicas';
                       break;
             case 7:
            document.getElementById('resultado').value = 'Fisica Elemental';
                       break;
             case 8:
            document.getElementById('resultado').value = 'Quimica';
                       break;
             case 9:
             document.getElementById('resultado').value = 'Biologia';
             break;
             case 10:
            document.getElementById('resultado').value = 'Contabilidad ';
                       break;
                       case 11:
            document.getElementById('resultado').value = 'Biblia ';
                       break;
            default:
             document.write('No esta definido en la lista');
                break;
    }
    
}